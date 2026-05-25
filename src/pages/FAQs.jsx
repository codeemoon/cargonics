import { useState } from 'react'
import { Link } from 'react-router-dom'

const FAQ_CATEGORIES = [
  { id: 'tracking', label: 'Tracking & Delivery', icon: 'location_on' },
  { id: 'shipping', label: 'Shipping Services', icon: 'local_shipping' },
  { id: 'payments', label: 'Payments & Billing', icon: 'payments' },
  { id: 'international', label: 'International', icon: 'public' },
  { id: 'claims', label: 'Claims & Insurance', icon: 'report_problem' }
]

const FAQ_ITEMS = [
  {
    id: 't1',
    category: 'tracking',
    q: 'How do I track my shipment in real-time?',
    a: 'You can track your shipment by entering your 10-digit tracking number on our homepage or Tracking page. Our system provides real-time updates via satellite GPS, showing the exact location of your cargo and estimated time of arrival (ETA) at every transit node.'
  },
  {
    id: 't2',
    category: 'tracking',
    q: "Why hasn't my tracking status updated in 24 hours?",
    a: "Tracking updates usually occur at major transit hubs. For international shipments, there may be a gap during ocean or air transit. If your status hasn't updated for more than 48 hours, please contact our support team with your tracking ID."
  },
  {
    id: 's1',
    category: 'shipping',
    q: 'What items are prohibited for domestic shipping?',
    a: 'Prohibited items include explosives, flammable liquids, pressurized gases, and certain perishable items. Please refer to our full Prohibited Items List for detailed regulations and safety compliance standards.'
  },
  {
    id: 's2',
    category: 'shipping',
    q: 'How do I calculate the volumetric weight of my cargo?',
    a: 'Volumetric weight is calculated using the formula: (Length x Width x Height in cm) / 5000. We charge based on whichever is higher between the actual weight and the volumetric weight.'
  },
  {
    id: 'p1',
    category: 'payments',
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards, bank wire transfers, and digital wallets including PayPal. For corporate accounts, we offer monthly invoicing and credit terms subject to approval.'
  },
  {
    id: 'i1',
    category: 'international',
    q: 'What documents are required for international customs clearance?',
    a: 'Typically, you will need a commercial invoice, packing list, bill of lading or airway bill, and certificate of origin. Depending on the destination and commodity, additional permits or licenses may be required. Our customs team can assist you with the specific documentation needed.'
  },
  {
    id: 'i2',
    category: 'international',
    q: 'Do your rates include customs duties and taxes?',
    a: 'No, our shipping rates exclude destination customs duties, taxes, and import charges unless specifically agreed otherwise. These are typically paid by the consignee (receiver) at the time of clearance.'
  },
  {
    id: 'c1',
    category: 'claims',
    q: 'How do I file a claim for damaged or lost cargo?',
    a: 'To file a claim, please submit a written notification along with the airway bill/bill of lading copy, pictures of the damage, and the commercial invoice showing the cargo value. Claims must be submitted within 14 days of delivery for damaged cargo, and within 120 days for non-delivery.'
  },
  {
    id: 'c2',
    category: 'claims',
    q: 'What is the cargo liability limit for standard shipments?',
    a: 'Standard carriage liability is limited under international conventions (Warsaw/Montreal Convention for air freight and Hague-Visby rules for ocean). We highly recommend purchasing our optional Cargo All-Risk Insurance to cover the full invoice value of your goods.'
  }
]

export default function FAQs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedFaqs, setExpandedFaqs] = useState({ t1: true }) // First item open by default
  const [email, setEmail] = useState('')

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const toggleFaq = (id) => {
    setExpandedFaqs((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // Filter logic: match category (if not 'all') and match search query
  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Get active category headers that contain items after filtering
  const activeCategories = FAQ_CATEGORIES.filter((cat) => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) return false
    return filteredFaqs.some((item) => item.category === cat.id)
  })

  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col" style={{ background: '#f8f9ff' }}>
      
      {/* ── TopAppBar Shell ── */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b shadow-sm animate-fade-in"
        style={{ background: 'rgba(248,249,255,0.80)', borderColor: 'rgba(198,197,208,0.20)' }}>
        <div className="flex flex-col w-full px-4 md:px-[48px] py-2 max-w-[1280px] mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center h-16 overflow-hidden">
              <img 
                src="/logo/new logo.png" 
                alt="Cargonics Express" 
                className="h-36 w-auto object-contain -my-10 mix-blend-multiply" 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Home</Link>
              <Link to="/about-us" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">About</Link>
              <Link to="/our-services" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Services</Link>
              <Link to="/track-shipment" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Tracking</Link>
              <Link to="/network-and-coverage" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Network</Link>
              <Link to="/contact-us" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Contact</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Link to="/get-quote" className="bg-[#0a1b4d] text-white px-6 py-2.5 rounded-lg font-bold text-[16px] hover:shadow-lg active:scale-95 transition-all">
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
                  className={`flex items-center gap-4 py-3 px-6 transition-colors text-[16px] ${
                    item.active 
                      ? 'bg-[#fe6b00] text-white rounded-lg mx-2 font-bold' 
                      : 'text-[#45464f] hover:bg-[#dce9ff]'
                  }`}
                >
                  <span className="material-symbols-outlined">{item.icon}</span> {item.label}
                </Link>
              ))}
            </nav>
            <div className="px-4 mt-auto">
              <Link to="/get-quote" onClick={toggleMobileMenu}
                className="w-full block text-center bg-[#000520] text-white py-4 rounded-xl font-bold active:scale-95 transition-all">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── Main Content Area ── */}
      <main className="pt-24 flex-grow pb-20">
        
        {/* ── Hero Section & Search ── */}
        <section className="relative py-20 px-4 md:px-[48px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-10" 
              alt="A cinematic wide shot of a modern logistics distribution center"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASCj0_nEnK5i68bPEHMJKhpOmiKrEv_TG3sJGIt6NjKWXwE-B-5YyLezFy2AhGCRCOh502xsZHLolfvsuTl-10QvlyEkeI0_Iqqyy2fd7F86py5qXqY26d32oK_xlwKji6e9wFMEGoTNqYrav77Zqkikb-_s_9ntSgTBwGOLc7l67bUWAEUn1oIlVXrNR31pjAC6-Z0cr6TSLw8cO4ekjRgMRhxOQ8D6Vmc_KsB5D93QkbAj7D6pZc37SZ4aLuuYDPgjazDn37As4"
            />
          </div>
          <div className="max-w-[1280px] mx-auto relative z-10 text-center">
            <h1 className="font-[Montserrat] text-[32px] md:text-[48px] font-bold text-[#000520] mb-6 leading-tight">
              How can we help you today?
            </h1>
            <p className="text-[18px] leading-[28px] text-[#45464f] max-w-2xl mx-auto mb-10">
              Find answers to frequently asked questions about our global shipping, tracking, and logistics services.
            </p>
            <div className="max-w-xl mx-auto relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#767680] group-focus-within:text-[#fe6b00] transition-colors">
                search
              </span>
              <input 
                className="w-full bg-white border border-[#c6c5d0] focus:border-[#fe6b00] focus:ring-4 focus:ring-[#fe6b00]/10 rounded-xl py-4 pl-12 pr-6 shadow-xl transition-all outline-none text-[#000520]" 
                placeholder="Search for shipping, tracking, or claims..." 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#767680] hover:text-[#000520]"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ── Category Grid & Accordions ── */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-[48px] py-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Categories (Desktop) */}
            <aside className="w-full lg:w-64 shrink-0">
              <h3 className="font-[Montserrat] text-[24px] font-semibold text-[#000520] mb-6">Categories</h3>
              
              {/* Category Buttons for Desktop / Tablet */}
              <div className="hidden sm:flex lg:flex-col gap-2 flex-wrap lg:flex-nowrap">
                <button 
                  onClick={() => setSelectedCategory('all')}
                  className={`flex-1 lg:flex-none text-left px-4 py-3 rounded-lg font-bold transition-all flex items-center gap-3 ${
                    selectedCategory === 'all' 
                      ? 'bg-[#dce9ff] text-[#000520]' 
                      : 'hover:bg-[#e5eeff] text-[#45464f]'
                  }`}
                >
                  <span className="material-symbols-outlined">apps</span> All Categories
                </button>
                {FAQ_CATEGORIES.map((cat) => (
                  <button 
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex-1 lg:flex-none text-left px-4 py-3 rounded-lg font-bold transition-all flex items-center gap-3 ${
                      selectedCategory === cat.id 
                        ? 'bg-[#dce9ff] text-[#000520]' 
                        : 'hover:bg-[#e5eeff] text-[#45464f]'
                    }`}
                  >
                    <span className="material-symbols-outlined">{cat.icon}</span> {cat.label}
                  </button>
                ))}
              </div>

              {/* Horizontal Scroll Menu for Mobile screen size */}
              <div className="flex sm:hidden overflow-x-auto pb-4 gap-2 no-scrollbar">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1.5 transition-all ${
                    selectedCategory === 'all' 
                      ? 'bg-[#fe6b00] text-white' 
                      : 'bg-white border border-[#c6c5d0] text-[#45464f]'
                  }`}
                >
                  All
                </button>
                {FAQ_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`shrink-0 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1.5 transition-all ${
                      selectedCategory === cat.id 
                        ? 'bg-[#fe6b00] text-white' 
                        : 'bg-white border border-[#c6c5d0] text-[#45464f]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
                    {cat.label.split(' ')[0]} {/* Shorten name for mobile */}
                  </button>
                ))}
              </div>
            </aside>

            {/* Accordion Content */}
            <div className="flex-grow space-y-10">
              {activeCategories.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#c6c5d0] p-8">
                  <span className="material-symbols-outlined text-[#767680] text-5xl mb-4">search_off</span>
                  <h3 className="font-[Montserrat] text-[20px] font-semibold text-[#000520] mb-2">No matching questions found</h3>
                  <p className="text-[#45464f] max-w-md mx-auto">
                    We couldn't find any FAQs matching your search query. Try searching for different keywords or view all categories.
                  </p>
                  <button 
                    onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                    className="mt-6 bg-[#000520] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#fe6b00] transition-colors"
                  >
                    Reset Filter
                  </button>
                </div>
              ) : (
                activeCategories.map((cat) => {
                  const categoryItems = filteredFaqs.filter((item) => item.category === cat.id)
                  
                  return (
                    <div key={cat.id} className="space-y-4 animate-fade-in">
                      <h2 className="font-[Montserrat] text-[20px] md:text-[24px] font-semibold text-[#000520] flex items-center gap-3 border-b pb-3" style={{ borderColor: 'rgba(198,197,208,0.30)' }}>
                        <span className="material-symbols-outlined text-[#fe6b00]">{cat.icon}</span>
                        {cat.label}
                      </h2>
                      <div className="space-y-3">
                        {categoryItems.map((item) => {
                          const isOpen = !!expandedFaqs[item.id]
                          return (
                            <div 
                              key={item.id} 
                              className={`rounded-xl border transition-all duration-300 ${
                                isOpen 
                                  ? 'bg-[#eff4ff] border-[#b6c4ff] shadow-md' 
                                  : 'bg-white border-[#c6c5d0]/30 hover:border-[#b6c4ff] hover:shadow-sm'
                              }`}
                            >
                              <button 
                                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                                onClick={() => toggleFaq(item.id)}
                              >
                                <span className="font-bold text-[#000520] text-[15px] md:text-[17px] pr-4">
                                  {item.q}
                                </span>
                                <span className={`material-symbols-outlined text-[#767680] transition-transform duration-300 shrink-0 ${
                                  isOpen ? 'rotate-180 text-[#fe6b00]' : ''
                                }`}>
                                  expand_more
                                </span>
                              </button>
                              
                              <div 
                                className="overflow-hidden transition-all duration-300 ease-in-out"
                                style={{ 
                                  maxHeight: isOpen ? '300px' : '0px',
                                  opacity: isOpen ? 1 : 0
                                }}
                              >
                                <div className="px-5 md:px-6 pb-6 text-[#45464f] text-[15px] md:text-[16px] leading-relaxed border-t border-[#c6c5d0]/10 pt-4">
                                  {item.a}
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })
              )}
            </div>

          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-[48px] py-16">
          <div className="rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0A1B4D 0%, #162E74 100%)' }}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#fe6b00]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="font-[Montserrat] text-[24px] md:text-[36px] font-bold mb-4">Still have questions?</h2>
            <p className="text-[16px] md:text-[18px] text-white/80 max-w-2xl mx-auto mb-8">
              Our logistics experts are available 24/7 to assist with your specific cargo requirements or complex shipping needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact-us" className="w-full sm:w-auto bg-[#fe6b00] text-white px-8 py-3.5 rounded-xl font-bold hover:scale-105 transition-transform text-center">
                Contact Support
              </Link>
              <a href="tel:+919599196008" className="w-full sm:w-auto border border-white/30 hover:bg-white/10 px-8 py-3.5 rounded-xl font-bold transition-colors text-center">
                Call +91 9599196008
              </a>
            </div>
          </div>
        </section>

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

      {/* ── Floating WhatsApp Button ── */}
      <a
        className="fixed bottom-8 right-8 z-50 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-3"
        style={{ background: '#25D366' }}
        href="https://wa.me/919599196008"
        target="_blank"
        rel="noreferrer"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>chat</span>
        <span className="hidden md:inline font-bold text-[13px]">WhatsApp Us</span>
      </a>

    </div>
  )
}
