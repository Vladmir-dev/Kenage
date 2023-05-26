import React from "react"
import Cart from "./Cart"
import "./style.css"
import { useSelector } from "react-redux"

const NewArrivals = () => {
  const arrivals = useSelector((state) => state.products.newArrivals)

  return (
    <div>
       {arrivals && arrivals.length < 3? (<div></div>): (
        <section className='NewArrivals background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
              <h2>New Arrivals </h2>
            </div>
            <div className='heading-right row '>
              <span style={{color:'#FF5722'}}>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
        
          <Cart />
        </div>
      </section>
       )}
      
    </div>
  )
}

export default NewArrivals
