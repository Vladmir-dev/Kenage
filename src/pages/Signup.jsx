import React, { useState } from "react";
import adults from "../assets/adults.jpg";
import logo from "../assets/kenage.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../features/actions";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const loading = useSelector((state) => state.users.isLoading);
  const error = useSelector((state) => state.users.error);
  const message = useSelector((state) => state.users.message);

  console.log("eror", error);

  const handleSignUp = () => {
    if (password && email && first_name && last_name) {
      // console.log("email", email);
      // console.log("password", password);
      // console.log("username", username);
      const data = JSON.stringify({ first_name, last_name, email, password });
      console.log("data===>", data);
      dispatch(signup(data));

      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");

      // if (message !== null) {
      //   navigate("/otp");
      // }
    } else {
      console.log("Please Provide Login Details");
    }
  };

  return (
    <div className="flex w-full justify-center items-center font-serif">
      <div className="w-[60%] hidden md:block h-full flex justify-center items-center bg-blue-500">
        <img src={adults} alt="bg" className="w-full h-[100vh]" />
      </div>
      <div className="md:w-[40%] w-full h-[100vh] md:p-4 p-[20px]  flex flex-col justify-center items-center">
        <h1 className="text-[47px] text-orange-500 mb-[20px]">Sign Up</h1>
        <img src={logo} alt="logo" className="w-[150px]" />
        {/* {password} */}
        <div className="p-2  w-[80%] shadow-2xl  rounded-md mt-[30px] flex flex-col">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2 border-solid border-[1px] rounded-md m-4"
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            className="p-2 border-solid border-[1px] rounded-md m-4"
          />
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border-solid border-[1px] rounded-md m-4"
          />
          {/* <input type="text" placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} className='p-2 border-solid border-[1px] rounded-md m-4'/> */}
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border-solid border-[1px] rounded-md m-4"
          />
          <button
            onClick={handleSignUp}
            className="border-solid border-[1px] m-4 p-2 rounded-md border-orange-500 text-orange-500 text-[25px] font-bold hover:bg-orange-500 hover:text-white duration-500"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
          {/* <div>{error === null ? <div></div> : <p>{error}</p>}</div> */}
        </div>
        <div className="mt-[20px] text-[20px] flex flex-col justify-center items-center gap-3">
          {message !== null && <p className="text-green-500">{message}</p>}
          <p className="flex gap-2">
            Already have an account ?{" "}
            <Link to="/login">
              <h1 className="cursor-pointer underline text-blue-500">Login</h1>
            </Link>
          </p>
          {/* <p>Forgot Password ?</p> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
