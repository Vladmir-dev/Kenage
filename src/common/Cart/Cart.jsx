import React from "react"
import "./style.css"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { add_to_cart, decrease_qty } from "../../features/actions"
import Wrapper from "../../components/wrapper/Wrapper"

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  

  const user = useSelector((state) => state.users.currentUser)
  const cart = useSelector((state) => state.cart.cartItems)
  console.log("cart", cart)
  const totalPrice = cart.reduce((price, item) => price + item.qty * item.price, 0)

  // prodcut qty total
  const handleCheckOut = () => {
    if (user !== null){
      navigate("/checkout")
    }else{
      navigate("/login")
    }
  }

  return (
    <>
    <Header CartItem={CartItem}/>
      <section className='cart-items mt-1'>
        <div className='container md:flex md:gap-[500px]'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className=''>
            {cart.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {cart.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className=' p-[20px] bg-white w-full m-[10px] flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className=''>
                    <h3>{item.name}</h3>
                    <h4 >
                      {/* ${item.price}.00   */}
                      <span style={{color:'#FF5722', fontSize:'20px'}}>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className=''>
                    {/* <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div> */}

                    
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => dispatch(add_to_cart(item))}>
                        <i style={{color:'#FF5722'}} className='fa-solid fa-plus'></i>
                      </button>
                      <button>
                      <h1>
                        {item.qty}
                      </h1>
                      
                      </button>
                      <button className='desCart' onClick={() => dispatch(decrease_qty(item))}>
                        <i  className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  {/* <div className='cart-item-price'></div> */}
                </div>
              )
            })}
          </div>

          <div className='bg-white m-[10px] md:w-[300px] md:h-[150px] p-6 rounded-md'>
            <h2 style={{color:'#FF5722'}}>Cart Summary</h2>

            <div className='m-[5px] d_flex'>
              <h4>Total Price :</h4>
              <h3 style={{color:'#FF5722'}}>${totalPrice}.00</h3>
            </div>
          </div>
          
        </div>
        <div className="w-full flex item center md:mt-[50px] justify-center font-serif">
          <button onClick={handleCheckOut} className="hover:bg-[#FF5722] border-solid border-[2px] border-[#FF5722] p-4 rounded-md font-bold text-[#FF5722] duration-500 shadow-xl hover:text-white text-[20px]">Proceed To Checkout</button>
          </div>
      </section>
      <Wrapper />
      <Footer />
    </>
  )
}

export default Cart
