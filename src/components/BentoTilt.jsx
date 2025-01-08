import { useCallback, useRef, useState } from "react";
import debounce from "lodash/debounce";

export const BentoTilt = ({
  children,
  className = "",
  quickerMovement = 4,
}) => {
  const isMobile = window.innerWidth < 768; // Проверка ширины экрана
  if (isMobile) return <div className={className}>{children}</div>;

  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = useCallback(
    debounce((event) => {
      if (!itemRef.current) return;

      const { left, top, width, height } =
        itemRef.current.getBoundingClientRect();

      const relativeX = (event.clientX - left) / width;
      const relativeY = (event.clientY - top) / height;

      const tiltX = (relativeY - 0.5) * quickerMovement;
      const tiltY = (relativeX - 0.5) * -quickerMovement;

      const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
      setTransformStyle(newTransform);
    },16),
    [quickerMovement]
  );

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </div>
  );
};
