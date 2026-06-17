//把状态和LocalStorage统一起来，方便管理

//自定义Hooks，使用自定义泛型<T>
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

export function UseLocalStorageState<T>(
    key: string,
    initialValue: T,
): [T, Dispatch<SetStateAction<T>>] {
    //从localStorage中获取数据
    const [state, setState] = useState<T>(() => {
        const item = localStorage.getItem(key);
        return item !== null ? JSON.parse(item) : initialValue;
    });

    //每当state变化时，将数据存储到localStorage中
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}