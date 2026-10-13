import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const env = {
  port: Number(process.env.PORT) || 5000,
  googleApiKey: process.env.GOOGLE_API_KEY || "",
  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:5173",
  embeddingModel: process.env.EMBEDDING_MODEL || "text-embedding-004",
  generationModel: process.env.GENERATION_MODEL || "gemini-2.0-flash",
  topK: Number(process.env.TOP_K) || 5,
};
