import { env } from "../config/env.js";

function cosineSimilarity(a, b) {
  let dot = 0;
  let magA = 0;
  let magB = 0;

  for (let i = 0; i < a.length; i += 1) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }

  const denominator = Math.sqrt(magA) * Math.sqrt(magB);
  if (!denominator) {
    return 0;
  }

  return dot / denominator;
}

export function searchSimilarChunks(queryEmbedding, indexedChunks, topK = env.topK) {
  const ranked = indexedChunks
    .map((chunk) => ({
      ...chunk,
      score: cosineSimilarity(queryEmbedding, chunk.embedding),
    }))
    .sort((left, right) => right.score - left.score)
    .slice(0, topK)
    .filter((chunk) => chunk.score > 0.35);

  return ranked;
}

export function searchByKeywords(query, chunks, topK = env.topK) {
  const terms = query
    .toLowerCase()
    .split(/\W+/)
    .filter((term) => term.length > 2);

  const ranked = chunks
    .map((chunk) => {
      const haystack = chunk.text.toLowerCase();
      const hits = terms.filter((term) => haystack.includes(term)).length;
      return { ...chunk, score: terms.length ? hits / terms.length : 0 };
    })
    .sort((left, right) => right.score - left.score)
    .slice(0, topK)
    .filter((chunk) => chunk.score > 0);

  return ranked;
}
