import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function GetQuote() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden" style={{ background: '#f8f9ff' }}>

      {/* ── TopAppBar Navigation Shell ── */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b shadow-sm"
        style={{ background: 'rgba(248,249,255,0.80)', borderColor: 'rgba(198,197,208,0.20)' }}>
        <div className="flex flex-col w-full px-4 md:px-[48px] py-2 max-w-[1280px] mx-auto">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center h-16 overflow-hidden">
              <img 
                src="/logo/new logo.png" 
                alt="Cargonics Express" 
                className="h-36 w-auto object-contain -my-10 mix-blend-multiply" 
              />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Home</Link>
              <Link to="/about-us" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">About</Link>
              <Link to="/our-services" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Services</Link>
              <Link to="/track-shipment" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Tracking</Link>
              <Link to="/network-and-coverage" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Network</Link>
              <Link to="/contact-us" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Contact</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link to="/get-quote" className="bg-[#fe6b00] text-white px-6 py-2.5 rounded-lg font-bold text-[16px] hover:shadow-lg active:scale-95 transition-all">
                Get Quote
              </Link>
              {/* Mobile hamburger */}
              <button className="md:hidden text-[#000520]" onClick={toggleMobileMenu}>
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Side Nav ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" onClick={toggleMobileMenu}>
          <div
            className="h-full w-64 border-r border-[#c6c5d0] shadow-2xl flex flex-col py-6 transition-transform duration-300"
            style={{ background: '#f8f9ff' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 mb-10 flex items-center justify-between">
              <Link to="/" onClick={toggleMobileMenu} className="flex items-center h-16 overflow-hidden">
                <img 
                  src="/logo/new logo.png" 
                  alt="Cargonics Express" 
                  className="h-32 w-auto object-contain -my-8 mix-blend-multiply" 
                />
              </Link>
              <button className="material-symbols-outlined text-[#000520]" onClick={toggleMobileMenu}>close</button>
            </div>
            <nav className="flex-1 space-y-1">
              {[
                { to: '/', icon: 'home', label: 'Home' },
                { to: '/about-us', icon: 'info', label: 'About' },
                { to: '/our-services', icon: 'local_shipping', label: 'Services' },
                { to: '/track-shipment', icon: 'location_on', label: 'Tracking' },
                { to: '/network-and-coverage', icon: 'public', label: 'Network' },
                { to: '/contact-us', icon: 'contact_support', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={toggleMobileMenu}
                  className="flex items-center gap-4 py-3 px-6 transition-colors text-[16px] text-[#45464f] hover:bg-[#dce9ff]"
                >
                  <span className="material-symbols-outlined">{item.icon}</span> {item.label}
                </Link>
              ))}
            </nav>
            <div className="px-4 mt-auto">
              <Link to="/get-quote" onClick={toggleMobileMenu}
                className="w-full block text-center bg-[#fe6b00] text-white py-4 rounded-xl font-bold active:scale-95 transition-all">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── Main Content Area ── */}
      <main className="flex-1 pt-32 pb-20 px-4 md:px-[48px] max-w-[1280px] w-full mx-auto flex flex-col justify-center items-center">
        
        {/* Animated Background decorative blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none filter blur-[120px]" style={{ background: '#fe6b00' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none filter blur-[120px]" style={{ background: '#0a1b4d' }}></div>

        {/* Available Soon Glass Container */}
        <div className="relative w-full max-w-2xl p-8 md:p-16 rounded-[2rem] border text-center shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(10,27,77,0.15)]"
          style={{ 
            background: 'rgba(255, 255, 255, 0.70)', 
            borderColor: 'rgba(198, 197, 208, 0.30)' 
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 font-bold text-[13px] tracking-[0.08em] uppercase text-white" style={{ background: '#fe6b00' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#ffffff' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Available Soon
          </div>

          {/* Icon */}
          <div className="w-24 h-24 mx-auto mb-8 rounded-2xl flex items-center justify-center text-white shadow-lg animate-bounce" style={{ background: '#0a1b4d' }}>
            <span className="material-symbols-outlined text-[48px]" style={{ animation: 'spin 6s linear infinite' }}>construction</span>
          </div>

          {/* Headline */}
          <h1 className="font-[Montserrat] text-[32px] md:text-[44px] font-bold text-[#0a1b4d] mb-6 leading-tight">
            Instant Quote Engine
          </h1>

          {/* Description */}
          <p className="text-[16px] md:text-[18px] leading-[28px] text-[#45464f] mb-10 max-w-lg mx-auto">
            We are designing our automated system to calculate routes, speeds, and costs instantly. In the meantime, our sales team is standing by to prepare a customized quotation for you manually.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://wa.me/919599196008?text=Hello%20Cargonics%20Express,%20I%20would%20like%20to%20request%20a%20logistics%20quote." 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-[16px] text-white hover:scale-105 active:scale-95 transition-all shadow-lg"
              style={{ background: '#25D366' }}
            >
              <span className="material-symbols-outlined">chat</span>
              Quote via WhatsApp
            </a>
            <Link 
              to="/contact-us"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[16px] text-white hover:scale-105 active:scale-95 transition-all shadow-lg"
              style={{ background: '#0a1b4d' }}
            >
              <span className="material-symbols-outlined">mail</span>
              Contact Form
            </Link>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="w-full text-white mt-auto border-t" style={{ background: '#0a1b4d', borderColor: 'rgba(255,255,255,0.10)' }}>
        <div className="w-full py-12 px-4 md:px-[48px] flex flex-col md:flex-row justify-between gap-10 md:gap-8 max-w-[1280px] mx-auto">
          <div className="space-y-4 md:max-w-[320px]">
            <div className="inline-block bg-white p-3.5 rounded-2xl shadow-sm mb-4">
              <img 
                src="/logo/new logo.png" 
                alt="Cargonics Express" 
                className="h-16 w-auto object-contain" 
              />
            </div>
            <p className="text-[14px]" style={{ color: 'rgba(118,132,188,0.80)' }}>
              Empowering global trade through technological precision and logistical excellence.
            </p>
            <div className="space-y-2 pt-2 text-[14px]" style={{ color: 'rgba(118,132,188,0.80)' }}>
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#fe6b00] text-[18px]">location_on</span>
                <span>
                  Cabin No 201, SCO No-2,<br />
                  Chaura Bazar 2,<br />
                  Chandigarh-Ambala Highway,<br />
                  Zirakpur, Punjab.
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#fe6b00] text-[18px]">call</span>
                <span>+91 9599196008</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#fe6b00] text-[18px]">mail</span>
                <span>contact@cargonics.com</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-2 text-[14px]">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about-us' },
                { label: 'Our Services', to: '/our-services' },
                { label: 'Track Shipment', to: '/track-shipment' },
                { label: 'Network & Coverage', to: '/network-and-coverage' },
                { label: 'Contact Us', to: '/contact-us' },
                { label: 'FAQs', to: '/faqs' },
                { label: 'Get Quote', to: '/get-quote' },
              ].map((item) => (
                <li key={item.label}>
                  <Link className="hover:text-white hover:underline transition-all" style={{ color: 'rgba(118,132,188,0.80)' }} to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-2 text-[14px]" style={{ color: 'rgba(118,132,188,0.80)' }}>
              <li>Air Freight</li>
              <li>Ocean Shipping</li>
              <li>Surface Transport</li>
              <li>Rail Solutions</li>
              <li>Global Logistics</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legals</h4>
            <ul className="space-y-2 text-[14px]">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a className="hover:text-white hover:underline transition-all" style={{ color: 'rgba(118,132,188,0.80)' }} href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 md:px-[48px] py-6 border-t text-center md:text-left" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <p className="text-[13px]" style={{ color: 'rgba(118,132,188,0.60)' }}>© 2024 Cargonics Express Services. GST: 03AANCC6927C1ZT. All Rights Reserved.</p>
        </div>
      </footer>

      {/* ── Mobile Bottom NavBar ── */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 px-4 py-3 flex justify-around border-t shadow-2xl" style={{ background: '#f8f9ff', borderColor: '#c6c5d0' }}>
        <Link to="/" className="flex flex-col items-center gap-1 text-[#45464f]">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        <Link to="/about-us" className="flex flex-col items-center gap-1 text-[#45464f]">
          <span className="material-symbols-outlined">info</span>
          <span className="text-[10px] font-bold">About</span>
        </Link>
        <Link to="/our-services" className="flex flex-col items-center gap-1 text-[#45464f]">
          <span className="material-symbols-outlined">local_shipping</span>
          <span className="text-[10px] font-bold">Services</span>
        </Link>
        <Link to="/track-shipment" className="flex flex-col items-center gap-1 text-[#45464f]">
          <span className="material-symbols-outlined">location_on</span>
          <span className="text-[10px] font-bold">Track</span>
        </Link>
        <Link to="/contact-us" className="flex flex-col items-center gap-1 text-[#45464f]">
          <span className="material-symbols-outlined">contact_support</span>
          <span className="text-[10px] font-bold">Contact</span>
        </Link>
      </div>

      {/* ── Floating WhatsApp ── */}
      <a className="fixed bottom-8 right-8 z-50 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-3"
        style={{ background: '#25D366' }}
        href="https://wa.me/919599196008" target="_blank" rel="noreferrer">
        <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>chat</span>
        <span className="hidden md:inline font-bold text-[13px]">WhatsApp Us</span>
      </a>

    </div>
  )
}
