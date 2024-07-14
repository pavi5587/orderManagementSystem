import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { postLogout } from "../service/api.js";
import { Toaster } from "./Toaster";
import { ToastContainer } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("onclick");
    postLogout()
      .then((res) => {
        console.log("res34", res);
        Toaster("success", "Logout SucessFully", 5000);
        localStorage.clear();
        navigate("/login");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div>
      <ToastContainer />
      <div class="sidebar d-flex flex-column">
        <h4 style={{ marginLeft: 30 }}>
          <i class="bi bi-amd"></i>
          <span style={{ marginLeft: 15 }}>OMS System</span>
        </h4>
        <hr />
        <ul class="nav flex-column">
          <li class="nav-item active">
            <h5 style={{ marginLeft: 15 }}>
              <Link class="nav-link" to="/dashboard">
                <i class="bi bi-grid"></i> Dashboard
              </Link>
            </h5>
          </li>
          <li class="nav-item">
            <h5 style={{ marginLeft: 15 }}>
              <Link class="nav-link" to="/sellDashboard">
                <i class="bi bi-grid"></i> Start Sell
              </Link>
            </h5>
          </li>
          <li class="nav-item">
            <h5 style={{ marginLeft: 15 }}>
              <Link class="nav-link" to="/orderReport">
                <i class="bi bi-columns-gap"></i> Order Report
              </Link>
            </h5>
          </li>
          <li class="nav-item">
            <h5 style={{ marginLeft: 15 }}>
              <Link class="nav-link" to="/productReport">
                <i class="bi bi-columns-gap"></i> Product Report
              </Link>
            </h5>
          </li>
          <li class="nav-item">
            <h5 style={{ marginLeft: 15 }}>
              <Link class="nav-link" to="/addProduct">
                <i class="bi bi-receipt"></i> Add Product
              </Link>
            </h5>
          </li>
          <li class="nav-item">
            <h5 style={{ marginLeft: 15 }}>
              <Link class="nav-link" to="/companyReport">
                <i class="bi bi-columns-gap"></i> Company Report
              </Link>
            </h5>
          </li>
          <li class="nav-item">
            <h5 style={{ marginLeft: 15 }}>
              <Link class="nav-link" to="/addCompany">
                <i class="bi bi-receipt"></i> Add Company
              </Link>
            </h5>
          </li>
          <li class="nav-item">
            <h5 style={{ marginLeft: 15 }}>
              <Link class="nav-link" to="/categoryReport">
                <i class="bi bi-columns-gap"></i> Category Report
              </Link>
            </h5>
          </li>
          <li class="nav-item">
            <h5 style={{ marginLeft: 15 }}>
              <Link class="nav-link" to="/addCategory">
                <i class="bi bi-receipt"></i> Add Category
              </Link>
            </h5>
          </li>
          <li class="nav-item">
            <h5
              style={{ marginLeft: 30, cursor: "pointer", marginTop: 5 }}
              onClick={() => handleLogout()}
            >
              <i class="bi bi-box-arrow-left"></i> Logout
            </h5>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
