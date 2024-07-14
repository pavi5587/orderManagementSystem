import React, { useEffect, useState } from "react";
import "../../App.css";
import { GetOrderItemDetailById } from "../../service/api";
import { Toaster } from "../../components/Toaster";

const ViewOrder = () => {
  const currentUrl = window.location.href;
  const urlParts = currentUrl.split("/");
  const orderId = urlParts[urlParts.length - 1];
  const [orderItem, setOrderItem] = useState([]);
  useEffect(() => {
    GetOrderItemDetailById(orderId)
      .then((res) => {
        console.log("res",res);
        setOrderItem(res.data);
      })
      .catch((error) => {
        Toaster("error", error.response.data, 5000);
      });
  },[]);
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5>Order Items of Order Id : {orderItem?.order?.orderId}</h5>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h6 className="order-view-title">Order Details</h6>
          <hr />
          <div className="row">
            <div className="col-md-3 order-view-background">
              <p className="mt-3 order-view-text">Order ID</p>
              <hr className="order-view-text" />
              <p className="order-view-text">Customer Name</p>
              <hr className="order-view-text" />
              <p className="order-view-text">Order Status</p>
            </div>
            <div className="col-md-3">
              <p className="mt-3">{orderItem?.order?.orderId}</p>
              <hr />
              <p>{orderItem?.order?.customerName}</p>
              <hr />
              <p>{orderItem?.orderStatus}</p>
            </div>
            <div className="col-md-3 order-view-background">
              <p className="mt-3 order-view-text">Order Date</p>
              <hr className="order-view-text" />
              <p className="order-view-text">Contact Number</p>
              <hr className="order-view-text" />
              <p className="order-view-text">Total Amount</p>
            </div>
            <div className="col-md-3">
              <p className="mt-3">{orderItem?.order?.orderDate}</p>
              <hr />
              <p>{orderItem?.order?.customerMobile}</p>
              <hr />
              <p>{orderItem?.totalAmount}</p>
            </div>
          </div>
          <h6 className="order-view-title mt-3">Order Items</h6>
          <hr />
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Product ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Total Items</th>
                <th scope="col">Cost Per Unit</th>
                <th scope="col">Total Cost</th>
              </tr>
            </thead>
            {orderItem?.orderItems?.map((res)=>{
              return(
                <tbody>
                <tr>
                  <th scope="row">{res.productId}</th>
                  <td>{res.productName}</td>
                  <td>{res.quantity}</td>
                  <td>{res.price}</td>
                  <td>{res.totalCost}</td>
                </tr>
              </tbody>
              )
            })}
         
          </table>
          <h6 className="order-view-title div-end" style={{ marginRight: 190 }}>
            Total Cost :{" "}
            <span style={{ color: "black", marginLeft: 10 }}>{orderItem.totalAmount}</span>
          </h6>
          <div className="div-center">
            <button type="button" class="btn btn-danger">
              PRINT RECEIPT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
