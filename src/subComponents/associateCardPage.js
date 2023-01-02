import React from 'react'
import './subComp.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import CreditScoreIcon from '@mui/icons-material/CreditScore'
import SpeedIcon from '@mui/icons-material/Speed'

function AssociateCardPage() {
  return (
    <>
      <div className='associate_header'>
        <p>Welcome to the Freedom Solution & Associates</p>
        <h4>Tax Consultancy</h4>
      </div>
      <div className='container text-center'>
        <div className='row'>
          <div className='col-lg-4 col_4'>
            <div className='card card1'>
              <div className='card-body'>
                <AccountBalanceWalletIcon sx={{ fontSize: 40 }} />
                <h6 className='card-title'>Tax Collection at Source (TCS) </h6>
                <p className='card-text'>
                  What is Tax Collection at Source (TCS)? The e-commerce operator is required to collect an amount
                  calculated at the rate not exceeding one percent of the net value of taxable supplies made through it.
                </p>
                <button class='enquiry_btn'>
                  Enquiry Now <ArrowForwardIcon />
                </button>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col_4'>
            <div className='card card2'>
              <div className='card-body'>
                <CreditScoreIcon sx={{ fontSize: 40 }} />
                <h6 className='card-title'>Tax Deduction At Source (TDS)</h6>
                <p className='card-text'>
                  The concept of TDS was introduced with an aim to collect tax from the very source of income. As per
                  this concept, a person (deductor) who is liable to make payment of specified
                </p>
                <button class='enquiry_btn'>
                  Enquiry Now <ArrowForwardIcon />
                </button>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col_4'>
            <div className='card card3'>
              <div className='card-body'>
                <SpeedIcon sx={{ fontSize: 40 }} />
                <h6 className='card-title'>GST Challan</h6>
                <p className='card-text'>
                  Can a challan generated online be modified? No. After logging into GSTN portal for generation of
                  challan, payment particulars have to be fed in by the tax payer or his authorized person.
                </p>
                <button class='enquiry_btn'>
                  Enquiry Now <ArrowForwardIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AssociateCardPage
