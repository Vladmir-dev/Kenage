import React from "react"
import Ndata from "./Ndata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Cart = () => {
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
        {Ndata.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img m-[10px]'>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span style={{color:'#FF5722'}}>${val.price}</span>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default Cart
