import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetch_flash_deals, add_to_cart } from "../../features/actions";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

const FlashCard = ({ productItems, addToCart }) => {
  const dispatch = useDispatch();
  const [imageData, setImageData] = useState(null);

  const user = useSelector((state) => state.users.currentUser);
  const products = useSelector((state) => state.products.flashDeals);
  const token = useSelector((state) => state.users.token);
  const currency = useSelector((state) => state.currency.selectedCurrency);
  const rates = useSelector((state) => state.currency.rates);

  // console.log("rates",rates[currency])
  let length;
  if (products.length < 4) {
    length = 2;
  } else {
    length = 4;
  }

  useEffect(() => {
    // console.log("UseEffect")
    dispatch(fetch_flash_deals(token));
    // console.log("after UseEffect")
  }, []);

  let navigate = useNavigate();
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: length,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          centerMode: true,
          centerPadding: 40,
          infinite: false,
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  const AddToCart = (items) => {
    if (user !== null) {
      navigate("/login");
    } else {
      addToCart(items);
    }
  };

  return (
    <div className="">
      <Slider {...settings}>
        {products.map((productItems, key) => {
          const { name, price, discount, rating, images } = productItems;
          //  const url = URL.createObjectURL(images[0])
          // const url = images[0]
          console.log("index ==>", key);
          console.log("name ==>", name);

          return (
            <Link to={productItems._id}>
              <div key={key} className="box">
                <div className="product mtop">
                  <div className="img w-[200px] h-[200px]">
                    <span
                      style={{ background: "#FF5722" }}
                      className="discount"
                    >
                      {discount.percentage}% Off
                    </span>
                    {images && images.length > 0 && (
                      <img
                        src={images[0]}
                        alt="cover"
                        className="cover w-full h-full"
                      />
                    )}
                    <div className="product-like">
                      <label>{count}</label> <br />
                      <i
                        className="fa-regular fa-heart"
                        onClick={increment}
                      ></i>
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
                      <h4 style={{ color: "#FF5722" }}>
                        {currency} {price * rates[currency]}.00{" "}
                      </h4>
                      {/* <button
                        onClick={() =>
                          // AddToCart(productItems)
                          dispatch(add_to_cart(productItems))
                        }
                      >
                        <i
                          style={{ color: "#FF5722" }}
                          className="fa fa-plus"
                        ></i>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default FlashCard;
