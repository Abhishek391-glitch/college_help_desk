import app from "./app.js";
import { env } from "./config/env.js";
import { initializeKnowledgeBase } from "./services/ragService.js";

async function start() {
  try {
    await initializeKnowledgeBase();
  } catch (error) {
    console.warn("Could not precompute embeddings on startup:", error.message);
  }

  app.listen(env.port, () => {
    console.log(`College Help Desk API running on http://localhost:${env.port}`);
  });
}

start();
