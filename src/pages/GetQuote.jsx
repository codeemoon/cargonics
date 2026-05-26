import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Menu, X, Home as HomeIcon, Info, Truck, MapPin, Globe, Headphones,
  HardHat, Mail, Phone
} from 'lucide-react'

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
              <img src="/logo/new logo.png" alt="Cargonics Express" className="h-36 w-auto object-contain -my-10 mix-blend-multiply" />
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
              <Link to="/get-quote" className="bg-[#fe6b00] text-white px-6 py-2.5 rounded-lg font-bold text-[16px] hover:shadow-lg active:scale-95 transition-all">Get Quote</Link>
              <button className="md:hidden text-[#000520]" onClick={toggleMobileMenu}><Menu size={24} /></button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Side Nav ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" onClick={toggleMobileMenu}>
          <div className="h-full w-64 border-r border-[#c6c5d0] shadow-2xl flex flex-col py-6 transition-transform duration-300"
            style={{ background: '#f8f9ff' }} onClick={(e) => e.stopPropagation()}>
            <div className="px-6 mb-10 flex items-center justify-between">
              <Link to="/" onClick={toggleMobileMenu} className="flex items-center h-16 overflow-hidden">
                <img src="/logo/new logo.png" alt="Cargonics Express" className="h-32 w-auto object-contain -my-8 mix-blend-multiply" />
              </Link>
              <button onClick={toggleMobileMenu} className="text-[#000520]"><X size={24} /></button>
            </div>
            <nav className="flex-1 space-y-1">
              {[
                { to: '/', Icon: HomeIcon, label: 'Home' },
                { to: '/about-us', Icon: Info, label: 'About' },
                { to: '/our-services', Icon: Truck, label: 'Services' },
                { to: '/track-shipment', Icon: MapPin, label: 'Tracking' },
                { to: '/network-and-coverage', Icon: Globe, label: 'Network' },
                { to: '/contact-us', Icon: Headphones, label: 'Contact' },
              ].map((item) => (
                <Link key={item.to} to={item.to} onClick={toggleMobileMenu}
                  className="flex items-center gap-4 py-3 px-6 transition-colors text-[16px] text-[#45464f] hover:bg-[#dce9ff]">
                  <item.Icon size={20} /> {item.label}
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
          style={{ background: 'rgba(255, 255, 255, 0.70)', borderColor: 'rgba(198, 197, 208, 0.30)' }}>
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
            <HardHat size={48} />
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
            <a href="https://wa.me/919599196008?text=Hello%20Cargonics%20Express,%20I%20would%20like%20to%20request%20a%20logistics%20quote."
              target="_blank" rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-[16px] text-white hover:scale-105 active:scale-95 transition-all shadow-lg"
              style={{ background: '#25D366' }}>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-1.122 4.102 4.195-1.1c.96.539 2.016.88 3.09.88 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.769-5.767-5.769zm3.387 8.192c-.146.415-.852.762-1.157.808-.304.048-.681.088-1.985-.452-1.57-.649-2.58-2.249-2.658-2.353-.078-.103-.639-.851-.639-1.624s.401-1.151.543-1.306c.143-.155.309-.193.412-.193.104 0 .207.001.297.006.096.004.225-.035.352.27.13.313.444 1.077.482 1.154.039.077.065.167.013.271-.052.103-.077.167-.155.257-.077.091-.161.203-.23.273-.078.077-.159.16-.068.315.091.155.404.667.865 1.077.595.53 1.096.694 1.25.772.155.077.247.065.338-.041.091-.106.39-.452.494-.606.104-.155.208-.13.351-.077.143.052.906.427 1.062.505.155.077.259.116.297.181.04.063.04.364-.105.779z" /></svg>
              Quote via WhatsApp
            </a>
            <Link to="/contact-us"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[16px] text-white hover:scale-105 active:scale-95 transition-all shadow-lg"
              style={{ background: '#0a1b4d' }}>
              <Mail size={20} />
              Contact Form
            </Link>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="w-full text-white mt-auto border-t" style={{ background: '#0a1b4d', borderColor: 'rgba(255,255,255,0.10)' }}>
        <div className="w-full py-12 px-4 md:px-[48px] flex flex-col md:flex-row justify-between gap-10 md:gap-8 max-w-[1280px] mx-auto">
          <div className="space-y-4 md:max-w-[320px]">
            <div className="flex items-center h-16 overflow-hidden mb-4">
              <img src="/logo/new logo.png" alt="Cargonics Express" className="h-36 w-auto object-contain -my-10" />
            </div>
            <p className="text-[14px]" style={{ color: 'rgba(118,132,188,0.80)' }}>Empowering global trade through technological precision and logistical excellence.</p>
            <div className="space-y-2 pt-2 text-[14px]" style={{ color: 'rgba(118,132,188,0.80)' }}>
              <p className="flex items-start gap-2"><MapPin size={18} className="text-[#fe6b00] mt-0.5 flex-shrink-0" /><span>Cabin No 201, SCO No-2,<br />Chaura Bazar 2,<br />Chandigarh-Ambala Highway,<br />Zirakpur, Punjab.</span></p>
              <p className="flex items-center gap-2"><Phone size={18} className="text-[#fe6b00]" /><span>+91 9599196008</span></p>
              <p className="flex items-center gap-2"><Mail size={18} className="text-[#fe6b00]" /><span>info@cargonics.com</span></p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-2 text-[14px]">
              {[{ label: 'Home', to: '/' }, { label: 'About Us', to: '/about-us' }, { label: 'Our Services', to: '/our-services' }, { label: 'Track Shipment', to: '/track-shipment' }, { label: 'Network & Coverage', to: '/network-and-coverage' }, { label: 'Contact Us', to: '/contact-us' }, { label: 'FAQs', to: '/faqs' }, { label: 'Get Quote', to: '/get-quote' }].map((item) => (
                <li key={item.label}><Link className="hover:text-white hover:underline transition-all" style={{ color: 'rgba(118,132,188,0.80)' }} to={item.to}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-2 text-[14px]" style={{ color: 'rgba(118,132,188,0.80)' }}>
              <li>Air Freight</li><li>Ocean Shipping</li><li>Surface Transport</li><li>Rail Solutions</li><li>Global Logistics</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6">Legals</h4>
            <ul className="space-y-2 text-[14px]">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}><a className="hover:text-white hover:underline transition-all" style={{ color: 'rgba(118,132,188,0.80)' }} href="#">{item}</a></li>
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
        <Link to="/" className="flex flex-col items-center gap-1 text-[#45464f]"><HomeIcon size={22} /><span className="text-[10px] font-bold">Home</span></Link>
        <Link to="/about-us" className="flex flex-col items-center gap-1 text-[#45464f]"><Info size={22} /><span className="text-[10px] font-bold">About</span></Link>
        <Link to="/our-services" className="flex flex-col items-center gap-1 text-[#45464f]"><Truck size={22} /><span className="text-[10px] font-bold">Services</span></Link>
        <Link to="/track-shipment" className="flex flex-col items-center gap-1 text-[#45464f]"><MapPin size={22} /><span className="text-[10px] font-bold">Track</span></Link>
        <Link to="/contact-us" className="flex flex-col items-center gap-1 text-[#45464f]"><Headphones size={22} /><span className="text-[10px] font-bold">Contact</span></Link>
      </div>

    </div>
  )
}
