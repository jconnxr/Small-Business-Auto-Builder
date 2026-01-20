import express from "express";
import cors from "cors";
import { router } from "./routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", router);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend listening on ${port}`);
});
