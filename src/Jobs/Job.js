import React, {Component} from "react"

export default class Job extends Component {
  render() {
    const {inputtype, inputname, labeltitle} = this.props;
    return (
      <div>
        <label htmlFor={inputname}>{labeltitle}</label>
        <input type={inputtype} name={inputname} id={inputname} {...this.props} />
      </div>
    )
  }
}
