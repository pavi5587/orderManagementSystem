import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeleteProductDetail, GetProductDetail } from "../../service/api";
import { Toaster } from "../../components/Toaster";
import { ToastContainer } from "react-toastify";

const ProductReport = () => {
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    GetProductDetail()
      .then((res) => {
        console.log("res", res);
        setProductDetails(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  const handleDelete = async (id) => {
    try {
      const response = await DeleteProductDetail(id);
      Toaster("success", "Product Detail Deleted Sucessfully", 5000);
    } catch (error) {
      Toaster("error", "Product Detail Not Deleted", 5000);
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="card">
        <div className="card-body">
          <h5>All Products Report</h5>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Code</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Cost</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {productDetails.map((res, index) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{res.productCode}</td>
                    <td>{res.productTitle}</td>
                    <td>{res.productType}</td>
                    <td>{res.costPerItem}</td>
                    <td>
                      <Link to={`/updateProduct/${res._id}`}>
                        <i
                          class="bi bi-pencil-square"
                          style={{ color: "blue", fontSize: 25 }}
                        ></i>{" "}
                      </Link>
                      <i
                        class="bi bi-trash-fill"
                        style={{
                          color: "red",
                          fontSize: 25,
                          marginLeft: 10,
                          cursor: "pointer",
                        }}
                        onClick={() => handleDelete(res._id)}
                      ></i>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductReport;
