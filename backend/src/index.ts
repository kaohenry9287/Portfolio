import "dotenv/config";
import express from "express";
import cors from "cors";
import projectsRouter from "./routes/projects.js";

const app = express();
app.use(cors()); // allow all (okay for demo). Tighten later with { origin: [...] }
app.use(express.json());

app.get("/healthz", (_req, res) => res.json({ ok: true }));
app.use("/api/projects", projectsRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`API on :${port}`));
