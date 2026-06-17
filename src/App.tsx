
import './App.css'
// import { HelloWorld } from './components/HelloWorld'
// import { BasicState } from './components/BasicState'
// import { List } from './components/List'
// import { Hooks } from './components/Hooks'
// import { Form } from './components/Form'
// import { FormAction } from './components/FormAction'
// import SuspenseDemo from './components/Suspense/SuspenseDemo'
// import SuspenseNew from './components/SuspenseNew/SuspenseNew'
// import { UseMemo } from './components/UseMemo/UseMemo'
// import { UseState } from './components/UseState+UseReducer/useState'
// import { UseReducer } from './components/UseState+UseReducer/UseReducer'
// import { Parent } from './components/UseContext/Parent'
// import { Memo } from './components/UseMemo/Memo'
import { CustomHooks } from './components/CustomHooks/index'

function App() {
  // const count = 0;
  // const [count, setCount] = useState(0)
  // const [isShow, setIsShow] = useState(true);
  // const handleShowClick = () => {
  //   setIsShow(!isShow);
  // }

  return (
    <>
      <CustomHooks />
      {/* <Memo /> */}
      {/* <Parent /> */}
      {/* <UseReducer /> */}
      {/* <UseState /> */}
      {/* <UseMemo />  */}
      {/* <SuspenseNew /> */}
      {/* <SuspenseDemo /> */}
      {/* <FormAction />
      <Form />
      {isShow && <Hooks />}
      <button onClick={handleShowClick}>{isShow ? '隐藏' : '显示'}</button>
      <List />
      <BasicState />
      <HelloWorld
        title="Hello World"
        render={(count) => <div style={{color: 'red'}}>你好{count}</div>}
        onChange={(count) => console.log(count)}/> */}
    </>

  )
}

export default App
