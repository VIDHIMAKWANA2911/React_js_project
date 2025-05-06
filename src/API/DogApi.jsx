import React, { useState } from "react";

export default function Dogapi() {
  const [img, setImg] = useState("");

  const handleClickChange = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
       .then((Response) => Response.json())
       .then((data) => {
         console.log(data.message);
         setImg(data.message);
       })
       .catch((Err) => console.log(Err));
   };
   return (
     <div>
       <img src={img} alt="dog_img" />
       <button onClick={handleClickChange}>Change Image</button>
     </div>
   );
 }