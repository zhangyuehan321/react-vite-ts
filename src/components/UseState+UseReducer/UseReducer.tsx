import { useState } from "react";

export const UseReducer = () => {
    const [info, setInfo] = useState({
        name: 'John',
        age: 20,
    });
    // const handleAddClick = () => {
    //     setInfo({...info, age: info.age + 1});
    // }
    return (
        <div>
            <div>Name: {info.name}</div>
            <div>Age: {info.age}</div>
            <input type="text" value={info.name} onChange={(ev) => setInfo({...info, name: ev.target.value})}/>
            <input type="number" value={info.age} onChange={(ev) => setInfo({...info, age: parseInt(ev.target.value)})}/>
        </div>
    )
    //redux设计思想：单向数据流：视图上一旦有操作action,分发给reducer处理,处理完后,state驱动更新视图。
    //提取对状态的操作，叫 action
    //action需要专门的方法完成状态值的更新，叫 reducer
    //结果 state， 驱动视图更新
}