import React, { useEffect, useState } from 'react';

export default function ObjArrayForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [arr, setArr] = useState(() => {
        let storedData = localStorage.getItem("Data");
        return storedData ? JSON.parse(storedData) : [];
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, password });

        setArr([...arr, { name, email, password }]);

        setName("");
        setEmail("");
        setPassword("");
    };

    useEffect(() => {
        localStorage.setItem("Data", JSON.stringify(arr));
    }, [arr]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="ENTER THE NAME" value={name} onChange={(e) => setName(e.target.value)} />
                <br /><br />
                <input type="email" placeholder="ENTER THE EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br /><br />
                <input type="password" placeholder="ENTER THE PASSWORD" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br /><br />
                <button type="submit">Submit</button>
            </form>
            <br /><br />
            <table border={2} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((ele, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
