import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Menu, X, Home as HomeIcon, Info, Truck, MapPin, Globe, Headphones,
  Warehouse, Activity, PlaneTakeoff, CheckCheck, Rocket, ArrowRight,
  Building2, Network, Mail, Phone
} from 'lucide-react'

export default function NetworkAndCoverage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const hubMarkers = [
    { top: '20%', left: '45%', label: 'New Delhi Hub' },
    { top: '65%', left: '35%', label: 'Mumbai Gateway' },
    { top: '75%', left: '55%', label: 'Bengaluru Logistics' },
  ]

  const infraCards = [
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3x1X2CD_vW-f00b5JZzAwMT0iRZsu9GXsu0g1WDupTtT9QFS8jZf3CvC3zVIxxn9b2bhzwWwHP4Gy46ljofmcEfXZesFQF83tSFRtwn-BtKAsSyimRGKYvEPu8ep-C7U5NoKPDR2yq7CLfxoyKZqvpp8rPVkIbXdPh_4qHoRobKjaCDDBNDnAAY5RYmvZuPpBAKEcUWKw7R2fpiX8XpvfNGc8rztV9oGOUSBQBkU3F7VG_zQ6C5Eqo3xAnqboH-rtdDfJvyv3Euo', alt: 'Modern fulfillment center', Icon: Warehouse, tag: 'Smart Warehousing', title: 'Bonded Storage', desc: 'Climate-controlled hubs at all major ports for sensitive cargo and high-value electronics.', link: 'View Locations' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHJ1e4phYF3__l5yw3sWFNm35aoTDKED4CbJUiLg2Zgkb-3Tb58Y0DuU4HBzBj3gVDeYfI6L8bZg_UF-Hj8xtmlz_jQZydFvSLOSN_mg26ob2fa0jxvV8fPGcUxrI8TgSH8a-q7RfYjxVGqZW_mLB5Nrx5Kh9rDNbOtif3CSX5QPrM09KvGKHRzSX2BSCdu04ZERQyM0kP7AmepGfZDzMROEkagbSf_RTQRDznY8RIJvItMTMq4hx2mWiNnFgcjckxuG_D94SRdLM', alt: 'Fleet of white semi-trucks', Icon: Truck, tag: 'Surface Fleet', title: 'Green Fleet Initiative', desc: 'Our fleet includes 100+ Electric Vehicles for eco-friendly last-mile delivery in urban centers.', link: 'Sustainability Report' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVnd3G9sT5akb0Ln637uAU-FbH8avkCSnMRIwrR2pb9TG0yRW9ePPh-_DA-nnnv3_pihdptYpndrO_dRLPijN08rivpGq2R7owL67VzkUVIBd7XRrR4vZfumMD4OMv3FrOylf4FgfzxggJdI2IdhDDYOcQDfh41V9NGX4ahM01zb-O6kBG5FKrK-9u-aLSEgcmHQklDQfQxNdLar9XfIpRWP-HGIvqGXbpRY4vYVXthNV_y8zjkmg017ZdBu0YbX3wPRoXSixoogo', alt: 'High-tech control room', Icon: Activity, tag: 'Tech Stack', title: 'Real-time Visibility', desc: 'IoT-integrated tracking providing 100% visibility into shipment location and environmental conditions.', link: 'Explore Platform' },
  ]

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
              <Link to="/track-shipment" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Tracking</Link>
              <Link to="/network-and-coverage" className="text-[#fe6b00] font-bold border-b-2 border-[#fe6b00] text-[16px]">Network</Link>
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
                { to: '/track-shipment', Icon: MapPin, label: 'Tracking' },
                { to: '/network-and-coverage', Icon: Globe, label: 'Network', active: true },
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

      <main className="pt-20">

{/* ── Hero: Global Reach ── */}
       <section className="relative flex items-center overflow-hidden" style={{ height: '500px' }}>
         <div className="absolute inset-0 z-0">
           <img className="w-full h-full object-cover" alt="Massive cargo ship crossing the deep blue ocean during a golden hour sunset"
             src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4iO5qKHgzCNBFBRdBmYTPBYuUjYr74_-y-sK1mk6cMgS7hZRbFjtzLv71M_BbkHK82nFiy9HLRaV3FYEzEDnAWI82tI3z2K7sCKxmCiYT-JwpTV_e7SVYagu4hWiuzhHnyoaSeUCVVV42yE5wzlbvbIA5Weq4NubRKMTyPHvqkOf-Be28ezjEfwGmNVf-ys5dDwxnH0uwUzCL0smbhnwkFBMQYHzT8wWpcmavfXkjPapbIaY2PGwzdUZNvtBuVNbJW35VIOEh28Y" />
           <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,27,77,0.85) 0%, rgba(22,46,116,0.70) 100%)' }}></div>
         </div>
         <div className="relative z-10 w-full px-4 md:px-[48px] max-w-[1280px] mx-auto text-white">
           <div className="max-w-xl">
             <span className="inline-block bg-[#fe6b00] text-white px-3 py-1 rounded-full text-[12px] font-bold mb-4 tracking-[0.05em]">GLOBAL CONNECTIVITY</span>
             <h1 className="font-[Montserrat] text-[28px] md:text-[40px] font-bold mb-4" style={{ letterSpacing: '-0.02em', lineHeight: '48px' }}>
               Connecting Every Mile, Across Every Border.
             </h1>
             <p className="text-[15px] leading-[26px] mb-6" style={{ color: '#9ab4fc' }}>
               Our expansive network spans over 220 countries and territories, powered by infrastructure built for precision.
             </p>
             <div className="flex flex-wrap gap-3">
               <button className="bg-[#fe6b00] hover:bg-[#a04100] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg">Explore Global Routes</button>
               <button className="border-2 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all backdrop-blur-sm" style={{ borderColor: 'rgba(255,255,255,0.30)' }}>Infrastructure</button>
             </div>
           </div>
         </div>
       </section>

        {/* ── Domestic Network: India Interactive ── */}
        <section className="py-24" style={{ background: '#f8f9ff' }}>
          <div className="px-4 md:px-[48px] max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px] items-center">

              {/* Text & Hub List */}
              <div className="lg:col-span-5">
                <h2 className="font-[Montserrat] text-[24px] font-semibold text-[#0a1b4d] mb-4">Domestic Stronghold</h2>
                <p className="text-[#45464f] text-[16px] mb-8">
                  With over 500 strategic hubs across India, we ensure last-mile delivery even in the most remote regions. Our domestic network is the backbone of our express service.
                </p>
                <div className="space-y-4">
                  {[
                    { Icon: Building2, title: 'Metro Connectivity', desc: 'Same-day delivery in Delhi, Mumbai, Bengaluru, and Chennai.' },
                    { Icon: Truck, title: 'Tier 2 & 3 Reach', desc: 'Extensive surface network covering 19,000+ pin codes.' },
                    { Icon: Network, title: 'Automated Sort Centers', desc: 'Precision handling with zero-error sortation technology.' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-4 p-4 rounded-xl border hover:shadow-md transition-all cursor-pointer"
                      style={{ background: '#eff4ff', borderColor: 'rgba(198,197,208,0.30)' }}>
                      <div className="w-12 h-12 rounded-lg bg-[#0a1b4d] flex items-center justify-center text-white flex-shrink-0">
                        <item.Icon size={22} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#000520] text-[16px]">{item.title}</h4>
                        <p className="text-[13px] text-[#45464f]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Panel */}
              <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: '600px', background: '#0A1B4D' }}>
                <div className="absolute inset-0" style={{ opacity: 0.40 }}>
                  <img className="w-full h-full object-cover" alt="Dark navy blue stylistic map of India glowing with neon orange nodes at major hubs"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8Zlm6hS8mNU8lDZ0Jg88S3lgzd5aaO_8sGKhCNOmkMb9Xr2LiEg4r2sufQPmdbOx-85FGYI9Qnbp0HIWpLX9IphIF7w7-rluPtA6qxGZOgPH5xc90J6s3uei_AxsYsydfatX2XXnoLv4pH8diw0bLtMkBqR1-OLId9QMHNiusIaXDhXi4mXuQ-t2FSbFj5q7kNriitDiJds0jQSBK2poPKozKyCvwuHAIBFJGjdzfwIw6JrTT-N1K4u-LlxiatoOcthUcVlYW6qQ" />
                </div>

                {/* Animated Hub Markers */}
                {hubMarkers.map((hub) => (
                  <div key={hub.label} className="absolute group" style={{ top: hub.top, left: hub.left }}>
                    <div className="w-4 h-4 bg-[#fe6b00] rounded-full cursor-pointer"
                      style={{ animation: 'pulse-orange 2s infinite', boxShadow: '0 0 0 0 rgba(254,107,0,0.7)' }}></div>
                    <div className="absolute hidden group-hover:block w-32 glass-card p-2 rounded-lg text-center"
                      style={{ bottom: '100%', marginBottom: '8px', left: '50%', transform: 'translateX(-50%)' }}>
                      <span className="text-[13px] font-bold text-[#000520]">{hub.label}</span>
                    </div>
                  </div>
                ))}

                {/* Map Overlay Info */}
                <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[13px] text-[#000520] font-bold uppercase tracking-widest">Network Live Status</p>
                      <p className="text-[#45464f] text-[16px]">98.4% On-time delivery across 28 states.</p>
                    </div>
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white" style={{ background: '#22c55e' }}>
                        <CheckCheck size={16} />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white" style={{ background: '#3b82f6' }}>
                        <Rocket size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Global Routes Bento Grid ── */}
        <section className="py-24" style={{ background: '#eff4ff' }}>
          <div className="px-4 md:px-[48px] max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-[Montserrat] text-[32px] md:text-[48px] font-bold text-[#0a1b4d] mb-4" style={{ letterSpacing: '-0.02em' }}>International Arteries</h2>
              <p className="max-w-2xl mx-auto text-[#45464f] text-[18px] leading-[28px]">
                We bridge continents with scheduled freighter services and strategic partnerships with global air and sea carriers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px] auto-rows-fr" style={{ minHeight: '600px' }}>

              {/* Asia-Pacific */}
              <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl" style={{ background: '#0a1b4d', minHeight: '300px' }}>
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{ opacity: 0.60 }}
                  alt="Birds-eye view of a bustling Asian container port at night"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaoR0NusJ7tK9JXmuvJAnC5RbRRPuBg0FbyaHuPnVvoKgQ8VdIPnom5fcItrhL1gzy4Y2dwgBUMUPdYeIvUFxcnK4Yg6r25mz9LwDNVBjeABSFyBVvapPZmHJ-a-dK5Am6jzIOuan0QK7GKqXg9B0bmRNlECRsLJF30E3vuz5pOczyaB4cqUpKwXg_J5Q0-TDXelcHDTUAf1PGGy3h7QubJhd2BmJrdldr4M-bX8JEkXeAo9y8JImex1OgpzMiiYxegolb6-0BvYQ" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white"
                  style={{ background: 'linear-gradient(to top, rgba(10,27,77,1) 0%, transparent 60%)' }}>
                  <h3 className="font-[Montserrat] text-[24px] font-semibold mb-2">Asia-Pacific Gateway</h3>
                  <p className="mb-6 text-[16px]" style={{ color: '#7684bc' }}>Daily freighter flights connecting Singapore, Hong Kong, and Shanghai hubs to the world.</p>
                  <button className="w-fit backdrop-blur-md text-white px-6 py-2 rounded-lg font-bold border transition-all hover:bg-white/30"
                    style={{ background: 'rgba(255,255,255,0.20)', borderColor: 'rgba(255,255,255,0.30)' }}>
                    Route Schedule
                  </button>
                </div>
              </div>

              {/* European Corridor */}
              <div className="md:col-span-2 relative group overflow-hidden rounded-3xl" style={{ background: '#fe6b00', minHeight: '280px' }}>
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{ opacity: 0.50 }}
                  alt="Cargo plane being loaded at a European airport"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJOa4meDviRIBiyYUy8bdfODwa5cNcIbI8oVLKMifOELTuP-niAF8zpNnBtUXTB9JiSk6KlYW0fXkCBsKuw7Iu_5wllWKtZL6zH_PVLBpTgSAaw4pwd_aQJ68IkpXOc1gVVu29UDYtZE9Xtmeci5Z9O2uomYLt-JwLtZ6uhOQEJPUdp7OxhHu-Vq5sluuLEYlTA5OPLl6rNcxRf4dL9h3POyExpTpsQtlt7o7xcOFTVVZcVZL2ENwduwrn4dvUm5Z-Bbsrn6vJdlo" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="font-[Montserrat] text-[24px] font-semibold mb-2">European Corridor</h3>
                  <p className="text-[16px]" style={{ color: 'rgba(255,255,255,0.80)' }}>Direct air-bridge connecting Frankfurt and London to Indian Metros.</p>
                </div>
              </div>

              {/* Middle East — Stats card */}
              <div className="relative group overflow-hidden rounded-3xl" style={{ background: '#0A1B4D', minHeight: '280px' }}>
                <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center text-white">
                  <Globe size={40} className="mb-4 text-[#ffb693]" />
                  <h4 className="font-[Montserrat] font-bold text-[24px]">220+</h4>
                  <p className="text-[13px] opacity-80">Countries Served</p>
                </div>
              </div>

              {/* Americas Route */}
              <div className="relative group overflow-hidden rounded-3xl bg-white border p-8 flex flex-col justify-between" style={{ borderColor: 'rgba(198,197,208,0.30)', minHeight: '280px' }}>
                <PlaneTakeoff size={40} className="text-[#fe6b00]" />
                <div>
                  <h4 className="font-bold text-[#000520] text-[16px]">Americas Route</h4>
                  <p className="text-[13px] text-[#45464f]">Bi-weekly sea-freight consolidations to New York &amp; LA.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Logistic Infrastructure ── */}
        <section className="py-24 bg-white">
          <div className="px-4 md:px-[48px] max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="font-[Montserrat] text-[32px] md:text-[24px] font-semibold text-[#0a1b4d] mb-4">Hard Assets, Soft Touch</h2>
                <p className="text-[#45464f] text-[18px] leading-[28px]">
                  Our physical assets are managed by our proprietary Cargonics AI, ensuring that every truck, plane, and square foot of warehouse space is optimized for speed.
                </p>
              </div>
              <div className="flex gap-4 flex-shrink-0">
                <div className="text-right">
                  <p className="font-extrabold leading-none text-[#fe6b00]" style={{ fontSize: '48px' }}>1.2M</p>
                  <p className="text-[13px] font-bold text-[#0a1b4d]">SQ. FT. WAREHOUSING</p>
                </div>
                <div className="w-px h-12 self-center" style={{ background: '#c6c5d0' }}></div>
                <div className="text-right">
                  <p className="font-extrabold leading-none text-[#fe6b00]" style={{ fontSize: '48px' }}>450+</p>
                  <p className="text-[13px] font-bold text-[#0a1b4d]">OWNED VEHICLES</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {infraCards.map((card) => (
                <div key={card.title} className="group rounded-3xl overflow-hidden border hover:shadow-2xl transition-all duration-500" style={{ borderColor: 'rgba(198,197,208,0.20)' }}>
                  <div className="h-64 overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={card.alt} src={card.img} />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4 text-[#fe6b00]">
                      <card.Icon size={22} />
                      <span className="font-bold uppercase tracking-widest text-[13px]">{card.tag}</span>
                    </div>
                    <h4 className="font-[Montserrat] text-[24px] font-semibold text-[#0a1b4d] mb-3">{card.title}</h4>
                    <p className="text-[#45464f] mb-6 text-[16px]">{card.desc}</p>
                    <a className="inline-flex items-center gap-2 text-[#000520] font-bold hover:gap-4 transition-all text-[16px]" href="#">
                      {card.link} <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="py-24 relative overflow-hidden" style={{ background: '#0A1B4D' }}>
          <div className="absolute top-0 left-0 w-full h-full" style={{ opacity: 0.10 }}>
            <div className="absolute w-[800px] h-[800px] rounded-full -top-96 -left-96" style={{ background: '#fe6b00', filter: 'blur(150px)' }}></div>
            <div className="absolute w-[600px] h-[600px] rounded-full -bottom-96 -right-96" style={{ background: '#3b82f6', filter: 'blur(150px)' }}></div>
          </div>
          <div className="relative z-10 px-4 md:px-[48px] max-w-[1280px] mx-auto text-center">
            <h2 className="font-[Montserrat] text-[32px] md:text-[48px] font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>Ready to scale your reach?</h2>
            <p className="text-[18px] leading-[28px] mb-10 max-w-xl mx-auto" style={{ color: '#7684bc' }}>
              Join thousands of businesses leveraging the Cargonics network for their global logistics needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/get-quote" className="bg-[#fe6b00] hover:bg-[#a04100] text-white px-10 py-5 rounded-2xl font-bold text-[18px] shadow-xl transition-all active:scale-95">
                Get Started Today
              </Link>
              <Link to="/contact-us" className="backdrop-blur-md text-white border px-10 py-5 rounded-2xl font-bold text-[18px] transition-all active:scale-95 hover:bg-white/20"
                style={{ background: 'rgba(255,255,255,0.10)', borderColor: 'rgba(255,255,255,0.20)' }}>
                Talk to a Network Expert
              </Link>
            </div>
          </div>
        </section>

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
        <Link to="/track-shipment" className="flex flex-col items-center gap-1 text-[#45464f]"><MapPin size={22} /><span className="text-[10px] font-bold">Track</span></Link>
        <Link to="/contact-us" className="flex flex-col items-center gap-1 text-[#45464f]"><Headphones size={22} /><span className="text-[10px] font-bold">Contact</span></Link>
      </div>

      {/* ── Pulse animation keyframes ── */}
      <style>{`
        @keyframes pulse-orange {
          0%   { box-shadow: 0 0 0 0 rgba(254, 107, 0, 0.7); }
          70%  { box-shadow: 0 0 0 10px rgba(254, 107, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(254, 107, 0, 0); }
        }
      `}</style>

    </div>
  )
}
