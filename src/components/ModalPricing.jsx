import React, { useState } from "react";

const ModalPricing = ({ isOpen, closeModal }) => {
  return (
    <div>
      {/* Modal Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeModal}
      >
        {/* Modal Content */}
        <div
          className={`bg-white w-[90%] md:w-[600px] rounded-lg p-6 shadow-lg relative transform transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent modal from closing on content click
        >
          {/* Close Button */}
          <button
            className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-5xl"
            onClick={closeModal}
          >
            &times;
          </button>

          {/* Modal Content */}
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Example of how our pricing works
          </h2>
          <p className="text-gray-600">
            Let’s say your travel budget is{" "}
            <span className="font-semibold">$1,000</span>, and we find ways to save you{" "}
            <span className="font-semibold">$300</span> through exclusive discounts and smarter
            choices.
          </p>
          <p className="text-gray-700 my-3">
            <strong>Payment for our services:</strong>
          </p>
          <ul className="text-gray-700 mb-4">
            <li>
              - <strong>Base fee:</strong> <span className="text-blue-700">$100</span>
            </li>
            <li>
              - <strong>Savings-based commission:</strong>{" "}
              <span className="text-blue-700">$45</span> (15% of the savings we secure for you)
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            <strong>Total service fee:</strong>{" "}
            <span className="text-blue-700">$145</span>
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Your benefit:</strong> We saved you{" "}
            <span className="text-blue-800 font-bold">$300</span>, so after deducting our service
            fee, you still keep{" "}
            <span className="text-green-600 font-bold">$155</span> <span className="underline">in your pocket — all while we
            handle all:</span> the planning, booking, and organizational details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalPricing;
