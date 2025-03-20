import React, { useEffect, useState } from 'react'

export default function Tableimage() {
    const [input,setinput] = useState({
        Name:"",
        Email : "",
        Password : ""
    });

    const [file , setFile] = useState(null)

    const [arr,setArr] = useState (() => {
        const storedData = localStorage.getItem("Data");
        return storedData ? JSON.parse(storedData) : [];
    });

    const handleFilechange = (e) => {
        const image = e.target.files[0];
        if(image){
            setFile(image)
        }
    }

    const handlefilesubmit = (e) =>{
        e.preventDefault();

        if(input.Name && input.Email && input.Password && file){
            const FileURL = URL.createObjectURL(file);
            setArr([...arr,{
                Name : input.Name,
                Email : input.Email,
                Password: input.Password,
                file : FileURL
            }])
        }else{
            alert("Enter Vaild Data....")
        }
        setinput({
            Name : "",
            Email : "",
            Password : ""
        });
    };

    useEffect(()=>{
        localStorage.setItem("Data",JSON.stringify(arr));
        },[arr]) // depenandsey []

  return (
    <>
      <h1>Table Image Form...!!</h1>
      <form onSubmit={handlefilesubmit}>
        <input type="text" placeholder='ENTER THE NAME' value={input.Name} onChange={(e) => setinput({...input,Name:e.target.value})}/>
        <br /><br />
        <input type="Email" placeholder='ENTER THE EMAIL' value={input.Email} onChange={(e) => setinput({...input,Email:e.target.value})}/>
        <br /><br />
        <input type="Password" placeholder='ENTER THE PASSWORD' value={input.Password} onChange={(e) => setinput({...input,Password:e.target.value})}/>
        <br /><br />
        <input type="File" onChange={handleFilechange}/>
        <br /><br />
        <button type='Submit'>Submit</button>
      </form>
 <br /><br />
 {arr.length>0?(<table border={2} cellSpacing={0}>
        <thead>
            <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Image</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                arr.map((ele,index) =>{
                    return(
                        <>
                         <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{ele.Name}</td>
                            <td>{ele.Email}</td>
                            <td>{ele.Password}</td>
                            <td><img src={ele.file} alt="" width="30%"/></td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                         </tr>
                        </>
                    )
                })
            }
        </tbody>
      </table>
      ):("")}
    </>
  )
}
