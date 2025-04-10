import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SingleImages() {
  const [input, setInput] = useState({
    Name: '',
    Email: '',
    Password: '',
    Address: '',
    PhoneNumber: '',
    Country: ''
  });
  const [file, setFile] = useState(null);
  const [arr, setArr] = useState(() => {
    const stored = localStorage.getItem("DATA");
    return stored ? JSON.parse(stored) : [];
  });

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selected = e.target.files[0]; 
    if (selected) {
      setFile(selected);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const fileURL = file ? URL.createObjectURL(file) : "";

    const newData = {
      ...input,
      fileURL 
    };

    const updatedArr = [...arr, newData];
    setArr(updatedArr);
    localStorage.setItem("DATA", JSON.stringify(updatedArr));
    navigate('/SinglesImageDataShow', { state: updatedArr });

    setInput({
      Name: '',
      Email: '',
      Password: '',
      Address: '',
      PhoneNumber: '',
      Country: ''
    });
    setFile(null);
  };

  useEffect(() => {
    localStorage.setItem("DATA", JSON.stringify(arr));
  }, [arr]);

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px"
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>User Registration Form</h2>
      <form onSubmit={handleFormSubmit} style={{
        backgroundColor: "#f8f9fa",
        padding: "30px",
        borderRadius: "14px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
        border: "1px solid #ddd",
        marginBottom: "40px"
      }}>
        <div style={{ marginBottom: "15px" }}>
          <input type="text" placeholder='Enter your Name' value={input.Name}
            onChange={(e) => setInput({ ...input, Name: e.target.value })}
            style={inputStyle} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input type="email" placeholder='Enter your Email' value={input.Email}
            onChange={(e) => setInput({ ...input, Email: e.target.value })}
            style={inputStyle} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input type="password" placeholder='Enter Password' value={input.Password}
            onChange={(e) => setInput({ ...input, Password: e.target.value })}
            style={inputStyle} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input type="text" placeholder='Enter Address' value={input.Address}
            onChange={(e) => setInput({ ...input, Address: e.target.value })}
            style={inputStyle} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input type="number" placeholder='Enter Phone Number' value={input.PhoneNumber}
            onChange={(e) => setInput({ ...input, PhoneNumber: e.target.value })}
            style={inputStyle} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <select value={input.Country}
            onChange={(e) => setInput({ ...input, Country: e.target.value })}
            style={{ ...inputStyle, height: "40px" }}>
            <option value="">-- Select Country --</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="AUS">AUS</option>
            <option value="China">China</option>
            <option value="Chicago">Chicago</option>
          </select>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <input type="file" onChange={handleFileChange} style={inputStyle} />
        </div>

        <button type="submit" style={{
          padding: "12px 24px",
          backgroundColor: "#007BFF",
          color: "#fff",
          fontSize: "16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "background-color 0.3s ease"
        }}>
          Submit
        </button>
      </form>
    </div>
  );
}
