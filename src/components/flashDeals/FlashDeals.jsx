import React from "react";
import FlashCard from "./FlashCard";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useSelector } from "react-redux";

const FlashDeals = ({ productItems, addToCart }) => {
  const products = useSelector((state) => state.products.flashDeals);
  return (
    <>
      {products && products.length <= 3 ? (
        <div></div>
      ) : (
        <section className="flash">
          <div className="container">
            <div className="heading f_flex">
              <i style={{ color: "#FF5722" }} className="fa fa-bolt"></i>
              <h1>Flash Deals</h1>
            </div>
            <FlashCard productItems={productItems} addToCart={addToCart} />
          </div>
        </section>
      )}
    </>
  );
};

export default FlashDeals;
