import axios from "axios";

export async function analyzeImage(image: string) {
  const response = await axios.post("http://localhost:5000/api/analyze", {
    image
  });
  return response.data;
}
