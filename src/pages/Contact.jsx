import React from 'react'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import child from "../assets/chil.png"
import Wrapper from '../components/wrapper/Wrapper'

const Contact = ({CartItem}) => {
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
              jjdjekek
            </div>
            <Wrapper />
        </div>
        <Footer />
    </div>
  )
}

export default Contact