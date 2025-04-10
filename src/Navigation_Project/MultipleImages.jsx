import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MultipleImage() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [phone, setphone] = useState('');
  const [address, setaddress] = useState('');
  const [country, setcountry] = useState('');
  const [pincode, setpincode] = useState('');
  const [file, setfile] = useState(null);

  const [users, setusers] = useState(() => {
    const storedData = localStorage.getItem("DATA");
    return storedData ? JSON.parse(storedData) : [];
  });

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const fileURLs = file?.map((file) => URL.createObjectURL(file)) || [];
    const updatedUsers = [
      ...users,
      { name, email, password, phone, address, country, pincode, fileURLs }
    ];

    setusers(updatedUsers);
    localStorage.setItem('DATA', JSON.stringify(updatedUsers));
    navigate('/MultiplesImageDataShow', { state: updatedUsers });

    setname('');
    setemail('');
    setpassword('');
    setphone('');
    setaddress('');
    setcountry('');
    setpincode('');
    setfile(null);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      setfile(selectedFiles);
    }
  };

  useEffect(() => {
    localStorage.setItem('DATA', JSON.stringify(users));
  }, [users]);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>User Form...!!!</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          style={inputStyle}
        />
        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          style={inputStyle}
        />
        <textarea
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          style={{ ...inputStyle, height: '80px' }}
        />
        <input
          type="text"
          placeholder="Enter Pincode"
          value={pincode}
          onChange={(e) => setpincode(e.target.value)}
          style={inputStyle}
        />
        <select
          value={country}
          onChange={(e) => setcountry(e.target.value)}
          style={inputStyle}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}

const containerStyle = {
  maxWidth: '500px',
  margin: '40px auto',
  padding: '30px',
  backgroundColor: '#f5f5f5',
  borderRadius: '12px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  fontFamily: 'Arial, sans-serif'
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  color: '#333'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '16px'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  fontSize: '16px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  marginTop: '10px'
};
