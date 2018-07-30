import React, {Component} from "react"
import PropTypes from "prop-types";

//Custom Comp
import Job from "./Job";


export default class Jobs extends Component {
  BuildJobsToDisplay(jobCount) {
    const jobs = [];
    for (let i = 0; i < jobCount; i++) {
      jobs.push(<Job jobCount={i} key={`jobContainer_${i}`} />);
    }
    return jobs;
  }

  render() {
    const {jobCount} = this.props;

    return (
      <div>
        {this.BuildJobsToDisplay(jobCount)}
      </div>
    )
  }
}

Jobs.propTypes = {
  jobCount: PropTypes.number.isRequired
};
