//使用外部传值
interface ListProps {
    list: number[];
}
export const List = ({ list }: ListProps) => {
    //初始化一个数组
    // const list = [1, 2, 3, 4, 5];

  return(
    <div>
      {list.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}
