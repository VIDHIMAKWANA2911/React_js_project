import React, { useEffect, useState } from 'react'

export default function User_Form() {

  // object State

    const [input , setinputvalue] = useState({
        Name :"",
        Email :"",
        Password : ""
    });


// Form Submit Function
    const handleSubmitForm = (e) => {
        e.preventDefault();
        // console.log(input);
        setarr([...arr,input]);
        setinputvalue({
          Name : "",
          Email : "",
          Password : ""
        });
    };


// Array State 
 // const [arr,setarr] = useState([]); // aa rite aaray create krvano
 const [arr , setarr] = useState(()=>{
   let storedData = localStorage.getItem("User_data");
  //  console.log(storedData);
  return storedData ? JSON.parse(storedData) : [];
 });

  // useEffects

  useEffect(()=>{
    localStorage.setItem("User_data",JSON.stringify(arr))
  },[arr])



  // Delete Functions //
  // const handleDelete = (index) =>{
  //   const updateedData = [...arr];
  //   updateedData.splice(index,1);
  //   setarr(updateedData);
  //   console.log(index);
  //   console.log(updateedData);
  // }



//////////// delete (filter methods) ////////////////
   const handleDelete = (index) => {
    const updatedData = arr.filter((_, i) => i !== index);
    setarr(updatedData);
  };



  // Edit State //
  const [editindex , setEditindex] = useState(null);

  // Edit Functions //
  const handleEdit =(index) => {
    setEditindex(index);
    setinputvalue(arr[index]);
  }

  /// upadate data /////

    const handleUpdate = () => {
    const updatedData = [...arr];
    updatedData[editindex] = input;
    setarr(updatedData);
    setinputvalue({
      Name: "",
      Email: "",
      Password: ""
    });
    setEditindex(null);
  };

 
  return (
    <>
      <form>
       <input type="text" placeholder='ENTER THE NAME' value={input.Name} onChange={(e)=>setinputvalue ({...input,Name:e.target.value})}/>   
       <br /><br />
       <input type="Email" placeholder='ENTER THE EMAIL' value={input.Email} onChange={(e)=>setinputvalue({...input,Email:e.target.value})}/>
       <br /><br />
       <input type="Password" placeholder='ENTER THE PASSWORD' value={input.Password} onChange={(e)=>setinputvalue({...input,Password:e.target.value})}/>
       <br /><br />
       {/* <button type='Submit'>{editindex === null ? "submit" : "Update"}</button> */}
{/*condtion pass kri che upadated data mate  */}
          {editindex === null ? (
          <button onClick={handleSubmitForm}>Submit</button>
        ) : (
          <button onClick={handleUpdate}>Update</button>
        )}
      </form> 

<br /><br />
<table border={2} cellSpacing={0}>
  <thead>
    <tr>
      <th>Sr.no</th>
      <th>Name</th>
      <th>Email</th>
      <th>Password</th>
      <th>Actions</th>
    </tr>
  </thead>
   <tbody>
     {
      arr.map((ele,index)=>(
        <tr key={index}>
          <td>{index+1}</td>
          <td>{ele.Name}</td>
          <td>{ele.Email}</td>
          <td>{ele.Password}</td>
          <td>
            <button onClick={()=>handleEdit(index)}>Edit</button>
            <button onClick={()=>handleDelete(index)}>Delete</button>
            </td>
        </tr>
      ))
     }
   </tbody>
</table>

    </>
  )
}














