import React from 'react';

class Main extends React.Component{

  constructor(){
    super()
    this.state={
     todos:[{}],
     value:""
    }
  }
  add_todo=(e)=>{
    this.setState({
      todos:[...this.state.todos,this.state.value],
      value:"" 
    
    })
  }
 delete_todo=(index)=>{
   this.state.todos.splice(index, 1)
   this.setState({
     todos:[...this.state.todos]
   })
 }
 edit_todo=(index,val)=>{
     this.state.todos[index].edit=true;
     this.setState({
      todos:[...this.state.todos]
    })
}

  render(){
    let {todos,value} = this.state;
    return(
  <div>
    
     <input  value={value} onChange={(e) =>this.setState({value:e.target.value})} type="text" placeholder="Enter your Todo" />
     <button onClick={this.add_todo}>Add Todo</button>
     <ol>
       {todos.map((v,i)=>{
        return <li  key={i}>{v.edit? <input type="text" /> :v.title}
        <button onClick={()=>this.delete_todo(i)} >DELETE</button>
        <button onClick={()=>this.edit_todo(i,v.title)}>EDIT</button>
        </li>
       })}
     </ol>
  </div>
    )
     } }
export default Main