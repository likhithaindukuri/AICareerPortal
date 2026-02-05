const ATSResult = () => {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16">
  
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          ATS Match Analysis
        </h1>
        <p className="text-gray-600 mb-10">
          Here’s a clear breakdown of how your resume aligns with this role
          and what you can improve.
        </p>
  
        {/* Score Card */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">
            Match Score: 62%
          </h2>
          <p className="text-gray-700">
            Your resume partially matches the job description.
            Improving keyword alignment can significantly increase interview chances.
          </p>
        </div>
  
        {/* Missing Keywords */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4">
            Missing Important Keywords
          </h3>
          <div className="flex flex-wrap gap-3">
            {["REST APIs", "Spring Security", "Docker", "CI/CD"].map((word) => (
              <span
                key={word}
                className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm"
              >
                {word}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">
            These keywords appear in the job description but not in your resume.
          </p>
        </div>
  
        {/* Found Keywords */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4">
            Keywords Already Found
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Java", "Spring Boot", "MySQL", "REST"].map((word) => (
              <span
                key={word}
                className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
  
        {/* Suggestions */}
        <div className="bg-gray-50 border rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold mb-3">
            How to Improve Your Resume
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Add missing skills only if you genuinely have experience.</li>
            <li>Rewrite project descriptions using job-specific keywords.</li>
            <li>Quantify impact (e.g., “improved performance by 20%”).</li>
          </ul>
        </div>
  
        {/* Next Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700">
            Generate Resume Bullet Points
          </button>
          <button className="border px-6 py-3 rounded-lg font-medium">
            Generate Interview Questions
          </button>
        </div>
  
      </div>
    );
  };
  
  export default ATSResult;
  