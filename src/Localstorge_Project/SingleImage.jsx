import React, { useEffect, useState } from 'react';

export default function SingleImage() {
    const [input, setInput] = useState({
        Name: "",
        Email: "",
        Password: "",
        Address: "",
        PhoneNumber: "",
        Country: ""
    });

    const [file, setFile] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    const [arr, setArr] = useState(() => {
        const storedData = localStorage.getItem("Data");
        return storedData ? JSON.parse(storedData) : [];
    });

    const handleFileChange = (e) => {
        const image = e.target.files[0];
        if (image) setFile(image);
    };

    const handleFileSubmit = (e) => {
        e.preventDefault();
        const { Name, Email, Password, Address, PhoneNumber, Country } = input;

        if (Name && Email && Password && Address && PhoneNumber && Country) {
            let FileURL = file ? URL.createObjectURL(file) : null;

            if (editIndex !== null) {
                const updatedArr = [...arr];
                updatedArr[editIndex] = {
                    ...input,
                    file: FileURL || arr[editIndex].file
                };
                setArr(updatedArr);
                setEditIndex(null);
            } else {
                if (!file) {
                    alert("Please select an image!");
                    return;
                }
                FileURL = URL.createObjectURL(file);
                setArr([...arr, { ...input, file: FileURL }]);
            }

            setInput({
                Name: "",
                Email: "",
                Password: "",
                Address: "",
                PhoneNumber: "",
                Country: ""
            });
            setFile(null);
        } else {
            alert("Enter All Valid Data...");
        }
    };

    const handleEdit = (index) => {
        const selected = arr[index];
        setInput({ ...selected });
        setEditIndex(index);
        setFile(null);
    };

    const handleDelete = (index) => {
        const updatedArr = arr.filter((_, i) => i !== index);
        setArr(updatedArr);
    };

    useEffect(() => {
        localStorage.setItem("Data", JSON.stringify(arr));
    }, [arr]);

    const inputStyle = {
        width: "100%",
        padding: "10px 14px",
        fontSize: "15px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        outline: "none",
        backgroundColor: "#fff"
    };

    return (
        <div style={{
            maxWidth: "800px",
            margin: "auto",
            padding: "30px 20px",
            fontFamily: "Segoe UI, sans-serif"
        }}>
            <h1 style={{
                textAlign: "center",
                color: "#333",
                marginBottom: "25px"
            }}>
                {editIndex !== null ? "Update Entry" : "Card View Form"}
            </h1>

            <form onSubmit={handleFileSubmit} style={{
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
                    backgroundColor: editIndex === null ? "#007BFF" : "#ffc107",
                    color: "#fff",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease"
                }}>
                    {editIndex === null ? "Submit" : "Update"}
                </button>
            </form>

            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                marginTop: "40px",
                justifyContent: "center"
            }}>
                {arr.map((ele, index) => (
                    <div key={index} style={{
                        width: "260px",
                        padding: "16px",
                        borderRadius: "14px",
                        background: "linear-gradient(#fff, #f9f9f9)",
                        border: "1px solid #e0e0e0",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        textAlign: "center",
                    }}
                    >
                        <img src={ele.file} alt="User" style={{
                            width: "100%",
                            height: "160px",
                            objectFit: "cover",
                            borderRadius: "10px",
                            marginBottom: "12px",
                            border: "1px solid #ccc"
                        }} />
                        <h3 style={{
                            marginBottom: "6px",
                            color: "#2d3748",
                            fontSize: "18px"
                        }}>{ele.Name}</h3>
                        <p style={{ margin: "4px 0", fontSize: "14px" }}><strong>Email:</strong> {ele.Email}</p>
                        <p style={{ margin: "4px 0", fontSize: "14px" }}><strong>Password:</strong> {ele.Password}</p>
                        <p style={{ margin: "4px 0", fontSize: "14px" }}><strong>Address:</strong> {ele.Address}</p>
                        <p style={{ margin: "4px 0", fontSize: "14px" }}><strong>Phone:</strong> {ele.PhoneNumber}</p>
                        <p style={{ margin: "4px 0", fontSize: "14px" }}><strong>Country:</strong> {ele.Country}</p>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "14px"
                        }}>
                            <button onClick={() => handleEdit(index)} style={{
                                padding: "6px 12px",
                                backgroundColor: "#4CAF50",
                                color: "#fff",
                                border: "none",
                                borderRadius: "6px",
                                cursor: "pointer",
                                fontSize: "14px"
                            }}>Edit</button>
                            <button onClick={() => handleDelete(index)} style={{
                                padding: "6px 12px",
                                backgroundColor: "#F44336",
                                color: "#fff",
                                border: "none",
                                borderRadius: "6px",
                                cursor: "pointer",
                                fontSize: "14px"
                            }}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}