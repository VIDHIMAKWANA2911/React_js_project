import React from 'react'
import Object1 from './Object1'

export default function Object() {
    let student_data = {
    student_name: "Student_1",
    std: 10,
    roll_no: 22,
    school: "Bright Junior Science College",
    marks: {
      maths: 90,
      science: 80,
      english: 50,
      hindi: 100,
      gujarati: 100,
      social_science: 70,
      sanskrit: 100
    }
  };

  return (
    <>
    <h1>Object</h1>
    <Object1 data={student_data}/>
    </>
  )
}
