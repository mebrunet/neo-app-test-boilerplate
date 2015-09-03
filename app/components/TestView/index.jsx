import React from "react";

import TestForm from "../TestForm";

export default class TestView extends React.Component {

  handleSubmit = (data) => {
    console.log(data);
  }

  render() {
    return (
      <div>
        <h1>Test View</h1>
        <TestForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }

}
