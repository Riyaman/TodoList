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
<h1>hee</h1>
    {/* {todos.map(todo =>{
// //         return <Todo key={todo.title} todo={todo}/>
// //       })} */}
    {/* {showbtn ? <Button>show is true</Button> : <Button>Show is false</Button>}  */}
   {/* optimize way */}
    {showbtn && <Button>i will be shown only when second button is clicked</Button>}
     <Button>Welcome</Button>
     <Button onClick={() => stateshowbtn(!showbtn)}>toggle btn</Button>
    </>
  )
}

export default App

