import React from 'react'
import { Link } from 'react-router-dom'
import adul from '../assets/adults.jpg'
import child from '../assets/chil.png'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import Wrapper from '../components/wrapper/Wrapper'

const Shop = ({CartItem}) => {
  const style1 = {
    backgroundImage: `url(${adul})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      width:'600px',
      // height: height,
      transition: "background 0.6s ease-in-out",
  }

  return (
    <>
    <Header CartItem={CartItem}/>
    <section className='mt-[70px] mb-[70px] flex md:flex-row flex-col justify-center items-center gap-10'>
      <Link to='/adults'>
      <div
      //  style={style1} 
       className='shadow-2xl md:w-[600px] w-[300px] hover:scale-110 duration-500'
       >
        <img src="./images/adults.jpg" alt="adult" className='rounded-md md:h-[400px] '/>
        <div className='w-full'>
          <h1 className='font-serif text-center text-orange-500 text-[47px]  w-full'>Adults</h1>
        </div>
        
      </div>
      </Link>
      
      <Link to="/children">
      <div className='shadow-2xl md:w-[600px] w-[300px] hover:scale-110 duration-500'>
        <img src={child} alt="adult" className='rounded-md md:h-[400px] '/>
        <h1 className=' font-serif text-[47px] text-center text-orange-500  w-full'>Children</h1>
      </div>
      </Link>
      
    </section>
    <Wrapper />
    <Footer />
    </>
  )
}

export default Shop