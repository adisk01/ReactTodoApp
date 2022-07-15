import React from "react";
class App extends React.Component {

  state = {
    tasks : ["study dsa" , "study CP" , "Do codeforces" , "Do leetcode"],
    currinput : "",
  };
  render = () => {
    return(
      <div>
        <input type="text" onChange={(e) => {
          this.setState({currinput : e.currentTarget.value });
        }}
        value={this.state.currinput}
        onKeyDown = {(e)=> {
          if(e.key=="Enter")
          {
            this.setState({
              tasks : [...this.state.tasks , this.state.currinput],
              currinput : "",
            });
          }
        }}
        />
        
        <ul>
          {
            this.state.tasks.map((el) => {
              return <li>{el}</li>;
            })
          }
        </ul>
      </div>
    );
  };
}
export default App;