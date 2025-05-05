import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Comment() {
    
    const [TableData , setTabledata] = useState([]);

    useEffect(() => {
      axios.get("http://jsonplaceholder.typicode.com/comments")
    .then((response) => {
        console.log(response.data);
        setTabledata(response.data);
    })
    .catch((err) => console.log(err))
    },[])
  return (
    <div>
      <h2>Comment Table</h2>
      <table border={2} cellPadding={10} cellSpacing={0}>
        <thead>
            <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
            {
                TableData.map((ele,index) => (
                    <tr key={index}>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.email}</td>
                        <td>{ele.body}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}
