import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import RegisterPage from "./pages/RegisterPage";
import AddTaksPage from "./pages/adminPages/AddTaksPage";
import GetTaskTeamPage from "./pages/adminPages/GetTaskTeamPage";
import Layout from "./components/UI/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/addtask" exact element={<AddTaksPage />} />
      <Route path="/seetasksteam" exact element={<GetTaskTeamPage />} />
      <Route path="/register" exact element={<RegisterPage />} />
      <Route path="/dashboard/user/:userId" exact element={<Dashboard />} />
      <Route
        path="*"
        element={
          <Layout>
            <h1>404: Not Found</h1>
          </Layout>
        }
      />
    </Routes>
  </BrowserRouter>
);
