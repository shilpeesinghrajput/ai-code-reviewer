import ReactMarkdown from "react-markdown";

type ReviewResultProps = {
  review: string;
};

function ReviewResult({ review }: ReviewResultProps) {
  return (
    <div className="mt-10 rounded-3xl bg-slate-900 p-8 text-slate-200 shadow-2xl">
      <h3 className="mb-6 text-3xl font-bold text-white">
        🤖 AI Review
      </h3>

      <div className="prose prose-invert max-w-none">
        <ReactMarkdown>{review}</ReactMarkdown>
      </div>
    </div>
  );
}

export default ReviewResult;