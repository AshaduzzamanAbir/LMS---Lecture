import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "../server/configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

// Initialize Express
const app = express();
// Initialize mongodb connection
connectDB();

app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Api is Working");
});

app.post("/clerk", express.json(), clerkWebhooks);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
