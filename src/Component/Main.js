import React from 'react';

class Main extends React.Component{

  constructor(){
    super()
    this.state={
     todos:[],
     value:"",
     
     
    }
  }
  add_todo=()=>{
    
      if(this.state.value){
        let obj ={title:this.state.value}
        this.setState({
          todos:[...this.state.todos,obj],
          value:"",
          // updateInput
        
        })
      } else{
        alert("plz enter todo")
      }
    
    
    
  }
 delete_todo=(index)=>{
   this.state.todos.splice(index, 1)
   this.setState({
     todos:[...this.state.todos]
   })
 }
 edit_todo=(index)=>{
   let tempArr = [...this.state.todos]
   tempArr[index].edit = true
    // var update_value= prompt("enter Value")
    // this.state.todos[index]=update_value
     this.setState({
      todos:[...tempArr]
    })
}
update=(index)=>{
  let tempArr = [...this.state.todos]
  tempArr[index].edit = false;
  tempArr[index].title = this.state.updateInput;
  this.setState({
    todos:[...tempArr]
  })
}

  render(){
    let {todos,value, updateInput} = this.state;
    return(
  <div>
    
     <input onKeyPress={(e) => e.key ==='Enter' && this.add_todo() } value={value} onChange={(e) =>this.setState({value:e.target.value})} type="text" placeholder="Enter your Todo" />
     <button   onClick={this.add_todo}>Add Todo</button>
     <ol>
       {todos.map((v,i)=>{
        return <li  key={i}>
          {v.edit? <input value={updateInput} onChange={(e) =>this.setState({updateInput:e.target.value})} type="text"/>:v.title}
        <button onClick={()=>this.delete_todo(i)} >DELETE</button>
        {v.edit?
          <button onClick={()=>this.update(i,v.title)}>UPDATE</button>:
          <button onClick={()=>this.edit_todo(i,v.title)}>EDIT</button>
        }
        </li>
       })}
     </ol>
  </div>
    )
     } }
export default Main