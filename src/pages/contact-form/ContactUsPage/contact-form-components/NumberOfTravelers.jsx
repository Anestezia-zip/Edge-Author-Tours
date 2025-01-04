import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const NumberOfTravelers = () => {
    const [numTravelers, setNumTravelers] = useState("Undecided");
    
  return (
    <li className="flex flex-col gap-2">
      <label className="font-semibold text-lg flex items-center">
        <FaUser className="mr-2" /> Number of Travelers
      </label>
      <input
        type="number"
        value={numTravelers === "Undecided" ? "" : numTravelers}
        onChange={(e) => setNumTravelers(e.target.value)}
        placeholder="Enter number"
        className="w-36 p-2 border-2 rounded-lg"
      />
    </li>
  );
};

export default NumberOfTravelers;
