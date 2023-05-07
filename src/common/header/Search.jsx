import React from "react"
import logo from "../../components/assets/images/kenage.png"
import { Link } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.css'


const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='md:py-[20px] md:px-[0px] py-[15px] px-[0px] bg-white'>
        <div className='container c_flex'>
          <div className='logo width '>
          <img src={logo} alt='logo' className="md:w-[100px] w-[80px]" />
          </div>
          <div className='search-box f_flex md:mr-0 mr-[35px]'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search & hit enter...' />
            <span className="hidden md:block">All Category</span>
          </div>

          <div className="hidden md:block">
            <div className='icon flex justify-center items-center md:gap-5 gap-2'>
              <Link to="/profile">
              <div className="flex justify-center rounded-full bg-[#f6f9fc] md:p-[18px] p-[8px]">
              <i className='fa fa-user'></i>
            </div>
              </Link>
            
            
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag md:p-4 p-2 bg-[#f6f9fc] rounded-full'></i>
                <span className="px-2 md:py-[2px] rounded-full md:text-[10px] text-white" style={{background:'#FF5722'}}>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Search
