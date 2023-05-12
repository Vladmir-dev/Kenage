import React, { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '@fortawesome/fontawesome-free/css/all.css'
import { useSelector,useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetch_flash_deals } from "../../features/actions"


const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {
  const dispatch = useDispatch()

 

  const user = useSelector((state) => state.users.currentUser)
  const products = useSelector((state) => state.products.flashDeals)
  const token = useSelector((state) => state.users.token)
  // console.log("products ===>",products)
  
  useEffect(() => {
    // console.log("UseEffect")
    dispatch(fetch_flash_deals(token));
    // console.log("after UseEffect")
  }, []);

  let navigate = useNavigate()
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
          slidesToShow: 1
        }
      }
    ]
  }



  const AddToCart = (items) => {
     if(user !== null){
       navigate('/login')
     }else{
      addToCart(items)
     }
  }

  return (
    <div className="">
      <Slider {...settings}>
        {products.map((productItems, key) => {
          return (
            <div key={key} className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span style={{background:'#FF5722'}} className='discount'>{productItems.discount}% Off</span>
                  <img src={productItems.cover} alt='cover' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{productItems.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4 style={{color:'#FF5722'}}>${productItems.price}.00 </h4>
                    <button onClick={() =>
                      AddToCart(productItems) 
                      // addToCart(productItems)
                      }>
                      <i style={{color:'#FF5722'}} className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default FlashCard
