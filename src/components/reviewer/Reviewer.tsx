import { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import ReviewButton from "./ReviewButton";
import Loading from "./Loading";
import ReviewResult from "./ReviewResult";
import LanguageSelector from "./LanguageSelector";
import { reviewCode } from "../../services/ai";
import UploadButton from "./UploadButton";
import CopyButton from "./CopyButton";
// import { detectLanguage } from "../../utils/detectLanguage";

import { codeTemplates } from "../../data/codeTemplates";
import toast from "react-hot-toast";

function Reviewer() {
  const [code, setCode] = useState(`function greet(name) {
  return "Hello " + name;
}`);

  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState("");
  const [language, setLanguage] = useState("javascript");

  useEffect(() => {
  setCode(codeTemplates[language] || "");
}, [language]);

  const handleReview = async () => {
    if (!code.trim()) {
    toast.success("Please enter some code first.");
      return;
    }

    try {
      setLoading(true);
      setReview("");

      console.log("Selected Language:", language);
console.log("Code:", code);

const response = await reviewCode(code, language);
      setReview(response);
    } catch (error) {
      console.error(error);

      setReview(`
❌ Failed to review your code.

Please check:
• Your internet connection
• Your API key
• Gemini API quota
      `);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
     id="reviewer"
     className="bg-linear-to-b from-slate-100 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            🚀 AI Powered
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            AI Code Reviewer
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Paste your JavaScript, TypeScript, Python, Java, or any supported
            code below and get instant AI-powered feedback.
          </p>
        </div>

        {/* Language Selector */}
       <div className="mt-12 flex items-center justify-between">
  <LanguageSelector
    language={language}
    setLanguage={setLanguage}
  />

  <UploadButton
  setCode={setCode}
  setLanguage={setLanguage}
/>
</div>

        {/* Code Editor */}
        <div className="mt-6">
          <CodeEditor
            code={code}
            setCode={setCode}
            language={language}
          />
        </div>

        {/* Review Button */}
        <div className="mt-8 flex justify-center">
          <ReviewButton
            loading={loading}
            onClick={handleReview}
          />
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-10">
            <Loading />
          </div>
        )}

        {/* Review Result */}
       {!loading && review && (
  <div className="mt-10 space-y-6">
    <div className="flex justify-end">
      <CopyButton review={review} />
    </div>

    <ReviewResult review={review} />
  </div>
)}
      </div>
    </section>
  );
}

export default Reviewer;