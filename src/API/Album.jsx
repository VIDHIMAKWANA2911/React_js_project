import React, { useEffect, useState } from 'react'

export default function Album() {

    const [tableData , setTabledata] = useState([]);
useEffect(()=>{
  
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((data)=>{console.log(data)
        setTabledata(data)})
     .catch((err) => console.log(err));   
})
  return (
    <div>
      <h1>ALBUM API</h1>
      <table border={3} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((ele , index) =>(
              <tr key={index}>
                <td>{ele.id}</td>
                <td>{ele.title}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
