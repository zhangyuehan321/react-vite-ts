import { useState, useMemo, useCallback } from "react";


export const Memo = () => {
    const [count, setCount] = useState(0);

    //缓存当前数组，double，派生状态
    //useMemo会缓存当前值，如果依赖项count不变的话，return里的对象值不会计算改变
    const doubleInfo = useMemo(() => {
        return {
            double: count * 200,
            triple: count * 300
        }
    }, [count]);

    // const handleClick = () => {
    //     setCount(count + 1);
    // }

    //useCallback会缓存当前函数，如果依赖项count不变的话，handleClick函数不会重新创建
    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return(
        <div>
            {doubleInfo.double}
            <div onClick={handleClick}>click</div>
        </div>
    )
}