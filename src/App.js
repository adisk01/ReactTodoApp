import React from "react";
import List from "./List";
import Input from "./Input";
import "./App.css";
class App extends React.Component {

  state = {
    tasks: [],
    currinput: "",
  };
  handlecurrentinput=(value) => {
    this.setState({currinput:value});
  };
  handletasks=()=>{
    this.setState({
      tasks:[...this.state.tasks,this.state.currinput],
      currinput:"",
    })
  }
  deleteTask=(singletask) =>{
    let currtaskarr=this.state.tasks
    let filteredArr= currtaskarr.filter((element)=> {
      return element!=singletask;
    });
    this.setState({tasks:filteredArr},)
  }
  render = () => {
    return (
      <div>
      <Input handlecurrentinput={this.handlecurrentinput}
             handletasks={this.handletasks}
             currinput={this.state.currinput}
      />
      <List tasks={this.state.tasks}
            deleteTask={this.deleteTask}
      />
      </div>
    );
  };
}
export default App;