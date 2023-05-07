import React from 'react'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Wrapper from '../components/wrapper/Wrapper'

const Profile = ({CartItem}) => {
    const user = useSelector((state) => state.users.currentUser)
    // console.log("user object ==>", user)

  return (
    <div className=''>
        <Header CartItem={CartItem} />
        <div className='bg-[#f6f9fc] relative flex justify-center items-center p-4 font-serif'>
            {user === null ? (
                <div className='md:m-[100px] font-serif flex flex-col justify-center items-center'>
                    <p className='md:text-[35px]'>You are not Logged In</p>
                    <Link to="/login"><button className='bg-[#FF5722] p-2 px-[35px] text-white shadow-md rounded-md text-[25px]'>Login</button> </Link>
                </div>
            ) : (
                <div className='m-[50px] flex flex-col w-full items-center justify-center gap-10'>
                    
                    <div className='flex gap-10 justify-around items-center bg-white p-4 shadow-md  rounded-md  md:w-[60%]'>
                        <div className='text-[50px] bg-[#f6f9fc] md:w-[120px] md:h-[120px] flex justify-center items-center rounded-full'>
                            <i className='fa fa-user'></i>
                        </div>
                        <div>
                            <h4>John Doe</h4>
                            <h4>johndoe@gmail.com</h4>
                        </div>
                    </div>

                    <div className='bg-white md:w-[60%] p-4 shadow-md rounded-md'>
                        <h4 className='text-[40px] text-[#FF5722] font-bold p-4'>Orders</h4>
                        <ul className='ml-[100px] mt-[50px] gap-5 flex flex-col text-[25px]'>
                            <li className='flex gap-[100px]'>Order 5763 <p className='text-red-500'>pending</p></li>
                            <li className='flex gap-[100px]'>Order 5763 <p className='text-green-500'>Compelete</p></li>
                            <li className='flex gap-[100px]'>Order 5763 <p className='text-orange-500'>Cancelled</p></li>
                            <li className='flex gap-[100px]'>Order 5763 <p className='text-red-500'>pending</p></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
        <Wrapper />
        <Footer />
    </div>
  )
}

export default Profile