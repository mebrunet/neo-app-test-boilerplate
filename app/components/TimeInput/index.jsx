import React from "react";

export default class TimeInput extends React.Component {

  static propTypes = {
    onChange: React.PropTypes.func,
    dafultValue: React.PropTypes.string,
    clockType: React.PropTypes.string
  }

  static defaultProps = {
    onChange: function(){},
    dafultValue: "12:00",
    clockType: "24h" // Other option should be "12h" - indicating AM/PM style.
  }

  componentWillMount() {
    this.setState({
      value: this.props.defaultValue
    });
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({value: event.target.value});
    this.props.onChange(event);
  };

  render() {
    return (
      <input
        className= "time-input"
        type="time"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }

}
