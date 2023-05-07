import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"
import '@fortawesome/fontawesome-free/css/all.css'


const Header = ({ CartItem }) => {
  return (
    <div className="">
      <Head />
      <Search CartItem={CartItem} />
      <Navbar />
    </div>
  )
}

export default Header
