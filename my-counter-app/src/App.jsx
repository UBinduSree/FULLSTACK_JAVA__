import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Count(){
  const[count,setCount]=useState(0);
  const bgstyle={
    color:count>5?"yellow":"green"
  }
  return(
    <div className='app' style={bgstyle}>
      <h1>Count:{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  );
}
export default Count