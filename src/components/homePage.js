import React from 'react'
import AssociateCardPage from '../subComponents/associateCardPage'
import BannderPage from '../subComponents/bannderPage'
import ClientReviewPage from '../subComponents/clientReviewPage'
import ImageSlider from '../subComponents/collectStepperPage'
import HowAquireTax from '../subComponents/howAquireTax'
import TaxLetterPage from '../subComponents/taxLetterPage'
import WhyWeUsePage from '../subComponents/whyWeUsePage'

function HomePage() {
  return (
    <div>
      <BannderPage />
      <AssociateCardPage />
      <WhyWeUsePage />
      <TaxLetterPage />
      <ImageSlider />
      <HowAquireTax />
      <ClientReviewPage />
    </div>
  )
}

export default HomePage
