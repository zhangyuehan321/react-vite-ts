import { useState } from "react";

export const UseState = () => {
    const [count, setCount] = useState(() => 0);
    const handleAddClick = (val: number) => {
        setCount(val + 1);  
    }
    // 1. 基础用法
    // 2. 就近取值
    // 3. 函数式初始化数据
    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={() => handleAddClick(count)}>Add</button>
        </div>
    )
}