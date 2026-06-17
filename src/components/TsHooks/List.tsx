
export const List = () => {
    const list = [1, 2, 3, 4, 5];

  return(
    <div>
      {list.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}
