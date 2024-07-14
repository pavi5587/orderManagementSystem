import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetOrderItemDetail } from "../../service/api";
import { Toaster } from "../../components/Toaster";
import { ToastContainer } from "react-toastify";

const OrderReport = () => {
  const [orderDetail, setOrderDetail] = useState([]);

  useEffect(() => {
    GetOrderItemDetail()
      .then((res) => {
        console.log("res", res);
        setOrderDetail(res.data);
      })
      .catch((error) => {
        console.log(error);
        Toaster("error", error.response.data, 5000);
      });
  }, []);
  return (
    <div>
      <ToastContainer />
      <div className="card">
        <div className="card-body">
          <h5>All Orders Report</h5>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Total Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {orderDetail.map((res, index) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{res.order.customerName}</td>
                    <td>{res.order.customerMobile}</td>
                    <td>{res.totalAmount}</td>
                    <td>{res.order.orderDate}</td>
                    <td>
                      <Link to={`/viewOrder/${res._id}`}>
                        <i
                          class="bi bi-eye-fill"
                          style={{ color: "blue", fontSize: 20 }}
                        ></i>
                      </Link>
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

export default OrderReport;
