import React from "react";

const LoadingSpinner = () => {
  return (
    <div 
        className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50"
        role="status"
        aria-label="Content is loading, please wait"
    >
      {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
