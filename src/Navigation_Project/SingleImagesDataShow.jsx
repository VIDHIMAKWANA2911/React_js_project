import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SinglesImageDataShow() {
  const location = useLocation();
  const navigate = useNavigate();

  const initialData = location.state || JSON.parse(localStorage.getItem("DATA")) || [];
  const [data, setData] = useState(initialData);

  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editCountry, setEditCountry] = useState("");
  const [editFile, setEditFile] = useState(null);

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    navigate("/SinglesImageDataShow", { state: updatedData });
  };

  const handleEdit = (index) => {
    const item = data[index];
    setEditIndex(index);
    setEditName(item.Name);
    setEditEmail(item.Email);
    setEditPassword(item.Password);
    setEditAddress(item.Address);
    setEditPhone(item.PhoneNumber);
    setEditCountry(item.Country);
  };

  const handleEditFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setEditFile(selectedFile);
    }
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const fileURL = editFile ? URL.createObjectURL(editFile) : data[editIndex].fileURL;

    const updatedData = data.map((ele, i) =>
      i === editIndex
        ? {
            ...ele,
            Name: editName,
            Email: editEmail,
            Password: editPassword,
            Address: editAddress,
            PhoneNumber: editPhone,
            Country: editCountry,
            fileURL: fileURL,
          }
        : ele
    );

    setData(updatedData);
    localStorage.setItem("DATA", JSON.stringify(updatedData));
    navigate("/SinglesImageDataShow", { state: updatedData });

    setEditIndex(null);
    setEditName("");
    setEditEmail("");
    setEditPassword("");
    setEditAddress("");
    setEditPhone("");
    setEditCountry("");
    setEditFile(null);
  };

  useEffect(() => {
    localStorage.setItem("DATA", JSON.stringify(data));
  }, [data]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Entries</h2>
      {data.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {data.map((ele, index) => (
            <div
              key={index}
              style={{
                border: "2px solid #ccc",
                padding: "15px",
                borderRadius: "10px",
                width: "300px",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <h3>Name: {ele.Name}</h3>
              <p><strong>Email:</strong> {ele.Email}</p>
              <p><strong>Password:</strong> {ele.Password}</p>
              <p><strong>Address:</strong> {ele.Address}</p>
              <p><strong>Phone:</strong> {ele.PhoneNumber}</p>
              <p><strong>Country:</strong> {ele.Country}</p>
              {ele.fileURL && (
                <img
                  src={ele.fileURL}
                  alt=""
                  width="80px"
                  height="80px"
                  style={{ objectFit: "cover", borderRadius: "5px" }}
                />
              )}
              <br />
              <button
                onClick={() => handleEdit(index)}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                style={{
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No Data Found</p>
      )}

      <br /><br />

      {editIndex !== null && (
        <form
          onSubmit={handleEditFormSubmit}
          style={{
            border: "2px solid gray",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "400px",
            margin: "auto",
          }}
        >
          <h3>Edit Form</h3>
          <input
            type="text"
            placeholder="Edit Name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          /><br /><br />
          <input
            type="email"
            placeholder="Edit Email"
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
          /><br /><br />
          <input
            type="password"
            placeholder="Edit Password"
            value={editPassword}
            onChange={(e) => setEditPassword(e.target.value)}
          /><br /><br />
          <input
            type="text"
            placeholder="Edit Address"
            value={editAddress}
            onChange={(e) => setEditAddress(e.target.value)}
          /><br /><br />
          <input
            type="number"
            placeholder="Edit Phone"
            value={editPhone}
            onChange={(e) => setEditPhone(e.target.value)}
          /><br /><br />
          <select
            value={editCountry}
            onChange={(e) => setEditCountry(e.target.value)}
          >
            <option value="">-- Select Country --</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="AUS">AUS</option>
            <option value="China">China</option>
            <option value="Chicago">Chicago</option>
          </select><br /><br />
          <input type="file" onChange={handleEditFileChange} /><br /><br />
          <button
            type="submit"
            style={{
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Update
          </button>
        </form>
      )}

      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        <Link to="/">Back to Form</Link>
      </h2>
    </div>
  );
}