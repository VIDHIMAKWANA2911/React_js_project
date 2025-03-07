import React from 'react'

export default function Array1({data , data1}) {
  return (
    <>
     <h1>{data}</h1>
     <div>
        <ul>
            {data.map((ele,index)=>(
                <li key={index}>{ele}</li>
            ))}
        </ul>

     <table border={1} cellSpacing={0} width="100%">
        <thead>
             <tr>
                <th>Sr no</th>
                <th>Name</th>
                <th>City</th>
                <th>Age</th>
                <th>Occupation</th>
             </tr>
        </thead>
        <tbody>
            {data1.map((ele,index) => (
               <tr>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.city}</td>
                  <td>{ele.age}</td>
                  <td>{ele.occupation}</td>
               </tr>
            ))}
        </tbody>
     </table>

     </div>
    </>
  )
}
