import React from "react";
import { Data } from "../../data/Data";
import Swal from 'sweetalert2'
import { NavLink } from "react-router-dom";

function AllProducts() {

  const Alert = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <div>
      <div className="main-panel">
        <div className="content">
            <div>
              <div className="row" style={{ flexDirection:"row", alignItems: "center" }}>
                  <div className="col-3"></div>
                  <div className="col-3"><text style={{ fontWeight: "bold", fontSize: 18}}>Name</text></div>
                  <div className="col-3"><text style={{ fontWeight: "bold", fontSize: 18}}>Price</text></div>
              </div>
              <hr/>

              {Data.map((item, index) => (
                <div key={index}>
                <div className="row" style={{ marginTop: 25, alignItems:"center" }}>
                  <div className="col-3"><img src={item.image} className="img-fluid" alt="" width="40%"/></div>
                  <div className="col-3"><text style={{ fontSize: 16}}>{item.name}</text></div>
                  <div className="col-3">{item.price}</div> 
                  <div className="col-3">
                    <NavLink to="/EditPage"><button  class="btn btn-success"><i class="fa fa-pencil-square-o" style={{ fontSize: 16 }}></i></button></NavLink>
                    <button onClick={Alert} class="btn btn-danger" ><i class="fa fa-trash" style={{ fontSize: 16 }}></i></button>
                  </div>
                </div>
                <hr/>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>

   
  );
}

export default AllProducts;
