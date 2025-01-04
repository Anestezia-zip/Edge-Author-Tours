import React, { useState } from "react";
import { FaHome } from "react-icons/fa";

const TripLength = () => {
        const [tripLength, setTripLength] = useState("Undecided");
    
  return (
    <li className="flex flex-col gap-2">
      <label className="font-semibold text-lg flex items-center">
        <FaHome className="mr-2" /> Approximate trip length
      </label>
      <div className="grid grid-cols-2 max-w-96">
        <button
          type="button"
          onClick={() => setTripLength("2-3")}
          className={`py-2 px-4 border rounded-lg ${
            tripLength === "2-3" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          2-3 days
        </button>
        <button
          type="button"
          onClick={() => setTripLength("4-8")}
          className={`py-2 px-4 border rounded-lg ${
            tripLength === "4-8" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          4-8 days
        </button>
        <button
          onClick={() => setTripLength("8-16")}
          className={`py-2 px-4 border rounded-lg ${
            tripLength === "8-16" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          8-16 days
        </button>
        <button
          type="button"
          onClick={() => setTripLength("16+")}
          className={`py-2 px-4 border rounded-lg ${
            tripLength === "16+" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          16+ days
        </button>
        <button
          type="button"
          onClick={() => setTripLength("Undecided")}
          className={`py-2 px-4 border rounded-lg ${
            tripLength === "Undecided"
              ? "bg-blue-500 text-white"
              : "bg-gray-100"
          }`}
        >
          Undecided
        </button>
      </div>
    </li>
  );
};

export default TripLength;
