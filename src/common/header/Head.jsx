import React from "react"
import '@fortawesome/fontawesome-free/css/all.css'


const Head = () => {
  return (
    <>
      <section className='head hidden md:block'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +256 776521504</label>
            <i className='fa fa-envelope'></i>
            <label>info@kenagecoll.com</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <span>🏳️‍⚧️</span>
            <label>EN</label>
            <span>🏳️‍⚧️</span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
