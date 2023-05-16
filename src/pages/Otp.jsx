import React, {useState} from 'react'
import logo from '../assets/kenage.png'
import { useSelector,useDispatch } from 'react-redux'
import { otp } from '../features/actions'

const Otp = () => {
    const [authOtp, setAuthOtp] = useState("")
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.users.isLoading)
    const message = useSelector((state) => state.users.message)

    // console.log("loading",loading)

  return (
    <div className='w-full flex flex-col font-serif  justify-center items-center h-[100vh] gap-10 bg-slate-100'>
        <div className='shadow-xl md:w-[25%] w-[90%] p-6 py-[80px] bg-white rounded-md'>
            <div className='flex justify-center items-center flex-col gap-10'>
        <h2 className='text-[47px] text-[#FF5722]'>Verification</h2>
        <img src={logo} alt="logo" className='w-[150px]'/>
        </div>
        <form onSubmit={() => dispatch(otp(authOtp))} className='flex flex-col gap-8 mt-[50px]'>
            <p className='text-center text-[20px]'>Check Your Email for a verification code</p>
            <input type="text" placeholder='Enter Code to verify account' onChange={(e) => setAuthOtp(e.target.value)} className='border-solid border-[2px] rounded-md p-4'/>
            <button
             type='submit'
              className='border-solid border-[2px] rounded-md p-2 border-[#FF5722] text-[#FF5722] hover:bg-[#FF5722] hover:text-white duration-500'
              >
              {loading ? "Loading...." : "Submit"}  
              </button>
              <div className='w-full flex justify-center items-center'>
                {message !== null && (<p className='text-green-500 text-[25px]'>{message}</p>)}
              </div>
              
        </form>
        </div>
        
        
    </div>
  )
}

export default Otp