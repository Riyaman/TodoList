import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice'
// import counterReducer from './redux/counter/counterSlice'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <>
    <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
       this is the count {count}
       <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  )
}

export default App
