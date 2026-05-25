import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AboutUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <div className="overflow-x-hidden" style={{ background: '#f8f9ff' }}>

      {/* ── TopAppBar ── */}
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
              <Link to="/about-us" className="text-[#fe6b00] font-bold border-b-2 border-[#fe6b00] text-[16px]">About</Link>
              <Link to="/our-services" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Services</Link>
              <Link to="/track-shipment" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Tracking</Link>
              <Link to="/network-and-coverage" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Network</Link>
              <Link to="/contact-us" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Contact</Link>
            </nav>
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
                { to: '/about-us', icon: 'info', label: 'About', active: true },
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

      <main className="pt-20">

{/* ── Hero Section ── */}
       <section className="relative flex items-center overflow-hidden" style={{ height: '500px' }}>
         <div className="absolute inset-0 z-0">
           <img
             className="w-full h-full object-cover"
             alt="High-tech logistics warehouse at sunset with warm golden light across polished concrete floors"
             src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu9qT-iRAIbIKLzx53H_Jfch9Drngtvq7w6QhKMKu-nJVXiCiFyxktmhhFC09OqzEYP0vQkjFP1GG6g8uR0CK5khVRp0vNQjTwi6AIzoxd_5ksvbut-bns9FdMK4eBVJbHOzvV3KarPC0pg7WbffKfoVOcEq9zgjhyQpU9i2EIZgPMquggZB7v9mTTTHMS3WjFeI7-B1PimEQZUk_6VxVLBZNx5LptIkiqZ1dyn2sNtSsW9juhXLh8t-WN06_o8SadKDLMv70G8AI"
           />
           <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,27,77,0.85) 0%, rgba(10,27,77,0.60) 100%)' }}></div>
         </div>
         <div className="relative z-10 px-4 md:px-[48px] max-w-[1280px] mx-auto w-full">
           <div className="max-w-xl">
             <span className="bg-[#fe6b00] text-white px-3 py-1 rounded-full text-[12px] font-bold mb-4 inline-block tracking-[0.05em]">
               ESTABLISHED 2024
             </span>
             <h1 className="font-[Montserrat] text-[28px] md:text-[40px] font-bold text-white mb-4" style={{ letterSpacing: '-0.02em', lineHeight: '48px' }}>
               Redefining the Global Movement of Cargo
             </h1>
             <p className="text-[15px] leading-[26px] max-w-lg" style={{ color: '#9ab4fc' }}>
               Cargonics Express Services is more than a logistics provider; we are the heartbeat of global commerce.
             </p>
           </div>
         </div>
       </section>

        {/* ── Company Story & Mission ── */}
        <section className="py-24 px-4 md:px-[48px] max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px] items-center">
            <div className="md:col-span-5 space-y-8">
              <h2 className="font-[Montserrat] text-[24px] font-semibold text-[#0a1b4d] border-l-4 border-[#fe6b00] pl-6">
                Our Legacy &amp; Mission
              </h2>
              <p className="text-[16px] leading-relaxed text-[#45464f]">
                Born from a vision to simplify complex global supply chains, Cargonics Express Services was founded on the principle that logistics should be invisible, yet indispensable. We have built an infrastructure that bridges continents, ensuring that distance never hinders growth.
              </p>
              <div className="p-8 rounded-xl border-l-8 border-[#fe6b00]" style={{ background: '#eff4ff' }}>
                <h3 className="font-[Montserrat] text-[24px] font-semibold text-[#000520] mb-2 italic">"Excellence in every delivery"</h3>
                <p className="text-[16px] text-[#45464f]">Our mission is the compass that guides every shipment, every route, and every customer interaction.</p>
              </div>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  className="rounded-2xl shadow-xl w-full object-cover"
                  style={{ height: '256px' }}
                  alt="Large cargo vessel's bow cutting through deep blue ocean waters"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF5m1QH5UZR3dgLALefbn2AsEJW8qV62VNPGCbSVjFVIL6SBvXsDyY8M0XnxW83ooLDztpT-4ea430yAbz9qUiS_gCuLjl2mscP2B98gvJGHzw9um9fFnI2yBcoysYd8UVPJiJaaFF2rBnHXcD9ITJhMtQ7QVaXKrv4vdpuOyv7P4aT-No5mtLADcFJRenIAr85kMnhwBno_rdEzDcjln-qORVeqmZ_eEo7Pg-7lgKAMpjwAVH1JPlaxlTEyjifGAw5_lpUzvS_hI"
                />
                <img
                  className="rounded-2xl shadow-xl w-full object-cover"
                  style={{ height: '320px' }}
                  alt="Professional team of logistics experts in a high-tech control center"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbGQG--M8_Dat5YyQWCblvfEBudW8Do-D_FuDyeBwXGzhFvx76ALDo6-WlOiiYBzHonlHFppONMSZ7j_OS6m0tevwtqUfsbKHRKYGV7gASaXcLStPIv_PILhJrdhkGwi_2gUdaWqpK8trmLa4bUAiEX7hdjmhxjOpsi0DqslB7_WtaNRnvs8ch66BJZYzJpnqwGgnFvFwXmSJ_cL72NJqYhKCmAK6Z9KoLVR5tZNSyhwdlSHvrGHyJT1L3HUkhVIaPnBfuIHgqJgQ"
                />
              </div>
              <div className="pt-12 space-y-4">
                <img
                  className="rounded-2xl shadow-xl w-full object-cover"
                  style={{ height: '450px' }}
                  alt="High-speed motion blur photography of a delivery truck on a modern highway at dawn"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwrB3ssF-ifmDnB-PP2szApwCPFRaj0ngef6mCO0i0jCD8YmaEOAS2ZzA2hod86pYIE0SkYijN-aSfuFQVkcd-s-Ib7Jz6ImeIII62vFCruXUdRbrqlcyvHCyrDhQLJPkhdp20zflXHHgh5JQv2Gqz8gDA_9w7F5MbJzUG0JcrbovbPP7fyJ9CNbCuhmVeAk-XWoBqMNYdEKs1x4X-jFqgfrFFLgT_QOITJP08DQLyUiCl17GmYiAEzDDUoUWNLVZgzj35IrmkAJY"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Vision Bento Grid ── */}
        <section className="py-24" style={{ background: '#0A1B4D' }}>
          <div className="px-4 md:px-[48px] max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-[Montserrat] text-[24px] font-semibold text-white mb-4">Our Vision for the Future</h2>
              <p className="text-[18px] leading-[28px] max-w-2xl mx-auto" style={{ color: '#7684bc' }}>
                To achieve global logistics leadership by integrating AI-driven routing with a carbon-neutral fleet.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {/* Global Reach */}
              <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(254,107,0,0.20)' }}>
                  <span className="material-symbols-outlined text-[#fe6b00]" style={{ fontSize: '40px' }}>public</span>
                </div>
                <h3 className="font-[Montserrat] text-[24px] font-semibold text-[#0a1b4d] mb-4">Global Reach</h3>
                <p className="text-[16px] text-[#45464f]">Connecting 220+ countries through a seamless network of air, sea, and land routes.</p>
              </div>

              {/* Tech Innovation — featured */}
              <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center border-t-4 border-[#fe6b00] scale-105">
                <div className="w-16 h-16 bg-[#fe6b00] rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '40px' }}>precision_manufacturing</span>
                </div>
                <h3 className="font-[Montserrat] text-[24px] font-semibold text-[#0a1b4d] mb-4">Tech Innovation</h3>
                <p className="text-[16px] text-[#45464f]">Utilizing real-time blockchain tracking and automated sorting for 100% transparency.</p>
              </div>

              {/* Sustainability */}
              <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(254,107,0,0.20)' }}>
                  <span className="material-symbols-outlined text-[#fe6b00]" style={{ fontSize: '40px' }}>eco</span>
                </div>
                <h3 className="font-[Montserrat] text-[24px] font-semibold text-[#0a1b4d] mb-4">Sustainability</h3>
                <p className="text-[16px] text-[#45464f]">Committed to reducing our carbon footprint through electric fleets and optimized routing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Choose Cargonics ── */}
        <section className="py-24 px-4 md:px-[48px] max-w-[1280px] mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            {/* Map / Image with badge */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full" style={{ background: 'rgba(254,107,0,0.10)', filter: 'blur(48px)' }}></div>
                <img
                  className="rounded-3xl shadow-2xl relative z-10 border w-full object-cover"
                  style={{ borderColor: 'rgba(198,197,208,0.30)' }}
                  alt="Abstract dark blue digital world map with glowing orange data points and interconnected light trails"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7qvuJs6pTmz2JrW4W7IcC_GExyrIikTBZOwGzlgz_n8gMj0BoWWwUNwBhHxVXMcr56jJzt-EotYEJdpdUV3yQdoKWHssJvyY-DWHqg4xqHTRIxxppRbqOZQ-z7R4CERII1ut191nx5GuPQ6CYYVkiugI33avzhPaVtONFSglNu27XmF-oKD343frC-bXbBiuhl_X0zlC5tmqDeB3vRKQBLD6nvUpPG4HsQpiAQ98X3shjcHspj3DQjGP8MLTyArvs4KGoijuInCc"
                />
                <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl shadow-lg z-20 border-l-4 border-[#009b50]">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-[#009b50]" style={{ fontSize: '30px' }}>verified</span>
                    <div>
                      <p className="font-[Montserrat] text-[24px] font-semibold text-[#000520]">99.9%</p>
                      <p className="text-[13px] tracking-widest uppercase text-[#45464f]">Reliability Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="w-full md:w-1/2 space-y-10">
              <div>
                <h2 className="font-[Montserrat] text-[32px] md:text-[24px] font-semibold text-[#0a1b4d] mb-4">Why Choose Cargonics</h2>
                <p className="text-[16px] text-[#45464f]">We don't just move boxes; we manage the promises you make to your customers.</p>
              </div>
              <div className="space-y-8">
                {[
                  { icon: 'security', title: 'Unmatched Security', desc: 'Military-grade protocols for cargo protection and high-value shipment handling.' },
                  { icon: 'bolt', title: 'Rapid Deployment', desc: 'Optimized air-hub connections ensuring the fastest possible transit times globally.' },
                  { icon: 'support_agent', title: '24/7 Priority Support', desc: 'A dedicated team of logistics experts available around the clock for your peace of mind.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-[#fe6b00] group-hover:text-white" style={{ background: '#d3e4fe' }}>
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-[Montserrat] text-[24px] font-semibold text-[#000520] mb-1">{item.title}</h4>
                      <p className="text-[16px] text-[#45464f]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-20 px-4 md:px-[48px] max-w-[1280px] mx-auto text-center">
          <div className="rounded-[2rem] p-12 md:p-20 relative overflow-hidden shadow-2xl" style={{ background: '#0a1b4d' }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full -mr-32 -mt-32" style={{ background: '#fe6b00', opacity: 0.10 }}></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full -ml-24 -mb-24" style={{ background: '#fff', opacity: 0.05 }}></div>
            <h2 className="font-[Montserrat] text-[32px] md:text-[48px] font-bold text-white mb-8 relative z-10">
              Ready to expand your borders?
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
              <Link to="/get-quote" className="bg-[#fe6b00] text-white px-10 py-4 rounded-xl font-bold text-[18px] hover:shadow-xl hover:-translate-y-1 transition-all">
                Request a Consultation
              </Link>
              <Link to="/network-and-coverage" className="border-2 text-white px-10 py-4 rounded-xl font-bold text-[18px] hover:bg-white hover:text-[#0a1b4d] transition-all" style={{ borderColor: 'rgba(255,255,255,0.30)' }}>
                Explore Our Network
              </Link>
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
        <Link to="/about-us" className="flex flex-col items-center gap-1 text-[#fe6b00]">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
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
