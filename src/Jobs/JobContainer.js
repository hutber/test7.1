import React, {Component} from "react"
import PropTypes from "prop-types";
import InputText from "../Shared/FormElements/inputs/text";

export default class Jobs extends Component {
  BuildJobsToDisplay(jobCount) {
    const jobs = [];
    for (let i = 0; i < jobCount; i++) {
      jobs.push(<InputText inputtype="text" key={`input_${jobCount}`} inputname="company_name" labeltitle="Company Name" placeholder="Enter company name" />);
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
