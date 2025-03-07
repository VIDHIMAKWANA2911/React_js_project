import React from 'react'
import Array1 from "./Array1"; 


export default function Array() {
    let Array = [1,2,3,4,5,6,7,8,9,0]

    // array of object // 

    const myArray = [
    {
      id: 1,
      name: "Alice",
      city: "New York",
      age: 30,
      occupation: "Teacher",
      isStudent: false
    },
    {
      id: 2,
      name: "Bob",
      city: "Los Angeles",
      age: 25,
      occupation: "Engineer",
      isStudent: false
    },
    {
      id: 3,
      name: "Charlie",
      city: "Chicago",
      age: 20,
      occupation: "Student",
      isStudent: true
    },
    {
      id: 4,
      name: "David",
      city: "Houston",
      age: 40,
      occupation: "Manager",
      isStudent: false
    }
    ]

  return (
    <>
      <Array1 data={Array} data1={myArray}/>
    </>
  )
}
