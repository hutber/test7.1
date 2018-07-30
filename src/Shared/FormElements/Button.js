import React, {Component} from "react"
import {Button} from "react-bootstrap"

export default class ButtonComp extends Component {
  render() {
    const {clickEvent, className} = this.props;
    return (
      <div>
        <Button onClick={clickEvent} className={className}>0</Button>
      </div>
    )
  }
}
