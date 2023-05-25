import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useSelector,useDispatch } from "react-redux"
import Tdata from "./Tdata"

const TopCart = () => {
  const category = useSelector((state) => state.products.topCategories)
  // console.log("category in card", category)
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
        {category && category.map((value, index) => {
          // console.log(value)
          return (
            <>
              <div className='box product' key={index}>
                <div className='nametop d_flex'>
                  <span className='tleft'>{value.name}</span>
                  {/* <span className='tright'>{value.desc}</span> */}
                </div>
                <div className='img w-[200px] h-[150px]'>
                {value.images && value.images.length > 0 && (
                    <img
                      src={value.images[0]}
                      alt="top categories"
                      className="cover w-full h-full"
                    />
                  )}
                  {/* <img src={value.cover} alt='' /> */}
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default TopCart
