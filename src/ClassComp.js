import React from "react";
class ClassComp extends React.Component {
    state= {
        somenumber : 0 ,
    }
    render = () => {
        return(
            <div>
                <button onClick={ () =>
                {
                    this.setState({ somenumber:this.state.somenumber+1 })
                }  }
                >
                    increment
                </button>
                <button onClick={ ()=>
                {
                    this.setState({somenumber : this.state.somenumber-1 })
                } }
                >  decrement
                </button>
                <h1>{this.state.somenumber}</h1>
            </div>
        );
    };
}
export default ClassComp;