export default function ThemeSwitcher() {
  const setTheme = (theme) => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setTheme("theme-default")}
        className="px-3 py-1 rounded border"
      >
        Default
      </button>
      <button
        onClick={() => setTheme("theme-light")}
        className="px-3 py-1 rounded border"
      >
        White
      </button>
      <button
        onClick={() => setTheme("theme-dark")}
        className="px-3 py-1 rounded border"
      >
        Dark
      </button>
    </div>
  );
}
