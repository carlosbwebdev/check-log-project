import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/admin/AdminDashboard.module.css";

const AdminDashboard = (props) => {
  return (
    <div>
      <section className={styles.dashboardSection}>
        <h1>Admin Dashboard</h1>
        <p>A task management application for teams</p>
        <section className={styles.gridCards}>
          <Link to="/addtask">
            <div className={styles.card}>
              <h3>Create New Daily Tasks</h3>
              <p>Small Description of what add tasks means...</p>
            </div>
          </Link>
          <div className={styles.card}>
            <h3>Create New Weekly Tasks</h3>
            <p>Small Description of what add tasks means...</p>
          </div>
          <Link to="/seetasksteam">
            <div className={styles.card}>
              <h3>Search Tasks by Date</h3>
              <p>Small Description of what add tasks means...</p>
            </div>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default AdminDashboard;
