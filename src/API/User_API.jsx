import React, { useEffect, useState } from 'react'
// import { data } from 'react-router-dom'

export default function User_API() {
     
const[tableData,settableData] = useState([]);

useEffect (() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response) => Response.json())
    .then((data) => {console.log(data)
        settableData(data)
     })
   .catch((err) => console.log(err))

},[])

  return (
    <div>
      
    <table border={2} cellPadding={3} cellSpacing={0}>
        <thead>
            <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Street</th>
                <th>Suite</th>
                <th>City</th>
                <th>Zipcode</th>
                <th>Lat</th>
                <th>Lng</th>
                <th>Phone</th>
                <th>Website</th>
                <th>CompanyName</th>
                <th>CatchPhrase</th>
                <th>BS</th>
            </tr>
        </thead>
        <tbody>
            {
                tableData.map((ele,index) =>(
                    <tr key={index}>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.username}</td>
                        <td>{ele.email}</td>
                        <td>{ele.address.street}</td>
                        <td>{ele.address.suite}</td>
                        <td>{ele.address.city}</td>
                        <td>{ele.address.zipcode}</td>
                        <td>{ele.address.geo.lat}</td>
                        <td>{ele.address.geo.lng}</td>
                        <td>{ele.phone}</td>
                        <td>{ele.website}</td>
                        <td>{ele.company.name}</td>
                        <td>{ele.company.catchPhrase}</td>
                        <td>{ele.company.bs}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>

    </div>
  )
}