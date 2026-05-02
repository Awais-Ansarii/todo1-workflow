import {  useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  

  return (
    <div className='w-screen h-screen bg-black text-white p-4'>

      <div className='flex flex-col gap-4 items-center justify-center'>

      <p>count = {count}</p>
      <button onClick={()=>setCount((prev)=>prev+1)}>increase count</button>
    </div>
      </div>
  )
}

export default App
