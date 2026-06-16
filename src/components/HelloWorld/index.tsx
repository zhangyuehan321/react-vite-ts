import { useState } from 'react';
interface HelloWorldProps {
  title: string;
  render?: (count: number) => React.ReactNode;
  onChange?: (count: number) => void;
}


export const HelloWorld = ({ title, render, onChange }: HelloWorldProps) => {
    const [count, setCount] = useState(0);
    const handleAddClick = () => {
        setCount(count + 1);
        onChange?.(count + 1);
    }
  return <div>
    Hello World{title}---{count}<button onClick={handleAddClick}>点击</button>
   {render?.(count)}
   </div>
}
