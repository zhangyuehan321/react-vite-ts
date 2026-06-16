import { Child } from './child';
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';

export const Parent = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <div>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <Child theme={theme}/>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </ThemeContext.Provider>
        </div>
    )
}