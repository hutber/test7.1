import React, {Component} from "react"
import PropTypes from "prop-types";

//Custom Comps
import InputText from "../Shared/FormElements/inputs/text";
import SelectBox from "../Shared/FormElements/select/select";


export default class Job extends Component {
  render() {
    const {jobCount} = this.props,
      header = jobCount+1,
      occupationOptions = {
        programmer: "Programmer Developer"
      };

    return (
      <div>
        <h2>{header}</h2>
        <SelectBox options={occupationOptions} name="occupation" header="Whats is your occupation?" />
        <InputText type="text" name={`company_name_${jobCount}`} header="Company Name" placeholder="Enter company name" />
        <InputText type="number" name={`income_name_${jobCount}`} header="Income" placeholder="Enter Ammount" />
      </div>
    )
  }
}

Job.propTypes = {
  jobCount: PropTypes.number.isRequired
};

