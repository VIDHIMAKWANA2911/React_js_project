import React, { Component } from 'react'

export default class Classcounter extends Component {
 constructor(){
   super()

   this.state = {
     count: 0,
   };
 }

 handleclick = () => {
   this.setState({count: this.state.count + 1})
 }

 handleclick1 = ()=>{
   this.setState({count: this.state.count - 1})
 }

  render() {
    return (
      <div>
      <h1>Class Counter</h1>   
       <h1>{this.state.count}</h1>
       <button onClick={this.handleclick}>INCREMENT</button>
       <button onClick={this.handleclick1}>DEINCREMENT</button>
      </div>
    )
  }
}