import './App.css'
import React from 'react'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      list:[{one:"this is first"}],
      todo:""
    }
  }
  newTodo=(e)=>{
    this.setState({
      todo:e.target.value
    })
    console.log(this.state.todo)
  }
  updateData=()=>{
this.setState({
  list:[
    ...this.state.list,
  {one:this.state.todo}
  ]
})
  }
render(){
  return(
    <div>
      <input value={this.state.todo} onChange={this.newTodo}/>
      <button onClick={this.updateData}>Add</button>
      <table>
    <thead>
      <tr>
        <th>Task1</th>
      </tr>
    </thead>
    <tbody>
      
       {this.state.list.map((item)=>(<tr><td>{item.one}</td></tr>))}
             
    </tbody>
        </table>
    </div>
  )
}
}

export default App;
