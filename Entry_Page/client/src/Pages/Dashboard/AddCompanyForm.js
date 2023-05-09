import React from "react";
import {Link} from "react-router-dom";
import AddCompanyFormStyles from "./AddCompanyForm.module.css";

function AddCompanyForm() {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // ...
    // Redirect to the companies list page
    window.location.href = "/companies/add";
  };

  return (
    <div className={AddCompanyFormStyles.addCompanyFormContainer}>
      <nav className={AddCompanyFormStyles.nav}>
        <h2>Add Company Form</h2>
        <Link to="/companies/add" className={AddCompanyFormStyles.cancelBtn}>
          Cancel
        </Link>
      </nav>
      <form className={AddCompanyFormStyles.form} onSubmit={handleSubmit}>
        <div className={AddCompanyFormStyles.formGroup}>
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" name="companyName" required />
        </div>
        <div className={AddCompanyFormStyles.formGroup}>
          <label htmlFor="dateOfDrive">Date of Drive</label>
          <input type="date" id="dateOfDrive" name="dateOfDrive" required />
        </div>
        <div className={AddCompanyFormStyles.formGroup}>
          <label htmlFor="modeOfDrive">Mode of Drive</label>
          <div className={AddCompanyFormStyles.radioGroup}>
            <input type="radio" id="online" name="modeOfDrive" value="online" required />
            <label htmlFor="online">Online</label>
            <input type="radio" id="offline" name="modeOfDrive" value="offline" required />
            <label htmlFor="offline">Offline</label>
          </div>
        </div>
        <div className={AddCompanyFormStyles.formGroup}>
          <label htmlFor="streamRequired">Stream Required</label>
          <input type="text" id="streamRequired" name="streamRequired" required />
        </div>
        <div className={AddCompanyFormStyles.formGroup}>
          <label htmlFor="eligibilityCriteria">Eligibility Criteria</label>
          <input type="text" id="eligibilityCriteria" name="eligibilityCriteria" required />
        </div>
        <div className={AddCompanyFormStyles.formGroup}>
          <label htmlFor="batch">Batch</label>
          <input type="text" id="batch" name="batch" required />
        </div>
        <div className={AddCompanyFormStyles.formGroup}>
          <label htmlFor="position">Position</label>
          <input type="text" id="position" name="position" required />
        </div>
        <div className={AddCompanyFormStyles.formGroup}>
          <label htmlFor="jobProfile">Job Profile</label>
          <textarea id="jobProfile" name="jobProfile" rows="5" maxLength="150" required></textarea>
        </div>
        <div className={AddCompanyFormStyles.formGroup}>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" required />
        </div>
        <div className={AddCompanyFormStyles.formGroup}>
          <label htmlFor="payPackage">Pay Package</label>
          <input type="text" id="payPackage" name="payPackage" required />
        </div>
        <div className={AddCompanyFormStyles.formGroup}>
          <label htmlFor="bond">Bond</label>
          <div className={AddCompanyFormStyles.radioGroup}>
          <input type="radio" id="online" name="modeOfDrive" value="online" required />
            <label htmlFor="online">Online</label>
            <input type="radio" id="offline" name="modeOfDrive" value="offline" required />
            <label htmlFor="offline">Offline</label>
                </div>
    </div>
    <div className={AddCompanyFormStyles.formGroup}>
      <label htmlFor="registrationLink">Registration Link</label>
      <input type="text" id="registrationLink" name="registrationLink" />
    </div>
    <button type="submit" className={AddCompanyFormStyles.submitBtn}>
      Submit
    </button>
  </form>
</div>
);
}

export default AddCompanyForm;





