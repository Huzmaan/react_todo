import React from 'react';

class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: [],
      value: "",


    }
  }
  add_todo = () => {

    if (this.state.value) {
      let obj = { title: this.state.value }
      this.setState({
        todos: [...this.state.todos, obj],
        value: "",
        // updateInput

      })
    } else {
      alert("plz enter todo")
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
  update = (index) => {
    if (this.state.updateInput) {
      let tempArr = [...this.state.todos]
      tempArr[index].edit = false;
      tempArr[index].title = this.state.updateInput;
      this.setState({
        todos: [...tempArr]
      })
    } else (
      alert("Please enter new value")
    )
  }

  render() {
    let { todos, value, updateInput } = this.state;
    return (
      <div style={{ minHeight: '87.8vh',flexDirection:'column',paddingLeft:'28%',display: 'flex' ,width:'75%',}}>

        <input  style={{textAlign: 'center'}} onKeyPress={(e) => e.key === 'Enter' && this.add_todo()} value={value} onChange={(e) => this.setState({ value: e.target.value })} type="text" placeholder="Enter your Todo" />
        <button onClick={this.add_todo}>Add Todo</button>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '100%' }}>
          <table style={{ width: '100%' }}>
            {todos.map((v, i) => {
              return <tr> 
                <td>{i+1}</td>
                <td key={i}>
                {v.edit ? <input style={{fontSize: '1%'}} value={updateInput} onChange={(e) => this.setState({ updateInput: e.target.value })} type="text" /> : v.title}</td>
                <td><button onClick={() => this.delete_todo(i)} >DELETE</button></td>
                {v.edit ?
                  <td><button onClick={() => this.update(i, v.title)}>UPDATE</button></td> :
                  <td><button onClick={() => this.edit_todo(i, v.title)}>EDIT</button></td>
                }
              </tr>
            })}
          </table>
        </div>
      </div>
    )
  }
}
export default Main