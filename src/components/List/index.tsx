import { useState } from 'react';


export const List = () => {
    const [list, setList] = useState<number[]>([]);
    const handleAddClick = () => {
        setList([...list, list.length]);
    }
  return(
    <div>
        {list.map(item => (
            item % 2 === 0 ? <div key={item}>{item}</div> : null
        ))}
        <button onClick={handleAddClick}>添加</button>
    </div>
  )
}
