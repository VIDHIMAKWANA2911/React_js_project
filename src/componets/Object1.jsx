import React from 'react'

export default function Object1({data}) {
  return (
    <>
     <h1>Object Of Array</h1>
      <h2>Student_Data Component</h2>
      <h3>Student Name : {data.student_name}</h3>
      <h3>Standard : {data.std}</h3>
      <h3>Roll No : {data.roll_no}</h3>
      <h3>School : {data.school}</h3>
      <h3>Maths : {data.marks.maths}</h3>
      <h3>Science : {data.marks.science}</h3>
      <h3>English : {data.marks.english}</h3>
      <h3>Sanskrit : {data.marks.sanskrit}</h3>
      <h3>Hindi : {data.marks.hindi}</h3>
      <h3>Gujarati : {data.marks.gujarati}</h3>
    </>
    
  )
}
