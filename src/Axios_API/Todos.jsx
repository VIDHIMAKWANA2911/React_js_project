import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Todos() {
  const [tableData , settableData] = useState([]);

  useEffect (() => {
      axios.get("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    console.log(response.data);
    settableData(response.data);
  }).catch((err) => console.log(err))
  },[])

  return (
    <div>
      <h2>ToDocs API</h2>
      <table border={2} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
           {
            tableData.map((ele,index) => (
              <tr key={index}>
                <td>{ele.id}</td>
                <td>{ele.title}</td>
                <td>{ele.completed ? "True" : "False"}</td>
              </tr>
            ))
           }
        </tbody>
      </table>
    </div>
  )
}
