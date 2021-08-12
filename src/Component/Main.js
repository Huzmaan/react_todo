import React from 'react';





class Main extends React.Component{

  constructor(){
    super()
    this.state={
     todos:[ "Ghous","Ahmed","Umair"],
     value:""
    }
  }
  add_todo=()=>{
    this.state.todos.push(this.state.value)
  }
  render(){
    let {todos,value} = this.state;
    return(
  <div>
     <input  value={value} onChange={(e) =>this.setState({value:e.target.value})} type="text" placeholder="Enter your Todo" />
     <button onClick={this.add_todo}>Add Todo</button>
     <ul>
       {todos.map((v,i)=>{
        return <li  key={i}>{v}</li>
       })}
     </ul>
  </div>
    )
     } }
export default Main