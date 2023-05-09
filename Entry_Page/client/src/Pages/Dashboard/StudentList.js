import React, { useState } from "react";
import {Link} from "react-router-dom";
import styles from "./Module.StudentList.css";

function StudentList() {
  const [students, setStudents] = useState([
    { id: 1, name: "Amit", branch: "Computer Science", placed: false },
    { id: 2, name: "Akash", branch: "Mechanical Engineering", placed: true },
    { id: 3, name: "Ankit", branch: "Electrical Engineering", placed: false },
    { id: 4, name: "Arjun", branch: "Civil Engineering", placed: true },
    { id: 5, name: "Divya", branch: "Computer Science", placed: true },
    { id: 6, name: "Gaurav", branch: "Electronics Engineering", placed: false },
    { id: 7, name: "Komal", branch: "Information Technology", placed: true },
    { id: 8, name: "Mohan", branch: "Chemical Engineering", placed: false },
    { id: 9, name: "Priya", branch: "Civil Engineering", placed: true },
    { id: 10, name: "Rahul", branch: "Computer Science", placed: false },
  ]);

  const handleChange = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, placed: !student.placed } : student
      )
    );
  };

  return (
    <div className={styles.tableContainer}>
    <div className={styles.topBar}>
      <h2 className={styles.heading}>Student List</h2>
      <Link to="/students/add">
  <button className="button">ADD</button>
</Link>
    </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.serialNo}>S.No</th>
            <th className={styles.name}>Student Name</th>
            <th className={styles.branch}>Branch</th>
            <th className={styles.placed}>Placed</th>
            <th className={styles.unplaced}>Unplaced</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>
                <input
                  type="checkbox"
                  checked={student.placed}
                  onChange={() => handleChange(student.id)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={!student.placed}
                  onChange={() => handleChange(student.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
