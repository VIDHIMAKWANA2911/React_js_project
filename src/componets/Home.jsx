import React from 'react'
import Home1 from './Home1';

export default function Home() {
    let Name = "Alice";
    let Age = 26 ;

  return (
    <>
     <h1>PROPS</h1>
     <Home1 data={Name} data1={Age}/>
    </>
  )
}