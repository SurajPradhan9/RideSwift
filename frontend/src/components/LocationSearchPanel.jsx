import React from "react";

const LocationSearchPanel = () => {
  return (
    <div>
      {/* This is just a sample data */}
      <div className="flex gap-4 border-2 border-gray-200 active:border-black rounded-xl p-3 items-center my-2 justify-start transition-all">
        <h2 className="bg-[#eeeeee] h-8 w-12 flex items-center justify-center rounded-full">
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4 className="font-medium">
          24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal
        </h4>
      </div>
    </div>
  );
};

export default LocationSearchPanel;
