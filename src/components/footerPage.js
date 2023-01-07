import React from 'react'

function FooterPage() {
  return (
    <>
      <div className='footer_parent_container'>
        <div class='container footer-container'>
          <div class='row '>
            <div class='col-lg-6'>
              <ul className='ul1'>
                <li>
                  <img alt='logo' class='logo_img' src='./logo.png' />
                </li>
                <li>
                  <p>Freedom solution and associates from all services related to taxation.</p>
                </li>

                <li>
                  <button className='read_more'>Read More</button>
                </li>
              </ul>
            </div>
            <div class='col-lg-4 '>
              <ul className='ul2'>
                <li className='title_'> Contact Info</li>
                <li>
                  <i class='fa fa-map-marker' aria-hidden='true'></i>
                  B-80, Near Nav Gyan Jyoti Public School ,Gali No. 6,New Usmanpur,New Delhi,North East Delhi,Delhi
                  110053
                </li>
                <li>
                  <i class='fa fa-phone' aria-hidden='true'></i>
                  +91 8287263997
                </li>
                <li>
                  <i class='fa fa-envelope-o' aria-hidden='true'></i>
                  tax.fsa.preparation@gmail.com
                </li>
                <li>
                  <i class='fa fa-clock-o' aria-hidden='true'></i>
                  Mon - Fri: 10:00 am - 06.00 pm
                </li>
              </ul>
            </div>
            <div class='col-lg-2'>
              <ul className='ul3'>
                <li className='title_'>Company</li>
                <li>Home</li>
                <li>About </li>
                <li>Services </li>
                <li>Contact US </li>
                <li>Portfolio </li>
              </ul>
            </div>
          </div>

          <div className='row'>
            <hr />
            <div className='footer_last_div'>
              <div className='footer_last_chid'>
                <i class='fa fa-facebook-official' aria-hidden='true'></i>
                <i class='fa fa-instagram' aria-hidden='true'></i>
                <i class='fa fa-twitter-square' aria-hidden='true'></i>
                <i class='fa fa-linkedin-square' aria-hidden='true'></i>
              </div>
              <div className='footer_last_chid2 '>
                &#169; copyright 2023.
                <br />
                Nautics Technology.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterPage
