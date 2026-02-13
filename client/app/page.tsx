"use client";

import { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import ResultCard from "../components/ResultCard";
import { analyzeImage } from "../services/api";

export default function Home() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (image: string) => {
    setLoading(true);
    const data = await analyzeImage(image);
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl p-6 space-y-6">
      <h1 className="text-3xl font-semibold text-center">GroceryVision</h1>
      <ImageUpload onAnalyze={handleAnalyze} />
      {loading && <p className="text-center">Analyzing...</p>}
      {result && <ResultCard result={result} />}
    </div>
  );
}