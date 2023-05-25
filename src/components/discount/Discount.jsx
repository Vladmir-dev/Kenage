import React from "react"
import Dcard from "./Dcard"
import '@fortawesome/fontawesome-free/css/all.css'
import { useSelector } from "react-redux"

const Discount = () => {
  const discounts = useSelector((state) => state.products.discounts);

  return (
    <>{
      discounts.length <= 2 ?(<div></div>):(
        <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
              <h2>Big Discounts</h2>
            </div>
            <div className='heading-right row '>
              <span style={{color:'#FF5722'}}>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
      )
    }
      
    </>
  )
}

export default Discount
