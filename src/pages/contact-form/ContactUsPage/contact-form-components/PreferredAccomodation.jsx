import React, { useState } from "react";
import { FaHome } from "react-icons/fa";

const PreferredAccomodation = () => {
  const [preferredAccommodation, setPreferredAccommodation] = useState("Undecided");

  return (
    <li className="flex flex-col gap-2">
      <label className="font-semibold text-lg flex items-center">
        <FaHome className="mr-2" /> Preferred Accommodations
      </label>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => setPreferredAccommodation("Best Value")}
          className={`py-2 px-4 border rounded-lg ${
            preferredAccommodation === "Best Value"
              ? "bg-blue-500 text-white"
              : "bg-gray-100"
          }`}
        >
          Best Value
        </button>
        <button
          onClick={() => setPreferredAccommodation("Luxury")}
          className={`py-2 px-4 border rounded-lg ${
            preferredAccommodation === "Luxury"
              ? "bg-blue-500 text-white"
              : "bg-gray-100"
          }`}
        >
          Luxury
        </button>
        <button
          type="button"
          onClick={() => setPreferredAccommodation("Superior")}
          className={`py-2 px-4 border rounded-lg ${
            preferredAccommodation === "Superior"
              ? "bg-blue-500 text-white"
              : "bg-gray-100"
          }`}
        >
          Superior
        </button>
      </div>
    </li>
  );
};

export default PreferredAccomodation;
