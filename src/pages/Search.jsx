import React from 'react'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import ShopCart from '../components/shops/ShopCart'
import { useSelector, useDispatch } from 'react-redux'

const Search = ({CartItem, addToCart}) => {
 const results = useSelector((state) => state.search.results)
 console.log("results hahaha", results)
  return (
    <div>
        <Header CartItem={CartItem}/>
        <div className='bg-[#f6f9fc]'>
            {results == []  ? 
            (
                <div className='bg-red-500'>No Query</div>
             )
              : 
            (
                <div className='grid md:grid-cols-4 grid-cols-2  p-12'>
               <ShopCart addToCart={addToCart} shopItems={results} />  
              </div>
            )
             }
         {/*  */}
        </div>
        <Footer />
    </div>
  )
}

export default Search