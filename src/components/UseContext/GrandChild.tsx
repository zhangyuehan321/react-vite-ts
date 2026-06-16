// import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const GrandChild = () => {
    // const { theme } = useContext(ThemeContext);
    return (
        // <div>
        //     <div>GrandChild {theme}</div>
        // </div>
        <ThemeContext.Consumer>
            {({ theme }) => (
                <div>
                    <div>GrandChild {theme}</div>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}