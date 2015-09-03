import React from "react";

import TestForm from "../TestForm";

export default class TestView extends React.Component {
  
  static propTypes = {
    testSubmit: React.PropTypes.func
  }
  
  static defaultProps = {
    testSubmit: (data) => {
      console.log(data);
    }
  }
  
  handleSubmit = (data) => {
    this.props.testSubmit(data);
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
