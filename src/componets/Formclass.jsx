import React, { Component } from 'react'

export default class Formclass extends Component {
      constructor(){
      super();

      this.state={
        Name:"",
        email:"",
        Password:""
      }
    }


    handlesubmitForm = (e)=>{
      e.preventDefault();
      console.log(this.state.Name);
       console.log(this.state.email);
       console.log(this.state.Password);
      e.target.reset();
    };
  render() {
    return (
      <>
     <h1>Form Class</h1>
         <form onSubmit={this.handlesubmitForm}>
            <input type="text" placeholder='Enter the Name' value={this.state.Name} onChange={(e)=>this.setState({Name:e.target.value})}/>
            <br /><br />
            <input type="Email" placeholder='Enter the Email' value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} />
            <br /><br />
            <input type="Password" placeholder='Enter the Password' value={this.state.Password} onChange={(e)=>this.setState({Password:e.target.value})}/>
            <br /><br />
            <button type='submit'>Submit</button>
         </form>
      </>
    )
  }
}