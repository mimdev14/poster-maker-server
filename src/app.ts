
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth";
import { errorHandler } from "./middleware/error";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json({ limit: "2mb" }));

app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api/auth", authRoutes);

app.use(errorHandler);

export default app;