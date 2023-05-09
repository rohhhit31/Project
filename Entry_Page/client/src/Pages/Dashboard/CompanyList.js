import React from "react";
import { Link } from "react-router-dom";
import styles from "./Module.CompanyList.css";

function CompanyList() {
  const companyData = [
    { name: "Company A", package: 10, appeared: 50, placed: 30 },
    { name: "Company B", package: 12, appeared: 40, placed: 20 },
    { name: "Company C", package: 8, appeared: 60, placed: 35 },
    { name: "Company D", package: 15, appeared: 70, placed: 45 },
    { name: "Company E", package: 11, appeared: 55, placed: 25 },
    { name: "Company F", package: 9, appeared: 45, placed: 30 },
    { name: "Company G", package: 13, appeared: 65, placed: 40 },
    { name: "Company H", package: 14, appeared: 75, placed: 50 },
    { name: "Company I", package: 12, appeared: 80, placed: 55 },
    { name: "Company J", package: 16, appeared: 90, placed: 60 },
    { name: "Company K", package: 10, appeared: 50, placed: 30 },
    { name: "Company L", package: 12, appeared: 40, placed: 20 },
    { name: "Company M", package: 8, appeared: 60, placed: 35 },
    { name: "Company N", package: 15, appeared: 70, placed: 45 },
    { name: "Company O", package: 11, appeared: 55, placed: 25 },
  ];

  return (
    <div>
      <div style={{ textAlign: "right" }}>
        <Link to="/companies/add">
          <button className="button">ADD</button>
        </Link>
      </div>
      <h2 style={{ textAlign: "center" }}>VISITED COMPANIES</h2>
      <table style={{ margin: "auto", width: "50%" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>S.No</th>
            <th style={{ textAlign: "left" }}>Company Name</th>
            <th style={{ textAlign: "left" }}>Pay Package (LPA)</th>
            <th style={{ textAlign: "left" }}>Students Appeared</th>
            <th style={{ textAlign: "left" }}>Students Placed</th>
          </tr>
        </thead>
        <tbody>
          {companyData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.package}</td>
              <td>{data.appeared}</td>
              <td>{data.placed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompanyList;
