import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import './subComp.css'

function WhyWeUsePage() {
  return (
    <>
      <div className='whyuse_header'>
        <h3>Why choose us?</h3>

        <div className='container text-center'>
          <div className='row'>
            <div className='col-lg-6'>
              <img className='why_img p-4' src='./why_use.jpg' alt='Why' />

              {/* <div className='card card3'>
                <div className='card-body'>
                  <h6 className='card-title'>GST Challan</h6>
                  <p className='card-text'>
                    Can a challan generated online be modified?No. After logging into GSTN portal for generation of
                    challan, payment particulars have to be fed in by the tax payer or his authorized person.{' '}
                  </p>
                  <button class='enquiry_btn'>Enquiry Now</button>
                </div>
              </div> */}
            </div>
            <div className='col-lg-6'>
              <div className='p-2 why_parent_para '>
                <h4> Good Approach to work</h4>

                <p className='why_para'>
                  <CheckIcon color='primary' /> A fresh and proactive approach to their accounts and tax planning. We
                  are a team of experienced professionals who add value to their business.
                </p>
              </div>
              <div className='p-2 why_parent_para'>
                <h4> Friendly Service</h4>
                <p className='why_para'>
                  <CheckIcon color='primary' /> We provide the best consultancy as per the client recruitments. We
                  understand the requirement of the clients and give them adequate service to resolve their issues.
                </p>
              </div>
              <div className='p-2 why_parent_para'>
                <h4>Innovative Solutions</h4>
                <p className='why_para'>
                  <CheckIcon color='primary' /> Innovative solutions to requirements. Understand the requirements of the
                  client and give them the solution to resolve their all taxation issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyWeUsePage
