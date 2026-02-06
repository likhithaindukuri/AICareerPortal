import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { analyzeATS } from "../../api/atsApi";
import Loader from "../../components/Loader";

const ATSMatcher = () => {
  const navigate = useNavigate();
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!resumeText.trim() || !jobDescription.trim()) {
      alert("Please add both resume text and job description.");
      return;
    }

    setLoading(true);
    try {
      const data = await analyzeATS(resumeText, jobDescription);
      navigate("/tools/ats/result", { state: { atsResult: data } });
    } catch {
      alert("Something went wrong while analyzing. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Loader text="Analyzing your resume like an ATS system..." />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-10">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">
          ATS Resume Matcher
        </h1>
        <p className="text-gray-600">
          Paste your resume and the job description to see how an ATS system
          might compare them and what you can improve.
        </p>
      </div>
      <div className="mb-8">
        <label className="mb-2 block font-medium text-gray-700">
          Resume Text
        </label>
        <textarea
          rows="8"
          value={resumeText}
          onChange={(event) => setResumeText(event.target.value)}
          placeholder="Paste your resume text here..."
          className="w-full resize-none rounded-lg border p-3"
        />
      </div>
      <div className="mb-8">
        <label className="mb-2 block font-medium text-gray-700">
          Job Description
        </label>
        <textarea
          rows="8"
          value={jobDescription}
          onChange={(event) => setJobDescription(event.target.value)}
          placeholder="Paste the job description here..."
          className="w-full resize-none rounded-lg border p-3"
        />
      </div>
      <button
        type="button"
        onClick={handleAnalyze}
        className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
      >
        Analyze Resume
      </button>
      <p className="mt-4 text-sm text-gray-500">
        We do not store your resume. Your data stays private.
      </p>
    </div>
  );
};

export default ATSMatcher;