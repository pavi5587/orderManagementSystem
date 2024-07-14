import React, { useEffect, useState } from "react";
import "../../App.css";
import { Toaster } from "../../components/Toaster";
import { AddProductDetail, GetCompanyDetail } from "../../service/api";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productType: "",
    productCode: "",
    productTitle: "",
    totalStock: 0,
    company: "",
    costPerItem: 0,
    expiryDate: "",
    manufactureDate: "",
    description: "",
  });
  const [companyDetail, setCompanyDetail] = useState([]);
  useEffect(() => {
    GetCompanyDetail()
      .then((res) => {
        console.log("res", res);
        setCompanyDetail(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AddProductDetail(formData);
      Toaster("success", "ProductDetail Added Sucessfully", 5000);
      setFormData({
        productType: "",
        productCode: "",
        productTitle: "",
        totalStock: 0,
        company: "",
        costPerItem: 0,
        expiryDate: "",
        manufactureDate: "",
        description: "",
      });
    } catch (error) {
      Toaster("error", "ProductDetail Not Added", 5000);
    }
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5>Add New Product</h5>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div class="form-group">
                  <label for="exampleSelect">
                    <h6>Select Product Type</h6>
                  </label>
                  <div class="custom-select-wrapper">
                    <select
                      class="form-control"
                      id="exampleSelect"
                      onChange={(e) =>
                        handleChange("productType", e.target.value)
                      }
                      name="productType"
                      value={formData.productType}
                    >
                      <option value="">Select an option</option>
                      <option value="Biscuits">Biscuits</option>
                      <option value="Oil">Oil</option>
                      <option value="Noodles">Noodles</option>
                      <option value="Namkeen">Namkeen</option>
                      <option value="Spices">Spices</option>
                    </select>
                    <i class="fas fa-caret-down custom-select-arrow"></i>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <label for="exampleInput">
                    <h6>Product Title</h6>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInput"
                    onChange={(e) =>
                      handleChange("productTitle", e.target.value)
                    }
                    name="productTitle"
                    value={formData.productTitle}
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="exampleSelect">
                    <h6>Select Company</h6>
                  </label>
                  <div class="custom-select-wrapper">
                    <select
                      class="form-control"
                      id="exampleSelect"
                      onChange={(e) => handleChange("company", e.target.value)}
                      name="company"
                      value={formData.company}
                    >
                      <option value="">Select an option</option>
                      {companyDetail.map((res) => {
                        return (
                          <option value={res._id}>
                            {res.companyName}
                          </option>
                        );
                      })}
                    </select>
                    <i class="fas fa-caret-down custom-select-arrow"></i>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <label for="exampleDate">
                    <h6>Expiry Date</h6>
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="exampleDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={(e) => handleChange("expiryDate", e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-group">
                  <label for="exampleInput">
                    <h6>Product Code</h6>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInput"
                    onChange={(e) =>
                      handleChange("productCode", e.target.value)
                    }
                    name="productCode"
                    value={formData.productCode}
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="exampleInput">
                    <h6>Total Stock</h6>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInput"
                    onChange={(e) => handleChange("totalStock", e.target.value)}
                    name="totalStock"
                    value={formData.totalStock}
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="exampleInput">
                    <h6>Cost Per Item</h6>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInput"
                    onChange={(e) =>
                      handleChange("costPerItem", e.target.value)
                    }
                    name="costPerItem"
                    value={formData.costPerItem}
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="exampleDate">
                    <h6>Manufacture Date</h6>
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="exampleDate"
                    name="manufactureDate"
                    value={formData.manufactureDate}
                    onChange={(e) =>
                      handleChange("manufactureDate", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-md-12">
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
              </div>
            </div>
            <div className="div-end">
              <button type="submit" className="btn btn-success mt-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
