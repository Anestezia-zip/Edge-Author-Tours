import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoCard = ({ src, title, description, description2 }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
        loading="lazy"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font mb-3">{title}</h1>
          {description && (
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-black bg-opacity-45 rounded-md z-0"></div>
              <p className="relative px-2 pb-2 mt-1 max-w-80 text-xs md:text-base text-white z-10 inline-block">
                {description}
              </p>
            </div>
          )}
          {description2 && (
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-black bg-opacity-45 rounded-md z-0"></div>
              <p className="relative px-2 pb-2 mt-1 max-w-80 text-xs md:text-base text-white z-10 inline-block">
                {description2}
              </p>
            </div>
          )}
        </div>

        <div
          ref={hoverButtonRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white"
        >
          {/* Radial gradient hover effect */}
          <div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
            style={{
              opacity: hoverOpacity,
              background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
            }}
          />
          <TiLocationArrow className="relative z-20" />
          <p className="relative z-20">watch trip</p>
        </div>
      </div>
    </div>
  );
};

export default BentoCard;
