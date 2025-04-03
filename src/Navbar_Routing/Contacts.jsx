import React from 'react'

export default function Contacts(){
  return (
    <div>
      <h1 style={{paddingLeft:"730px",paddingTop:"20px", fontSize:"35px"}}>Users Form...!!!</h1>
      <br /><br />
      <div className="form" style={{fontSize:"30px", border:"1px solid black" , width:"40%",height:"600px",marginLeft:"500px" ,position:"relative",borderRadius:"20px",backgroundColor:"#fefae0" , paddingLeft:"20px"}}>
      <form >
        <label htmlFor="">Name : </label>
        <input type="text" placeholder='  ENTER   YOUR   NAME' style={{borderRadius:"10px" , width:"450px" ,height:"50px" , marginTop:"30px" ,textAlign:"center"}}/>
        <br />
        <label htmlFor="">Email : </label>
        <input type="Email" placeholder='  ENTER   YOUR   Email' style={{borderRadius:"10px" , width:"450px" ,height:"50px" , marginTop:"30px",textAlign:"center"}}/>
        <br />
        <label htmlFor="">Password : </label>
         <input type="Password" placeholder='  ENTER   YOUR   Password' style={{borderRadius:"10px" , width:"450px" ,height:"50px" , marginTop:"30px",textAlign:"center"}}/>
         <br />
         <label htmlFor="">Address : </label>
         <input type="Address" placeholder='  ENTER   YOUR   Address' style={{borderRadius:"10px" , width:"450px" ,height:"100px" , marginTop:"30px",textAlign:"center",fontSize:"18px"}}/>
         <br /><br />
         <label htmlFor="">Gender:</label>  
                <input type="radio" id='Male' name='Gender' />  
                <label htmlFor="Male" > Male</label> 
                <input type="radio" id="Female" name='Gender' />  
                <label htmlFor="Female "> Female</label>  
                <input type="radio" id='Other' name='Gender' />  
        <label htmlFor="Other " > Other</label>  
        <br /><br />
        <label htmlFor="" style={{textAlign:"center"}}>Country : </label>  
                <select style={{width:"450px",height:"40px",borderRadius:"10px",textAlign:"center",fontSize:"18px"}}>  
                    <option value="">----Select----</option>  
                    <option value="India">INDIA</option>  
                    <option value="UK">UK</option>  
                    <option value="AUS">AUS</option>  
                    <option value="China">CHINA</option>  
                    <option value="Chicago">CHICAGO</option>  
                </select> 
                 <br />
             <button type='Submit' style={{width:"640px",marginLeft:"0px",marginTop:"20px",height:"50px",borderRadius:"20px",fontSize:"20px"}}>Submit</button>
      </form>
      </div>
    </div>
  )
}