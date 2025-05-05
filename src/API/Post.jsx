import React, { useEffect, useState } from 'react'

export default function Post(){

  const [tableData , setTabledata] = useState([]);

  useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) =>{console.log(data)
     setTabledata(data)})
  .catch((err) => console.log(err));
  },[])
  return (
    <div>
       {/* API - Application Programming Interface*/}
       {/* fetch() .then().then().catch()*/}
       <h1>POST API</h1>
         <table border={2} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((ele,index)=>(
              <tr key={index}>
                <td>{ele.id}</td>
                <td>{ele.title}</td>
                <td>{ele.body}</td> 
              </tr>
            ))}
          </tbody>
         </table>
    </div>
  )
}
