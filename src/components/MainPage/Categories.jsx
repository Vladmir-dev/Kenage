import React from "react"
import { Link } from "react-router-dom"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Adults",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Children",
    },
    
  ]

  return (
    <>
      <div className='category hidden md:block'>
        {data.map((value, index) => {
          return (
            <Link key={index} to={`/${value.cateName.toLocaleLowerCase()}`}>
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Categories
