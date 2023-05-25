import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"
import { useSelector, useDispatch } from "react-redux"

const Shop = ({ addToCart, shopItems }) => {
  const men_cloth = useSelector((state) => state.products.men_clothes)
  
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <Catg />

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Featured Collection</h2>
              </div>
              <div className='heading-right row '>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  grid md:grid-cols-3 grid-cols-2'>
              <ShopCart addToCart={addToCart} shopItems={men_cloth} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
