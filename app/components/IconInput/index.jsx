import React from "react";
import _ from "lodash";

import iconMapping from "../../utils/iconMapping";

export default class IconInput extends React.Component {

  static propTypes = {
    defaultValue: React.PropTypes.string,
    onChange: React.PropTypes.func
  }

  static defaultProps = {
    defaultValue: "defaultRoomIcon",
    onChange: () => {}
  }

  componentWillMount() {
    this.setState({
      value: this.props.defaultValue
    });
  }

  handleChange = (event) => {
    var value = event.target.value;
    this.setState({value: value});
    this.props.onChange({target:{value: value}});
  }

  renderIconOptions = () => {
    var iconsKeys = Object.keys(iconMapping);
    return _.map(iconsKeys, (key) => {
      let icon = iconMapping[key];
      return (
      <option key={key} value={key}>{icon.displayName}</option>
      );
    });
  }

  render() {
    var icon = iconMapping[this.state.value];
    return (
      <div className= "icon-input">
        <select
          value={this.state.value}
          onChange={this.handleChange}
        >
          {this.renderIconOptions()}
        </select>
        <br />
        <img
          src={require("../../img/" + icon.fileName)}
          alt="NEO"
          height="100px"
        />
      </div>
    );
  }
}
