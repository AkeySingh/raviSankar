import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './collectStepper.css'
import FacebookIcon from '@mui/icons-material/Facebook'

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 778 ? (window.innerWidth > 1040 ? 3 : 2) : 1,
    slidesToScroll: 1,
    cssEase: 'linear',
  }

  console.log(window.innerWidth)

  return (
    <>
      <div className='carousel'>
        <h4 className='slider_title'>What we bring to you</h4>
        <Slider {...settings}>
          <div className='card-wrapper '>
            <div className='card '>
              <div className='card-image'>
                <img alt='img' src='./income-tax-return.webp' />
              </div>
              <ul className='social-icons'>
                <li>
                  <Link to='/'>
                    <i className='fa fa-facebook '></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='fa fa-instagram'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='fa fa-twitter'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='fa fa-dribbble'></i>
                  </Link>
                </li>
              </ul>
              <div className='details'>
                <h2>
                  Return Filing<span className='job-title'>Filing Income Tax</span>
                </h2>
              </div>
            </div>
          </div>
          <div className='card-wrapper col-4'>
            <div className='card'>
              <div className='card-image'>
                <img alt='img' src='./trade.jpg' />
              </div>
              <ul className='social-icons'>
                <li>
                  <Link to='/'>
                    <i className='fa fa-facebook'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='fa fa-instagram'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='fa fa-twitter'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='fa fa-dribbble'></i>
                  </Link>
                </li>
              </ul>
              <div className='details'>
                <h2>
                  John Doe <span className='job-title'>UI Developer</span>
                </h2>
              </div>
            </div>
          </div>
          <div className='card-wrapper col-4'>
            <div className='card'>
              <div className='card-image'>
                <img alt='img' src='why_use.jpg' />
              </div>
              <ul className='social-icons'>
                <li>
                  <Link to='/'>
                    <i className='fa fa-facebook'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='fa fa-instagram'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='fa fa-twitter'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='fa fa-dribbble'></i>
                  </Link>
                </li>
              </ul>
              <div className='details'>
                <h2>
                  John Doe <span className='job-title'>UI Developer</span>
                </h2>
              </div>
            </div>
          </div>
          <div className='card-wrapper col-4'>
            <div className='card'>
              <div className='card-image'>
                <img alt='img' src='./istockphoto01.jpg' />
              </div>
              <ul className='social-icons'>
                <li>
                  <Link to='/'>
                    <i className='fa fa-facebook'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='fa fa-instagram'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='fa fa-twitter'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='fa fa-dribbble'></i>
                  </Link>
                </li>
              </ul>
              <div className='details'>
                <h2>
                  John Doe <span className='job-title'>UI Developer</span>
                </h2>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default ImageSlider
