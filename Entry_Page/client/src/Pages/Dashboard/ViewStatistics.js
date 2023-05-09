import React, { useState } from "react";
import DashboardStyles from "./View.module.css";

function ViewStatistics() {
  console.log("Rendering ViewStatistics...");

  const [dayCount, setDayCount] = useState(0);
  const [counts, setCounts] = useState([{ placed: 70, unplaced: 30 }]);

  const handleAddPlacedStudent = () => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[dayCount] = {
        ...newCounts[dayCount],
        placed: newCounts[dayCount].placed + 1,
      };
      return newCounts;
    });
  };

  const handleAddUnplacedStudent = () => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[dayCount] = {
        ...newCounts[dayCount],
        unplaced: newCounts[dayCount].unplaced + 1,
      };
      return newCounts;
    });
  };

  const handleResetCounts = () => {
    setDayCount(0);
    setCounts([{ placed: 0, unplaced: 0 }]);
  };

  const handleDayCountChange = (event) => {
    const newDayCount = parseInt(event.target.value, 10);
    if (newDayCount >= counts.length) {
      setCounts((prevCounts) => {
        const newCounts = [...prevCounts];
        while (newCounts.length <= newDayCount) {
          const prevCount = newCounts[newCounts.length - 1];
          newCounts.push({ placed: prevCount.placed, unplaced: prevCount.unplaced });
        }
        return newCounts;
      });
    }
    setDayCount(newDayCount);
  };

  const currentCounts = counts[dayCount];

  return (
    <div className={DashboardStyles.container}>
      <h1>View Statistics</h1>
      <div className={DashboardStyles.card}>
        <h2>Placement Data</h2>
        <div className={DashboardStyles.table}>
  <table>
    <thead>
      <tr>
        <th>Students</th>
        <th>Count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Placed</td>
        <td>{currentCounts.placed}</td>
      </tr>
      <tr>
        <td>Unplaced</td>
        <td>{currentCounts.unplaced}</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>{currentCounts.placed + currentCounts.unplaced}</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className={DashboardStyles.buttons}>
          <button onClick={handleAddPlacedStudent}>Add Placed Student</button>
          <button onClick={handleAddUnplacedStudent}>
            Add Unplaced Student
          </button>
          <button onClick={handleResetCounts}>Reset Counts</button>
          <div>
            <label htmlFor="dayCount">Day Count:</label>
            <input className={DashboardStyles.unique}
              id="dayCount"
              type="number"
              value={dayCount}
              onChange={handleDayCountChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewStatistics;
