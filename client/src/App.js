import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.css";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import RegisterPage from "./pages/RegisterPage";
import AddTaksPage from "./pages/adminPages/AddTaksPage";
import GetTasksTeamPage from "./pages/adminPages/GetTaskTeamPage";
import Layout from "./components/UI/Layout";
import GetTasksUserPage from "./pages/userPages/GetTasksUserPage";
// import jwt_decode from "jwt-decode";

const App = () => {
  <Router>
    <Routes>
      <Route path="/" exact element={<HomePage title1="sou props" />} />
      <Route path="/dashboard/user/:userId" exact element={<Dashboard />} />
      <Route path="/register" exact element={<RegisterPage />} />
      {/* //Admin Routes */}
      <Route path="/addtask" exact element={<AddTaksPage />} />
      <Route path="/seetasksteam" exact element={<GetTasksTeamPage />} />
      {/* //Users Routes */}
      <Route path="/seetasks" exact element={<GetTasksUserPage />} />
      <Route
        path="*"
        element={
          <Layout>
            <h1>404: Not Found</h1>
          </Layout>
        }
      />
    </Routes>
    ;
  </Router>;
};

export default App;
