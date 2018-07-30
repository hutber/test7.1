import React, {Component} from "react"
import {Button, ButtonGroup} from "react-bootstrap"

import JobContainer from "./JobContainer";

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      buttonCount: [0, 1, 2, 3],
      jobCount: 0
    }
  }

  handleJobCount(jobCount) {
    this.setState({jobCount})
  }

  render() {
    const {jobCount} = this.state;

    return (
      <div>
        <ButtonGroup>
          {this.state.buttonCount.map((item) => <Button onClick={this.handleJobCount.bind(this, item)} key={`button_head_${item}`} className={jobCount === item ? "selected" : null}>{item}</Button>)}
        </ButtonGroup>
        <JobContainer jobCount={this.state.jobCount} />
      </div>
    )
  }
}
