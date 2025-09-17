import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import cors from "cors";
import projectsRouter from "./routes/projects.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/healthz", (_req: Request, res: Response) => res.status(200).json({ ok: true }));
app.use("/api/projects", projectsRouter);

const port = Number(process.env.PORT) || 8080;
app.listen(port, () => console.log(`API on :${port}`));

