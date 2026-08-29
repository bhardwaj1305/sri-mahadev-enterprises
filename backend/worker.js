import express from "express";
import { httpServerHandler } from "cloudflare:node";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Sri Mahadev Enterprises API is running",
  });
});

app.get("/api/leads", (req, res) => {
  res.json({
    message: "Leads API is working",
  });
});

app.listen(3000);

export default httpServerHandler({ port: 3000 });
