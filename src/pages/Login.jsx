import React, {useState} from 'react'
import adults from '../assets/adults.jpg'
import logo from '../assets/kenage.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.users.isLoading)
    // console.log("Isloading", isLoading)

  return (
    <div className='flex w-full justify-center items-center font-serif'>
        <div className='w-[60%] hidden md:block h-full flex justify-center items-center bg-blue-500'>
            <img src={adults} alt="bg" className='w-full h-[100vh]'/>
        </div>
        <div className='md:w-[40%] w-full h-[100vh] md:p-4 p-[20px]  flex flex-col justify-center items-center'>
        <h1 className='text-[47px] text-orange-500 mb-[50px]'>Login</h1>
             <img src={logo} alt="logo" className='w-[150px]'/>
             {/* {password} */}
            <div className='p-2  w-[80%] shadow-2xl  rounded-md mt-[50px] flex flex-col'>
                <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} className='p-2 border-solid border-[1px] rounded-md m-4'/>
                <input type="text" placeholder='password'onChange={(e) => setPassword(e.target.value)} className='p-2 border-solid border-[1px] rounded-md m-4'/>
                <button className='border-solid border-[1px] m-4 p-2 rounded-md border-orange-500 text-orange-500 text-[25px] font-bold hover:bg-orange-500 hover:text-white duration-500'>
                   { !isLoading ? "Submit" :"Loading..." }
                </button>
            </div>
            <div className='mt-[20px] text-[20px] flex flex-col justify-center items-center gap-3'>
                <p className='flex gap-2'>Don't have and account ? <Link to="/signup"><h1 className='cursor-pointer'>Sign Up</h1></Link></p>
                <p>Forgot Password ?</p>
            </div>
        </div>
    </div>
  )
}

export default Login