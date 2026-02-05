import { useNavigate } from "react-router-dom";

const ATSMatcher = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">
          ATS Resume Matcher
        </h1>
        <p className="text-gray-600">
          Upload your resume and paste the job description to understand
          why your resume gets rejected and what you need to fix.
        </p>
      </div>
      <div className="mb-8">
        <label className="mb-2 block font-medium text-gray-700">
          Upload Resume (PDF)
        </label>
        <input
          type="file"
          accept=".pdf"
          className="w-full rounded-lg border p-3"
        />
      </div>
      <div className="mb-8">
        <label className="mb-2 block font-medium text-gray-700">
          Paste Job Description
        </label>
        <textarea
          rows="6"
          placeholder="Paste the job description here..."
          className="w-full resize-none rounded-lg border p-3"
        />
      </div>
      <button
        onClick={() => navigate("/tools/ats/result")}
        className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700 transition"
      >
        Analyze Resume
      </button>
      <p className="mt-4 text-sm text-gray-500">
        We don’t store your resume. Your data stays private.
      </p>
    </div>
  );
};

export default ATSMatcher;