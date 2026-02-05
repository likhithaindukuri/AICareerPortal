import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold text-indigo-600">
          YourBrand
        </Link>

        <div className="flex gap-6 items-center">
          <Link to="/tools" className="text-gray-700 hover:text-indigo-600">
            Tools
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-indigo-600">
            How it Works
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-indigo-600">
            About
          </Link>

          <Link
            to="/tools"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Analyze Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
