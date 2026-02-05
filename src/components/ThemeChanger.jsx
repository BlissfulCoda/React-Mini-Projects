const ThemeChanger = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  return (
    <div className="theme-changer">
      <div className="theme-wrapper">
        {theme ? (
          <img
            className="theme-img"
            src="/Sun.png"
            alt="Switch to light mode"
            onClick={toggleTheme}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleTheme()}
          />
        ) : (
          <img
            className="theme-img"
            src="/Moon.png"
            alt="Switch to dark mode"
            onClick={toggleTheme}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleTheme()}
          />
        )}
      </div>
    </div>
  );
};

export default ThemeChanger;
