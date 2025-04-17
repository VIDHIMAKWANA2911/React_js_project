import React, { useState } from 'react'

export default function Seraching() {
 const employees = [
    {
      name: "John Doe",
      age: 30,
      city: "New York",
      salary: 50000,
      post: "Software Engineer"
    },
    {
      name: "Jane Smith",
      age: 28,
      city: "Los Angeles",
      salary: 55000,
      post: "Data Scientist"
    },
    {
      name: "Alice Johnson",
      age: 35,
      city: "Chicago",
      salary: 60000,
      post: "Product Manager"
    },
    {
      name: "Bob Brown",
      age: 40,
      city: "Houston",
      salary: 65000,
      post: "HR Manager"
    },
    {
      name: "Charlie Davis",
      age: 25,
      city: "San Francisco",
      salary: 70000,
      post: "UX Designer"
    },
    {
      name: "David Wilson",
      age: 38,
      city: "Boston",
      salary: 72000,
      post: "Backend Developer"
    },
    {
      name: "Eve White",
      age: 29,
      city: "Seattle",
      salary: 63000,
      post: "Marketing Specialist"
    },
    {
      name: "Frank Clark",
      age: 32,
      city: "Austin",
      salary: 68000,
      post: "Product Owner"
    },
    {
      name: "Grace Lee",
      age: 27,
      city: "Miami",
      salary: 54000,
      post: "Web Developer"
    },
    {
      name: "Henry Walker",
      age: 45,
      city: "Dallas",
      salary: 75000,
      post: "Project Manager"
    }
  ];

  const [search , setsearch ] = useState("");
  const [sort , setsort] = useState({
    key:"name",
    direction:"asc"
  });
  const filteredData = employees.filter((e)=> 
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.age.toString().includes(search.toLowerCase()) ||
    e.city.toLowerCase().includes(search.toLowerCase())||
    e.post.toLowerCase().includes(search.toLowerCase()) ||
    e.salary.toString().includes(search.toLowerCase())
)

const handleSort = (key) =>{
    let direcation = "asc";
    if(sort.key === key && sort.direction === "asc"){
      direcation = "desc";
    }
    setsort({key,direcation});
}

const sortedData = filteredData.sort((a,b)=>{
  if(a[sort.key] < b[sort.key]){
    return sort.direction === "asc" ? 1:-1;
  }

  if(a[sort.key] > b[sort.key]){
    return sort.direction === "asc" ? -1:1;
  }

  return 0;

})
  return (
    <div>
     <input type="text" placeholder='Sreach By Name Or Age Or City Or Post Or Salary....' value={search} onChange={(e) => setsearch(e.target.value)}/>
     <br /><br />
     <table border={3} cellPadding={10} cellSpacing={0} width="100%">
      <thead>
          <tr>
            <th>Sr No</th>
            <th><button onClick={() => handleSort("name")}>Name</button></th>
            <th><button onClick={() => handleSort("age")}>Age</button></th>
            <th><button onClick={() => handleSort("city")}>City</button></th>
            <th><button onClick={() => handleSort("post")}>post</button></th>
            <th><button onClick={() => handleSort("Salary")}>Salary</button></th>
          </tr>
      </thead>
      <tbody>
        {sortedData.map((ele,index) => (
          <tr key={index}>
            <td>{index +1}</td>
            <td>{ele.name}</td>
            <td>{ele.age}</td>
            <td>{ele.city}</td>
            <td>{ele.post}</td>
            <td>{ele.salary}</td>
          </tr>
        ))}
      </tbody>
     </table>
    </div>
  )
}
