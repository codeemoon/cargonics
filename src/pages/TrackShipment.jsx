import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import {
  Menu, X, Home as HomeIcon, Info, Truck, MapPin, Globe, Headphones,
  Search, ArrowRight, Phone, History, Check, CheckCheck, Rocket, Gauge, Mail
} from 'lucide-react'

const SHIPMENT_DATA = {
  id: 'CE-2024-9981',
  status: 'In Transit',
  service: 'Standard International Air Freight',
  eta: 'Dec 24, 2024',
  origin: 'BOM',
  dest: 'LHR',
  weight: '45.50 kg',
  pieces: '2 Boxes',
  serviceType: 'Express Air',
}

const STEPS = [
  { Icon: Check,    label: 'Ordered',          date: 'Dec 18',           done: true,  active: false },
  { Icon: Truck,    label: 'Picked Up',         date: 'Dec 19',           done: true,  active: false },
  { Icon: Truck,    label: 'In Transit',        date: 'Dec 20',           done: false, active: true  },
  { Icon: MapPin,   label: 'Out for Delivery',  date: 'Expected Dec 23',  done: false, active: false },
  { Icon: CheckCheck, label: 'Delivered',       date: 'Expected Dec 24',  done: false, active: false },
]

const HISTORY = [
  { dateLabel: 'Today',  time: '08:45 AM', title: 'Arrived at International Transit Hub', location: 'Dubai, United Arab Emirates (DXB)', ref: 'Ref Code: DXB-991-SH', active: true },
  { dateLabel: 'Dec 19', time: '04:30 PM', title: 'Departed Facility',                   location: 'Mumbai Regional Logistics Center, India', ref: null, active: false },
  { dateLabel: 'Dec 19', time: '11:00 AM', title: 'Processed for Export',                location: 'Customs Clearance - Mumbai Airport', ref: null, active: false },
]

export default function TrackShipment() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [trackingInput, setTrackingInput] = useState('CE-2024-9981')
  const [showResult, setShowResult] = useState(true)

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const handleTrack = (e) => {
    e.preventDefault()
    toast.error('not working, Work on progress')
  }

  return (
    <div className="overflow-x-hidden" style={{ background: '#f8f9ff' }}>

      {/* ── TopAppBar ── */}
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
              <Link to="/track-shipment" className="text-[#fe6b00] font-bold border-b-2 border-[#fe6b00] text-[16px]">Tracking</Link>
              <Link to="/network-and-coverage" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Network</Link>
              <Link to="/contact-us" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Contact</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link to="/get-quote" className="bg-[#0a1b4d] text-white px-6 py-2.5 rounded-lg font-bold text-[16px] hover:shadow-lg active:scale-95 transition-all">Get Quote</Link>
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
                { to: '/track-shipment', Icon: MapPin, label: 'Tracking', active: true },
                { to: '/network-and-coverage', Icon: Globe, label: 'Network' },
                { to: '/contact-us', Icon: Headphones, label: 'Contact' },
              ].map((item) => (
                <Link key={item.to} to={item.to} onClick={toggleMobileMenu}
                  className={`flex items-center gap-4 py-3 px-6 transition-colors text-[16px] ${item.active ? 'bg-[#fe6b00] text-white rounded-lg mx-2 font-bold' : 'text-[#45464f] hover:bg-[#dce9ff]'}`}>
                  <item.Icon size={20} /> {item.label}
                </Link>
              ))}
            </nav>
            <div className="px-4 mt-auto">
              <Link to="/get-quote" onClick={toggleMobileMenu}
                className="w-full block text-center bg-[#000520] text-white py-4 rounded-xl font-bold active:scale-95 transition-all">Get Quote</Link>
            </div>
          </div>
        </div>
      )}

      <main className="pt-32 pb-20 px-4 md:px-[48px] max-w-[1280px] mx-auto">

        {/* ── Hero Search Section ── */}
        <section className="mb-12 text-center">
          <h1 className="font-[Montserrat] text-[32px] md:text-[48px] font-bold mb-6 text-[#0a1b4d]" style={{ letterSpacing: '-0.02em' }}>
            Track Your Global Cargo
          </h1>
          <p className="text-[18px] leading-[28px] text-[#45464f] mb-10 max-w-2xl mx-auto">
            Enter your 10-digit AWB or tracking number to get real-time updates on your high-priority shipments.
          </p>
          <div className="max-w-3xl mx-auto relative">
            <form onSubmit={handleTrack}>
              <div className="flex flex-col md:flex-row gap-4 p-2 bg-white rounded-2xl shadow-xl border transition-all"
                style={{ borderColor: 'rgba(198,197,208,0.30)' }}>
                <div className="flex-1 flex items-center px-4">
                  <Search size={20} className="text-[#767680] mr-3 flex-shrink-0" />
                  <input
                    className="w-full border-none outline-none text-[16px] text-[#000520] placeholder:text-[#767680] py-4 bg-transparent"
                    placeholder="Enter Tracking Number (e.g., CE-2024-9981)"
                    type="text" value={trackingInput} onChange={(e) => setTrackingInput(e.target.value)} />
                </div>
                <button type="submit"
                  className="bg-[#fe6b00] hover:bg-[#a04100] text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95">
                  <span>Track Now</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* ── Dashboard Layout ── */}
        {showResult && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* ── Left Column ── */}
            <div className="lg:col-span-8 space-y-8">

              {/* ── Status Glass Card ── */}
              <div className="rounded-3xl p-6 md:p-10"
                style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.30)', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)' }}>

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[13px] mb-3" style={{ background: '#6afe9c', color: '#00210c' }}>
                      <span className="w-2 h-2 rounded-full mr-2 animate-pulse" style={{ background: '#009b50' }}></span>
                      In Transit
                    </span>
                    <h2 className="font-[Montserrat] text-[24px] font-semibold text-[#000520]">Shipment {SHIPMENT_DATA.id}</h2>
                    <p className="text-[#45464f] text-[16px]">{SHIPMENT_DATA.service}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[13px] text-[#767680] uppercase tracking-widest mb-1">Est. Arrival</p>
                    <p className="font-[Montserrat] text-[24px] font-semibold text-[#000520]">{SHIPMENT_DATA.eta}</p>
                  </div>
                </div>

                {/* ── Progress Bar (Desktop) ── */}
                <div className="relative py-8">
                  <div className="hidden md:flex justify-between relative z-10">
                    {STEPS.map((step) => (
                      <div key={step.label} className={`flex flex-col items-center group ${!step.done && !step.active ? 'opacity-40' : ''}`}>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-lg ${step.active ? 'ring-4 ring-[#fe6b00]/20' : ''}`}
                          style={{ background: step.active ? '#fe6b00' : step.done ? '#009b50' : '#d3e4fe', color: !step.done && !step.active ? '#000520' : '#fff' }}>
                          <step.Icon size={20} />
                        </div>
                        <span className={`font-bold text-[13px] ${step.active ? 'text-[#fe6b00]' : step.done ? 'text-[#009b50]' : 'text-[#45464f]'}`}>{step.label}</span>
                        <span className="text-[11px] text-[#767680]">{step.date}</span>
                      </div>
                    ))}
                  </div>
                  {/* Progress line */}
                  <div className="hidden md:block absolute h-1 -z-0" style={{ top: '44px', left: '6%', right: '6%', background: '#d3e4fe' }}>
                    <div className="h-full transition-all duration-1000" style={{ width: '50%', background: '#009b50' }}></div>
                  </div>

                  {/* ── Mobile Vertical Timeline ── */}
                  <div className="md:hidden space-y-6">
                    {[
                      { label: 'Ordered', time: 'Dec 18, 2024 - 10:30 AM', done: true },
                      { label: 'Picked Up', time: 'Dec 19, 2024 - 02:15 PM', done: true },
                      { label: 'In Transit', time: 'Dec 20, 2024 - 09:00 AM', active: true },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full text-white flex items-center justify-center text-sm flex-shrink-0 ${item.active ? 'ring-4 ring-[#fe6b00]/20' : ''}`}
                            style={{ background: item.active ? '#fe6b00' : '#009b50' }}>
                            <Check size={14} />
                          </div>
                          {i < 2 && <div className="w-0.5 flex-1 my-1" style={{ background: '#009b50' }}></div>}
                        </div>
                        <div>
                          <p className={`font-bold ${item.active ? 'text-[#fe6b00]' : 'text-[#009b50]'}`}>{item.label}</p>
                          <p className="text-xs text-[#767680]">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Status History ── */}
              <div className="bg-white rounded-3xl p-6 md:p-10 border" style={{ borderColor: 'rgba(198,197,208,0.20)' }}>
                <h3 className="font-[Montserrat] text-[24px] font-semibold text-[#000520] mb-8 flex items-center">
                  <History size={22} className="mr-3 text-[#fe6b00]" />
                  Status History
                </h3>
                <div className="space-y-8">
                  {HISTORY.map((h, i) => (
                    <div key={i} className="flex gap-6">
                      <div style={{ minWidth: '120px' }} className="pt-1">
                        <p className="font-bold text-[#000520] text-[16px]">{h.dateLabel}</p>
                        <p className="text-[13px] text-[#767680]">{h.time}</p>
                      </div>
                      <div className="relative flex-1 pb-8 pl-8" style={{ borderLeft: '2px solid rgba(198,197,208,0.30)' }}>
                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full ring-4 ring-white"
                          style={{ background: h.active ? '#fe6b00' : '#009b50' }}></div>
                        <h4 className="font-bold text-[#000520] mb-1 text-[16px]">{h.title}</h4>
                        <p className="text-[#45464f] text-[16px]">{h.location}</p>
                        {h.ref && (<p className="text-sm mt-2 text-[#767680] px-3 py-1 rounded inline-block" style={{ background: '#f8f9ff' }}>{h.ref}</p>)}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-4 text-[#000520] font-bold hover:bg-[#e5eeff] transition-colors rounded-xl border-dashed border-2 text-[16px]"
                  style={{ borderColor: '#c6c5d0' }}>
                  View Full History (8 updates)
                </button>
              </div>

            </div>

            {/* ── Right Column ── */}
            <div className="lg:col-span-4 space-y-6">

              {/* ── Route Card ── */}
              <div className="rounded-3xl overflow-hidden shadow-xl text-white" style={{ background: '#0A1B4D' }}>
                <div className="relative overflow-hidden" style={{ height: '192px' }}>
                  <img alt="Stylized world map on digital screen with glowing orange cargo flight routes"
                    className="w-full h-full object-cover" style={{ opacity: 0.40 }}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI_wz7sWEkhfwQA6bZfEJ7a3t12y_8xB_6Kd0_-L8ExPah_4Jme_TZpsaoQTKFCfOlA9-P5RA6bxCl2P_aw4pW-pn0pahFxkIFUXIZfmSMtlHqmJz1_R63r7S2MleFFrvQku3V6-52hXuxbbrh1LQLcxLwDqRGdxf8ON8Nkm-ckE_1CQN5yBxAOBz76Egi4nqD48ty702MGg01R_9pEG32KSDmxDyqta5rqsrqj6XiLAoVX-Wab8X2Z99QmHMDifO2jTXU3oKPKSA" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0A1B4D, transparent)' }}></div>
                  <div className="absolute bottom-4 left-6 flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-[10px] uppercase opacity-70 tracking-tighter">Origin</p>
                      <p className="font-bold text-lg">{SHIPMENT_DATA.origin}</p>
                    </div>
                    <Gauge size={22} className="text-[#fe6b00]" />
                    <div className="h-[1px] w-12" style={{ background: 'rgba(255,255,255,0.30)' }}></div>
                    <div className="text-center">
                      <p className="text-[10px] uppercase opacity-70 tracking-tighter">Dest</p>
                      <p className="font-bold text-lg">{SHIPMENT_DATA.dest}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[{ label: 'Weight', value: SHIPMENT_DATA.weight }, { label: 'Pieces', value: SHIPMENT_DATA.pieces }].map((row) => (
                    <div key={row.label} className="flex justify-between pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.10)' }}>
                      <span style={{ opacity: 0.70 }} className="text-[16px]">{row.label}</span>
                      <span className="font-bold text-[16px]">{row.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between">
                    <span style={{ opacity: 0.70 }} className="text-[16px]">Service</span>
                    <span className="font-bold text-[16px]" style={{ color: '#ffb693' }}>{SHIPMENT_DATA.serviceType}</span>
                  </div>
                </div>
              </div>

              {/* ── Support Card ── */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border" style={{ borderColor: 'rgba(198,197,208,0.20)' }}>
                <h4 className="font-[Montserrat] text-[24px] font-semibold text-[#000520] mb-4">Need Help?</h4>
                <p className="text-[#45464f] mb-6 text-[16px]">Our priority support team is available 24/7 for this shipment.</p>
                <div className="space-y-4">
                  <a className="flex items-center p-4 rounded-2xl hover:bg-[#e5eeff] transition-colors group" href="tel:+919599196008" style={{ background: '#f8f9ff' }}>
                    <span className="w-10 h-10 rounded-full text-white flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0" style={{ background: '#0a1b4d' }}>
                      <Phone size={18} />
                    </span>
                    <div>
                      <p className="text-xs text-[#767680]">Call Us</p>
                      <p className="font-bold text-[#000520] text-[16px]">+91 9599196008</p>
                    </div>
                  </a>
                  <a className="flex items-center p-4 rounded-2xl hover:bg-[#e5eeff] transition-colors group" href="https://wa.me/919599196008" target="_blank" rel="noreferrer" style={{ background: '#f8f9ff' }}>
                    <span className="w-10 h-10 rounded-full text-white flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0" style={{ background: '#009b50' }}>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-1.122 4.102 4.195-1.1c.96.539 2.016.88 3.09.88 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.769-5.767-5.769zm3.387 8.192c-.146.415-.852.762-1.157.808-.304.048-.681.088-1.985-.452-1.57-.649-2.58-2.249-2.658-2.353-.078-.103-.639-.851-.639-1.624s.401-1.151.543-1.306c.143-.155.309-.193.412-.193.104 0 .207.001.297.006.096.004.225-.035.352.27.13.313.444 1.077.482 1.154.039.077.065.167.013.271-.052.103-.077.167-.155.257-.077.091-.161.203-.23.273-.078.077-.159.16-.068.315.091.155.404.667.865 1.077.595.53 1.096.694 1.25.772.155.077.247.065.338-.041.091-.106.39-.452.494-.606.104-.155.208-.13.351-.077.143.052.906.427 1.062.505.155.077.259.116.297.181.04.063.04.364-.105.779z" /></svg>
                    </span>
                    <div>
                      <p className="text-xs text-[#767680]">WhatsApp</p>
                      <p className="font-bold text-[#000520] text-[16px]">Live Chat Now</p>
                    </div>
                  </a>
                </div>
              </div>


            </div>
          </div>
        )}
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
          <p className="text-[13px]" style={{ color: 'rgba(118,132,188,0.60)' }}>© 2026 Cargonics Express Services. GST: 03AANCC6927C1ZT. All Rights Reserved.</p>
        </div>
      </footer>

      {/* ── Mobile Bottom NavBar ── */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 px-4 py-3 flex justify-around border-t shadow-2xl" style={{ background: '#f8f9ff', borderColor: '#c6c5d0' }}>
        <Link to="/" className="flex flex-col items-center gap-1 text-[#45464f]"><HomeIcon size={22} /><span className="text-[10px] font-bold">Home</span></Link>
        <Link to="/about-us" className="flex flex-col items-center gap-1 text-[#45464f]"><Info size={22} /><span className="text-[10px] font-bold">About</span></Link>
        <Link to="/our-services" className="flex flex-col items-center gap-1 text-[#45464f]"><Truck size={22} /><span className="text-[10px] font-bold">Services</span></Link>
        <Link to="/track-shipment" className="flex flex-col items-center gap-1 text-[#fe6b00]"><MapPin size={22} /><span className="text-[10px] font-bold">Track</span></Link>
        <Link to="/contact-us" className="flex flex-col items-center gap-1 text-[#45464f]"><Headphones size={22} /><span className="text-[10px] font-bold">Contact</span></Link>
      </div>

      {/* ── Floating WhatsApp ── */}
      <a className="fixed bottom-8 right-8 z-50 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-3"
        style={{ background: '#25D366' }} href="https://wa.me/919599196008" target="_blank" rel="noreferrer">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-1.122 4.102 4.195-1.1c.96.539 2.016.88 3.09.88 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.769-5.767-5.769zm3.387 8.192c-.146.415-.852.762-1.157.808-.304.048-.681.088-1.985-.452-1.57-.649-2.58-2.249-2.658-2.353-.078-.103-.639-.851-.639-1.624s.401-1.151.543-1.306c.143-.155.309-.193.412-.193.104 0 .207.001.297.006.096.004.225-.035.352.27.13.313.444 1.077.482 1.154.039.077.065.167.013.271-.052.103-.077.167-.155.257-.077.091-.161.203-.23.273-.078.077-.159.16-.068.315.091.155.404.667.865 1.077.595.53 1.096.694 1.25.772.155.077.247.065.338-.041.091-.106.39-.452.494-.606.104-.155.208-.13.351-.077.143.052.906.427 1.062.505.155.077.259.116.297.181.04.063.04.364-.105.779z" /></svg>
        <span className="hidden md:inline font-bold text-[13px]">WhatsApp Us</span>
      </a>

    </div>
  )
}
