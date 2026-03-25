const LoadingSkeleton = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10 animate-pulse">
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gray-200"></div>

          <div className="flex-1 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <div className="h-10 w-20 bg-gray-200 rounded"></div>
          <div className="h-10 w-20 bg-gray-200 rounded"></div>
          <div className="h-10 w-20 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-12 bg-gray-200 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
