import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function About() {
 const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

 return (
    <div>
      <h1>About</h1>
      {/* name mate */}
      {/* <h2>Name:{location.state}</h2> */}
      
      {/* Single Array mate*/}
      {/* <h2>{location.state.fruits.map((ele,index)=>(
        <li key={index}>{ele}</li>
      ))}</h2> */}

      {/* Object mate */}
      <h2>Movie : {location.state.obj.movie}</h2>
      <h2>Year : {location.state.obj.year}</h2>

      {/* array of object  */}
       {/* <table border={3} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {location.state.arrObj.map((ele, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.age}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <button onClick={()=> navigate("/Home")} style={{padding:"10px 10px 10px 10px",marginLeft:'20px',borderRadius:"20px",marginTop:"20px"}}>Home Component</button>
    </div>
  )
}
