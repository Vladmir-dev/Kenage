import React from "react"
import "./style.css"

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

  // prodcut qty total
  return (
    <>
      <section className='cart-items'>
        <div className='container md:flex md:gap-[500px]'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className=''>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {CartItem.map((item) => {
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
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i style={{color:'#FF5722'}} className='fa-solid fa-plus'></i>
                      </button>
                      <button>
                      <h1>
                        {item.qty}
                      </h1>
                      
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
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
      </section>
    </>
  )
}

export default Cart
