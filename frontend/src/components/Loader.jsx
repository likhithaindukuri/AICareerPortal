const Loader = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-indigo-600" />
      <p className="mt-4 text-sm text-gray-600">{text}</p>
    </div>
  );
};

export default Loader;

