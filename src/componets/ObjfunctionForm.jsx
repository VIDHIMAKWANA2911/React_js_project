import React, { useState } from 'react'

export default function ObjfunctionForm() {
    const [obj , setobj] = useState({
        Name : "John",
        Age : 20,
        City : "New York"
    });
  return (
    <>
      <h1>OBJECT FUNCTION FORM</h1> 
      <h2>Name : {obj.Name}</h2>
      <h2>Age : {obj.Age}</h2>
      <h2>City : {obj.City}</h2>
      <button onClick={()=>setobj({Name:"ABC" , Age: 27 , City:"USA"})}>Change Value</button>
       <button onClick={()=>setobj({...obj,Name:"XYZ"})}>Change Name</button>
       <button onClick={()=>setobj({...obj,Age:25})}>Change Age</button>
       <button onClick={()=>setobj({...obj,City:"UK"})}>Change City</button>
    </>
  )
}
