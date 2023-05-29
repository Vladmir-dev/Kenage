import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SlideCard = () => {

  const discounts = useSelector((state) => state.products.discounts);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ marginTop: "10px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings}>
        {discounts && discounts.map((value, index) => {
          return (
            <>
              <div
                className="md:mt-[80px] flex justify-between pl-4"
                key={index}
              >
                <div className="w-full">
                  <h1 className="md:text-[47px] text-[30px]">{value.name}</h1>
                  {/* <p>{value.desc}</p> */}
                  <Link to="/shop">
                    <button
                      className="bg-[#ffcd4e] md:py-[13px] py-[10px] font-bold text-white rounded-[5px] md:px-[40px] px-[20px]"
                      style={{ background: "#FF5722" }}
                    >
                      Visit Collections
                    </button>
                  </Link>
                </div>
                <div className="right md:block hidden w-[250px]">
                  {
                    value.images && value.images.length && (
                    <img className="rounded-md" src={value.images[0]} alt="carousel" />  
                    )
                  }
                  
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
