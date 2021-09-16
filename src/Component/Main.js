import React from 'react';
import * as firebase from 'firebase'
import 'firebase/database'

class Huzzu extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: [],
      value: "",


    }
  }
  add_todo = () => {
    
   if(!this.state.value.trim()) {
    alert("plz enter todo")
  }
    else if (this.state.value) {
      let obj = { title: this.state.value }
      console.log(firebase, "firebase")
      // firebase.database().ref('/').child("todos").push(obj)
  //     const db = getDatabase();
  // set(ref(db,'todo'),
      this.setState({
        todos: [...this.state.todos, obj],
        value: "",

      })
    }


  }
  delete_todo = (index) => {
    this.state.todos.splice(index, 1)
    this.setState({
      todos: [...this.state.todos]
    })
  }
  edit_todo = (index) => {
    let tempArr = [...this.state.todos]
    tempArr[index].edit = true
    // var update_value= prompt("enter Value")
    // this.state.todos[index]=update_value
    this.setState({
      todos: [...tempArr]
    })
  }
  handleChange=(e,index)=>{
    this.state.todos[index].title= e.target.value ;
    this.setState({
        todos: this.state.todos
    })
  }
  update = (index) => {
    if (this.state.todos && this.state.todos[index].title) {
      let tempArr = [...this.state.todos]
      tempArr[index].edit = false;
      // tempArr[index].title = this.state.updateInput;
      this.setState({
        todos: [...tempArr]
      })
    } else
      alert("Please enter new value")
    
  }

  render() {
    let { todos, value } = this.state;
    return (
      <div style={{ minHeight: '79.8vh',}}>

        <input  style={{textAlign:"center",marginLeft:"13%",flexDirection:'column',display: 'flex' ,width:'75%'}} onKeyPress={(e) => e.key === 'Enter' && this.add_todo()} value={value} onChange={(e) => this.setState({ value: e.target.value })} type="text" placeholder="Enter your Todo" />
        <button style={{textAlign:"center",marginLeft:"13%",flexDirection:'column',paddingLeft:'33%',display: 'flex' ,width:'75%'}} onClick={this.add_todo}>Add Todo</button>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '100%' }}>
          <table style={{ width: '100%' }}>
            {todos.map((v, i) => {
              return <tr> 
                <td>{i+1}</td>
                <td key={i}>
                {v.edit ? <input style={{fontSize:'13px'}}  value={v.title} onChange={(e) => this.handleChange(e,i)} type="text" /> : v.title}</td>
                <td><button onClick={() => this.delete_todo(i)} >DELETE</button></td>
                {v.edit ?
                  <td><button onClick={() => this.update(i)}>UPDATE</button></td> :
                  <td><button onClick={() => this.edit_todo(i)}>EDIT</button></td>
                }
              </tr>
            })}
          </table>
        </div>
      </div>
    )
  }
}
export default Huzzu