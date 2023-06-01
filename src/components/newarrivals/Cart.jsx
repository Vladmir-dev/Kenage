import React from "react"
import Ndata from "./Ndata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Cart = () => {
  const arrivals = useSelector((state) => state.products.newArrivals)
  const currency = useSelector((state) => state.currency.selectedCurrency)
  const rates = useSelector((state) => state.currency.rates)

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
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
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <>
      
      <Slider {...settings}>
        {arrivals && arrivals.map((val, index) => {
          return (
            <Link to={`product/${val._id}`}>
            <div className='box' key={index}>
              <div className='img m-[10px] w-[400px] h-[400px]'>
              {val.images && val.images.length > 0 && (
                    <img
                      src={val.images[0]}
                      alt="top categories"
                      className="cover w-full h-full rounded-md"
                    />
                  )}
              </div>
              <h4>{val.name}</h4>
              <span style={{color:'#FF5722'}}>{currency} {val.price * rates[currency]}</span>
            </div>
            </Link>
            

          )
        })}
      </Slider>
    </>
  )
}

export default Cart
