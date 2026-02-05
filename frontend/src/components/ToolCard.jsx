import { Link } from "react-router-dom";

const ToolCard = ({ description, title }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition">
      <h3 className="mb-3 text-xl font-semibold text-gray-900">
        {title}
      </h3>
      <p className="mb-6 leading-relaxed text-gray-600">
        {description}
      </p>
      <button className="text-indigo-600 font-medium hover:underline">
        <Link to="/tools/ats">
          Check ATS Match →
        </Link>
      </button>
    </div>
  );
};

export default ToolCard;