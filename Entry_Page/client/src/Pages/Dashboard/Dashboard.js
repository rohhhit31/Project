import React from "react";
import { Link } from "react-router-dom";
import DashboardStyles from "./Dashboard.module.css";


function Dashboard() {
  return (
    <div className={DashboardStyles.dashboardContainer}>
      <div className={DashboardStyles.cardContainer}>
        <div className={DashboardStyles.dashboardCard}>
          <Link to="/students/add">
            <h2>ADD STUDENT</h2>
          </Link>
        </div>
        <div className={DashboardStyles.dashboardCard}>
        <Link to="/companies/add" className={DashboardStyles.link}>
  <h2>ADD COMPANIES</h2>
</Link>

        </div>
      </div>
      <div className={DashboardStyles.cardContainer}>
        <div className={DashboardStyles.dashboardCard}>
          <Link to="/">
            <h2>VIEW STATISTICS</h2>
          </Link>
        </div>
        <div className={DashboardStyles.dashboardCard}>
          <Link to="/">
            <h2>STUDY MATERIAL</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
