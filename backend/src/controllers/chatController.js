import { answerQuestion } from "../services/ragService.js";

export async function handleChat(req, res) {
  const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";

  if (!message) {
    return res.status(400).json({
      error: "Message is required.",
      reply: "Please enter a question about courses, admissions, fees, or placements.",
    });
  }

  try {
    const result = await answerQuestion(message);
    return res.json(result);
  } catch (error) {
    console.error("Chat request failed:", error);
    return res.status(500).json({
      error: "The help desk could not process your question right now.",
      reply: "Something went wrong while searching college information. Please try again.",
    });
  }
}
