import React, { useState } from 'react';
import axios from 'axios';
import './UserCard.css';

export default function User_random() {
  const [title, setTitle] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPassword] = useState("");
  const [active, setActive] = useState("password");

  const handleChangeUser = () => {
    axios.get("https://randomuser.me/api/")
      .then((res) => {
        const user = res.data.results[0];
        setTitle(user.name.title);
        setFirst(user.name.first);
        setLast(user.name.last);
        setGender(user.gender);
        setImage(user.picture.large);
        setAge(user.dob.age);
        setEmail(user.email);
        setDob(user.dob.date.substring(0, 10));
        setAddress(user.location.city);
        setState(user.location.state);
        setPhone(user.phone);
        setPassword(user.login.password);
        setActive("password");
      })
      .catch((err) => console.log(err));
  };

  const renderLabel = () => {
    switch (active) {
      case "name": return "My name is";
      case "email": return "My email is";
      case "dob": return "My date of birth is";
      case "location": return "My location is";
      case "phone": return "My phone number is";
      case "password":
      default: return "My password is";
    }
  };

  const renderValue = () => {
    switch (active) {
      case "name": return `${title} ${first} ${last}`;
      case "email": return email;
      case "dob": return dob;
      case "location": return `${address}, ${state}`;
      case "phone": return phone;
      case "password":
      default: return pass;
    }
  };

  return (
    <div className="card-container">
      <div className="user-card">
        <div className="card-header" />
        <div className="card-body">
          <img src={image} alt="User" className="profile-img" />
          <p className='label'>{renderLabel()}</p>
          <h2 className='password'>{renderValue()}</h2>
          <div className="icon-bar">
            <i className={`fas fa-user ${active === "name" ? "active" : ""}`} onClick={() => setActive("name")}></i>
            <i className={`fas fa-envelope ${active === "email" ? "active" : ""}`} onClick={() => setActive("email")}></i>
            <i className={`fas fa-calendar-alt ${active === "dob" ? "active" : ""}`} onClick={() => setActive("dob")}></i>
            <i className={`fas fa-map-marker-alt ${active === "location" ? "active" : ""}`} onClick={() => setActive("location")}></i>
            <i className={`fas fa-phone ${active === "phone" ? "active" : ""}`} onClick={() => setActive("phone")}></i>
            <i className={`fas fa-lock ${active === "password" ? "active" : ""}`} onClick={() => setActive("password")}></i>
          </div>
        </div>
        <button onClick={handleChangeUser} className="user-btn">Change User</button>
      </div>
    </div>
  );
}
