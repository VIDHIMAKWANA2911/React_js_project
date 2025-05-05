import React, { useState } from 'react';
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

  const [label, setLabel] = useState("My Name is");
  const [value, setValue] = useState("");

  const handleChangeUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        const user = data.results[0];
        setTitle(user.name.title);
        setFirst(user.name.first);
        setLast(user.name.last);
        setGender(user.gender);
        setImage(user.picture.large);
        setAge(user.dob.age);
        setEmail(user.email);
        setDob(user.dob.date);
        setAddress(user.location.city);
        setState(user.location.state);
        setPhone(user.phone);
        setPassword(user.login.password);

        setLabel("My Name is");
        setValue(`${user.name.title} ${user.name.first} ${user.name.last}`);
      })
      .catch((Err) => console.log(Err));
  };

  const handleIconClick = (type) => {
    switch (type) {
      case "name":
        setLabel("My Name is");
        setValue(`${title} ${first} ${last}`);
        break;
      case "email":
        setLabel("My Email is");
        setValue(email);
        break;
      case "dob":
        setLabel("My Age is");
        setValue(age);
        break;
      case "location":
        setLabel("My Address is");
        setValue(`${address}, ${state}`);
        break;
      case "phone":
        setLabel("My Phone is");
        setValue(phone);
        break;
      case "password":
        setLabel("My Password is");
        setValue(pass);
        break;
      default:
        break;
    }
  };

  return (
    <div className="card-container">
      <div className="user-card">
        <div className="card-body">
          <img src={image} alt="User" className="profile-img" />
          <p className="label">{label}</p>
          <h2 className="password">{value}</h2>

          <div className="icon-bar">
            <i className="fas fa-user" onClick={() => handleIconClick("name")}></i>
            <i className="fas fa-envelope" onClick={() => handleIconClick("email")}></i>
            <i className="fas fa-calendar-alt" onClick={() => handleIconClick("dob")}></i>
            <i className="fas fa-map-marker-alt" onClick={() => handleIconClick("location")}></i>
            <i className="fas fa-phone" onClick={() => handleIconClick("phone")}></i>
            <i className="fas fa-lock" onClick={() => handleIconClick("password")}></i>
          </div>
        </div>
        <button onClick={handleChangeUser} className="user-btn">
          Change User
        </button>
      </div>
    </div>
  );
}
