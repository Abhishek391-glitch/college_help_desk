import { getEmbeddingModel } from "../config/langchain.js";

export async function embedText(text) {
  const model = getEmbeddingModel();
  const result = await model.embedContent(text);
  return result.embedding.values;
}

export async function embedMany(texts) {
  const vectors = [];

  for (const text of texts) {
    vectors.push(await embedText(text));
  }

  return vectors;
}
