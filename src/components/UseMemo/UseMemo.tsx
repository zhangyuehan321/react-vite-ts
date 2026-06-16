import { useState } from "react";


export const UseMemo = () => {
    const [count, setCount] = useState(0);
    const doubleCount = count * 200;
    const handleAddClick = () => {
        setCount(count + 1);
        console.log('你好呀，我又来了')
    }
    return(
        <div>
            <div>Count: {count}</div>
            <div>Double Count: {doubleCount}</div>
            <button onClick={handleAddClick}>Add</button>
        </div>
    )
}