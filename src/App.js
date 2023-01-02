import './App.css'
import TopHeader from './components/topHeader'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/homePage'
import AboutPage from './components/aboutPage'
import ServicePage from './components/servicesPage'
import AccountingPage from './components/accountingPage'
import ContactPage from './components/contactPage'

function App() {
  return (
    <>
      <Router>
        <TopHeader />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/service' element={<ServicePage />} />
          <Route path='/accounting' element={<AccountingPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
