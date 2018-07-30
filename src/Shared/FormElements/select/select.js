import React, {Component} from "react"
import PropTypes from "prop-types";

export default class SelectBox extends Component {
  render() {
    const {options, header, name} = this.props;
    return (
      <div>
        <label htmlFor={name}>{header}</label>
        <select type="select" name={name} id={name}>
          {Object.keys(options).map((value) => {const optionName = options[value]; return <option key={`option_${value}`} value={value}>{optionName}</option>})}
        </select>
      </div>
    )
  }
}

SelectBox.propTypes = {
  options: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired
};
