import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import "./App.css";
import Movies from "./Movies";

function App() {
  const [theme, setTheme] = useState(0);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className={theme ? "theme-dark" : "theme-light"}>
      <button onClick={handleTheme} className="theme-toggle">
        {theme ? <MdOutlineLightMode /> : <MdDarkMode />}
        Toggle Theme
      </button>
      <Movies />
    </div>
  );
}

export default App;
