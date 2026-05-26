import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Menu, X, Home as HomeIcon, Info, Truck, MapPin, Globe, Headphones,
  PlaneTakeoff, Train, Gauge, Package, House, CheckCircle2, CheckCircle,
  Mail, Phone, ArrowRight
} from 'lucide-react'

const SERVICES = [
  {
    id: 'air',
    title: 'Air Freight',
    Icon: PlaneTakeoff,
    desc: 'High-speed global transit for time-sensitive shipments. We ensure your cargo reaches its destination via the most efficient flight paths.',
    features: ['24-48 Hour Global Delivery', 'Real-time Flight Tracking', 'Priority customs clearance'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa2m5LHF4SyVsn94v63agH23PP0MY3QZ2ya0usWZ4oUY_GnT1Tc67dgySfuPYc03rECVHEfL6YvaeWmdZASt1HHSgQq5erV_PTO-h0fqHCNyoqbomS2zXTWZkLgvoD9XkqThQ8znpxPhDj3aXFkYTO9yx-yIhWC2GH92_8Dg-L-Z2PzPJGuiZS30Odlh5IV1B9wqk06hXVzSzUGA_8yqe6-xIeVPrQxA-C6XUe6YveioEeacfLZOrHRN_oOa1-qzlpV8WYAOzj_dY',
    ctaLink: '/get-quote', ctaText: 'Get Quote', bg: 'glass-card', darkText: false
  },
  {
    id: 'surface',
    title: 'Surface Transport',
    Icon: Truck,
    desc: 'Extensive road network across regions for cost-effective heavy-lift delivery. Perfect for bulk cargo and regional haulage with guaranteed delivery windows.',
    features: ['FTL & LTL transport options', 'Multi-modal route optimization', 'GPS tracked fleet'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8uhq3-BHOm9t2kfQrKv62rfkVy8kXdpLYP3HRMuf_V4K63T6c4tz5v286SpyOWVuCfrlKKogzoWi5nlBuUe_C-soKHPLMBxssxt0oMRVkpGu9v1X5d7N6-NeDkcaA9y3FHZIdMr4gy76X2vDe7VcSZCes-LERNdsWrgH9JXXlhqXk1EOqe4Uw_VM4L-xjrPIXDNhJTnZLzq44jDoFr4NowKXN2KQSPosCEhPYctYkTjFVwUCPsmZc23SA_j49jymXVZihq5V3Ois',
    ctaLink: '/contact-us', ctaText: 'Learn More', bg: 'glass-card', darkText: false
  },
  {
    id: 'rail',
    title: 'Rail Cargo',
    Icon: Train,
    desc: 'Sustainable, high-volume transport for large-scale industrial goods. Connect major commercial hubs with energy-efficient rail container services.',
    features: ['Eco-friendly transit alternative', 'Bulk cargo transport capability', 'Scheduled terminal departures'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPzcJpYMBe1xnVS4pugbCh_fDS8bObcySCov0JYGVoJaqr8FVBrx1F-3GnxBM3Nx6Mi2Weg5zTkrMm7Bptv5Gs1wGwoVqICMNzJ_d1e507Dy1cnr7VSNADweZZJjQZhwG921pPHDQ8a9JBdeTFJ1viouxQbnxFmDct8ktpE01uq2wJt5Jtu0zDsbPwxmEU_5a1wa2OSv32aJ8__JTI1YeH916oDi85WcfNiOhsqNysWc39d5coC730nuyG5SkVJTruZJtcCzw7wcg',
    ctaLink: '/contact-us', ctaText: 'Learn More', bg: 'glass-card', darkText: false
  },
  {
    id: 'international',
    title: 'International Logistics',
    Icon: Globe,
    desc: 'Seamlessly navigate customs and global shipping routes with our end-to-end international management. We handle documentation, compliance, and multi-modal transfers.',
    features: ['Customs brokerage assistance', 'Ocean freight (FCL/LCL) solutions', 'Import/Export compliance monitoring'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiCWnURXQgadH6QirCrMZdUEb1MqTaBEPL2wFmMepkSaR-h6n8IotIqloMYlOGEnvy9asybS_IBaswl7VjAcJ87fyZkZrqKviT6NY4O1VbsEtyYpOFvOTh2m3c2V8GVnsetMvkD-tVBcfwTAppccOtkhwDcQa5p4tV83DE4jZxTdc8DZEmcxP5AU4mOJinPTJ30pO9WxvK810dqKGPzhUnj2kfHyG2DN7XkOfh-7Qaz0Cn7m2SlfmcoLQ3dQEwvqM9cwwHNwJ3pKk',
    ctaLink: '/network-and-coverage', ctaText: 'Explore Network',
    bg: 'linear-gradient(135deg, #0A1B4D 0%, #162E74 100%)', darkText: true
  },
  {
    id: 'door',
    title: 'Door-to-Door',
    Icon: House,
    desc: "Complete convenience with pickup from your warehouse and delivery to the final recipient's doorstep. We manage every step of the transit chain.",
    features: ['Single point of contact', 'Proof of delivery (POD)', 'Flexible pickup scheduling'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwUrWDcP2uRenb36LUunbA1u6-exghwTeWtdAclK-m1OVQE0YhlklTpAw65L3Sn17OczjBuPx-yc7A8qIPh-r5WkTBOsDhFih9-t_-wm2rFGcx0ESJMqY1YRdPCk3en42XGn6cYAps5h9uB-vmK0lF08QESTerNgNd1Tc53MQnsZveBGbjPP0dT0Tv37od7az7iG4tjKbpiKU_VdlLr9zNVmY74zT0u63KYy8tGl8ZdN40Wg5fOqGD5mXxUYtk_9jnwSqKn65n_4U',
    ctaLink: '/contact-us', ctaText: 'Details', bg: 'glass-card', darkText: false, badge: 'Premium Service'
  },
  {
    id: 'express',
    title: 'Express Cargo',
    Icon: Gauge,
    desc: 'Our fastest possible transit route. Priority handling, dedicated vehicle dispatch, and expedited delivery for urgent business-critical cargo.',
    features: ['Guaranteed delivery slots', 'Direct hotshot routing', 'Dedicated account manager'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASCj0_nEnK5i68bPEHMJKhpOmiKrEv_TG3sJGIt6NjKWXwE-B-5YyLezFy2AhGCRCOh502xsZHLolfvsuTl-10QvlyEkeI0_Iqqyy2fd7F86py5qXqY26d32oK_xlwKji6e9wFMEGoTNqYrav77Zqkikb-_s_9ntSgTBwGOLc7l67bUWAEUn1oIlVXrNR31pjAC6-Z0cr6TSLw8cO4ekjRgMRhxOQ8D6Vmc_KsB5D93QkbAj7D6pZc37SZ4aLuuYDPgjazDn37As4',
    ctaLink: '/contact-us', ctaText: 'Details', bg: 'glass-card', darkText: false, badge: 'Priority Fast'
  },
  {
    id: 'warehousing',
    title: 'Warehousing Solutions',
    Icon: Package,
    desc: 'State-of-the-art secure storage, distribution fulfillment, and inventory management systems coming soon to our major transit hubs.',
    features: ['Temperature controlled storage', 'WMS software integration', 'Cross-docking facilities'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMJkIipPuDCWjzElpZuXfIhz8vt79B9-F5VWxru4LHtg0l1I4gIwLhnZ-gXh1Kv0yw8UExliVQauqjg-juFxeDgbK_IoNh5H4YAc0OJVVc_SQ3jPG0eSIP-XAARu__gVq0lpDUUPJYl6D1Q9djvwki0MrK6t7Twzo9vcn5-ZJ3RI3nL3YcYIUEFpBif8PD67cy-s-aWXcmcl0gZgdACmkVs8mCGYFeDP8Ql41yjsFRdPvI1SqPxcRwfCIvXysO75jAItxkrxlU_FE',
    ctaLink: '#', ctaText: 'Coming Soon', bg: 'glass-card', darkText: false, teaser: true, badge: 'Upcoming'
  }
]

export default function OurServices() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, observerOptions)
    const hiddenElements = document.querySelectorAll('.animate-on-scroll')
    hiddenElements.forEach((el) => observer.observe(el))
    return () => { hiddenElements.forEach((el) => observer.unobserve(el)) }
  }, [])

  return (
    <div className="overflow-x-hidden" style={{ background: '#f8f9ff' }}>

      {/* ── TopAppBar Shell ── */}
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
              <Link to="/our-services" className="text-[#fe6b00] font-bold border-b-2 border-[#fe6b00] text-[16px]">Services</Link>
              <Link to="/track-shipment" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Tracking</Link>
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
                { to: '/our-services', Icon: Truck, label: 'Services', active: true },
                { to: '/track-shipment', Icon: MapPin, label: 'Tracking' },
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

      <main className="pt-20 pb-10">

        {/* ── Hero / Intro Section ── */}
        <section className="px-4 md:px-[48px] py-8 md:py-10 max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#a04100] font-bold tracking-widest uppercase text-[13px] mb-4">Our Expertise</span>
            <h1 className="font-[Montserrat] text-[32px] md:text-[48px] font-bold text-[#000520] mb-6" style={{ letterSpacing: '-0.02em' }}>
              Precision Logistics for a <span className="text-[#fe6b00]">Connected World</span>
            </h1>
            <p className="text-[18px] leading-[28px] text-[#45464f]">
              From deep-sea freight to last-mile express delivery, we leverage a global network and cutting-edge technology to move your business forward.
            </p>
          </div>

          {/* ── Zigzag List of Services ── */}
          <div className="space-y-10 max-w-[1100px] mx-auto">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 0
              const isDark = service.bg.startsWith('linear')
              return (
                <div key={service.id}
                  className={`animate-on-scroll ${isEven ? 'animate-left' : 'animate-right'} flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-stretch rounded-3xl overflow-hidden shadow-lg border transition-all duration-500 hover:shadow-2xl`}
                  style={{ background: service.bg, borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.3)' }}>
                  {/* Image Column */}
                  <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-auto overflow-hidden">
                    <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      src={service.image} alt={service.title} />
                    {isDark && (
                      <div className="absolute inset-0" style={{ background: isEven ? 'linear-gradient(to right, rgba(10,27,77,0.8) 0%, transparent 100%)' : 'linear-gradient(to left, rgba(10,27,77,0.8) 0%, transparent 100%)' }}></div>
                    )}
                  </div>

                  {/* Content Column */}
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      {service.badge && (
                        <span className={`inline-block font-bold px-3 py-1 rounded text-[13px] mb-4 ${service.badge === 'Upcoming' ? 'bg-[#000520] text-white' : service.badge === 'Priority Fast' ? 'bg-[#ffdbcc] text-[#a04100]' : 'bg-[#F0FDF4] text-[#009b50]'}`}>
                          {service.badge}
                        </span>
                      )}
                      <div className="flex items-center gap-3 mb-4">
                        <service.Icon size={36} style={{ color: isDark ? '#ffb693' : '#fe6b00' }} />
                        <h3 className={`font-[Montserrat] text-[24px] md:text-[28px] font-bold ${isDark ? 'text-white' : 'text-[#000520]'}`}>{service.title}</h3>
                      </div>
                      <p className={`text-[16px] leading-[26px] mb-6 ${isDark ? 'text-white/80' : 'text-[#45464f]'}`}>{service.desc}</p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feat) => (
                          <li key={feat} className={`flex items-center gap-2 text-[15px] ${isDark ? 'text-white/95' : 'text-[#000520]'}`}>
                            <CheckCircle2 size={20} className="text-[#009b50]" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {service.teaser ? (
                      <button className="w-fit text-[#767680] font-bold cursor-not-allowed text-[16px]">{service.ctaText}</button>
                    ) : (
                      <Link to={service.ctaLink}
                        className={`w-fit font-bold px-8 py-3 rounded-lg text-[16px] transition-all active:scale-95 ${isDark ? 'bg-[#fe6b00] text-white hover:shadow-lg' : 'border-2 border-[#000520] text-[#000520] hover:bg-[#000520] hover:text-white'}`}>
                        {service.ctaText}
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="mt-10 px-4 md:px-[48px] max-w-[1280px] mx-auto">
          <div className="rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0A1B4D 0%, #162E74 100%)' }}>
            <div className="relative z-10">
              <h2 className="font-[Montserrat] text-[24px] md:text-[48px] font-bold text-white mb-6">Ready to Streamline Your Supply Chain?</h2>
              <p className="max-w-2xl mx-auto mb-10 text-[18px] leading-[28px]" style={{ color: 'rgba(255,255,255,0.80)' }}>
                Get in touch with our logistics experts today for a customized quote tailored to your business needs.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Link to="/get-quote" className="bg-[#fe6b00] text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95">
                  Get Started Now
                </Link>
                <Link to="/contact-us" className="border-2 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
                  style={{ borderColor: 'rgba(255,255,255,0.20)' }}>
                  Talk to Sales
                </Link>
              </div>
            </div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full" style={{ background: 'rgba(254,107,0,0.20)', filter: 'blur(100px)' }}></div>
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full" style={{ background: 'rgba(220,225,255,0.10)', filter: 'blur(100px)' }}></div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="w-full text-white mt-auto border-t" style={{ background: '#0a1b4d', borderColor: 'rgba(255,255,255,0.10)' }}>
        <div className="w-full py-8 px-4 md:px-[48px] flex flex-col md:flex-row justify-between gap-6 md:gap-8 max-w-[1280px] mx-auto">
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
        <Link to="/our-services" className="flex flex-col items-center gap-1 text-[#fe6b00]"><Truck size={22} /><span className="text-[10px] font-bold">Services</span></Link>
        <Link to="/track-shipment" className="flex flex-col items-center gap-1 text-[#45464f]"><MapPin size={22} /><span className="text-[10px] font-bold">Track</span></Link>
        <Link to="/contact-us" className="flex flex-col items-center gap-1 text-[#45464f]"><Headphones size={22} /><span className="text-[10px] font-bold">Contact</span></Link>
      </div>

      {/* ── Floating WhatsApp Button ── */}
      <a className="fixed bottom-8 right-8 z-50 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-3"
        style={{ background: '#25D366' }} href="https://wa.me/919599196008" target="_blank" rel="noreferrer">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-1.122 4.102 4.195-1.1c.96.539 2.016.88 3.09.88 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.769-5.767-5.769zm3.387 8.192c-.146.415-.852.762-1.157.808-.304.048-.681.088-1.985-.452-1.57-.649-2.58-2.249-2.658-2.353-.078-.103-.639-.851-.639-1.624s.401-1.151.543-1.306c.143-.155.309-.193.412-.193.104 0 .207.001.297.006.096.004.225-.035.352.27.13.313.444 1.077.482 1.154.039.077.065.167.013.271-.052.103-.077.167-.155.257-.077.091-.161.203-.23.273-.078.077-.159.16-.068.315.091.155.404.667.865 1.077.595.53 1.096.694 1.25.772.155.077.247.065.338-.041.091-.106.39-.452.494-.606.104-.155.208-.13.351-.077.143.052.906.427 1.062.505.155.077.259.116.297.181.04.063.04.364-.105.779z" /></svg>
        <span className="hidden md:inline font-bold text-[13px]">WhatsApp Us</span>
      </a>

    </div>
  )
}
