import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaAdjust } from "react-icons/fa";

export default function ThemeSwitcher() {
  const themes = [
    { name: "theme-default", icon: <FaAdjust /> },
    { name: "theme-light", icon: <FaSun /> },
    { name: "theme-dark", icon: <FaMoon /> },
  ];

  const [active, setActive] = useState("theme-default");

  const setTheme = (theme) => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
    setActive(theme);
  };

  useEffect(() => {
    // Load saved theme on mount
    const saved = localStorage.getItem("theme") || "theme-default";
    setTheme(saved);
  }, []);

  return (
    <div className="relative flex items-center bg-[var(--card-bg)] rounded-full p-1 w-32 justify-between select-none">
      {/* Slider */}
      <div
        className="absolute top-2.5 left-2.5 w-6 h-6 rounded-full transition-all duration-300 ease-in-out"
        style={{
          backgroundColor: "var(--tag-bg)",
          border: "1px solid var(--border-soft)",
          transform: `translateX(${
            active === "theme-default" ? 0 : active === "theme-light" ? 40 : 80
          }px)`,
        }}
      ></div>

      {themes.map((theme) => (
        <button
          key={theme.name}
          onClick={() => setTheme(theme.name)}
          className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full transition-transform duration-300"
          title={theme.name}
        >
          <span
            style={{
              color:
                active === theme.name ? "var(--icon-hover)" : "var(--icon-muted)",
              transition: "color 0.3s ease",
            }}
            className="w-5 h-5"
          >
            {theme.icon}
          </span>
        </button>
      ))}
    </div>
  );
}
