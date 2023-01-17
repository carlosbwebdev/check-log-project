import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import RegisterPage from "./pages/RegisterPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/register" exact element={<RegisterPage />} />
      <Route path="/dashboard" exact element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);
