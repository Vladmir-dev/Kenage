import React, {useState} from "react";
import "./style.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_to_cart, decrease_qty, create_order } from "../../features/actions";
import Wrapper from "../../components/wrapper/Wrapper";
// import mtn from "../../assets/mtn.jpg";
// import airtel from "../../assets/airtel.png";
// import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  const [method, setMethod] = useState("")
  const [location, setLocation] = useState("")
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.currentUser);

  const cart = useSelector((state) => state.cart.cartItems);
  const currency = useSelector((state) => state.currency.selectedCurrency);
  const rates = useSelector((state) => state.currency.rates);
  const loading = useSelector((state) => state.cart.is_loading)
  const token = useSelector((state) => state.users.token)

 
  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  // prodcut qty total

  

  

  const handleCheckOut = () => {
    console.log("checkout user", user);
    let orderData = {
      userId: user._id, // Replace with the actual customer ID
      deliveryMethod: method,
      address: location,
      products:cart,
      amount: totalPrice,
      status: 'pending', // Replace with the initial status if needed
    };
    console
    if (user) {
      console.log("cart order data ==>",orderData.products)
      dispatch(create_order({payload:orderData, token:token}))
      // navigate(`/checkout`);
    } else {
      navigate("/login");
    }
  };





  return (
    <>
      <Header CartItem={CartItem} />
      <section className="cart-items mt-1">
        <div className="container md:flex md:gap-[500px]">
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className="">
            {cart.length === 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )}

            {/* yasma hami le cart item lai display garaaxa */}
            {cart.map((item) => {
              const productQty = item.price * item.qty;

              return (
                <div
                  className=" p-[20px] bg-white w-full m-[10px] flex"
                  key={item.id}
                >
                  <div className="img">
                    {item.images && item.images.length && (
                      <img src={item.images[0]} alt="" />
                    )}
                  </div>
                  <div className="">
                    <h3>{item.name}</h3>
                    <h4>
                      {/* ${item.price}.00   */}
                      <span style={{ color: "#FF5722", fontSize: "20px" }}>
                        {currency} {productQty * rates[currency]}
                      </span>
                    </h4>
                  </div>
                  <div className="">
                    {/* <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div> */}

                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className="cartControl d_flex">
                      <button
                        className="incCart"
                        onClick={() => dispatch(add_to_cart({ product: item }))}
                      >
                        <i
                          style={{ color: "#FF5722" }}
                          className="fa-solid fa-plus"
                        ></i>
                      </button>
                      <button>
                        <h1>{item.qty}</h1>
                      </button>
                      <button
                        className="desCart"
                        onClick={() =>
                          dispatch(decrease_qty({ product: item }))
                        }
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>

                  {/* <div className='cart-item-price'></div> */}
                </div>
              );
            })}
          </div>

          <div className="bg-white m-[10px] md:max-w-[500px] md:w-[400px] p-6 rounded-md">
            <h2 style={{ color: "#FF5722" }}>Cart Summary</h2>

            <div className="m-[5px] d_flex">
              <h4>Total Price:</h4>
              <h3 style={{ color: "#FF5722" }}>
                {currency} {totalPrice * rates[currency]}
              </h3>
            </div>
            <div>
              <div className="mt-[20px]">
                <h2 style={{ color: "#FF5722" }} className="">Delivery Method</h2>
                <select onChange={(e) =>  setMethod(e.target.value)} className="m-[10px] px-[30px] py-[5px] border-solid border-[2px] border-black rounded-md bg-white">
                  <option value="Pick Up">Pick Up</option>
                  <option value="Delivery">Delivery</option>
                </select>

                {
                  method === "Delivery" && (
                    <div className="w-full flex flex-col gap-2 mt-[10px]">
                   <label className="text-[#FF5722]">Location</label>
                   <input type="text" onChange={(e) => setLocation(e.target.value)} className="border-solid border-[2px] borderblack rounded-md px-[2px] py-[4px]"/>
                </div>
                  )
                }
                
              </div>
            </div>
          </div>

        </div>

        <div className="w-full flex flex-col items-center md:mt-[50px] justify-center text-[37px] font-serif">
          
          {/* <button className="">CheckOut</button> */}
          {/* <h1>Pay To </h1>
          <div className="flex text-[25px] gap-8 mt-[20px]">
            <div className="flex justify-center items-center gap-2">
              <div className="w-[50px] h-[50px]">
                <img
                  src={mtn}
                  alt="mtn"
                  className="w-[100px] h-[100px] rounded-md"
                />
              </div>
              <h1>+256 776521504</h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-[50px] h-[50px]">
                <img
                src={airtel}
                alt="airtel"
                className="w-full h-full rounded-md"
              />
              </div>
              +256 750689091
            </div> 
            
          </div>
          {/* <div className="flex justify-center items-center gap-8 mt-3">
            <div
              onClick={handleCheckOut()}
              className="w-[200px] h-[200px] hover:scale-110 duration-500 shadow-md hover:shadow-xl"
            >
              <img src={mtn} alt="mtn" className="w-full h-full rounded-md" />
            </div>
            <div
              onClick={handleCheckOut()}
              className="w-[200px] h-[200px] hover:scale-110 duration-500 shadow-md hover:shadow-xl "
            >
              
            </div>
          </div> */}

          <button
            onClick={handleCheckOut}
            className="hover:bg-[#FF5722] border-solid border-[2px] border-[#FF5722] p-4 rounded-md font-bold text-[#FF5722] duration-500 shadow-xl hover:text-white text-[20px]"
          >
            {
              loading ? "Loading..." :"Proceed To Checkout"
            }
            
          </button>
        </div>
      </section>
      <Wrapper />
      <Footer />
    </>
  );
};

export default Cart;
