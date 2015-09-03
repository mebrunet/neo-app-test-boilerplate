import React from "react";
import Button from "react-bootstrap/lib/Button";

import TimeInput from "../TimeInput";
import IconInput from "../IconInput";

export default class TestForm extends React.Component {

  static propTypes = {
    onSubmit: React.PropTypes.func,
    buttonLabel: React.PropTypes.string,
    defaultTime: React.PropTypes.string,
    defaultIcon: React.PropTypes.string
  }

  static defaultProps = {
    onSubmit: function(){},
    buttonLabel: "Submit",
    defaultTime: "12:34",
    defaultIcon: "kitchen"
  }

  componentWillMount() {
    this.setState({
      time: this.props.defaultTime,
      icon: this.props.defaultIcon
    });
  }

  handleTimeChange = (event) => {
    this.setState({time: event.target.value});
  }

  handleIconChange = (event) => {
    this.setState({icon: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      time: this.state.time,
      icon: this.state.icon
    });
  }

  render() {
    return (
      <form className="test-form" onSubmit={this.handleSubmit}>
        <TimeInput
          onChange= {this.handleTimeChange}
          defaultValue={this.props.defaultTime}
        />
        <br />
        <IconInput
          onChange= {this.handleIconChange}
          defaultValue={this.props.defaultIcon}
        />
        <br />
        <Button bsStyle="primary" type="submit">{this.props.buttonLabel}</Button>
      </form>
    );
  }

}
