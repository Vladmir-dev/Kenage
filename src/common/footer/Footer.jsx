import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container md:grid md:grid-cols-4 gap-6">
          <div className="box">
            <h1 style={{ color: "#FF5722" }}>kENAGE</h1>
            <p>
              we are dedicated to establishing ourselves as the go-to
              destination for footwear and clothing, catering to the fashion
              needs of individuals of all ages and styles.
            </p>
            {/* <div className='icon d_flex'>
              <div className='img d_flex'>
                <i className='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i className='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div> */}
          </div>

          <div className="box">
            <Link to="/contact">
            <h2>About Us</h2>
            </Link>
            
            <ul>
              {/* <li>Our Stores</li> */}
              {/* <li>Our Cares</li> */}
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              {/* <li>Track Your Order </li> */}
              {/* <li>Corporate & Bulk Purchasing </li> */}
              {/* <li>Returns & Refunds </li> */}
            </ul>
          </div>
          <div className="box">
            <h2>Location</h2>
            <ul>
              {/* <li>
                70 Washington Square South, New York, NY 10012, United States{" "}
              </li> */}
              <li>Email: info@kenagecoll.com</li>
              <li>Phone: +256 776521504, +256 0750689091, +256 757217184</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
