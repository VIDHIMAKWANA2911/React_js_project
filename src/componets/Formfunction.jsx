import React, { useState } from 'react'

export default function Formfunction() {

    //[variable,function] = usestate(inital value)
    const [Name , setName] = useState("");
    const [Email, setemail] = useState("");
    const [Password,setpassword] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
         console.log(Name);
         console.log(Email);
         console.log(Password);
        // e.target.reset();

        setName("");
        setemail("");
        setpassword("");
    }

  return (
    <> 
      <h1>Functional Form</h1>
      <form onSubmit={handleForm}>
          <input type="text" placeholder="Enter Your Name" value={Name} onChange={(e)=>setName(e.target.value)}/>
          <br /><br />
          <input type="Email" placeholder="Enter Your Email" value={Email} onChange={(e)=>setemail(e.target.value)}/>
          <br /><br />
          <input type="Password" placeholder="Enter your Password" value={Password} onChange={(e)=>setpassword(e.target.value)}/>
          <br /><br />
          <button type='submit'>Submit</button>
      </form>
    </>
  )
}