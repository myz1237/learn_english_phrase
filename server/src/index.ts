import "./env.ts";
import express from "express";
import cors from "cors";
import { initStore } from "./store/index.ts";
import { unitsRouter } from "./routes/units.ts";
import { progressRouter } from "./routes/progress.ts";

const PORT = Number(process.env.PORT) || 3001;

async function main() {
  await initStore();

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get("/api/health", (_req, res) => res.json({ ok: true }));
  app.use("/api/units", unitsRouter);
  app.use("/api/progress", progressRouter);

  app.listen(PORT, () => console.log(`[server] listening on http://localhost:${PORT}`));
}

main().catch((err) => {
  console.error("[server] failed to start:", err);
  process.exit(1);
});
