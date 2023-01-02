import React from 'react'
import AssociateCardPage from '../subComponents/associateCardPage'
import BannderPage from '../subComponents/bannderPage'
import CollectStepperPage from '../subComponents/collectStepperPage'

import TaxLetterPage from '../subComponents/taxLetterPage'
import WhyWeUsePage from '../subComponents/whyWeUsePage'

function HomePage() {
  return (
    <div>
      <BannderPage />
      <AssociateCardPage />
      <WhyWeUsePage />
      <TaxLetterPage />
      <CollectStepperPage />
    </div>
  )
}

export default HomePage
