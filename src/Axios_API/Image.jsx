import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Image() {
  
  const [tableData , setTabledata] = useState([]);

 useEffect(()=>{
   axios.get("https://jsonplaceholder.typicode.com/photos")
  .then((response) =>{
    console.log(response.data);
    setTabledata(response.data);
  })
  .catch((err) => console.log(err))
 },[])

  return (
    <div>
      <h2>Axios API Image</h2>
      <table border={2} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Title</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((ele,index) => (
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
