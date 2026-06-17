
//使用外部传值
//当传入的list类型不定时，可以使用泛型
interface ListProps<T> {
    list: T[];
    onChange: (item: T) => void;
}
export function List<T>({ list }: ListProps<T>) {
    //初始化一个数组
    // const list = [1, 2, 3, 4, 5];

  return(
    <div>
      {list.map(item => (
        <>
        <div key={item}>{item}</div>
        <button onClick={() => onChange?.(item as T)}>click</button>
        </>
      ))}
    </div>
  )
}

export const ListDemo = () => {
  return <List list={[1, 2, 3, 4, 5]} onChange={(item) => {console.log(item)}} />
}
