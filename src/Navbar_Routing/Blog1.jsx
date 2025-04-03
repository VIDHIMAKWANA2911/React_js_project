import React from 'react'

export default function Blog1() {
  return (
    <div>
      <div className="Homepage" style={{ backgroundColor: "#fefae0", width: "94%", height: "92vh", marginLeft: "100px", marginRight: "300px", alignItems: "center", justifyContent:"center", display:"flex", position:"absolute" }}>  
        <div style={{ display: "flex", alignItems: "center" }}>  
          <img   
            src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png"   
            alt="Web Development"   
            width="500px"   
            style={{ marginLeft: "60px" }}   
          />  
          <div style={{ maxWidth: "60%" }}>  
            <h2 style={{ fontSize: "45px", fontFamily: "cursive", marginBottom: "10px" ,paddingLeft:"230px"}}>Forented Development...!!!</h2>  
            <p style={{ paddingLeft: "220px", fontSize: "40px", fontFamily: "cursive", textAlign: "left" }}>
              <ul>
                <li>- HTML</li>
                <li>- CSS</li>
                <li>- BOOTSTRAP</li>
                <li>- JAVASCRIPT</li>
                <li>- REACTJS</li>
              </ul>
              </p>   
          </div>  
        </div>  
      </div> 
    </div>
  )
}
