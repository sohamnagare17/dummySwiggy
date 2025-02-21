import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(10) // Creating 10 shimmer cards
        .fill("")
        .map((_, index) => (
          <div key={index} className="bg-gray-300 h-80 w-64 m-2 rounded-lg animate-pulse">
            <div className="h-52 w-64 bg-gray-400 rounded-t-lg"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-400 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-400 rounded w-1/2"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
