import React from "react";
class StateComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "KEC",
      course: "MERN",
    };
  }

  changeState = () => {
    console.log("Kongu");
  };

  render() {
    return (
      <div>
        <h1>This is StateComponent. said name = {this.state.name}</h1>
        <button onMouseOver={this.changeState}>
          click me to change the State
        </button>
      </div>
    );
  }
}
export default StateComponent;
