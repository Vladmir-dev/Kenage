import React,{useEffect} from 'react'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Wrapper from '../components/wrapper/Wrapper'
import { get_user } from '../features/actions'

const Profile = ({CartItem}) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.users.currentUser)
    const token = useSelector((state) => state.users.token)
    console.log("user ==>", user)

    useEffect(() => {
        dispatch(get_user(token));
    },[])

  return (
    <div className=''>
        <Header CartItem={CartItem} />
        <div className='bg-[#f6f9fc] relative w-full flex justify-center items-center p-4 font-serif'>
            {user === null ? (
                <div className='md:m-[100px] font-serif flex flex-col justify-center items-center'>
                    <p className='md:text-[35px]'>You are not Logged In</p>
                    <Link to="/login"><button className='bg-[#FF5722] p-2 px-[35px] text-white shadow-md rounded-md text-[25px]'>Login</button> </Link>
                </div>
            ) : (
                <div className='m-[50px] flex flex-col w-full items-center justify-center gap-10 '>
                    
                    <div className='flex flex-col gap-10 justify-around items-center bg-white p-4  shadow-md  rounded-md  md:w-[60%]'>
                        <div className='text-[50px] bg-[#f6f9fc] md:w-[120px] md:h-[120px] flex mt-[50px] justify-center items-center rounded-full'>
                            <i className='fa fa-user'></i>
                        </div>
                        <div>
                            {/* <h4>{user.username}</h4> */}
                            <div className='flex flex-col jsutify-center items-center w-full gap-10 md:p-0 p-10 mb-[50px]'>
                                <div className='flex md:flex-row flex-col md:gap-[200px] w-full'>
                                    <div>
                                        <h4 className='text-[25px] font-bold'>Username</h4>
                                        <h4>{user.username}</h4>
                                    </div>
                                    <div>
                                        <h4 className='text-[25px] font-bold'>Email</h4>
                                        <h4>{user.email}</h4>
                                    </div>
                                    
                                </div>
                                <div className='flex md:flex-row flex-col  md:gap-[200px] w-full'>
                                    <div>
                                        <h4 className='text-[25px] font-bold'>
                                            FIrst Name
                                        </h4>
                                        <h4>{user.first_name}</h4>
                                    </div>
                                    <div>
                                        <h4 className='text-[25px] font-bold'>Last Name</h4>
                                        <h4>{user.last_name}</h4>
                                    </div>
                                    
                                </div>
                            </div>
                            {/* <h4>johndoe@gmail.com</h4> */}
                        </div>
                    </div>

                    <div className='bg-white md:w-[60%] p-4 shadow-md rounded-md'>
                        <h4 className='text-[40px] text-[#FF5722] font-bold p-4'>Orders</h4>
                        <ul className='md:ml-[100px] mt-[50px] gap-5 justify-center flex flex-col md:p-0 p-20 text-[25px]'>
                            <li className='flex md:flex-row flex-col md:gap-[100px] gap-[20px]'>Order 5763 <p className='text-red-500'>pending</p></li>
                            <li className='flex md:flex-row flex-col md:gap-[100px] gap-[20px]'>Order 5763 <p className='text-green-500'>Compelete</p></li>
                            <li className='flex md:flex-row flex-col md:gap-[100px] gap-[20px]'>Order 5763 <p className='text-orange-500'>Cancelled</p></li>
                            <li className='flex md:flex-row flex-col md:gap-[100px] gap-[20px]'>Order 5763 <p className='text-red-500'>pending</p></li>
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