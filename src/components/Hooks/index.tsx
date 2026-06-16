import { useState, useEffect, useRef } from 'react';

export const Hooks = () => {
    const [Hooks, setHooks] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const isMounted = useRef<boolean>(false);
    const handleAddClick = () => {
        setHooks((prevHooks) => prevHooks + 1);
    }

    //第一次渲染后执行，Hooks值修改后执行
    useEffect(() => {
        console.log('Hooks', Hooks);
        document.title = `Hooks: ${Hooks}`;

        console.log('inputRef', inputRef.current?.focus());

        console.log('isMounted:', isMounted.current);
    }, [Hooks]);

    //第一次渲染后执行
    //在函数式编程思想里面，订阅和取消订阅就是标准化结构
    useEffect(() => {
        console.log('组件挂载完成！');//类比于componentDidMount
        isMounted.current = true;

        return () => {
            console.log('组件卸载完成！');//类比于componentWillUnmount
        };
    }, []);

    //每次渲染都执行
    useEffect(() => {
        console.log('组件更新完成！');//类比于componentDidUpdate
    });

    return(
        <div>
            {Hooks}
            <button onClick={handleAddClick}>添加</button>
            <input ref={inputRef}/>
        </div>
    )
}
