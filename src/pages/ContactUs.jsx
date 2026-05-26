import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Menu, X, Home as HomeIcon, Info, Truck, MapPin, Globe, Headphones,
  Mail, Phone, Send, Loader2, CheckCircle
} from 'lucide-react'

export default function ContactUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' })
  const [submitState, setSubmitState] = useState('idle') // idle | sending | sent

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitState('sending')
    const messageText = `*New Inquiry for Cargonics Express*\n\n` +
      `• *Name:* ${formData.name}\n` +
      `• *Email:* ${formData.email}\n` +
      `• *Contact Number:* ${formData.phone}\n` +
      `• *Subject:* ${formData.subject}\n` +
      `• *Message:* ${formData.message}`
    const whatsappUrl = `https://wa.me/919599196008?text=${encodeURIComponent(messageText)}`
    setTimeout(() => {
      setSubmitState('sent')
      window.open(whatsappUrl, '_blank')
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' })
      setTimeout(() => setSubmitState('idle'), 3000)
    }, 1000)
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
              <Link to="/track-shipment" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Tracking</Link>
              <Link to="/network-and-coverage" className="text-[#45464f] font-medium hover:text-[#fe6b00] transition-all duration-300 text-[16px]">Network</Link>
              <Link to="/contact-us" className="text-[#fe6b00] font-bold border-b-2 border-[#fe6b00] text-[16px]">Contact</Link>
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
                { to: '/network-and-coverage', Icon: Globe, label: 'Network' },
                { to: '/contact-us', Icon: Headphones, label: 'Contact', active: true },
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

      <main className="pt-24 pb-16">

        {/* ── Hero Section ── */}
        <section className="relative flex items-center overflow-hidden mb-16" style={{ height: '400px' }}>
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Diverse team of logistics professionals in a modern glass office"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMJkIipPuDCWjzElpZuXfIhz8vt79B9-F5VWxru4LHtg0l1I4gIwLhnZ-gXh1Kv0yw8UExliVQauqjg-juFxeDgbK_IoNh5H4YAc0OJVVc_SQ3jPG0eSIP-XAARu__gVq0lpDUUPJYl6D1Q9djvwki0MrK6t7Twzo9vcn5-ZJ3RI3nL3YcYIUEFpBif8PD67cy-s-aWXcmcl0gZgdACmkVs8mCGYFeDP8Ql41yjsFRdPvI1SqPxcRwfCIvXysO75jAItxkrxlU_FE" />
            <div className="absolute inset-0" style={{ background: 'rgba(10,27,77,0.60)' }}></div>
          </div>
          <div className="relative z-10 w-full px-4 md:px-[48px] max-w-[1280px] mx-auto text-white">
            <h1 className="font-[Montserrat] text-[32px] md:text-[48px] font-bold mb-4" style={{ letterSpacing: '-0.02em', lineHeight: '56px' }}>
              Connect with Global Logistics Experts
            </h1>
            <p className="text-[18px] leading-[28px] max-w-2xl" style={{ color: 'rgba(118,132,188,0.90)' }}>
              We're here to optimize your supply chain. Reach out for global freight inquiries, local delivery tracking, or strategic logistics consulting.
            </p>
          </div>
        </section>

        <div className="px-4 md:px-[48px] max-w-[1280px] mx-auto">

          {/* ── Contact Cards Bento Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mb-16">
            {[
              { Icon: Mail, title: 'Email Us', desc: 'Our support team typically responds within 2 business hours.', cta: <a className="text-[#000520] font-bold text-[18px] hover:underline transition-all" href="mailto:info@cargonics.com">info@cargonics.com</a> },
              { Icon: Phone, title: 'Call Center', desc: 'Mon-Sat, 9:00 AM to 7:00 PM IST for immediate assistance.', cta: <a className="text-[#000520] font-bold text-[18px] hover:underline transition-all" href="tel:+919599196008">+91 9599196008</a> },
              { Icon: MapPin, title: 'Main Office', desc: 'Cabin No 201, SCO No-2, Chaura Bazar 2, Chandigarh-Ambala Highway, Zirakpur, Punjab.', cta: <span className="text-[#000520] font-bold text-[15px] block leading-normal">Cabin No 201, SCO No-2, Zirakpur</span> },
            ].map((card) => (
              <div key={card.title} className="glass-card p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#fe6b00]">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ background: '#dce9ff' }}>
                  <card.Icon size={22} className="text-[#fe6b00]" />
                </div>
                <h3 className="font-[Montserrat] text-[24px] font-semibold mb-2">{card.title}</h3>
                <p className="text-[#45464f] mb-4 text-[16px]">{card.desc}</p>
                {card.cta}
              </div>
            ))}
          </div>

          {/* ── Form & Map Section ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* ── Contact Form ── */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
              <h2 className="font-[Montserrat] text-[24px] font-semibold mb-8 text-[#0a1b4d]">Send a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#45464f]" htmlFor="name">Full Name</label>
                    <input className="w-full px-4 py-3 rounded-lg border outline-none transition-all text-[16px]"
                      style={{ borderColor: '#c6c5d0' }} id="name" name="name" placeholder="John Doe" type="text"
                      value={formData.name} onChange={handleChange} required
                      onFocus={(e) => { e.target.style.borderColor = '#0a1b4d'; e.target.style.boxShadow = '0 0 0 2px rgba(10,27,77,0.15)' }}
                      onBlur={(e) => { e.target.style.borderColor = '#c6c5d0'; e.target.style.boxShadow = 'none' }} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#45464f]" htmlFor="email">Email Address</label>
                    <input className="w-full px-4 py-3 rounded-lg border outline-none transition-all text-[16px]"
                      style={{ borderColor: '#c6c5d0' }} id="email" name="email" placeholder="john@example.com" type="email"
                      value={formData.email} onChange={handleChange} required
                      onFocus={(e) => { e.target.style.borderColor = '#0a1b4d'; e.target.style.boxShadow = '0 0 0 2px rgba(10,27,77,0.15)' }}
                      onBlur={(e) => { e.target.style.borderColor = '#c6c5d0'; e.target.style.boxShadow = 'none' }} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#45464f]" htmlFor="subject">Subject</label>
                    <select className="w-full px-4 py-3 rounded-lg border outline-none transition-all appearance-none bg-white text-[16px] cursor-pointer"
                      style={{ borderColor: '#c6c5d0' }} id="subject" name="subject" value={formData.subject} onChange={handleChange}
                      onFocus={(e) => { e.target.style.borderColor = '#0a1b4d'; e.target.style.boxShadow = '0 0 0 2px rgba(10,27,77,0.15)' }}
                      onBlur={(e) => { e.target.style.borderColor = '#c6c5d0'; e.target.style.boxShadow = 'none' }}>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Request a Quote">Request a Quote</option>
                      <option value="Shipment Tracking">Shipment Tracking</option>
                      <option value="Global Partnership">Global Partnership</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#45464f]" htmlFor="phone">Contact Number</label>
                    <input className="w-full px-4 py-3 rounded-lg border outline-none transition-all text-[16px]"
                      style={{ borderColor: '#c6c5d0' }} id="phone" name="phone" placeholder="+91 99999 99999" type="tel"
                      value={formData.phone} onChange={handleChange} required
                      onFocus={(e) => { e.target.style.borderColor = '#0a1b4d'; e.target.style.boxShadow = '0 0 0 2px rgba(10,27,77,0.15)' }}
                      onBlur={(e) => { e.target.style.borderColor = '#c6c5d0'; e.target.style.boxShadow = 'none' }} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#45464f]" htmlFor="message">Message</label>
                  <textarea className="w-full px-4 py-3 rounded-lg border outline-none transition-all text-[16px] resize-none"
                    style={{ borderColor: '#c6c5d0' }} id="message" name="message" placeholder="How can we help you today?" rows={4}
                    value={formData.message} onChange={handleChange} required
                    onFocus={(e) => { e.target.style.borderColor = '#0a1b4d'; e.target.style.boxShadow = '0 0 0 2px rgba(10,27,77,0.15)' }}
                    onBlur={(e) => { e.target.style.borderColor = '#c6c5d0'; e.target.style.boxShadow = 'none' }} />
                </div>

                <button
                  className="w-full py-4 rounded-lg font-bold text-[18px] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg text-white"
                  style={{ background: submitState === 'sent' ? '#009b50' : '#0a1b4d', boxShadow: '0 10px 30px rgba(10,27,77,0.20)', opacity: submitState === 'sending' ? 0.80 : 1 }}
                  type="submit" disabled={submitState !== 'idle'}>
                  {submitState === 'idle' && (<><span>Send Inquiry</span><Send size={20} /></>)}
                  {submitState === 'sending' && (<><Loader2 size={20} className="animate-spin" /><span>Sending...</span></>)}
                  {submitState === 'sent' && (<><CheckCircle size={20} /><span>Message Sent!</span></>)}
                </button>
              </form>
            </div>

            {/* ── Map & WhatsApp Panel ── */}
            <div className="flex flex-col gap-[24px]">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border" style={{ height: '400px', borderColor: 'rgba(198,197,208,0.30)' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6865.758990243587!2d76.81512914278457!3d30.637353542498275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febc6c7c54cbd%3A0x1a5d1faaca782fbf!2sAd%20Office%20Spaces%20%26%20Co-working!5e0!3m2!1sen!2sin!4v1779787187896!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cargonics Office Location Map"
                ></iframe>
                
                {/* Floating Address Overlay */}
                <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-[280px] glass-card p-4 rounded-xl shadow-lg border border-white/30 z-10 pointer-events-none">
                  <p className="font-bold text-[11px] text-[#fe6b00] uppercase tracking-wider mb-1">Office Address</p>
                  <p className="text-[13px] leading-relaxed text-[#0a1b4d] font-semibold">
                    Cabin No 201, SCO No-2, Chaura Bazar 2, Chandigarh-Ambala Highway, Zirakpur, Punjab.
                  </p>
                </div>
              </div>
              <a href="https://maps.google.com/?q=Ad+Office+Spaces+and+Co-working+Cabin+No+201,+SCO+No-2,+Chaura+Bazar+2,+Chandigarh-Ambala+Highway,+Zirakpur,+Punjab."
                target="_blank" rel="noreferrer" className="text-[#fe6b00] font-bold text-[14px] hover:underline">
                View on Google Maps →
              </a>

              {/* WhatsApp CTA Card */}
              <a href="https://wa.me/919599196008" target="_blank" rel="noreferrer"
                className="glass-card p-6 rounded-2xl flex items-center gap-6 group cursor-pointer hover:bg-[#dce9ff] transition-all">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform text-white" style={{ background: '#009b50' }}>
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-1.122 4.102 4.195-1.1c.96.539 2.016.88 3.09.88 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.769-5.767-5.769zm3.387 8.192c-.146.415-.852.762-1.157.808-.304.048-.681.088-1.985-.452-1.57-.649-2.58-2.249-2.658-2.353-.078-.103-.639-.851-.639-1.624s.401-1.151.543-1.306c.143-.155.309-.193.412-.193.104 0 .207.001.297.006.096.004.225-.035.352.27.13.313.444 1.077.482 1.154.039.077.065.167.013.271-.052.103-.077.167-.155.257-.077.091-.161.203-.23.273-.078.077-.159.16-.068.315.091.155.404.667.865 1.077.595.53 1.096.694 1.25.772.155.077.247.065.338-.041.091-.106.39-.452.494-.606.104-.155.208-.13.351-.077.143.052.906.427 1.062.505.155.077.259.116.297.181.04.063.04.364-.105.779z" /></svg>
                </div>
                <div>
                  <p className="text-[#a04100] font-bold uppercase tracking-widest text-[13px]">Instant Support</p>
                  <h4 className="font-[Montserrat] text-[24px] font-semibold text-[#0a1b4d]">Chat on WhatsApp</h4>
                  <p className="text-[#45464f] text-[16px]">Available 24/7 for quick quotes and status updates.</p>
                </div>
              </a>
            </div>

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
          <p className="text-[13px]" style={{ color: 'rgba(118,132,188,0.60)' }}>© 2026 Cargonics Express Services. GST: 03AANCC6927C1ZT. All Rights Reserved.</p>
        </div>
      </footer>

      {/* ── Mobile Bottom NavBar ── */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 px-4 py-3 flex justify-around border-t shadow-2xl" style={{ background: '#f8f9ff', borderColor: '#c6c5d0' }}>
        <Link to="/" className="flex flex-col items-center gap-1 text-[#45464f]"><HomeIcon size={22} /><span className="text-[10px] font-bold">Home</span></Link>
        <Link to="/about-us" className="flex flex-col items-center gap-1 text-[#45464f]"><Info size={22} /><span className="text-[10px] font-bold">About</span></Link>
        <Link to="/our-services" className="flex flex-col items-center gap-1 text-[#45464f]"><Truck size={22} /><span className="text-[10px] font-bold">Services</span></Link>
        <Link to="/track-shipment" className="flex flex-col items-center gap-1 text-[#45464f]"><MapPin size={22} /><span className="text-[10px] font-bold">Track</span></Link>
        <Link to="/contact-us" className="flex flex-col items-center gap-1 text-[#fe6b00]"><Headphones size={22} /><span className="text-[10px] font-bold">Contact</span></Link>
      </div>

    </div>
  )
}
