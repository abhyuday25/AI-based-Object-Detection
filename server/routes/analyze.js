import express from "express";
import analyzeImage from "../services/visionService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { image } = req.body;

    const result = await analyzeImage(image);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Analysis failed" });
  }
});

export default router;