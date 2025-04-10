import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [arr,setarr] = useState(()=>{
      const storedData = localStorage.getItem("DATA");
      return storedData ? JSON.parse(storedData) : [];
    })

    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
      e.preventDefault();
       console.log(name,email,password);
        const upadataedData = [...arr,{name,email,password}];
        setarr(upadataedData);
        navigate("/NavData" , {state:upadataedData});
      setname("");
      setemail("");
      setpassword("");
    }

    useEffect(()=>{
        localStorage.setItem("DATA",JSON.stringify(arr));
    },[arr]);
  return (
    <div>
      <h1 style={{textAlign:"center"}}>User Form...!!!</h1>
      <br /><br />
      <form style={{textAlign:"center"}} onSubmit={handleFormSubmit}>
          <input type="text" placeholder='ENTER THE NAME' value={name} onChange={(e)=>setname(e.target.value)} style={{fontSize:"20px"}}/>
          <br /><br />
          <input type="Email" placeholder='ENTER THE EMAIL' value={email} onChange={(e)=>setemail(e.target.value)}style={{fontSize:"20px"}}/>
          <br /><br />
          <input type="Password" placeholder='ENTER THE PASSWORD' value={password} onChange={(e)=>setpassword(e.target.value)}style={{fontSize:"20px"}}/>
          <br /><br />
          <button type='Submit' style={{padding:"10px 20px 10px 20px",marginLeft:'0px',borderRadius:"20px",fontSize:"20px"}}>Submit</button>
      </form>
    </div>
  )
}
