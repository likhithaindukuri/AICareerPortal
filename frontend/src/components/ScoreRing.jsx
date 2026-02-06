import { getScoreColor } from "../utils/scoreColor";

const ScoreRing = ({ score }) => {
  const color = getScoreColor(score);

  return (
    <div className="flex items-center justify-center">
      <div
        className={`flex h-32 w-32 items-center justify-center rounded-full border-8 ${color}`}
      >
        <span className="text-3xl font-bold">{score}</span>
      </div>
    </div>
  );
};

export default ScoreRing;

