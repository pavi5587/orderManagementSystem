import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DeleteCompanyDetail, GetCompanyDetail } from "../../service/api";
import { Toaster } from "../../components/Toaster";
import { ToastContainer } from "react-toastify";

const CompanyReport = () => {
  const [companyDetails, setCompanyDetails] = useState([]);
  useEffect(() => {
    GetCompanyDetail()
      .then((res) => {
        console.log("res", res);
        setCompanyDetails(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  const handleDelete = async (id) => {
    try {
      const response = await DeleteCompanyDetail(id);
      Toaster("success", "Company Detail Deleted Sucessfully", 5000);
    } catch (error) {
      Toaster("error", "Company Detail Not Deleted", 5000);
    }
  };
  return (
    <div>
      <ToastContainer />
      <div>
        <div className="card">
          <div className="card-body">
            <h5>All Companies Report</h5>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-body">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              {companyDetails.map((res, index) => {
                return (
                  <tbody>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{res.companyName}</td>
                      <td>{res.description}</td>
                      <td>
                        <Link to={`/updateCompany/${res._id}`}>
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
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Parle</td>
                  <td>Parle Company</td>
                  <td>
                    <Link to={`/updateCompany/12`}>
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
                      // onClick={() => handleDelete(data._id)}
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyReport;
