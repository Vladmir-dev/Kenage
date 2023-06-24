import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import DATA from "../Data";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
// import {addItem, delItem} from '../redux/actions/index'
import "@fortawesome/fontawesome-free/css/all.css";
import { add_to_cart } from "../features/actions";
import Wrapper from "./wrapper/Wrapper";
import ProductImage from "./ProductImage";

const ProductDetail = () => {
  //   const [cartBtn, setCartBtn] = useState("Add to Cart");
  const men_cloth = useSelector((state) => state.products.men_clothes);
  const men_shoe = useSelector((state) => state.products.men_shoes);
  const women_cloth = useSelector((state) => state.products.women_clothes);
  const women_shoe = useSelector((state) => state.products.women_shoes);
  const boy_cloth = useSelector((state) => state.products.boy_clothes);
  const boy_shoe = useSelector((state) => state.products.boy_shoes);
  const girl_cloth = useSelector((state) => state.products.girl_clothes);
  const girl_shoe = useSelector((state) => state.products.girl_shoes);
  const currency = useSelector((state) => state.currency.selectedCurrency);
  const rates = useSelector((state) => state.currency.rates);
  const cart = useSelector((state) => state.cart.cartItems);

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [show, setShow] = useState(true);
  const [rating, setRating] = useState(0);
  const [cartbtn, setCartBtn] = useState("Add To Cart");
  const [error, setError] = useState("");

  const handleStarClick = (value) => {
    setRating(value);
  };
  //   console.log("men shoes", men_sho)

  const allProducts = [
    ...men_cloth,
    ...men_shoe,
    ...women_cloth,
    ...women_shoe,
    ...boy_cloth,
    ...boy_shoe,
    ...girl_cloth,
    ...girl_shoe,
  ];

  //   console.log("all products ===>", allProducts)
  {
    /* Now we need a product id which is pass from the product page. */
  }
  const proid = useParams();
  //   console.log("prodid ==>", proid);
  const proDetail = allProducts.filter((x) => x._id == proid.id);

  const product = proDetail[0];
  const remimg = product.images.slice(1);
  const incart = cart.filter((x) => x._id === product._id);

  // console.log("incart", incart);
  // console.log(remimg);

  // We need to store useDispatch in a variable
  const dispatch = useDispatch();

  //   const handleCart = (product) => {
  //     if (cartBtn === "Add to Cart") {
  //       dispatch(addItem(product));
  //       setCartBtn("Remove from Cart");
  //     } else {
  //       dispatch(delItem(product));
  //       setCartBtn("Add to Cart");
  //     }
  //   };

  // const handle_add_to_cart = (data) => {
  //   // const proExists = cart.filter((x) => x._id) === product._id;
  //   // if (proExists) {
  //   // setShow(false);
  //   // } else {
  //   dispatch(add_to_cart(data));
  //   // }
  // };

  return (
    <div className="bg-[#f6f9fc] font-serif">
      <Header />
      <div className="container my-5 py-3">
        <div className="md:flex md:gap-[50px] bg-white p-4 shadow-md">
          <div className=" ">
            {product.images && product.images[0] && (
              <ProductImage images={product.images} />
              // <div className="flex flex-col ">
              //   {product.discount && product.discount.percentage && (
              //     <div className="  md:w-[500px] h-[50px] flex justify-start items-start p-2 absolute mt-2">
              //       <h1 className="text-center font-bold bg-black text-white rounded-full w-[50px] right-0 text-[15px]">
              //         {product.discount.percentage}% Off
              //       </h1>
              //     </div>
              //   )}

              //   <img
              //     src={product.images[0]}
              //     alt={product.name}
              //     className="md:w-[500px] w-[100%] h-[400px] md:h-[600px] object-cover"
              //   />
              //   <div className="mt-4 flex gap-3">
              //     {remimg &&
              //       remimg.map((item, index) => (
              //         <img
              //           key={index}
              //           src={item}
              //           alt={product.name}
              //           className="md:w-[120px] w-[70px] h-[60px] md:h-[120px] object-cover"
              //         />
              //       ))}
              //   </div>
              // </div>
            )}
          </div>

          <div className="flex flex-col text-[20px] gap-6">
            <h1 className="text-[47px]">{product.name}</h1>

            <div className="flex gap-8 items-center">
              <div>
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    onClick={() => handleStarClick(value)}
                    style={{ cursor: "pointer" }}
                  >
                    {value <= rating ? (
                      <i className="fa fa-star text-yellow-500"></i>
                    ) : (
                      <i className="fa fa-star text-gray-300"></i>
                    )}
                  </span>
                ))}
                {/* <p>Current Rating: {rating}</p> */}
              </div>
              <h1 className="font-bold">Add Your Review</h1>
            </div>

            <div>
              {product.instock ? (
                <label className="text-green-500 font-bold p-[2px] px-[6px] rounded-md bg-gray-300">
                  In Stock
                </label>
              ) : (
                <label className="text-red-500 font-bold p-[4px] px-[6px]  bg-slate-200">
                  Out Of Stock
                </label>
              )}
            </div>

            <div>
              {product.discount && product.discount.percentage ? (
                <div className="flex gap-8">
                  <h2 className="text-red-500">
                    {currency}{" "}
                    {product.price *
                      rates[currency] *
                      (product.discount.percentage / 100)}
                  </h2>

                  <strike>
                    <h2 className="text-gray-500">
                      {currency} {product.price * rates[currency]}
                    </h2>
                  </strike>
                </div>
              ) : (
                <h2 className="">
                  {currency} {product.price * rates[currency]}
                </h2>
              )}
            </div>

            <div className="flex gap-5 items-center">
              <h1 className="font-bold text-gray-500">Color</h1>

              <select
                className="text-black"
                onChange={(e) => setColor(e.target.value)}
              >
                <option></option>
                <option value="red">Red</option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="green">Green</option>
                <option value="curcasian">Curcasian</option>
              </select>
            </div>

            <div className="flex gap-5 items-center">
              <h1 className="font-bold text-gray-500">Size</h1>

              <select
                className="text-black "
                onChange={(e) => setSize(e.target.value)}
              >
                <option></option>
                <option value="XL">XL</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="S">S</option>
              </select>
            </div>
            <button
              onClick={() => {
                if (size !== "" && color !== "") {
                  dispatch(
                    add_to_cart({
                      product: product,
                      size: size,
                      color: color,
                    })
                  );
                } else {
                  setError("select Size & color");
                  // console.log("select size and color")
                }
                setCartBtn("PRODUCT ADDED");
              }}
              className="text-white bg-[#FF5722] font-bold duration-500 p-3 hover:text-[#FF5722] hover:bg-white hover:border-solid hover:border-[2px] rounded-full"
            >
              {cartbtn}
            </button>
            <p className="text-red-500 mt-[-20px] ml-[50px] text-[16px]">
              {error}
            </p>
            <div>
              <h1 className="text-[27px]">Description :</h1>
              <p className="ml-[25px] italic text-gray-500">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Wrapper />
      <Footer />
    </div>
  );
};

export default ProductDetail;
