//import React, { useState } from "react"

//const ShopCart = ({ addToCart, shopItems }) => {
//  const [count, setCount] = useState(0)
//  const increment = () => {
//    setCount(count + 1)
//  }

//  return (
//    <>
//      {shopItems.map((shopItems) => {
//        return (
//          <div className='product mtop'>
//            <div className='img'>
//              <span className='discount'>{shopItems.discount}% Off</span>
//              <img src={shopItems.cover} alt='' />
//              <div className='product-like'>
//                <label>{count}</label> <br />
//                <i className='fa-regular fa-heart' onClick={increment}></i>
//              </div>
//            </div>
//            <div className='product-details'>
//              <h3>{shopItems.name}</h3>
//              <div className='rate'>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//              </div>
//              <div className='price'>
//                <h4>${shopItems.price}.00 </h4>
//                <button onClick={() => addToCart(shopItems)}>
//                  <i className='fa fa-plus'></i>
//                </button>
//              </div>
//            </div>
//          </div>
//        )
//      })}
//    </>
//  )
//}

//export default ShopCart

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_to_cart } from "../../features/actions";

const ShopCart = ({ shopItems, addToCart }) => {
  const user = useSelector((state) => state.users.currentUser);
  const currency = useSelector((state) => state.currency.selectedCurrency)
  const rates = useSelector((state) => state.currency.rates)

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const AddToCart = (items) => {
    if (user === null) {
      navigate("/login");
    } else {
      addToCart(items);
    }
  };

  return (
    <>
      {shopItems.map((shopItems, index) => {
        const { name, price, discount, rating, images } = shopItems;
        // const url = images[0];
        return (
          <div className="box" key={index}>
            <div className="product mtop">
              <div className="img md:w-[200px] md:h-[200px]">
                <span style={{ background: "#FF5722" }} className="discount">
                  {discount.percentage}% Off
                </span>
                {images && images.length > 0 && (
                  <img
                    src={images[0]}
                    alt="cover"
                    className="cover w-full h-full"
                  />
                )}
                {/* {console.log("images",images[0])} */}
                <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
              </div>
              <div className="product-details">
                <h3>{name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4 style={{ color: "#FF5722" }}>{currency} {price * rates[currency]}.00</h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={() => dispatch(add_to_cart(shopItems))}>
                    <i style={{ color: "#FF5722" }} className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;
