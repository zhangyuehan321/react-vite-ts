
//使用外部传值
//当传入的list类型不定时，可以使用泛型
interface ListProps<T> {
    list: T[];
    onChange: (item: T) => void;
}
export function List<T extends {id: number, name: string}>({ list, onChange }: ListProps<T>) {
    //初始化一个数组
    // const list = [1, 2, 3, 4, 5];

  return(
    <div>
      {list.map((item: T) => (
        <>
        <div key={item.id}>{item.name}</div>
        <button onClick={() => onChange(item)}>click</button>
        </>
      ))}
    </div>
  )
}

export const ListDemo = () => {
  return <List list={[{id: 1, name: 'item1'}, {id: 2, name: 'item2'}]} onChange={(item) => {console.log(item)}} />
}
