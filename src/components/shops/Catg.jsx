import React from "react"

const Catg = ({categories, setCateg}) => {
let cdata = []

  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Men's Clothes",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Women's Clothes",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Men's Shoes",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Women's Shoes",
    },
    
  ]

  if (categories != null){
     cdata = categories;
  }else{
     cdata = data;
  }

 console.log("categories",cdata)
  return (
    <>
      <div className='category hidden md:block'>
        <div className='chead '>
          <h1>Categories </h1>
          {/* <h1>Shops </h1> */}
        </div>
        {cdata.map((value, index) => {
          return (
            <div className='box f_flex' onClick={() => setCateg(value.cateName)}  key={index}>
              {/* <img src={value.cateImg} alt='' /> */}
              <span>{value.cateName}</span>
            </div>
          )
        })}
        {/* <div className='box box2'>
          <button>View All Brands</button>
        </div> */}
      </div>
    </>
  )
}

export default Catg
