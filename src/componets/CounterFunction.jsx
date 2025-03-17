import React, { useState } from 'react'

export default function CounterFunction() {
    // const [variable,function] = useState(initial value)
    const [count , setCount] = useState(0);
//   const handleClick = () => {
//     setCount(count + 1);
//   };
  return (
    <>
     <h1> Function Counter</h1>
     <h1>{count}</h1>
    <button onClick={()=> setCount(count+1)}>INCREMENT</button>
    <button onClick={()=> setCount(count-1)}>DIRECEMENT</button>
    </>
  )
}
