import React from 'react'
import Catg from '../components/shops/Catg'
import ShopCart from '../components/shops/ShopCart'

const Children = ({addToCart, shopItems}) => {

    const categories = [
        {
            cateName:"Clothes"
        },
        {
            cateName:"Shoes"
        }
    ]

  return (
    <div className='pt-[70px] pb-[70px] bg-[#f6f9fc]'>
    <div className='flex w-full px-[70px] justify-around'>
            <button className='p-1 bg-white text-[35px] px-[50px] rounded-md text-[#FF5722] border-solid border-[2px] hover:bg-[#FF5722] hover:text-white duration-500'>Men</button>
            <button className='p-1 bg-white text-[35px] px-[50px] rounded-md text-[#FF5722] border-solid border-[2px] hover:bg-[#FF5722] hover:text-white duration-500'>Women</button>
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
  )
}

export default Children