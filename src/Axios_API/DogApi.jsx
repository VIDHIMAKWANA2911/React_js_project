import React, { useState } from "react";
import axios from "axios";

export default function Dogapi() {
  const [img, setImg] = useState("");

  const handleClickChange = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        console.log(response.data.message);
        setImg(response.data.message);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <img src={img} alt="dog_img" style={{ width: "300px", height: "auto" }} />
      <br />
      <button onClick={handleClickChange}>Change Image</button>
    </div>
  );
}
