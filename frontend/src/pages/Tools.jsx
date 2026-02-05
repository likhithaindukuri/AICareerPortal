import ToolCard from "../components/ToolCard";
import { tools } from "../data/tools";

const Tools = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      {/* Page Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Career Tools Built for Real Job Problems
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We help you understand what’s wrong, what to fix, and how to move forward —
          not just show a score.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            title={tool.title}
            description={tool.description}
            cta={tool.cta}
          />
        ))}
      </div>
    </div>
  );
};

export default Tools;
