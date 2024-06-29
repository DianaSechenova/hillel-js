import { createContext } from "react";

export const themes = {
  black: {
    color: 'white',
    background: 'rgb(68, 68, 68, .5)'
  },
  white: {
    color: 'black',
    background: 'white'
  }
}

export const ThemeContext = createContext();
