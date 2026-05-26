import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Menu, X, Home as HomeIcon, Info, Truck, MapPin, Globe, Headphones,
  ShieldCheck, Zap, Headset, CheckCircle, Mail, Phone, Target, Eye
} from 'lucide-react'

export default function AboutUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  // Scroll-reveal animation for image cards
  const imgSectionRef = useRef(null)
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes fadeSlideUp {
        from { opacity: 0; transform: translateY(32px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeSlideLeft {
        from { opacity: 0; transform: translateX(32px); }
        to   { opacity: 1; transform: translateX(0); }
      }
      .img-card-anim { opacity: 0; }
      .img-card-anim.visible-1 { animation: fadeSlideUp 0.7s ease forwards 0.1s; }
      .img-card-anim.visible-2 { animation: fadeSlideUp 0.7s ease forwards 0.3s; }
      .img-card-anim.visible-3 { animation: fadeSlideLeft 0.7s ease forwards 0.2s; }
      .img-card-wrap { overflow: hidden; border-radius: 1rem; }
      .img-card-wrap img { transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.55s ease; }
      .img-card-wrap:hover img { transform: scale(1.04); box-shadow: 0 20px 48px rgba(10,27,77,0.18); }
    `
    document.head.appendChild(style)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.img-card-anim')
            cards.forEach((card, i) => card.classList.add(`visible-${i + 1}`))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    if (imgSectionRef.current) observer.observe(imgSectionRef.current)
    return () => { observer.disconnect(); document.head.removeChild(style) }
  }, [])

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
                { to: '/about-us', Icon: Info, label: 'About', active: true },
                { to: '/our-services', Icon: Truck, label: 'Services' },
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
                className="w-full block text-center bg-[#000520] text-white py-4 rounded-xl font-bold active:scale-95 transition-all">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}

      <main className="pt-20">

        {/* ── Hero Section ── */}
        <section className="relative flex items-center overflow-hidden" style={{ height: '420px' }}>
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="High-tech logistics warehouse at sunset"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu9qT-iRAIbIKLzx53H_Jfch9Drngtvq7w6QhKMKu-nJVXiCiFyxktmhhFC09OqzEYP0vQkjFP1GG6g8uR0CK5khVRp0vNQjTwi6AIzoxd_5ksvbut-bns9FdMK4eBVJbHOzvV3KarPC0pg7WbffKfoVOcEq9zgjhyQpU9i2EIZgPMquggZB7v9mTTTHMS3WjFeI7-B1PimEQZUk_6VxVLBZNx5LptIkiqZ1dyn2sNtSsW9juhXLh8t-WN06_o8SadKDLMv70G8AI" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,27,77,0.85) 0%, rgba(10,27,77,0.60) 100%)' }}></div>
          </div>
          <div className="relative z-10 px-4 md:px-[48px] max-w-[1280px] mx-auto w-full">
            <div className="max-w-xl">
              <span className="bg-[#fe6b00] text-white px-3 py-1 rounded-full text-[12px] font-bold mb-4 inline-block tracking-[0.05em]">ESTABLISHED 2026</span>
              <h1 className="font-[Montserrat] text-[28px] md:text-[40px] font-bold text-white mb-4" style={{ letterSpacing: '-0.02em', lineHeight: '48px' }}>
                Redefining the Global Movement of Cargo
              </h1>
              <p className="text-[15px] leading-[26px] max-w-lg" style={{ color: '#9ab4fc' }}>
                Cargosnic Logistics is more than a logistics provider; we are the heartbeat of modern cargo transport.
              </p>
            </div>
          </div>
        </section>

        {/* ── Company Story & Mission ── */}
        <section className="py-10 px-4 md:px-[48px] max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px] items-center">
            <div className="md:col-span-6 space-y-6">
              <h2 className="font-[Montserrat] text-[28px] font-semibold text-[#0a1b4d] border-l-4 border-[#fe6b00] pl-6 mb-2">Who We Are</h2>
              <p className="text-[15px] leading-[26px] text-[#45464f]">
                Cargosnic Logistics is a modern logistics and cargo solutions company committed to delivering reliable, efficient, and secure transportation services. Founded in April 2026 by Mr. Sanjeev Pandey and Mrs. Lakshmi Pandey, the company was established with a vision to simplify logistics and provide dependable transportation solutions for businesses and individuals.
              </p>
              <p className="text-[15px] leading-[26px] text-[#45464f]">
                We specialize in cargo transportation, freight management, and logistics support services designed to ensure timely and safe delivery operations. With a strong focus on professionalism, customer satisfaction, and operational excellence, we aim to build long-term trust through quality service and transparent communication.
              </p>
              <p className="text-[15px] leading-[26px] text-[#45464f] font-semibold" style={{ color: '#0a1b4d' }}>
                At Cargosnic Logistics, we believe logistics is more than moving goods — it is about connecting businesses, delivering commitments, and creating reliable supply chain solutions.
              </p>
            </div>
            <div className="md:col-span-6 grid grid-cols-2 gap-4" ref={imgSectionRef}>
              <div className="space-y-4">

                {/* Card 1 — fade slide up */}
                <div className="img-card-anim img-card-wrap shadow-xl" style={{ height: '256px' }}>
                  <img className="w-full h-full object-cover" style={{ height: '256px' }}
                    alt="Large cargo vessel's bow cutting through deep blue ocean waters"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF5m1QH5UZR3dgLALefbn2AsEJW8qV62VNPGCbSVjFVIL6SBvXsDyY8M0XnxW83ooLDztpT-4ea430yAbz9qUiS_gCuLjl2mscP2B98gvJGHzw9um9fFnI2yBcoysYd8UVPJiJaaFF2rBnHXcD9ITJhMtQ7QVaXKrv4vdpuOyv7P4aT-No5mtLADcFJRenIAr85kMnhwBno_rdEzDcjln-qORVeqmZ_eEo7Pg-7lgKAMpjwAVH1JPlaxlTEyjifGAw5_lpUzvS_hI" />
                </div>

                {/* Card 2 — fade slide up (delayed) */}
                <div className="img-card-anim img-card-wrap shadow-xl" style={{ height: '320px' }}>
                  <img className="w-full h-full object-cover" style={{ height: '320px' }}
                    alt="Professional team of logistics experts in a high-tech control center"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbGQG--M8_Dat5YyQWCblvfEBudW8Do-D_FuDyeBwXGzhFvx76ALDo6-WlOiiYBzHonlHFppONMSZ7j_OS6m0tevwtqUfsbKHRKYGV7gASaXcLStPIv_PILhJrdhkGwi_2gUdaWqpK8trmLa4bUAiEX7hdjmhxjOpsi0DqslB7_WtaNRnvs8ch66BJZYzJpnqwGgnFvFwXmSJ_cL72NJqYhKCmAK6Z9KoLVR5tZNSyhwdlSHvrGHyJT1L3HUkhVIaPnBfuIHgqJgQ" />
                </div>

              </div>
              <div className="pt-6 space-y-4">

                {/* Card 3 — fade slide from right */}
                <div className="img-card-anim img-card-wrap shadow-xl" style={{ height: '450px' }}>
                  <img className="w-full h-full object-cover" style={{ height: '450px' }}
                    alt="High-speed motion blur photography of a delivery truck on a modern highway at dawn"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwrB3ssF-ifmDnB-PP2szApwCPFRaj0ngef6mCO0i0jCD8YmaEOAS2ZzA2hod86pYIE0SkYijN-aSfuFQVkcd-s-Ib7Jz6ImeIII62vFCruXUdRbrqlcyvHCyrDhQLJPkhdp20zflXHHgh5JQv2Gqz8gDA_9w7F5MbJzUG0JcrbovbPP7fyJ9CNbCuhmVeAk-XWoBqMNYdEKs1x4X-jFqgfrFFLgT_QOITJP08DQLyUiCl17GmYiAEzDDUoUWNLVZgzj35IrmkAJY" />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── Mission & Vision ── */}
        <section className="py-10" style={{ background: '#0a1b4d' }}>
          <div className="px-4 md:px-[48px] max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
              
              {/* Mission Card */}
              <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl flex flex-col md:flex-row gap-6 items-start hover:border-[#fe6b00]/50 transition-all duration-300">
                <div className="w-14 h-14 bg-[#fe6b00] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Target size={30} className="text-white" />
                </div>
                <div>
                  <h3 className="font-[Montserrat] text-[24px] font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-[15px] leading-relaxed text-[#9ab4fc]">
                    To provide fast, secure, and cost-effective logistics solutions while maintaining the highest standards of reliability and customer satisfaction.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl flex flex-col md:flex-row gap-6 items-start hover:border-[#fe6b00]/50 transition-all duration-300">
                <div className="w-14 h-14 bg-[#fe6b00] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Eye size={30} className="text-white" />
                </div>
                <div>
                  <h3 className="font-[Montserrat] text-[24px] font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-[15px] leading-relaxed text-[#9ab4fc]">
                    To become a trusted and leading logistics company recognized for innovation, efficiency, and service excellence.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Why Choose Cargosnic Logistics ── */}
        <section className="py-10 px-4 md:px-[48px] max-w-[1280px] mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full" style={{ background: 'rgba(254,107,0,0.10)', filter: 'blur(48px)' }}></div>
                <img className="rounded-3xl shadow-2xl relative z-10 border w-full object-cover"
                  style={{ borderColor: 'rgba(198,197,208,0.30)' }}
                  alt="Abstract dark blue digital world map with glowing orange data points"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7qvuJs6pTmz2JrW4W7IcC_GExyrIikTBZOwGzlgz_n8gMj0BoWWwUNwBhHxVXMcr56jJzt-EotYEJdpdUV3yQdoKWHssJvyY-DWHqg4xqHTRIxxppRbqOZQ-z7R4CERII1ut191nx5GuPQ6CYYVkiugI33avzhPaVtONFSglNu27XmF-oKD343frC-bXbBiuhl_X0zlC5tmqDeB3vRKQBLD6nvUpPG4HsQpiAQ98X3shjcHspj3DQjGP8MLTyArvs4KGoijuInCc" />
                <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl shadow-lg z-20 border-l-4 border-[#009b50]">
                  <div className="flex items-center gap-4">
                    <ShieldCheck size={30} className="text-[#009b50]" />
                    <div>
                      <p className="font-[Montserrat] text-[24px] font-semibold text-[#000520]">99.9%</p>
                      <p className="text-[13px] tracking-widest uppercase text-[#45464f]">Reliability Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-10">
              <div>
                <h2 className="font-[Montserrat] text-[32px] md:text-[24px] font-semibold text-[#0a1b4d] mb-4">Why Choose Us</h2>
                <p className="text-[16px] text-[#45464f]">At Cargosnic Logistics, we focus on trust, reliability, and custom-tailored operations to ensure your shipments are delivered perfectly.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { Icon: Truck, title: 'Reliable Cargo Transportation', desc: 'Secure and dependable movement of goods.' },
                  { Icon: Zap, title: 'Timely Deliveries', desc: 'Optimized planning for prompt arrival schedules.' },
                  { Icon: Headset, title: 'Professional Customer Support', desc: 'Logistics experts ready to guide you 24/7.' },
                  { Icon: ShieldCheck, title: 'Safe & Secure Handling', desc: 'Rigorous safety protocols protecting your cargo.' },
                  { Icon: Globe, title: 'Efficient Logistics Management', desc: 'Smart routing and coordination at every step.' },
                  { Icon: CheckCircle, title: 'Customer-Centric Approach', desc: 'Solutions tailored specifically to your expectations.' }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 group items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[#fe6b00] group-hover:text-white" style={{ background: '#eff4ff', color: '#0a1b4d' }}>
                      <item.Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-[Montserrat] text-[15px] font-bold text-[#000520] mb-1">{item.title}</h4>
                      <p className="text-[13px] text-[#45464f] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-8 px-4 md:px-[48px] max-w-[1280px] mx-auto text-center">
          <div className="rounded-[2rem] p-12 md:p-20 relative overflow-hidden shadow-2xl" style={{ background: '#0a1b4d' }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full -mr-32 -mt-32" style={{ background: '#fe6b00', opacity: 0.10 }}></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full -ml-24 -mb-24" style={{ background: '#fff', opacity: 0.05 }}></div>
            <h2 className="font-[Montserrat] text-[32px] md:text-[48px] font-bold text-white mb-8 relative z-10">Ready to expand your borders?</h2>
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
        <Link to="/about-us" className="flex flex-col items-center gap-1 text-[#fe6b00]"><Info size={22} /><span className="text-[10px] font-bold">About</span></Link>
        <Link to="/our-services" className="flex flex-col items-center gap-1 text-[#45464f]"><Truck size={22} /><span className="text-[10px] font-bold">Services</span></Link>
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
