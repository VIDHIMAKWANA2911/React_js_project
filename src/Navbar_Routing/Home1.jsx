import React from 'react';  

export default function Home1() {  
  return (  
    <div>  
      <div className="Homepage" style={{ backgroundColor: "#fefae0", width: "94%", height: "92vh", marginLeft: "100px", marginRight: "300px", alignItems: "center", justifyContent:"center", display:"flex", position:"absolute" }}>  
        <div style={{ display: "flex", alignItems: "center" }}>  
          <div style={{ maxWidth: "60%" }}>  
            <h2 style={{ fontSize: "45px", fontFamily: "cursive", marginBottom: "10px" ,paddingLeft:"40px"}}>App Development...!!!</h2>  
            <p style={{ paddingLeft: "30px", fontSize: "40px", fontFamily: "cursive", textAlign: "left" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit dolorem voluptatum labore repellat aut laboriosam, molestias perferendis dolor.</p>   
          </div>  
          <img   
            src="https://cdn.pixabay.com/photo/2024/05/02/09/16/web-development-8734249_1280.png"   
            alt="Web Development"   
            width="700px"   
            style={{ marginLeft: "50px" }}   
          />  
        </div>  
      </div>  
    </div>  
  );  
}
