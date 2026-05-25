import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurServices from './pages/OurServices'
import NetworkAndCoverage from './pages/NetworkAndCoverage'
import ContactUs from './pages/ContactUs'
import TrackShipment from './pages/TrackShipment'
import FAQs from './pages/FAQs'
import GetQuote from './pages/GetQuote'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/network-and-coverage" element={<NetworkAndCoverage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/track-shipment" element={<TrackShipment />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/get-quote" element={<GetQuote />} />
        {/* Other routes will be added here */}
      </Routes>
    </Router>
  )
}

export default App
