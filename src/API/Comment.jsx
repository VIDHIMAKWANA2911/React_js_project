import React, { useEffect, useState } from 'react'

export default function Comment() {

    const [tableData , setTabledata] = useState([]);

    useEffect(()=>{
     fetch("http://jsonplaceholder.typicode.com/comments")
    .then((respone)=>respone.json())
    .then((data)=>{console.log(data)
        setTabledata(data)
    })
    .catch((err)=>console.log(err));
    },[])
  
  return (
    <div>
        <h1>COMMENT API</h1>
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
                    tableData.map((ele,index)=>(
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
