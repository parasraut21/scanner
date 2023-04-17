import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Model from './Model'
import { useSelector } from "react-redux";
import Cart from "./Cart";
import Admin from "./Admin";

export default function Navbar() {
  const amount = useSelector((state) => state.amount);

  const handlemycart = () => {
    // navigate("/cart");
    setCartview(true)
  }

  const handladmin = () => {
   
    setAdminview(true)
  }

  const [cartview,setCartview] = useState(false);
  const [adminview,setAdminview] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fst-italic fs-3" href="/">
            DigiCart
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link active fs-4 px-3"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
              <div className="btn bg-white text-success mx-1 mr-0">
              <button className="btn" onClick={handladmin}>Admin</button>
              {adminview?<Model onClose={()=>setAdminview(false)}><Admin/></Model>:null}
            </div>
               
              </li>
              </ul>
              <div className="btn bg-white text-success mx-1 mr-0">
              <i className="fa fa-shopping-cart" style={{ "fontSize": "30px" }}></i>{" "}
              <span className="badge badge-warning" id="lblCartCount">
                {" "}
                {amount} {" "}
              </span>{" "}
              <button className="btn" onClick={handlemycart}>My Cart</button>
            </div>
            {cartview?<Model onClose={()=>setCartview(false)}><Cart/></Model>:null}
          </div>
        </div>
      </nav>
    </>
  );
}