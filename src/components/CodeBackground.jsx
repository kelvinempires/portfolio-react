// src/components/CodeBackground.jsx
import { useEffect, useRef, useState } from "react";

const CodeBackground = () => {
  const containerRef = useRef(null);
  const animationFrameId = useRef(null);
  const elements = useRef([]);
  const [isMounted, setIsMounted] = useState(false);

  const codeSnippets = [
    "const project = new Idea();",
    "function createPortfolio() {",
    "return <AwesomeWork />;",
    "interface Developer {",
    "skills: string[];",
    "passion: boolean;",
    "}",
    "npm install creativity",
    "git push origin innovation",
    "while(!succeed) { try(); }",
    "const elvin = new Developer();",
  ];

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const container = containerRef.current;
    if (!container) return;

    const handleResize = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      initElements();
    };

    const initElements = () => {
      // Clear existing elements
      elements.current.forEach((el) => el.remove());
      elements.current = [];

      const count = window.innerWidth < 768 ? 10 : 20;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      for (let i = 0; i < count; i++) {
        const element = document.createElement("div");
        element.textContent =
          codeSnippets[Math.floor(Math.random() * codeSnippets.length)];

        Object.assign(element.style, {
          position: "absolute",
          color: `rgba(100, 255, 218, ${Math.random() * 0.5 + 0.2})`,
          fontSize: `${Math.random() * 12 + 10}px`,
          fontFamily: '"Fira Code", monospace',
          opacity: "0",
          left: `${Math.random() * containerWidth}px`,
          top: `${Math.random() * containerHeight}px`,
          transform: "translateY(20px)",
          transition: `all ${Math.random() * 10 + 10}s linear`,
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        });

        container.appendChild(element);
        elements.current.push(element);

        setTimeout(() => {
          if (element.isConnected) {
            // Check if element is still in DOM
            element.style.opacity = "0.7";
            element.style.transform = "translateY(0)";
          }
        }, i * 300);
      }

      animate();
    };

    const animate = () => {
      elements.current.forEach((el) => {
        if (!el.isConnected) return;

        const currentY = parseFloat(el.style.top);
        const newY = currentY - 0.05;

        if (newY < -50) {
          // If element goes above viewport
          el.style.top = `${container.clientHeight + 50}px`;
          el.style.left = `${Math.random() * container.clientWidth}px`;
        } else {
          el.style.top = `${newY}px`;
        }
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    initElements();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      elements.current.forEach((el) => el.remove());
    };
  }, [isMounted]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden"
    />
  );
};

export default CodeBackground;
