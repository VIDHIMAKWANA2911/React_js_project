import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Home() {


   //name mate ///////
  // const name = "Alice";
  const navigate = useNavigate();
  // const handleAboutcomponents = () =>{
  //   navigate("/about",{state:name}) // State is an object....
  // }  
  // aa name aatle data ne get krva mate About components ma location hook no use thy che ///////////

  //  Array mate (single)
  // const navigate = useNavigate();
  // const fruits = ["Mango" , "Banana" , "Kiwi" , "Lichi"];

  // Object print karava mate ///
  const obj = {
    movie: "Pushparaj",
    year: 2025
  };

  // const navigate = useNavigate();

  // const handleAboutComponent = () => {
  //   navigate("/about", { state:{obj}});
  // };


//// array of object print krva mate /////
//  const navigate = useNavigate();
//   const arrObj = [
//     {
//       name: "Tony",
//       age: 20
//     },
//     {
//       name: "John",
//       age: 22
//     },
//     {
//       name: "Max",
//       age: 30
//     }
//   ];

  return (
    <div>
      <h1>Home Components</h1>
      {/* single Name print krva mate */}
      {/* <button onClick={handleAboutcomponents} style={{padding:"10px 10px 10px 10px",marginLeft:'20px',borderRadius:"20px"}}>About Component</button>   */}
      {/* There are new ways to transfer data from components in the home... */}

      {/*Array print krva mate */}
      {/* <button onClick={()=>navigate("/About",{state:{fruits}})}  style={{padding:"10px 10px 10px 10px",marginLeft:'20px',borderRadius:"20px"}}>About Components</button> */}

      {/* Obj print krava mate */}
      <button onClick={()=>navigate("/About",{state : {obj}})}>About Component</button>
      
      {/* Array of object print krva mate*/}
       {/* <button onClick={() => navigate("/about", { state: { arrObj } })}style={{padding:"10px 10px 10px 10px",marginLeft:'20px',borderRadius:"20px"}}>
        About Component
      </button> */}

    </div>
  )
}
