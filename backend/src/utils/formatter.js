export function formatResponse(chunks) {
  if (!chunks || chunks.length === 0) {
    return "I could not find matching information in the college knowledge base. Please ask about courses, admissions, fees, or placements.";
  }

  return chunks.map((chunk) => `• ${chunk.text}`).join("\n");
}
