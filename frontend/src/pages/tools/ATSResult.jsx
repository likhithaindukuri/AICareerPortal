import KeywordList from "../../components/KeywordList";
import ScoreRing from "../../components/ScoreRing";
import SuggestionCard from "../../components/SuggestionCard";
import { useLocation, useNavigate } from "react-router-dom";

const ATSResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.atsResult;

  if (!data) {
    navigate("/tools/ats");
    return null;
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          ATS Compatibility Score
        </h1>
        <p className="text-gray-600">{data.summary}</p>
      </div>

      <div className="mt-8">
        <ScoreRing score={data.atsScore} />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <KeywordList
          title="Matched Keywords"
          keywords={data.matchedKeywords}
          type="matched"
        />
        <KeywordList
          title="Missing Keywords"
          keywords={data.missingKeywords}
          type="missing"
        />
      </div>

      <div className="mt-10 space-y-4">
        <h3 className="font-semibold">How to Improve</h3>
        {data.improvementSuggestions?.map((tip) => (
          <SuggestionCard key={tip} text={tip} />
        ))}
      </div>
    </div>
  );
};

export default ATSResult;
