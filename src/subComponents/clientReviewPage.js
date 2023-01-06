import React from 'react'
import './subComp.css'

function ClientReviewPage() {
  return (
    <>
      <div className='container '>
        <div className='client_review_parent mb-4'>
          <img alt='client_review' className='client_review_img p-4' src='./client_review.jpg' />
          <p>we have served to 1000 clients .</p>
        </div>
      </div>
    </>
  )
}

export default ClientReviewPage
