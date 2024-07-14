import React, { useEffect, useState } from "react";
import {
  AddOrderItemDetail,
  GetOrderDetailById,
  GetProductDetail,
  GetProductDetailById,
} from "../../service/api";
import { Toaster } from "../../components/Toaster";
import { ToastContainer } from "react-toastify";

const AddSell = () => {
  const currentUrl = window.location.href;
  const urlParts = currentUrl.split("/");
  const orderId = urlParts[urlParts.length - 1];
  const [orderData, setOrderData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [formData, setFormData] = useState({
    productType: "",
    quantity: "",
  });
  const [orderItem, setOrderItem] = useState([]);
  useEffect(() => {
    GetOrderDetailById(orderId)
      .then((res) => {
        console.log("res", res);
        setOrderData(res.data);
      })
      .catch((error) => {
        Toaster("error", error.response.data, 5000);
      });

    GetProductDetail()
      .then((res) => {
        setProductData(res.data);
      })
      .catch((error) => {
        Toaster("error", error.response.data, 5000);
      });
  }, []);

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleClick = () => {
    GetProductDetailById(formData.productType)
      .then((res) => {
        console.log("res453", res);
        setOrderItem([
          ...orderItem,
          {
            productId: res.data.productCode,
            productName: res.data.productType,
            price: res.data.costPerItem,
            quantity: formData.quantity,
            totalCost: Number(res.data.costPerItem) * Number(formData.quantity),
          },
        ]);
      })
      .catch((error) => {
        Toaster("error", error.response.data, 5000);
      });
  };
  console.log("orderItem", orderItem);
  const calculateTotalCost = (items) => {
    return items.reduce((total, item) => total + item.totalCost, 0);
  };
  const handleDelete = (index) => {
    const updatedOrderItems = [...orderItem];
    updatedOrderItems.splice(index, 1);
    setOrderItem(updatedOrderItems);
  };
  const handleSubmit = async () => {
    const data = {
      order: orderId,
      orderItems: orderItem,
      totalAmount: calculateTotalCost(orderItem),
      orderStatus: "paid",
    };
    try {
      const response = await AddOrderItemDetail(data);
      console.log("response", response);
      Toaster("success", "OrderItem Added Sucessfully", 5000);
    } catch (error) {
      Toaster("error", "OrderItem Not Added", 5000);
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="card">
        <div className="card-body">
          <h5 className="order-view-title">Customer and Order Details</h5>
          <hr />
          <div className="row">
            <div className="col-md-3">
              <p className="text-bold">Order ID</p>
              <p className="text-bold">Customer Name</p>
            </div>
            <div className="col-md-3">
              <p>{orderData.orderId}</p>
              <p>{orderData.customerName}</p>
            </div>
            <div className="col-md-3">
              <p className="text-bold">Order Date</p>
              <p className="text-bold">Customer Mobile</p>
            </div>
            <div className="col-md-3">
              <p>{orderData.orderDate}</p>
              <p>{orderData.customerMobile}</p>
            </div>
          </div>
          <h5 className="order-view-title mt-2">Add Items into Cart</h5>
          <hr />
          <div className="row">
            <div className="col-md-2">
              <p className="text-bold">Select Product</p>
            </div>
            <div className="col-md-3">
              <div class="custom-select-wrapper">
                <select
                  class="form-control"
                  id="exampleSelect"
                  onChange={(e) => handleChange("productType", e.target.value)}
                  name="productType"
                  value={formData.productType}
                >
                  <option value="">Select an option</option>
                  {productData.map((val) => {
                    return <option value={val._id}>{val.productType}</option>;
                  })}
                </select>
                <i class="fas fa-caret-down custom-select-arrow"></i>
              </div>
            </div>
            <div className="col-md-2">
              <p className="text-bold">Enter Quantity</p>
            </div>
            <div className="col-md-3">
              <input
                type="text"
                class="form-control"
                id="exampleInput"
                onChange={(e) => handleChange("quantity", e.target.value)}
                name="productTitle"
                value={formData.quantity}
              />
            </div>
            <div className="col-md-2">
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => handleClick()}
              >
                ADD ITEM
              </button>
            </div>
          </div>
          <h5 className="order-view-title mt-2">Order Item Details</h5>
          <hr />
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Product ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price Per Unit</th>
                <th scope="col">Total Units</th>
                <th scope="col">Total Cost</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {orderItem?.map((data, index) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row">{data.productId}</th>
                    <td>{data.productName}</td>
                    <td>{data.price}</td>
                    <td>{data.quantity}</td>
                    <td>{data.totalCost}</td>
                    <td>
                      {" "}
                      <i
                        class="bi bi-trash-fill"
                        style={{
                          color: "red",
                          fontSize: 25,
                          marginLeft: 10,
                          cursor: "pointer",
                        }}
                        onClick={() => handleDelete(index)}
                      ></i>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
          <h6 className="div-end" style={{ marginRight: 315 }}>
            Total Amount : {calculateTotalCost(orderItem)}
          </h6>
          <div className="div-end mt-3">
            <button
              type="button"
              class="btn btn-primary"
              onClick={handleSubmit}
            >
              SAVE SELL DETAILS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSell;
