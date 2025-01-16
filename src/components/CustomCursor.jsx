// src/CustomCursor.js
import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursor = cursorRef.current;
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50"
      style={{
        left: 0,
        top: 0,
        width: "800px",
        height: "800px",
        transform: "translate(-50%, -50%)",
        mixBlendMode: "screen",
      }}
    >
      <div
        className="absolute w-full h-full rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(17, 31, 68, 0.2) 0%, rgba(17, 31, 68, 0.05) 50%, rgba(17, 31, 68, 0) 100%)",
          filter: "blur(15px)",
        }}
      ></div>
      <div
        className="absolute w-full h-full rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(17, 31, 68, 0.1) 0%, rgba(17, 31, 68, 0.05) 70%, rgba(17, 31, 68, 0) 100%)",
          filter: "blur(30px)",
          transform: "scale(1.5)",
        }}
      ></div>
      <div
        className="absolute w-full h-full rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(17, 31, 68, 0.05) 0%, rgba(17, 31, 68, 0) 100%)",
          filter: "blur(45px)",
          transform: "scale(2)",
        }}
      ></div>
    </div>
  );
};

export default CustomCursor;
