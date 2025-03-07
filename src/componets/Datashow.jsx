import React from 'react'

function Datashow() {

    let Name = "Alice";
    // koy pan varibale ne print krvavo hoy to tene {} ma print krvana no reshe....(return statements ni under)

    let Array = [1,2,3,4,5,6,7,8,9];

    let obj = {
        Name : "ABC",
        Age : 24,
        City: "Surat",
    }

  return (
    <>
    {/* variables - var, let - (not redeclare, value reassign) , const - (not redeclare, not value reassign) */}
    {/* React is a JavaScript's Library */}
    {/* Data Types - string, number, boolean, null, undefined, array, object */}
    {Name}
    <br/><br/>
    <ul>
        {Array.map((ele,index)=>(
            <li key={index}>{ele}</li>
        ))}
    </ul>
    <h2>{obj.Name}</h2>
    <h2>{obj.Age}</h2>
    <h2>{obj.City}</h2>
    </>
  )
}
export default Datashow;