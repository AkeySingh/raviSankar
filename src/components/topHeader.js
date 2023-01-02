import React from 'react'
import { Link } from 'react-router-dom'
import CustumDrawer from '../reuseAbleComponents/custumDrawer'
// import CustumDrawer from '../reuseAbleComponents/custumDrawer'

function TopHeader() {
  return (
    <>
      <header className='main-header'>
        <div className='col-lg-12 top-navbar '>
          <div className='nav_flex'>
            <div className='nav_logo'>
              <div className='log_div'>
                <img className='logo_img' src='./logo.png' alt='logo' />
              </div>
            </div>
            <div className='nav_list_items'>
              <ul className='nav_ul'>
                <li>
                  <Link className='nav_link' to='/'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className='nav_link' to='/about'>
                    About
                  </Link>
                </li>
                <li>
                  <Link className='nav_link service' to='/service'>
                    Services
                  </Link>
                </li>
                <li>
                  <Link className='nav_link' to='/accounting'>
                    Accounting
                  </Link>
                </li>
                <li>
                  <Link className='nav_link' to='/Contact'>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <button className='nav_btn' to='/contact'>
                    Enquery
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <header className='main-header02'>
        <div>
          <div>
            <div className='log_div'>
              <img className='logo_img' src='./logo.png' alt='logo' />
            </div>
          </div>
          <div>
            <CustumDrawer />
          </div>
        </div>
      </header>
    </>
  )
}

export default TopHeader
