import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { env } from "../config/env.js";
import { getGenerationModel } from "../config/langchain.js";
import { formatResponse } from "../utils/formatter.js";
import { embedMany, embedText } from "./embeddingService.js";
import { searchByKeywords, searchSimilarChunks } from "./retrievalService.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const knowledgeBasePath = path.resolve(__dirname, "../data/knowledgeBase.json");

let indexedChunks = [];

async function generateAnswer(message, chunks) {
  const context = chunks.map((chunk, index) => `${index + 1}. ${chunk.text}`).join("\n");
  const prompt = [
    "You are the EduQuery College Help Desk Agent.",
    "Answer the student using only the knowledge base snippets below.",
    "Be concise, clear, and factual. If the snippets are not enough, say you do not have that information.",
    "",
    "Knowledge base snippets:",
    context,
    "",
    `Student question: ${message}`,
  ].join("\n");

  const model = getGenerationModel();
  const result = await model.generateContent(prompt);
  const text = result.response.text()?.trim();

  if (!text) {
    return formatResponse(chunks);
  }

  return text;
}

export async function initializeKnowledgeBase() {
  const raw = await readFile(knowledgeBasePath, "utf8");
  const documents = JSON.parse(raw);

  if (!env.googleApiKey) {
    indexedChunks = documents.map((doc) => ({ ...doc, embedding: [] }));
    console.warn("GOOGLE_API_KEY is empty. RAG embeddings will not be available until a key is set.");
    return;
  }

  const embeddings = await embedMany(documents.map((doc) => doc.text));
  indexedChunks = documents.map((doc, index) => ({
    ...doc,
    embedding: embeddings[index],
  }));

  console.log(`Knowledge base ready with ${indexedChunks.length} embedded chunks.`);
}

export async function answerQuestion(message) {
  if (!indexedChunks.length) {
    await initializeKnowledgeBase();
  }

  const matches = env.googleApiKey
    ? searchSimilarChunks(await embedText(message), indexedChunks)
    : searchByKeywords(message, indexedChunks);

  if (!matches.length) {
    return {
      reply:
        "I could not find matching information in the college knowledge base. Please ask about courses, admissions, fees, or placements.",
      sources: [],
    };
  }

  let reply;
  try {
    reply = await generateAnswer(message, matches);
  } catch (error) {
    console.warn("Generation failed, using retrieved snippets instead:", error.message);
    reply = formatResponse(matches);
  }

  return {
    reply,
    sources: matches.map(({ id, type, score }) => ({ id, type, score })),
  };
}
