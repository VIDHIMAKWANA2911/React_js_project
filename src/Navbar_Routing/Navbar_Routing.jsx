import React from 'react'
import "./Navbar_Routing.css"
import { Link } from 'react-router-dom';

export default function Navbar_Rotuting() {
  return (
    <div>
       <header>
        <div>
          <h1>SITEMARK</h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/Home1">Home</Link></li>
            <li><Link to="/About1">About</Link></li>
            <li><Link to="/Blog1">Blog</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to ="/Contacts">Contacts</Link></li>
          </ul>
        </nav>
       </header>

<div>
  <div className="sidebar">
    <img src="" alt="" width="67px"  style={{paddingLeft:"20px" ,paddingTop:"20px"}}/>
    <h5 style={{paddingLeft:"24px" , fontSize:"15px"}}>Home</h5><br />

    <img src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png" alt="" width="67px"  style={{paddingLeft:"20px" ,paddingTop:"20px"}}/>
     <h5 style={{paddingLeft:"10px" , fontSize:"15px"}}>Microphone</h5><br />

     <img src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png" alt="" width="67px"  style={{paddingLeft:"20px" ,paddingTop:"20px"}}/>
     <h5 style={{paddingLeft:"10px" , fontSize:"15px"}}>Notification</h5><br />

     <img src="https://cdn-icons-png.flaticon.com/512/0/619.png" alt=""  width="67px"  style={{paddingLeft:"20px" ,paddingTop:"20px"}}/>
     <h5 style={{paddingLeft:"10px" , fontSize:"15px"}}>Location</h5><br />

     <img src="https://cdn-icons-png.flaticon.com/512/455/455705.png" alt=""  width="67px"  style={{paddingLeft:"20px" ,paddingTop:"20px"}}/>
     <h5 style={{paddingLeft:"20px" , fontSize:"15px"}}>Phone</h5><br />

     <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt=""  width="67px"  style={{paddingLeft:"20px" ,paddingTop:"20px"}}/>
      <h5 style={{paddingLeft:"20px" , fontSize:"15px"}}>Users</h5><br />
  </div>
</div>
    </div>
  )
}
