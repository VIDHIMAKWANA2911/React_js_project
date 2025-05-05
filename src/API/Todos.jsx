import React, { useEffect, useState } from 'react'

export default function Todos() {

    const[tableData,settableData] = useState([]);

useEffect (() =>{
    
    fetch("https://jsonplaceholder.typicode.com/todos")
.then((Response) => Response.json())
.then((data)=>{console.log(data)
settableData(data)})
.catch((Error) => console.log(Error))
},[])



  return (
    <div>
      <table border={2} cellPadding={10} cellSpacing={0}>
        <thead>
            <tr>
                <th>Sr No</th>
                <th>Title</th>
                <th>Completed</th>
            </tr>
        </thead>
        <tbody>
            {
                tableData.map((ele,index) =>(
                    <tr key={index}>
                        <td>{ele.id}</td>
                        <td>{ele.title}</td>
                        <td>{ele.completed ? "True":"False"}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}