import React, { useState, useEffect } from 'react'
import Catg from '../components/shops/Catg'
import ShopCart from '../components/shops/ShopCart'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import Wrapper from '../components/wrapper/Wrapper'
import { useSelector, useDispatch } from 'react-redux'
import { fetch_boys_clothes, fetch_boys_shoes, fetch_girls_clothes, fetch_girls_shoes } from '../features/actions'

const Children = ({addToCart, shopItems, CartItem}) => {

  const dispatch = useDispatch()
  const token = useSelector((state) => state.users.token)
  const boy_cloth = useSelector((state) => state.products.boy_clothes)
  const boy_shoe = useSelector((state) => state.products.boy_shoes)
  const girl_cloth = useSelector((state) => state.products.girl_clothes)
  const girl_shoe = useSelector((state) => state.products.girl_shoes)

  const [categ, setCateg] = useState("Boys's Clothes")

  // console.log("boy's clothes", boy_cloth)
  // console.log("boy's shoes", boy_shoe)
  // console.log("girl's clothes", girl_cloth)
  // console.log("girl's shoes", girl_shoe)


  useEffect(() => {
    dispatch(fetch_boys_clothes(token))
    dispatch(fetch_boys_shoes(token))
    dispatch(fetch_girls_clothes(token))
    dispatch(fetch_girls_shoes(token))
  },[])

  const categories = [
      {
          cateName:"Boys's Clothes"
      },
      {
          cateName:"Boy's Shoes"
      },
      {
        cateName:"Girls' Clothes"
    },
    {
        cateName:"Girls' Shoes"
    }
  ]

let shop_items = [];
    if(categ === "Boys's Clothes"){
       shop_items = boy_cloth;
    }else if(categ === "Boy's Shoes"){
      shop_items = boy_shoe
    }else if (categ === "Girls' Clothes"){
      shop_items = girl_cloth
    }else if (categ === "Girls' Shoes"){
      shop_items = girl_shoe
    }

    
  return (
    <>
    <Header CartItem={CartItem}/>
    <div className='pt-[70px] pb-[70px] bg-[#f6f9fc] mt-1'>
    {/* <div className='flex w-full px-[70px] justify-around'>
            <button className='p-1 bg-white md:text-[35px] md:px-[50px] rounded-md text-[#FF5722] border-solid border-[2px] hover:bg-[#FF5722] hover:text-white duration-500'>Boys</button>
            <button className='p-1 bg-white md:text-[35px] md:px-[50px] rounded-md text-[#FF5722] border-solid border-[2px] hover:bg-[#FF5722] hover:text-white duration-500'>Girls</button>
          </div> */}
          
          <section className='shop background'>
        <div className='container d_flex'>
          <Catg categories={categories} setCateg={setCateg}/>

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
              <ShopCart addToCart={addToCart} shopItems={shop_items} />
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