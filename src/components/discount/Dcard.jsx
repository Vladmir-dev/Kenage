import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "./Ddata";
import "../newarrivals/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useSelector } from "react-redux";

const Dcard = () => {
  const discounts = useSelector((state) => state.products.discounts);
  const currency = useSelector((state) => state.currency.selectedCurrency)
  const rates = useSelector((state) => state.currency.rates)

  // let length = 2;
  // if (discounts && discounts.length < 4) {
  //   length = 2;
  // } else {
  //   length = 4;
  // }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
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

  return (
    <>
      <Slider {...settings}>
        {discounts && discounts.map((value, index) => {
            return (
              <>
                <div className="box product" key={index}>
                  <div className="img md:w-[250px] md:h-[250px]">
                    {value.images && value.images.length > 0 && (
                      <img
                        src={value.images[0]}
                        alt="top categories"
                        className="cover w-full h-full"
                      />
                    )}
                  </div>
                  <h4>{value.name}</h4>
                  <span style={{ color: "#FF5722" }}>{currency} {value.price * rates[currency]}</span>
                </div>
              </>
            );
          })}
      </Slider>
    </>
  );
};

export default Dcard;
