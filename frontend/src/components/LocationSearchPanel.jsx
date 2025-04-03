import React from "react";

const LocationSearchPanel = (props) => {
  // sample array for locations
  const locations = [
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "22C, Near Malhotra's cafe, Sheryians Coding School, Bhopal",
    "20B, Near Singhaniya's cafe, Sheryians Coding School, Bhopal",
    "18A, Near Sharma's cafe, Sheryians Coding School, Bhopal",
  ];

  return (
    <div>
      {/* This is just a sample data */}
      {locations.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 border-2 border-gray-200 active:border-black rounded-xl p-3 items-center my-2 justify-start transition-all"
          >
            <h2 className="bg-[#eeeeee] h-8 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
