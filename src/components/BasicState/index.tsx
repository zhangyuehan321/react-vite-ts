import { useState } from 'react';


export const BasicState = () => {
    const [info, setInfo] = useState({
        name: '张三',
        age: 18,
        city: '北京',
    });
    const handleAddClick = () => {
        setInfo((prevInfo) => {
            return {
                ...prevInfo,
                age: prevInfo.age + 1,
            }
        })
        // setInfo({
        //     ...info,
        //     age: info.age + 1,
        // });

        //错误写法
        // info.age++;
        // setInfo(info);
    }
  return <div>
    {info.age}<button onClick={handleAddClick}>点击</button>
   </div>
}
