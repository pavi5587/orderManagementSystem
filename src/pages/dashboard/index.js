import React from "react";
import Image from "../../assets/imagesOnline.avif";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body mt-2">
          <h5>Order Management System Admin Dashboard</h5>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body mt-2">
          <div className="row">
            <div className="col-md-6">
              <div className="background-color1">
                <Link to="/sellDashboard">
                  <h6 className="mt-1">Start Sell</h6>
                </Link>
              </div>
              <div className="background-color1 mt-2">
                <Link to="/orderReport">
                  <h6 className="mt-1">Order Report</h6>
                </Link>
              </div>
              <div className="background-color1 mt-2">
                <Link to="/addProduct">
                  <h6 className="mt-1">Add Product</h6>
                </Link>
              </div>
              <div className="background-color1 mt-2">
                <Link to="/productReport">
                  <h6 className="mt-1">Product Report</h6>
                </Link>
              </div>
              <div className="background-color1 mt-2">
                <Link to="/addCompany">
                  <h6 className="mt-1">Add Company</h6>
                </Link>
              </div>
              <div className="background-color1 mt-2">
                <Link to="/companyReport">
                  <h6 className="mt-1">Company Report</h6>
                </Link>
              </div>
              <div className="background-color1 mt-2">
                <Link to="/addCategory">
                  <h6 className="mt-1">Add Category</h6>
                </Link>
              </div>
              <div className="background-color1 mt-2">
                <Link to="/categoryReport">
                  <h6 className="mt-1">Category Report</h6>
                </Link>
              </div>
              <div className="background-color1 mt-2">
                <Link to="/login">
                  <h6 className="mt-1">Logout</h6>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <img src={Image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
