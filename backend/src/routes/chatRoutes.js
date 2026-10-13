import { Router } from "express";
import { handleChat } from "../controllers/chatController.js";

const chatRoutes = Router();

chatRoutes.post("/chat", handleChat);

export default chatRoutes;
