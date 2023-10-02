import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { useParams } from "react-router";
import "@fortawesome/fontawesome-free/css/all.css";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Wrapper from "./wrapper/Wrapper";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
// import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const Checkout = ({ CartItem }) => {
  const [value, setValue] = useState("");
  const state = useSelector((state) => state.addItem);
  const rates = useSelector((state) => state.currency.rates);
  const currency = useSelector((state) => state.currency.selectedCurrency);
  const cart = useSelector((state) => state.cart.cartItems);

//   const sp = useParams();
//   console.log("service provider",sp.id)
  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  var total = 0;

//   const handlepay = async () => {
//     if (value === "") {
//       console.log("Please fill in details");
//     } else {
//       const tokenUrl = "https://sandbox.momodeveloper.mtn.com/collection/token/";
//       await axios
//         .post(tokenUrl, {
//           headers: {
//             "Content-Type": "application/json",
//             "X-Reference-Id": "123456789",
//             "Ocp-Apim-Subscription-key": "06fc21a3ac1c4384931ea2d69e70deb6",
//           },
//         })
//         .then((res) => {
//           console.log("token", res);
//           const token = res.data.access_token;
//           console.log(token);
//           const paymentUrl = "https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay";

//           axios
//             .post(paymentUrl, {
//               amount: totalPrice * rates[currency],
//               currency: currency,
//               externalId: "123456789",
//               payer: {
//                 partyIdType: "MSISDN",
//                 partyId: value.slice(1),
//               },
//               payerMessage: "Payment for items in cart",
//               PayeeNote: "Payment for items in cart",
//             })
//             .then((res) => {
//               console.log("Payment request", res);
//               const paymentId = res.data.paymentId;
//               const paymentUrl = "" + paymentId;
//               axios.get(paymentUrl).then((res) => {
//                 console.log("Payment request with id", res);
//                 //make an order next
//               });
//             });
//         })
//         .catch((err) => {
//           console.log("Payment failed");
//           console.log(er);
//         });
//     }
//   };

  //   const itemList = (item) => {
  //     total = totalPrice;
  //     return (
  //       <li className="list-group-item d-flex justify-content-between lh-sm">
  //         <div>
  //           <h6 className="my-0">{item.title}</h6>
  //         </div>
  //         <span className="text-muted">${item.price * rates[currency]}</span>
  //       </li>
  //     );
  //   };

  //   const config = {
  //     public_key: "FLWPUBK_TEST-f8006a9c64a016743f03067d5fbdc60a-X",
  //     tx_ref: Date.now(),
  //     amount: 100,
  //     currency,
  //     payment_options: "card,mobilemoney,ussd",
  //     customer: {
  //       email: "user@gmail.com",
  //       phone_number: "070********",
  //       name: "john doe",
  //     },
  //     customizations: {
  //       title: "Kenage",
  //       description: "Payment for items in cart",
  //       logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
  //     },
  //   };

  //   const fwConfig = {
  //     ...config,
  //     text: "Pay with Flutterwave",
  //     callback: (response) => {
  //       console.log(response);
  //       closePaymentModal(); // this will close the modal programmatically
  //     },
  //     onClose: () => {},
  //   };



  return (
    <>
      <Header CartItem={CartItem} />
      <div className="container my-5">
        {/* <h1>Hello Test user</h1> */}

        <div className="w-full flex flex-col justify-center items-center gap-8 mt-[50px]">
          <div className="flex flex-col gap-5 justify-center items-center">
            <label className="text-[25px]">Enter Phone Number</label>
            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="UG"
              value={value}
              onChange={setValue}
              style={{
                border: "solid 2px gray",
                borderRadius: 10,
                padding: 10,
              }}
            />
          </div>
          <div className="bg-white w-[250px] rounded-md p-2 text-[#FF5722] flex justify-center items-center border-solid hover:bg-[#FF5722] hover:text-white duration-500 border-[2px] border-[#FF5722]">
            Pay
            {/* <FlutterWaveButton {...fwConfig} /> */}
          </div>
        </div>

        {/* <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill"> {CartItem.length} Items</span>
                        </h4>
                        <ul className="list-group mb-3">

                            {cart.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>

                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code" />
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" novalidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" id="username" placeholder="Username" required="" />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address htmlFor shipping updates.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select className="form-select" id="country" required="">
                                        <option value="">Choose...</option>
                                        <option>United States</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <select className="form-select" id="state" required="">
                                        <option value="">Choose...</option>
                                        <option>California</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" />
                                <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info" />
                                <label className="form-check-label" htmlFor="save-info">Save this information htmlFor next time</label>
                            </div>

                            <hr className="my-4" />

                            <h4 className="mb-3">Payment</h4>

                            <div className="my-3">
                                <div className="form-check">
                                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                                    <label className="form-check-label" htmlFor="credit">Credit card</label>
                                </div>
                                <div className="form-check">
                                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="debit">Debit card</label>
                                </div>
                                <div className="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                </div>
                            </div>

                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label htmlFor="cc-name" className="form-label">Name on card</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                    <small className="text-muted">Full name as displayed on card</small>
                                    <div className="invalid-feedback">
                                        Name on card is required
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="cc-number" className="form-label">Credit card number</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Credit card number is required
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Expiration date required
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Security code required
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                        </form>
                    </div>
                </div> */}
      </div>
      <Wrapper />
      <Footer />
    </>
  );
};

export default Checkout;
