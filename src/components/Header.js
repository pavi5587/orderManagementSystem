import React from "react";

const Header = () => {
  const name = sessionStorage.getItem("Name");
  return (
    <div>
      <div className="row m-4">
        <div className="col-md-10"></div>
        <div className="col-md-2">
          <h5>
            <i class="bi bi-person-fill" style={{ fontSize: 25 }}></i> {name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
