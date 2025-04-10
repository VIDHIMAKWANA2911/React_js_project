import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function NavData() {
  const location = useLocation();
  const navigate = useNavigate();

  const initialData = location.state || [];
  const [data, setData] = useState(initialData);
  const [editindex, setEditindex] = useState(null);
  const [editname, setEditname] = useState("");
  const [editemail, setEditemail] = useState("");
  const [editpassword, setEditpassword] = useState("");

  useEffect(() => {
    localStorage.setItem("DATA", JSON.stringify(data));
  }, [data]);

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    navigate("/NavData", { state: updatedData });
  }

  const handleEdit = (index) => {
    setEditindex(index);
    setEditname(data[index].name);
    setEditemail(data[index].email);
    setEditpassword(data[index].password);
  }

  const handleSavechanges = (e) => {
    e.preventDefault();
    const updatedData = data.map((ele, index) =>
      index === editindex
        ? { name: editname, email: editemail, password: editpassword }
        : ele
    );

    setData(updatedData);
    navigate("/NavData", { state: updatedData });
    setEditindex(null);
    setEditname("");
    setEditemail("");
    setEditpassword("");
  }

  return (
    <div>
      <h1>Table Data....!!!</h1>
      {data.length > 0 ? (
        <>
          <table border={3} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr style={{fontSize:"20px"}}>
                <th>Sr NO.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((ele, index) => (
                <tr key={index} style={{fontSize:"20px"}}>
                  <td>{index + 1}</td>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.password}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        ""
      )}

      {editindex !== null ? (
        <>
          <form onSubmit={handleSavechanges}>
            <input
              type="text"
              placeholder='ENTER THE EDITNAME'
              value={editname}
              onChange={(e) => setEditname(e.target.value)}
            />
            <br /><br />
            <input
              type="email"
              placeholder='ENTER THE EDITEMAIL'
              value={editemail}
              onChange={(e) => setEditemail(e.target.value)}
            />
            <br /><br />
            <input
              type="password"
              placeholder='ENTER THE EDITPASSWORD'
              value={editpassword}
              onChange={(e) => setEditpassword(e.target.value)}
            />
            <br /><br />
            <button type='submit'>Submit</button>
          </form>
        </>
      ) : (
        ""
      )}
      <h2><Link to="/Form">Form</Link></h2>
    </div>
  );
}
