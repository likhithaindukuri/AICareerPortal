const KeywordList = ({ title, keywords, type }) => {
  if (!keywords || keywords.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {keywords.map((word) => (
          <span
            key={word}
            className={`rounded-full px-3 py-1 text-sm ${
              type === "missing"
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default KeywordList;

