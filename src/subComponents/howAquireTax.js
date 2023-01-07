import React from 'react'
import './subComp.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import CreditScoreIcon from '@mui/icons-material/CreditScore'
import SpeedIcon from '@mui/icons-material/Speed'

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import CheckIcon from '@mui/icons-material/Check'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'

function HowAquireTax() {
  return (
    <>
      <div className='how_aquire_container '>
        <p className='slider_title'>How to acquire tax consultancy services</p>

        <div class='container mt-5 text-center'>
          <div className='five-steps p-4 bg-success text-light circle_div'>
            {' '}
            <h5 className='circle_div_title '>
              5 <br /> Easy Steps
            </h5>
          </div>
          <div class='row row_circle1'>
            <div class='col-md-6 circle_div_parent6'>
              <div className='circle_div circle_div1'>
                {' '}
                <h5 className='circle_div_title'>
                  1 <br /> Put up your query
                </h5>{' '}
              </div>
            </div>
            <div class='col-md-6 circle_div_parent6 '>
              <div className=' circle_div circle_div2'>
                {' '}
                <h5 className='circle_div_title'>
                  2 <br /> Choose the preferred time slot
                </h5>{' '}
              </div>
            </div>
          </div>

          <div class='row  row_circle2'>
            <div class='col-md-4 circle_div_parent4'>
              <div className='circle_div circle_div1'>
                {' '}
                <h5 className='circle_div_title'>
                  3 <br /> Make the Payment
                </h5>{' '}
              </div>
            </div>
            <div class='col-md-4 circle_div_parent4'>
              <div className='circle_div circle_div2'>
                {' '}
                <h5 className='circle_div_title'>
                  4 <br /> Session with Freedom expert
                </h5>{' '}
              </div>
            </div>
            <div class='col-md-4 circle_div_parent4'>
              <div className='circle_div circle_div3'>
                {' '}
                <h5 className='circle_div_title'>
                  5 <br />
                  Get Solution
                </h5>{' '}
              </div>
            </div>
          </div>
        </div>

        <div className='container-fluid mt-5 text-center'>
          <div className='row mt-5'>
            <div className='col-lg-4 mt-5 col_4 cardlen '>
              <div className='card card1 cardlen '>
                <div className='card-body cardlen'>
                  <h6 className='card-title'>Put Up Your Query & Provide The Documents </h6>
                  <CheckIcon sx={{ fontSize: 50 }} color='primary' />

                  <p className='card-text'>
                    When you will purchase our tax consultancy service, you will be directed to fill up your queries
                    along with any documents for e.g. any notices received from government department or returns or
                    taxation related queries etc. with all the possible details from your end to help you better. Also
                    attach documents if any and any relevant material related to your queries. Our compliance manager .
                  </p>
                  <button className='enquiry_btn'>
                    Enquiry Now <ArrowForwardIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mt-5 col_4'>
              <div className='card card2'>
                <div className='card-body'>
                  <h6 className='card-title'>Choose The Time slot & Make The Payment</h6>
                  <LibraryBooksIcon sx={{ fontSize: 50 }} color='primary' />
                  <p className='card-text'>
                    Then you will be given the options to choose from the available time slots to talk to our expert for
                    30 mins, 45 mins, or 60 mins. You can choose the time slot that is suitable to you and for the time
                    duration that you think your queries will take. The next thing you need to do is make the payment
                    for the time slot that you have chosen. In case you think your queries will take more than
                    prescribed time limit in one slot, you can purchase and pay for multiple sessions.
                  </p>
                  <button className='enquiry_btn'>
                    Enquiry Now <ArrowForwardIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mt-5 col_4'>
              <div className='card card3'>
                <div className='card-body'>
                  <h6 className='card-title'>Session With Expert To Give You Solution</h6>
                  <ContactPhoneIcon sx={{ fontSize: 50 }} color='primary' />
                  <p className='card-text'>
                    After you have chosen the time slot you will be assigned to an expert in the field who will be
                    eligible in solving all of your queries. The Freedom expert will call you as per the time slot
                    provided to you. On call the expert will try and give you the solution to all of your queries that
                    you have earlier informed us about and other queries related to the questions mentioned. The Freedom
                    expert will try their best to clear your doubts and will further assist you with any service related
                    matters.
                  </p>
                  <button className='enquiry_btn'>
                    Enquiry Now <ArrowForwardIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowAquireTax
