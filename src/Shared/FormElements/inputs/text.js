import React, {Component} from "react"
import PropTypes from "prop-types";

export default class InputText extends Component {
  render() {
    const {type, name, header} = this.props;
    return (
      <div className="form_field_wrapper">
        <label htmlFor={name}>{header}</label>
        <input type={type} name={name} id={name} {...this.props} />
      </div>
    )
  }
}

InputText.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired
};

