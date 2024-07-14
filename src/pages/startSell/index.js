import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddOrderDetail } from "../../service/api";
import { Toaster } from "../../components/Toaster";
import { ToastContainer } from "react-toastify";

const StartSell = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    customerMobile: "",
  });
  const navigate = useNavigate();
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AddOrderDetail(formData);
      console.log("response", response);
      navigate(`/addSell/${response.data._id}`);
      Toaster("success", "Order Added Sucessfully", 5000);
    } catch (error) {
      Toaster("error", "Order Not Added", 5000);
    }
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="mt-2">Sells Dashboard</h5>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h6 className="mt-2 order-view-title">
            Enter Customer Name and Mobile to start sells
          </h6>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <input
                  type="text"
                  class="form-control mt-2"
                  id="exampleInput"
                  placeholder="Enter Customer Name"
                  onChange={(e) => handleChange("customerName", e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  class="form-control mt-2"
                  id="exampleInput"
                  placeholder="Enter Customer Mobile"
                  onChange={(e) =>
                    handleChange("customerMobile", e.target.value)
                  }
                />
              </div>
              <div className="col-md-4">
                <button type="submit" className="btn btn-primary mt-2">
                  START SELL
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartSell;
