import "../CSS/components styles/ThemeSwitch.scss";
import { useState } from "react";

const ThemeSwitch = () => {
  const [isDark, setDark] = useState(true);

  let app = document.getElementsByClassName("app");
  let body = document.getElementsByTagName("body");

  const handleClick = () => {
    setDark(!isDark);
    if (isDark === true) {
      body[0].classList.replace("dark-bg", "light-bg");
      app[0].classList.replace("dark", "light");
    } else {
      body[0].classList.replace("light-bg", "dark-bg");
      app[0].classList.replace("light", "dark");
    }
  };

  return (
    <div className="switcher">
      <p>Dark Mode</p>
      <div
        className={`switchBody ${isDark ? "dark" : "light"}`}
        onClick={handleClick}
      >
        <div className={`switchThumb ${isDark ? "dark" : "light"}`}></div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
