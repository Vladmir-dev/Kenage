import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import usflag from "../../assets/usflag.jpg";
import { setCurrency } from "../../features/reducers/currencySlice";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";

const Head = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency.Currency);
  const handleChange = (event) => {
    console.log("event value", event.target.value);
    setValue(event.target.value);
    // console.log("currency value after",value);
    dispatch(setCurrency(event.target.value));
  };

  return (
    <>
      <section className="head hidden md:block">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label> +256 776521504</label>
            <i className="fa fa-envelope"></i>
            <label>info@kenagecoll.com</label>
          </div>
          <div className="right row RText flex">
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <span>🏳️‍⚧️</span>
            <label>EN</label>
            <div className="flex justify-center items-center gap-4">
              <select
                value={value}
                onChange={handleChange}
                className="bg-white text-black"
              >
                <option value="UGX">UGX</option>

                <option value="USD">USD</option>

                <option value="SSP">SSP</option>
              </select>
              <label className="text-[29px]">Currency</label>
            </div>
            {/* <span>🏳️‍⚧️</span>
            <label>USD</label> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
