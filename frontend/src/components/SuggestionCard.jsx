const SuggestionCard = ({ text }) => {
  return (
    <div className="rounded-lg border bg-gray-50 p-4 text-sm text-gray-700">
      {text}
    </div>
  );
};

export default SuggestionCard;

