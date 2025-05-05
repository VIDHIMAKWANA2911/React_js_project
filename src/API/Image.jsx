import React, { useEffect, useState } from 'react'

export default function Image() {

  const [tableData , setTabledata] = useState([]);

 useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((data) =>{console.log(data)
     setTabledata(data)})
  .catch((err) => console.log(err));
 },[])

  return (
    
    <div>
      <h1>PHOTO API</h1>
       <table border={3} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Title</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((ele,index)=>(
              <tr key={index}>
                <td>{ele.id}</td>
                <td>{ele.title}</td>
                <td><img src={ele.thumbnailUrl} alt="image" /></td>
              </tr>
            ))
          }
        </tbody>
       </table>
    </div>
  )
}
