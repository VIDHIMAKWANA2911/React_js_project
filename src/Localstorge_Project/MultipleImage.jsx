import React, { useEffect, useState } from 'react';

export default function MultipleImage() {
    const [input, setInput] = useState({
        Name: "",
        Email: "",
        Password: "",
        Address: "",
        PhoneNumber: "",
        Country: ""
    });

    const [files, setFiles] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const [arr, setArr] = useState(() => {
        const storedData = localStorage.getItem("Data");
        return storedData ? JSON.parse(storedData) : [];
    });

    const inputStyle = {
        width: "100%",
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "15px"
    };

    const handleFileChange = (e) => {
        setFiles(Array.from(e.target.files));
    };

    const handleFileSubmit = (e) => {
        e.preventDefault();
        const { Name, Email, Password, Address, PhoneNumber, Country } = input;

        if (Name && Email && Password && Address && PhoneNumber && Country) {
            const imageUrls = files.length > 0 ? files.map(file => URL.createObjectURL(file)) : null;

            if (editIndex !== null) {
                const updatedArr = [...arr];
                updatedArr[editIndex] = {
                    ...input,
                    files: imageUrls || arr[editIndex].files
                };
                setArr(updatedArr);
                setEditIndex(null);
            } else {
                if (!imageUrls) {
                    alert("Please select at least one image!");
                    return;
                }
                setArr([...arr, { ...input, files: imageUrls }]);
            }

            setInput({
                Name: "",
                Email: "",
                Password: "",
                Address: "",
                PhoneNumber: "",
                Country: ""
            });
            setFiles([]);
        } else {
            alert("Enter All Valid Data...");
        }
    };

    const handleEdit = (index) => {
        const selected = arr[index];
        setInput({ ...selected });
        setEditIndex(index);
        setFiles([]);
    };

    const handleDelete = (index) => {
        const updatedArr = arr.filter((_, i) => i !== index);
        setArr(updatedArr);
    };

    useEffect(() => {
        localStorage.setItem("Data", JSON.stringify(arr));
    }, [arr]);

    return (
        <div style={{ maxWidth: "800px", margin: "auto", padding: "30px 20px", fontFamily: "Segoe UI, sans-serif" }}>
            <style>
                {`
                    .image-scroll {
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                    }
                    .image-scroll::-webkit-scrollbar {
                        display: none;
                    }
                `}
            </style>

            <h1 style={{ textAlign: "center", color: "#333", marginBottom: "25px" }}>
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
                    <input type="file" multiple onChange={handleFileChange} style={inputStyle} />
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

            {/* Cards Section */}
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                marginTop: "40px",
                justifyContent: "center"
            }}>
                {arr.map((ele, index) => (
                    <div key={index} style={{
                        width: "270px",
                        padding: "16px",
                        borderRadius: "12px",
                        backgroundColor: "#ffffff",
                        textAlign: "center",
                        boxShadow: "0 6px 15px rgba(0,0,0,0.08)"
                    }}>
                        <div className="image-scroll" style={{
                            display: "flex",
                            gap: "10px",
                            overflowX: "auto",
                            whiteSpace: "nowrap",
                            minWidth: "100%",
                            marginBottom: "15px",
                            paddingBottom: "8px",
                            borderBottom: "1px solid #eee"
                        }}>
                            {ele.files?.map((url, i) => (
                                <img
                                    key={i}
                                    src={url}
                                    alt="User"
                                    onClick={() => setSelectedImage(url)}
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        objectFit: "cover",
                                        borderRadius: "8px",
                                        cursor: "pointer"
                                    }}
                                />
                            ))}
                        </div>
                        <h3 style={{ marginBottom: "5px" }}>{ele.Name}</h3>
                        <p><strong>Email:</strong> {ele.Email}</p>
                        <p><strong>Password:</strong> {ele.Password}</p>
                        <p><strong>Address:</strong> {ele.Address}</p>
                        <p><strong>Phone:</strong> {ele.PhoneNumber}</p>
                        <p><strong>Country:</strong> {ele.Country}</p>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "12px"
                        }}>
                            <button onClick={() => handleEdit(index)} style={{
                                padding: "6px 12px",
                                backgroundColor: "#28a745",
                                color: "#fff",
                                border: "none",
                                borderRadius: "6px",
                                cursor: "pointer"
                            }}>Edit</button>
                            <button onClick={() => handleDelete(index)} style={{
                                padding: "6px 12px",
                                backgroundColor: "#dc3545",
                                color: "#fff",
                                border: "none",
                                borderRadius: "6px",
                                cursor: "pointer"
                            }}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    onClick={() => setSelectedImage(null)}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000
                    }}
                >
                    <img
                        src={selectedImage}
                        alt="Big Preview"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: "90%",
                            maxHeight: "90%",
                            borderRadius: "12px",
                            boxShadow: "0 0 20px rgba(255,255,255,0.6)"
                        }}
                    />
                </div>
            )}
        </div>
    );
}
