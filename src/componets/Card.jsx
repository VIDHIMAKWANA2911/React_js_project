import React from 'react'

function Card() {

  const students = [
    { id: 1, name: "Alice Smith", standard: 6, rollno: 101, school: "Sunshine Elementary" },
    { id: 2, name: "Bob Johnson", standard: 7, rollno: 112, school: "Hilltop Middle School" },
    { id: 3, name: "Charlie Brown", standard: 8, rollno: 123, school: "Riverside High" },
    { id: 4, name: "Diana Miller", standard: 6, rollno: 104, school: "Sunshine Elementary" },
    { id: 5, name: "Ethan Davis", standard: 7, rollno: 115, school: "Hilltop Middle School" },
  ];

  return (
   <>
      <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Student List</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {students.map((student) => (
          <div key={student.id} style={{ 
            border: "1px solid #ddd", 
            padding: "10px", 
            margin: "10px", 
            borderRadius: "5px", 
            width: "250px",
            textAlign: "center",
            backgroundColor: "#f9f9f9"
          }}>
            <h2 style={{ fontSize: "18px", margin: "10px 0" }}>{student.name}</h2>
            <h4>Standard:{student.standard}</h4>
            <h4>RollNo:{student.rollno}</h4>
            <h4>School:{student.school}</h4>
          </div>
        ))}
      </div>
    </div>
   </>
  )
}
export default Card;