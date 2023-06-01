import React, { useState } from "react";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import child from "../assets/chil.png";
import Wrapper from "../components/wrapper/Wrapper";
import Axios from "axios";
import vision from "../assets/vision.jpg";
import city from "../assets/city.png";
import mission from "../assets/mission.jpg";

const Contact = ({ CartItem }) => {
  // const [image,setImage] = useState(null)

  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODgzNTQ1MTF9.s5id-sJm-HM-l-ijtFtH08mF6IIK0NpYtV6_B9cZSGw"
  // const handleSubmit = (event) => {
  //   event.preventDefault()

  //   if(image){
  //     const formdata = new FormData()
  //     formdata.append('photo', image)
  //     for(let [key, value] of formdata){
  //       console.log(`${key}: ${value}`)
  //     }
  //     Axios.post('http://localhost:8000/api/v1/auth/profile_photo/2/',
  //     formdata,
  //      {
  //       Headers:{'Authorization':`Bearer ${token}`}
  //      }
  //     ).then((res) => console.log("response ==>",res.data)).catch((err) => console.log(err))
  //     // console.log(formdata)
  //   }
  // }

  const values = [
    {
      text:"Offering a wide range of trendy and fashionable footwear and clothing options for adults and kids"
    },
    {
      text:" Providing a user-friendly and intuitive online platform that ensures a seamless shopping experience"
    },
    {
      text:"Curating a selection of high-quality products from reputable brands and designers"
    },
    {
      text:"Delivering exceptional customer service and personalized assistance to meet individual needs and preferences."
    },
    {
      text:"Embracing innovation and leveraging technology to enhance the overall shopping experience."
    },
    {
      text:"Ensuring transparency, trust, and security in all transactions and interactions with our customers"
    },
    {
      text:"Fostering a positive and inclusive community where fashion enthusiasts can connect, share, and be inspired"
    }
  ]
  const bgImageStyle = {
    // backgroundImage: `url(${leaves})`,
    // backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // transition: "background 0.6s ease-in-out",
    // backgroundAttachment:'fixed',
    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), rgba(129, 216, 208, 1)), url(${city})`,
  };

  return (
    <div>
      <Header CartItem={CartItem} />
      <div
        style={bgImageStyle}
        className="w-full h-[400px] text-[47px] font-bold flex items-center justify-center"
      >
        <h1>Know Us</h1>
      </div>
      <div className="w-full bg-[#f6f9fc] p-4 m-1 flex font-serif justify-center items-center box-border flex-col">
        {/* <h2 className="text-[47px] text-orange-500 font-bold">About Us</h2> */}
        <div className="flex flex-col mt-[20px] gap-8 w-[80%] justify-center items-center">
          {/* <div className='w-[700px] h-[400px] bg-white shadow-md '>
                  <img src={child} alt="about" className='w-full h-full rounded-md cover'/>
              </div> */}
          <h1 className="text-[45px]">Vision</h1>
          <div className="flex justify-around h-[300px]">
            <div className="h-full w-[300px] hidden md:block">
              <img
                src={vision}
                className="w-full rounded-full h-full"
                alt="vision"
              />
            </div>
            <div className=" bg-white flex flex-wrap justify-center items-center shadow-md rounded-md h-full md:w-[50%]">
              <p className="flex-wrap md:text-[25px] text-center flex p-2 text-gray-700 italic">
                To become the premier online destination for fashionable
                footwear and clothing, offering a wide selection for adults and
                kids, and providing a seamless and enjoyable shopping
                experience.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-[50px] gap-8 w-[80%] justify-center items-center">
          <h1 className="text-[35px]">Mission</h1>
          <div className="flex h-[300px] justify-around items-center gap-10">
            <div className="w-[300px] h-full hidden md:block">
              <img
                src={mission}
                alt="about"
                className="w-full h-full rounded-full cover"
              />
            </div>
            <div className=" bg-white flex flex-wrap shadow-md rounded-md h-full md:w-[50%]">
              <p className="flex-wrap md:text-[25px] text-center flex p-2 text-gray-700 italic">
                Our mission is to empower individuals to express their unique
                style through high-quality footwear and clothing options. We
                strive to curate a diverse collection that caters to different
                tastes, ages, and occasions. By combining convenience,
                affordability, and exceptional customer service, we aim to
                exceed customer expectations and foster long-term relationships.
                {/* <ul className="flex flex-col mt-[50px] ml-[100px] justify-start items-start">
                  <li>
                    1. Offering a wide range of trendy and fashionable footwear
                    and clothing options for adults and kids.
                  </li>
                  <li>
                    2. Providing a user-friendly and intuitive online platform
                    that ensures a seamless shopping experience.
                  </li>
                  <li>
                    3. Curating a selection of high-quality products from
                    reputable brands and designers.
                  </li>
                  <li>
                    4. Delivering exceptional customer service and personalized
                    assistance to meet individual needs and preferences.
                  </li>
                  <li>
                    5. Embracing innovation and leveraging technology to enhance
                    the overall shopping experience.
                  </li>
                  <li>
                    6. Ensuring transparency, trust, and security in all
                    transactions and interactions with our customers.
                  </li>
                  <li>
                    7. Fostering a positive and inclusive community where
                    fashion enthusiasts can connect, share, and be inspired.
                  </li>
                </ul> */}
              </p>
            </div>
          </div>
          <div className="mt-[50px] flex justify-center items-center flex-col">
          <h1 className="text-[35px]">Our Values</h1>
          <div className="flex gap-2 md:w-[1200px] justify-center items-center p-2 flex-wrap mt-[20px]">
              {
                values.map((item, index) => (
                  <div className="w-[250px] text-[20px] p-[2px] rounded-md flex flex-col justify-center items-center h-[250px] bg-slate-300 shadow-md">
                    <div className="w-full h-[20%] flex justify-center items-center">
                      <h1 className="text-[30px] font-bold text-white top-0">{index}</h1>
                    </div>
                    <div className="w-full h-[80%]">
                      <p className="text-center">{item.text}</p>
                    </div>
                    
                  </div>
                ))
              }
          </div>
          </div>
        </div>

        <div className="md:w-[77%] shadow-xl rounded-md p-4 mt-[50px] bg-white flex justify-center items-center">
          <div className="md:mt-[100px] mt-[50px] flex gap-5 flex-col justify-center p-4 items-center md:mb-[100px]">
            <div className="flex gap-5 justify-center items-center">
              <div>
                <input
                  placeholder="Name"
                  className="md:w-[500px] w-[180px] placeholder-black placeholder:text-[20px] :h-[40px] rounded-md border-solid border-black border-[1px] p-2 text-black  bg-[#f6f9fc]"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Email"
                  className="md:w-[500px] w-[180px] placeholder-black placeholder:text-[20px] :h-[40px] rounded-md border-solid border-black border-[1px] p-2 text-black  bg-[#f6f9fc]"
                  type="text"
                />
              </div>
            </div>

            <div className="flex gap-5 justify-center items-center">
              <div>
                <input
                  placeholder="Phone"
                  className="md:w-[500px] w-[180px] placeholder-black placeholder:text-[20px] :h-[40px] rounded-md border-solid border-black border-[1px] p-2 text-black  bg-[#f6f9fc]"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="YY/MM/DD"
                  className="md:w-[500px] w-[180px] placeholder-black placeholder:text-[20px] :h-[40px] rounded-md border-solid border-black border-[1px] p-2 text-black  bg-[#f6f9fc]"
                  type="text"
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <textarea className="md:w-[1020px] w-[380px] md:h-[200px] h-[200px] border-solid border-black border-[1px] align-top text-white bg-[#f6f9fc] laeding-normal p-[10px]">
                New Message
              </textarea>
            </div>
            <div className="flex justify-center items-center md:mt-[20px]">
              <button className="bg-white p-4 rounded-xl md:text-[25px] border-solid border-[#FF5722] hover:bg-[#FF5722] hover:text-white duration-500 border-[2px]  font-bold text-[#FF5722]">
                Submit
              </button>
            </div>
          </div>
        </div>
        <Wrapper />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
