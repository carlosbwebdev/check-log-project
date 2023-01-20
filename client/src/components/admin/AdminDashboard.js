import React from "react";
import AddTask from "./AddTask";
import GetAllTaks from "./GetAllTaks";

const AdminDashboard = (props) => {
  return (
    <div>
      <h4>Sou Administrador</h4>
      <AddTask userID={props.userID} />

      {/* //! activar depois */}
      {/* <GetAllTaks /> */}
    </div>
  );
};

export default AdminDashboard;
