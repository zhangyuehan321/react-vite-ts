// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";
import { UseTheme } from "./UseTheme";

export const GrandChild = () => {
    // const { theme } = useContext(ThemeContext);

    // return (
    //     // <div>
    //     //     <div>GrandChild {theme}</div>
    //     // </div>
    //     <ThemeContext.Consumer>
    //         {({ theme }) => (
    //             <div>
    //                 <div>GrandChild {theme}</div>
    //             </div>
    //         )}
    //     </ThemeContext.Consumer>
    // )

    const { theme } = UseTheme();
    return <div>GrandChild {theme}</div>
}