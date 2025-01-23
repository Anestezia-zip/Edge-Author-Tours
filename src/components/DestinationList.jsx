import React from "react";
import { destinations } from "../pages/contact-form/ContactForm";

const DestinationList = ({
  selectedDestinations,
  setSelectedDestinations,
  containerClassList = "",
}) => {
  const handleDestinationSelect = (destinationName) => {
    setSelectedDestinations((prev) => {
      const isSelected = prev.includes(destinationName);
      if (isSelected) {
        return prev.filter((item) => item !== destinationName);
      } else {
        return [...prev, destinationName];
      }
    });
  };

  return (
    <ul className="list-none p-0 mb-6 max-md:mb-0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 max-md:gap-1">
      {destinations.map((destination) => (
        <li
          key={destination.name}
          onClick={() => handleDestinationSelect(destination.name)}
          className={`p-1 border-2 rounded-lg cursor-pointer transition-all duration-100 ${
            selectedDestinations.includes(destination.name)
              ? "border-blue-500 bg-blue-100"
              : "border-black/10 hover:border-black/30"
          }`}
        >
          <div className="flex items-center relative w-full h-full">
            <img
              src={destination.image}
              alt={destination.name}
              className={`object-cover rounded-lg w-full h-full ${containerClassList}`}
            />
            <span className="absolute max-md:text-sm max-sm:text-xs py-1/2 px-2 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-white uppercase font-bold bg-black/40 shadow-lg rounded-lg">
              {destination.name}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DestinationList;
