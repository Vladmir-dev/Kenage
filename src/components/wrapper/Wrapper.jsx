import React from "react"
import "./style.css"
import '@fortawesome/fontawesome-free/css/all.css'


const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "East Africa Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range in East Africa.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Safe Payment",
      decs: "We provide secure payment options to ensure your personal and financial information is protected",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Shop With Confidence ",
      decs: "We curate a diverse range of high-quality products from trusted brands, so you can shop with confidence",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "24/7 Support ",
      decs: "We are here for you round the clock. Our dedicated customer support team is ready to assist you with any inquiries, concerns, or issues you may have",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container md:grid grid-cols-4'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title} </h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
