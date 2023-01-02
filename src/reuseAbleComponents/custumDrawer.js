import * as React from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import TemporaryDrawer from './demo.tsx'

function CustumDrawer() {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <TemporaryDrawer />
      </StyledEngineProvider>
    </div>
  )
}

export default CustumDrawer
