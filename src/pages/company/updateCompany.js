import React, { useEffect, useState } from "react";
import { GetCompanyDetailById, UpdateCompanyDetail } from "../../service/api";
import { Toaster } from "../../components/Toaster";
import { ToastContainer } from "react-toastify";

const UpdateCompany = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    description: "",
  });
  const currentUrl = window.location.href;
  const urlParts = currentUrl.split("/");
  const companyId = urlParts[urlParts.length - 1];
  useEffect(() => {
    GetCompanyDetailById(companyId)
      .then((res) => {
        setFormData({
          companyName: res.data.companyName,
          description: res.data.description,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  },[]);
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UpdateCompanyDetail(companyId, formData);
      Toaster("success", "CompanyDetails Updated Sucessfully", 5000);
    } catch (error) {
      Toaster("error", "CompanyDetails Not Updated", 5000);
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="card">
        <div className="card-body">
          <h5>Update Company Details</h5>
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

export default UpdateCompany;
