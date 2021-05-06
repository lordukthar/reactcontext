import { ThemeContext } from "./theme-context";
import React, { useContext } from "react";

function ThemeTogglerButton() {
  const apa = useContext(ThemeContext);

  function add() {
    apa.name = "adder" + apa.name;
  }

  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {({ theme, name, toggleTheme }) => (
        <div>
          <button
            onClick={toggleTheme}
            style={{ backgroundColor: theme.background }}
          >
            {name}
          </button>

          <button onClick={add} style={{ backgroundColor: theme.background }}>
            {name}
          </button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
