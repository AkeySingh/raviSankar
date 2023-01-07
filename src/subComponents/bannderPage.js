import React from 'react'
import './subComp.css'

function BannderPage() {
  return (
    <>
      <div id='carouselExample' className='container-fluid  carousel slide'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='h1_title'>
              <h1 className='h1'>Best Tax Consultency In Delhi</h1>
              <button>Get Started</button>
            </div>
            <img src='./istockphoto01.jpg' className=' banner_img d-block w-100' alt='...' />
          </div>
          <div className='carousel-item'>
            <div className='h1_title'>
              <h1 className='h1'>Legal Guidance and Consultant</h1>
              <button>Get Started</button>
            </div>
            <img src='./VBV-Blog02.jpg' className=' banner_img d-block w-100' alt='...' />
          </div>
          <div className='carousel-item'>
            <div className='h1_title'>
              <h1 className='h1'>Tax Solutions 1 Step</h1>
              <button>Get Started</button>
            </div>
            <img src='./flat-lay-business03.webp' className=' banner_img d-block w-100' alt='...' />
          </div>
        </div>
        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExample' data-bs-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button className='carousel-control-next' type='button' data-bs-target='#carouselExample' data-bs-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  )
}

export default BannderPage
