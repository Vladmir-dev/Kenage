import React, { useState } from "react"
import { Link } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.css'
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../features/reducers/authSlice"

const Navbar = () => {
  const dispatch = useDispatch()
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)

  const [show, setShow] = useState(false)
  const token = useSelector((state) => state.users.token)
  return (
    <>
      <header className='header shadow-md bg-white '>
        <div className='container d_flex'>
          {/* <div className='catgrories d_flex hidden md:block'>
            <span className='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div> */}

          <div className='navlink flex justify-between w-full items-center'>

            <ul className={MobileMenu ? "nav-links-mobile" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'>home</Link>
              </li>
              
                <li>
                
                  <Link to='/shop'>Shop</Link> </li>

                {/* {
                  show && (
                    <ul className="duration-500 absolute mt-[50px] px-[15px] shadow-md bg-white">
                  <Link to="/adults"><li className="">Adults</li> </Link>
                  <Link to="/children"><li>Children</li> </Link>
                </ul>
                  )
                } */}
                
              <li>
                <Link to='/profile'>user account</Link>
              </li>
          
              <li>
                {/* <Link to='/track'>track my order</Link> */}
              </li>

              <li>
                <Link to='/contact'>About</Link>
              </li>
              
              <li className="md:hidden flex justify-center">
              <div className="flex justify-center rounded-full bg-[#f6f9fc] md:p-[18px] p-[8px]">
              <Link>
              <i className='fa fa-user'></i>
              </Link>
              
            </div>
            <div className=''>
              <Link to='/cart'>
              <i className='fa fa-shopping-bag p-2 bg-[#f6f9fc] rounded-full'></i>
                {/* <span className="px-2 md:py-[2px] rounded-full md:text-[10px] text-white" style={{background:'#FF5722'}}>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
              </Link>
            </div>
              </li>
            </ul>
            {token ? (
              <button onClick={() => dispatch(logout())} className="bg-[#FF5722] p-2 px-4 hover:text-[#FF5722] hover:bg-white hover:border-solid hover:-border-[2px] duration-500 text-white rounded-md font-bold m-4">Log Out</button>
            ):(
               <div className="hidden md:block">
              <Link to="/signup">
              <button className="bg-[#FF5722] p-2 px-4 hover:text-[#FF5722] hover:bg-white hover:border-solid hover:-border-[2px] duration-500 text-white rounded-md font-bold m-4">Sign up</button>
              </Link>
              <Link to="/login">
              <button className="bg-[#FF5722] p-2 px-4 hover:text-[#FF5722] hover:bg-white hover:border-solid hover:-border-[2px] duration-500 text-white rounded-md font-bold m-4">login</button>
              </Link>
              
            </div>
            ) }
           

            <button className='md:hidden' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
