import React from 'react'
import Catg from '../components/shops/Catg'
import ShopCart from '../components/shops/ShopCart'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import Wrapper from '../components/wrapper/Wrapper'

const Children = ({addToCart, shopItems, CartItem}) => {

    const categories = [
        {
            cateName:"Clothes"
        },
        {
            cateName:"Shoes"
        }
    ]

  return (
    <>
    <Header CartItem={CartItem}/>
    <div className='pt-[70px] pb-[70px] bg-[#f6f9fc]'>
    <div className='flex w-full px-[70px] justify-around'>
            <button className='p-1 bg-white md:text-[35px] md:px-[50px] rounded-md text-[#FF5722] border-solid border-[2px] hover:bg-[#FF5722] hover:text-white duration-500'>Boys</button>
            <button className='p-1 bg-white md:text-[35px] md:px-[50px] rounded-md text-[#FF5722] border-solid border-[2px] hover:bg-[#FF5722] hover:text-white duration-500'>Girls</button>
          </div>
          <section className='shop background'>
        <div className='container d_flex'>
          <Catg categories={categories}/>

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Children's Collection</h2>
              </div>
              {/* <div className='heading-right row '>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div> */}
            </div>
            <div className='product-content  grid md:grid-cols-3 grid-cols-2'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section> 
    </div>
    <Wrapper />
    <Footer />
    </>
  )
}

export default Children