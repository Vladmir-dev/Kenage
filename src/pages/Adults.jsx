import React, {useState, useEffect} from 'react'
import Catg from '../components/shops/Catg'
import ShopCart from '../components/shops/ShopCart'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import Wrapper from '../components/wrapper/Wrapper'
import { useSelector, useDispatch } from 'react-redux'
import { fetch_men_clothes, fetch_men_shoes, fetch_women_clothes, fetch_women_shoes } from '../features/actions'

const Adults = ({addToCart, shopItems, CartItem}) => {
  const [categ, setCateg] = useState("Men's Clothes")
  const dispatch = useDispatch()



  const men_cloth = useSelector((state) => state.products.men_clothes)
  const men_shoe = useSelector((state) => state.products.men_shoes)
  const women_cloth = useSelector((state) => state.products.women_clothes)
  const women_shoe = useSelector((state) => state.products.women_shoes)
  const token = useSelector((state) => state.users.token)
  // console.log("men's clothes ==>", men_cloth)
  // console.log("men's shoes ==>", men_shoe)
  // console.log("women's clothes ==>", women_cloth)
  // console.log("women's shoes ==>", women_shoe)
  // console.log("prod dndn clothes ==>", products)

   
  useEffect(() => {
    dispatch(fetch_men_clothes(token));
    dispatch(fetch_men_shoes(token));
    dispatch(fetch_women_clothes(token));
    dispatch(fetch_women_shoes(token));
  },[])

    const categories = [
        {
            cateName:"Men's Clothes"
        },
        {
            cateName:"Men's Shoes"
        },
        {
          cateName:"Women's Clothes"
      },
      {
          cateName:"Women's Shoes"
      }
    ]
    let shop_items = [];
    if(categ === "Men's Clothes"){
       shop_items = men_cloth;
    }else if(categ === "Men's Shoes"){
      shop_items = men_shoe
    }else if (categ === "Women's Clothes"){
      shop_items = women_cloth
    }else if (categ === "Women's Shoes"){
      shop_items = women_shoe
    }

  return (
    <>
    <Header CartItem={CartItem}/>
    <div className='pt-[70px] pb-[70px] bg-[#f6f9fc] mt-1'>
    {/* <div className='flex w-full px-[70px] justify-around'>
            <button className='p-1 bg-white md:text-[35px] md:px-[50px] rounded-md text-[#FF5722] border-solid border-[2px] hover:bg-[#FF5722] hover:text-white duration-500'>Men</button>
            <button className='p-1 bg-white md:text-[35px] md:px-[50px] rounded-md text-[#FF5722] border-solid border-[2px] hover:bg-[#FF5722] hover:text-white duration-500'>Women</button>
          </div> */}
          {/* {categ} */}
          <section className='shop background'>
        <div className='container d_flex'>
          <Catg  categories={categories} setCateg={setCateg}/>

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Adult Collection</h2>
              </div>
              {/* <div className='heading-right row '>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div> */}
            </div>
            <div className='product-content  grid md:grid-cols-3 grid-cols-2 '>
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

export default Adults