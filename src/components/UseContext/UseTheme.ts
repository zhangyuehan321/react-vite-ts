import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

export const UseTheme = () => {
    const theme = useContext(ThemeContext);
    return theme;
}