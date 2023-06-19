import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function EditOrder() {
  const location = useLocation();
  const { id, data } = location.state;
  const item = data.find((x) => x.id === id);

  return (
    <div className="main-panel">
      <div className="content">
        <div><NavLink to="/OrderPage"><button>Back</button></NavLink></div>
        <div>{item.id}</div>
        <div>{item.name}</div>
        <img src={item.image} width="350" alt="" />
      </div>
    </div>
  );
}

export default EditOrder;
