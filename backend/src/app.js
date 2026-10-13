import cors from "cors";
import express from "express";
import { env } from "./config/env.js";
import chatRoutes from "./routes/chatRoutes.js";

const app = express();

app.use(
  cors({
    origin: [env.corsOrigin, "http://localhost:5173", "http://127.0.0.1:5173"],
  })
);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", chatRoutes);

app.use((_req, res) => {
  res.status(404).json({ error: "Not found." });
});

export default app;
