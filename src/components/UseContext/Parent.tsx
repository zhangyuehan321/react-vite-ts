import { Child } from './child';
import { useState } from 'react';

export const Parent = () => {
    const [theme, setTheme] = useState('light');
    return (
        <div>
            <Child theme={theme}/>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
        </div>
    )
}