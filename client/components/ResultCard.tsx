export default function ResultCard({ result }: any) {
  return (
    <div className="bg-gray-900 rounded-xl p-6 space-y-3 border border-gray-800">
      <h2 className="text-xl font-semibold">{result.object_name}</h2>
      <p>Category: {result.category}</p>
      <p>Freshness: {result.estimated_freshness}</p>
      <p>Quality: {result.quality_assessment}</p>
      <p>Confidence: {result.confidence_score}%</p>
      <p className="text-gray-400 italic">{result.interesting_fact}</p>
    </div>
  );
}