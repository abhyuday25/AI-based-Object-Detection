"use client";

import { useState } from "react";

export default function ImageUpload({ onAnalyze }: any) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result as string;
      setPreview(base64);
      onAnalyze(base64);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input type="file" accept="image/*" onChange={handleChange} />
      {preview && (
        <img
          src={preview}
          className="w-64 h-64 object-cover rounded-xl border border-gray-700"
        />
      )}
    </div>
  );
}