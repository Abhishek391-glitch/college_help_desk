import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "./env.js";

export const embeddingModelName = env.embeddingModel;
export const generationModelName = env.generationModel;

let client = null;

export function getGenAIClient() {
  if (!env.googleApiKey) {
    throw new Error("GOOGLE_API_KEY is missing. Add it to backend/.env");
  }

  if (!client) {
    client = new GoogleGenerativeAI(env.googleApiKey);
  }

  return client;
}

export function getEmbeddingModel() {
  return getGenAIClient().getGenerativeModel({ model: embeddingModelName });
}

export function getGenerationModel() {
  return getGenAIClient().getGenerativeModel({ model: generationModelName });
}
