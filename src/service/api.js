import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

//login

export function postLogin(data) {
  return axios.post(`${baseUrl}/api/login`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

//Register

export function postRegister(data) {
  return axios.post(`${baseUrl}/api/register`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

//logout
export function postLogout() {
  return axios.post(`${baseUrl}/api/logout`);
}

//Company Details
export function GetCompanyDetail() {
  return axios.get(`${baseUrl}/api/company`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export function GetCompanyDetailById(id) {
  return axios.get(`${baseUrl}/api/company/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export function AddCompanyDetail(data) {
  console.log("ytytuy", data);
  return axios.post(`${baseUrl}/api/company`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export function UpdateCompanyDetail(id, data) {
  return axios.patch(`${baseUrl}/api/company/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export function DeleteCompanyDetail(id) {
  return axios.delete(`${baseUrl}/api/company/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

//Category Details
export function GetCategoryDetail() {
  return axios.get(`${baseUrl}/api/category`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export function GetCategoryDetailById(id) {
  return axios.get(`${baseUrl}/api/category/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export function AddCategoryDetail(data) {
  console.log("ytytuy", data);
  return axios.post(`${baseUrl}/api/category`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export function UpdateCategoryDetail(id, data) {
  return axios.patch(`${baseUrl}/api/category/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export function DeleteCategoryDetail(id) {
  return axios.delete(`${baseUrl}/api/category/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

//Product Details
export function GetProductDetail() {
  return axios.get(`${baseUrl}/api/product`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export function GetProductDetailById(id) {
  return axios.get(`${baseUrl}/api/product/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export function AddProductDetail(data) {
  console.log("ytytuy", data);
  return axios.post(`${baseUrl}/api/product`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export function UpdateProductDetail(id, data) {
  return axios.patch(`${baseUrl}/api/product/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export function DeleteProductDetail(id) {
  return axios.delete(`${baseUrl}/api/product/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

//Order Report

export function GetOrderItemDetail() {
  return axios.get(`${baseUrl}/api/orderItem`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export function GetOrderItemDetailById(id) {
  return axios.get(`${baseUrl}/api/orderItem/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export function AddOrderDetail(data) {
  return axios.post(`${baseUrl}/api/order`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export function AddOrderItemDetail(data) {
  return axios.post(`${baseUrl}/api/orderItem`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export function GetOrderDetailById(id) {
  return axios.get(`${baseUrl}/api/order/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}