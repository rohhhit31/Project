import React, { useState } from "react";
import styles from "./Student.module.css";

function Student() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    dob: "",
    course: "",
    branch: "",
    year: "",
    batch: "",
    fatherName: "",
    contactNumber: "",
    email: "",
    marks10th: "",
    marks12th: "",
    cgpa: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with the code to submit data to the server
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };




  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Add Student</h2>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={styles.input}
              style={{ border: "1px solid lightcoral" }}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input
  type="text"
  name="firstName"
  id="firstName"
  value={formData.firstName}
  onChange={handleChange}
  className={`${styles.input} input`}
/>

          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleChange}
              className={styles.input}
              style={{ border: "1px solid lightcoral" }}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="text"
              name="dob"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
              className={styles.input}
              style={{ border: "1px solid lightcoral" }}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="course">Course</label>
            <input
              type="text"
              name="course"
              id="course"
              value={formData.course}
              onChange={handleChange}
              className={styles.input}
              style={{ border: "1px solid lightcoral" }}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="branch">Branch</label>
            <input
              type="text"
              name="branch"
              id="branch"
              value={formData.branch}
              onChange={handleChange}
              className={styles.input}
              style={{ border: "1px solid lightcoral" }}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="year">Year</label>
            <input
              type="text"
              name="year"
              id="year"
              value={formData.year}
              onChange={handleChange}
className={styles.input}
style={{ border: "1px solid lightcoral" }}
/>
</div>
<div className={styles.formGroup}>
<label htmlFor="batch">Batch</label>
<input
type="text"
name="batch"
id="batch"
value={formData.batch}
onChange={handleChange}
className={styles.input}
style={{ border: "1px solid lightcoral" }}
/>
</div>
</div>
<div className={styles.formRow}>
<div className={styles.formGroup}>
<label htmlFor="fatherName">Father's Name</label>
<input
type="text"
name="fatherName"
id="fatherName"
value={formData.fatherName}
onChange={handleChange}
className={styles.input}
style={{ border: "1px solid lightcoral" }}
/>
</div>
<div className={styles.formGroup}>
<label htmlFor="contactNumber">Contact Number</label>
<input
type="text"
name="contactNumber"
id="contactNumber"
value={formData.contactNumber}
onChange={handleChange}
className={styles.input}
style={{ border: "1px solid lightcoral" }}
/>
</div>
</div>
<div className={styles.formRow}>
<div className={styles.formGroup}>
<label htmlFor="email">Email</label>
<input
type="text"
name="email"
id="email"
value={formData.email}
onChange={handleChange}
className={styles.input}
style={{ border: "1px solid lightcoral" }}
/>
</div>
</div>
<div className={styles.formRow}>
<div className={styles.formGroup}>
<label htmlFor="marks10th">10th Marks</label>
<input
type="text"
name="marks10th"
id="marks10th"
value={formData.marks10th}
onChange={handleChange}
className={styles.input}
style={{ border: "1px solid lightcoral" }}
/>
</div>
<div className={styles.formGroup}>
<label htmlFor="marks12th">12th Marks</label>
<input
type="text"
name="marks12th"
id="marks12th"
value={formData.marks12th}
onChange={handleChange}
className={styles.input}
style={{ border: "1px solid lightcoral" }}
/>
</div>
<div className={styles.formGroup}>
<label htmlFor="cgpa">CGPA</label>
<input
type="text"
name="cgpa"
id="cgpa"
value={formData.cgpa}
onChange={handleChange}
className={styles.input}
style={{ border: "1px solid lightcoral" }}
/>
</div>
</div>
<button type="submit" className={styles.button}>
Add
</button>
</form>
</div>
);
}

export default Student;
