import React,{useState} from 'react'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import child from "../assets/chil.png"
import Wrapper from '../components/wrapper/Wrapper'
import Axios from 'axios'

const Contact = ({CartItem}) => {
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
  return (
    <div>
        <Header CartItem={CartItem}/>
        <div className='w-full bg-[#f6f9fc] p-4 m-1 flex font-serif justify-center items-center box-border flex-col'>
           <h2 className='text-[47px] text-orange-500 font-bold'>About Us</h2>
            <div className='flex mt-[20px] gap-8 w-[80%] justify-center items-center'>
              <div className='w-[700px] h-[400px] bg-white shadow-md'>
                  <img src={child} alt="about" className='w-full h-full rounded-md cover'/>
              </div>
              <div className=' bg-white flex flex-wrap shadow-md rounded-md'>
                <p className=' w-[700px] h-[400px] flex-wrap text-start flex p-4'>
                  k1l32lk wkk wkkwkwl wlwllw oo21 i02op wjpqjw pjPNQW ONQOI HQPIH PIJQPOJ
                  
                  PIJWQPIW IWQ PWJPIW JPWJQPJWQP JWQPWJQPJ QWP JWPJ WPJWPW JQP WJQPWJP QWJPJ WPJ WPJQWP
                </p>
              
              </div>
            </div>

            <div className='md:w-[77%] shadow-md rounded-md p-4 mt-[50px] bg-white flex justify-center items-center'>
            {/* <form onSubmit={handleSubmit}>
          <input type='file' onChange={(e) => setImage(e.target.files[0])} accept='image/*'/>
          <button type='submit' className='bg-red-500 p-4'>Upload</button>
        </form> */}
            </div>
            <Wrapper />
        </div>
        <Footer />
    </div>
  )
}

export default Contact