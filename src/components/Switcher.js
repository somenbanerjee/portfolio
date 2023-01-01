import React, { useState } from "react";
import useSound from "use-sound";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkSide";
import dark from "../assets/dark.mp3";
import light from "../assets/light.mp3";

function Switcher() {
  const [currentTheme, setCurrentTheme] = useDarkSide();
  const [playOnDark] = useSound(dark);
  const [playOnLight] = useSound(light);

  const [isChecked, setIsChecked] = useState(
    currentTheme === "light" ? true : false
  );

  const toggleThemeMode = (checked) => {
    setCurrentTheme(currentTheme);
    setIsChecked(checked);
    if (checked) {
      playOnDark();
    } else {
      playOnLight();
    }
  };
  return (
    <div>
      <DarkModeSwitch
        checked={isChecked}
        onChange={toggleThemeMode}
        size={28}
      />
    </div>
  );
}

export default Switcher;
