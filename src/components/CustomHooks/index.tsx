import { UseLocalStorageState } from './UseLocalStorageState';
export const CustomHooks = () => {
    const [count, setCount] = UseLocalStorageState('count', 0);
    return (
        <div>
            <h1>CustomHooks</h1>
            <div>Count: {count}</div>
            <button onClick={() => setCount((currentCount: number) => currentCount + 1)}>Add</button>
        </div>
    )
}