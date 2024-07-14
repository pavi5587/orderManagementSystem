import React, { useState } from "react";
import { Toaster } from "../../components/Toaster";
import { AddCompanyDetail } from "../../service/api";
import { ToastContainer } from "react-toastify";

const AddCompany = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    description: "",
  });
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AddCompanyDetail(formData);
      Toaster("success", "CompanyDetails Added Sucessfully", 5000);
      setFormData({
        companyName: "",
        description: "",
      });
    } catch (error) {
      Toaster("error", "CompanyDetails Not Added", 5000);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="card">
        <div className="card-body">
          <h5>Add New Company</h5>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div class="form-group mt-3">
                  <label for="exampleInput">
                    <h6>Company Name</h6>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInput"
                    onChange={(e) =>
                      handleChange("companyName", e.target.value)
                    }
                    name="companyName"
                    value={formData.companyName}
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="exampleInput">
                    <h6>Description</h6>
                  </label>
                  <input
                    type="textarea"
                    class="form-control"
                    id="exampleInput"
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    name="description"
                    value={formData.description}
                  />
                </div>
                <div className="mt-3">
                  <button type="submit" class="btn btn-success">
                    SUBMIT
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{ marginLeft: 10 }}
                    onClick={() => {
                      setFormData({
                        companyName: "",
                        description: "",
                      });
                    }}
                  >
                    RESET
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCompany;
