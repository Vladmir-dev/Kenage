import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Clothes",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Shoes",
    },
    
  ]

  return (
    <>
      <div className='category hidden md:block'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
