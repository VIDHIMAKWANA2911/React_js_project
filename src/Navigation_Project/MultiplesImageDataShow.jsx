import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function MultiplesImageDataShow() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialData = location.state || JSON.parse(localStorage.getItem("DATA")) || [];
  const [data, setdata] = useState(initialData);

  const [editIndex, seteditIndex] = useState(null);
  const [editname, seteditname] = useState("");
  const [editemail, seteditemail] = useState('');
  const [editpassword, seteditpassword] = useState("");
  const [editphone, seteditphone] = useState('');
  const [editaddress, seteditaddress] = useState('');
  const [editcountry, seteditcountry] = useState('');
  const [editpincode, seteditpincode] = useState('');
  const [editfile, seteditfile] = useState(null);

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setdata(updatedData);
    navigate("/MultiplesImageDataShow", { state: updatedData });
  };

  const handleEdit = (index) => {
    const user = data[index];
    seteditIndex(index);
    seteditname(user.name);
    seteditemail(user.email);
    seteditpassword(user.password);
    seteditphone(user.phone);
    seteditaddress(user.address);
    seteditcountry(user.country);
    seteditpincode(user.pincode || '');
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      seteditfile(selectedFiles);
    }
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();

    const fileURLs = editfile ? editfile.map((file) => URL.createObjectURL(file)) : data[editIndex].fileURLs;

    const updatedData = data.map((ele, i) =>
      i === editIndex
        ? {
            name: editname,
            email: editemail,
            password: editpassword,
            phone: editphone,
            address: editaddress,
            country: editcountry,
            pincode: editpincode,
            fileURLs: fileURLs,
          }
        : ele
    );

    setdata(updatedData);
    localStorage.setItem("DATA", JSON.stringify(updatedData));
    navigate("/MultiplesImageDataShow", { state: updatedData });

    seteditIndex(null);
    seteditname("");
    seteditemail("");
    seteditpassword("");
    seteditphone("");
    seteditaddress("");
    seteditcountry("");
    seteditpincode("");
    seteditfile(null);
  };

  useEffect(() => {
    localStorage.setItem("DATA", JSON.stringify(data));
  }, [data]);

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>All User Data</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {data.length > 0 ? (
          data.map((ele, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "15px",
                padding: "20px",
                width: "300px",
                background: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
              }}
            >
              <h3 style={{ color: "#4CAF50", marginBottom: "10px" }}>{ele.name}</h3>
              <p><strong>Email:</strong> {ele.email}</p>
              <p><strong>Password:</strong> {ele.password}</p>
              <p><strong>Phone:</strong> {ele.phone}</p>
              <p><strong>Address:</strong> {ele.address}</p>
              <p><strong>Pincode:</strong> {ele.pincode}</p>
              <p><strong>Country:</strong> {ele.country}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
                {ele.fileURLs.map((file, i) => (
                  <img
                    key={i}
                    src={file}
                    alt="Uploaded"
                    style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "5px" }}
                  />
                ))}
              </div>

              <div style={{ marginTop: "15px", display: "flex", justifyContent: "space-between" }}>
                <button onClick={() => handleEdit(index)} style={{ padding: "5px 10px" }}>Edit</button>
                <button onClick={() => handleDelete(index)} style={{ padding: "5px 10px", background: "#f44336", color: "#fff" }}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No Data Found</p>
        )}
      </div>

      {editIndex !== null && (
        <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px", background: "#f9f9f9", borderRadius: "12px" }}>
          <h3 style={{ textAlign: "center" }}>Edit Use...!!!r</h3>
          <form onSubmit={handleSubmitEdit}>
            <input type="text" placeholder="Edit Name" value={editname} onChange={(e) => seteditname(e.target.value)} style={inputStyle} />
            <input type="email" placeholder="Edit Email" value={editemail} onChange={(e) => seteditemail(e.target.value)} style={inputStyle} />
            <input type="password" placeholder="Edit Password" value={editpassword} onChange={(e) => seteditpassword(e.target.value)} style={inputStyle} />
            <input type="tel" placeholder="Edit Phone" value={editphone} onChange={(e) => seteditphone(e.target.value)} style={inputStyle} />
            <input type="text" placeholder="Edit Address" value={editaddress} onChange={(e) => seteditaddress(e.target.value)} style={inputStyle} />
            <input type="text" placeholder="Edit Pincode" value={editpincode} onChange={(e) => seteditpincode(e.target.value)} style={inputStyle} />
            <input type="text" placeholder="Edit Country" value={editcountry} onChange={(e) => seteditcountry(e.target.value)} style={inputStyle} />
            <input type="file" multiple onChange={handleFileChange} style={inputStyle} />
            <button type="submit" style={submitBtn}>Update</button>
          </form>
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link to="/">Go to Form</Link>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px"
};

const submitBtn = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#4CAF50",
  color: "#fff",
  fontSize: "16px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "10px"
};
