import { useState } from 'react'
import { Button } from './components/ui/button'
import './index.css'
function App() { 
  const [color, setColor] = useState("violet")
  return (
      <>
<div className='w-full h-screen' style={{backgroundColor: color}}>
  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center gap-3 p-2 bg-white rounded-full shadow-lg'>

    <Button className="bg-pink-600 px-3 py-2 rounded-3xl hover:bg-pink-500" onClick={()=>setColor("pink")}>Pink</Button>
    <Button className="bg-blue-600 px-3 py-2 rounded-3xl hover:bg-blue-500"onClick={()=>setColor("blue")}>Blue</Button>
    <Button className="bg-red-600 px-3 py-2 rounded-3xl hover:bg-red-500"onClick={()=>setColor("red")}>Red</Button>
    <Button className="bg-green-600 px-3 py-2 rounded-3xl hover:bg-green-500"onClick={()=>setColor("green")}>Green</Button>
    <Button className="bg-violet-600 px-3 py-2 rounded-3xl hover:bg-violet-500"onClick={()=>setColor("violet")}>Violet</Button>
    <Button className="bg-yellow-600 px-3 py-2 rounded-3xl hover:bg-yellow-500" onClick={()=>setColor("yellow")}>Yellow</Button>
    </div>

  </div>

</div>
    </>
  )
}

export default App
