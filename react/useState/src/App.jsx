import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar/Navbar'
// import { title } from 'process'
import { Router } from 'lucide-react'
function App() {
const [showbtn, stateshowbtn] = useState(true)
 const [todos, setTodos] = useState([
  {
  title: "Wake up", dsc:"sf"
  },
  {
 title: "go to gyme",dsc:"arie"
   }
 ])
const Todo = ({ todo }) => {
  return (<>
  <div className="todo">{todo.title}

 </div>
  </>)
}

  return (
<>
<Navbar />
<div className='flex justify-center items-center flex-col'>

<h1>hee</h1>
    {/* {todos.map(todo =>{
// //         return <Todo key={todo.title} todo={todo}/>
// //       })} */}
    {/* {showbtn ? <Button>show is true</Button> : <Button>Show is false</Button>}  */}
   {/* optimize way */}
    {showbtn && <Button className="w-28 ">button is clicked</Button>}
     {/* <Button>Welcome</Button> */}
     <Button className="mt-17" onClick={() => stateshowbtn(!showbtn)}>toggle btn</Button>
</div>
    </>
  )
}

export default App

