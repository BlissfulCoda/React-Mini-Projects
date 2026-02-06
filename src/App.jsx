import { useState, useEffect } from "react";

import Header from "./components/Heading";
import Form from "./components/Form";
import ThemeChanger from "./components/ThemeChanger";

const App = () => {
  const [theme, setTheme] = useState(false);
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme ? "dark" : "light");
    if (theme) {
      document.body.style.backgroundImage = "url(/Dark-background.jpg)";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center bottom";
      document.body.style.backgroundRepeat = "no-repeat";
    } else {
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
    }
  }, [theme]);

  return (
    <div className="main-container">
      <ThemeChanger
        theme={theme}
        rating={rating}
        handleRating={setRating}
        setTheme={setTheme}
        hover={hover}
        handleHover={setHover}
      />
      <div className="outter-container">
        <Header title="GIVE US" subtitle="FEEDBACK" />
        <Form />
      </div>
    </div>
  );
};

export default App;
