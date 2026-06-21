import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import {
  Menu, X, Home as HomeIcon, Info, Truck, MapPin, Globe, Headphones,
  ChevronsDown, Crosshair, ShieldCheck, Zap, Network, ArrowLeft, ArrowRight,
  ChevronDown, Mail, Phone
} from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [trackingNumber, setTrackingNumber] = useState('')
  const [openFaq, setOpenFaq] = useState(0)
  const navigate = useNavigate()

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const handleTrack = () => {
    const awb = trackingNumber.trim()
    if (!awb) {
      toast.error('Please enter a tracking number.')
      return
    }
    navigate('/track-shipment', { state: { trackingNumber: awb } })
  }

  const faqs = [
    {
      q: 'How long does international express shipping take?',
      a: 'Typically, international express shipments reach their destination within 3 to 5 business days, depending on customs clearance and the specific geographic region.',
    },
    {
      q: 'Do you provide cargo insurance?',
      a: 'Yes, we offer comprehensive cargo insurance covering a wide range of logistics risks, ensuring your shipment is protected from door to door.',
    },
    {
      q: 'How can I track my shipment?',
      a: 'You can track your shipment live using our online tracking portal. Simply enter your 12-digit tracking ID provided during the booking process.',
    },
  ]

  return (
    <div className="overflow-x-hidden">

      {/* ── TopAppBar Navigation Shell ── */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b shadow-sm"
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
              <Link to="/" className="text-[#fe6b00] font-bold border-b-2 border-[#fe6b00] text-[16px]">Home</Link>
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
              {/* Mobile Menu Toggle */}
              <button className="md:hidden text-[#000520]" onClick={toggleMobileMenu}>
                <Menu size={24} />
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
              <button onClick={toggleMobileMenu} className="text-[#000520]"><X size={24} /></button>
            </div>
            <nav className="flex-1 space-y-1">
              {[
                { to: '/', Icon: HomeIcon, label: 'Home', active: true },
                { to: '/about-us', Icon: Info, label: 'About' },
                { to: '/our-services', Icon: Truck, label: 'Services' },
                { to: '/track-shipment', Icon: MapPin, label: 'Tracking' },
                { to: '/network-and-coverage', Icon: Globe, label: 'Network' },
                { to: '/contact-us', Icon: Headphones, label: 'Contact' },
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

{/* ── Hero Section ── */}
      <section className="relative flex items-center pt-12 overflow-hidden" style={{ height: '560px' }}>
         <div className="absolute inset-0 z-0">
           <img
             className="w-full h-full object-cover"
             alt="A massive cargo airplane soaring through a golden sunset sky"
             src="https://lh3.googleusercontent.com/aida-public/AB6AXuA24C-U97fC9plOhAw0nsAR2Pg4rfyglk-fJOYMaChBLLqvQ5KlLCUyklLniV5vJHqe4ySmlUk9mrnBFR4kwZgZte-V4kkbVsP0zCnVoklbSwoWVjy4_F-q-KSzJ80Uo9g3O1tnWz4QVxDVKeVN0u3mvmW_u3ViBuBhAqUZ4Si5k9l9dXsNU57GEKUFZtA5j_JtL-KIwqE4-P2WqcYkIhu1-qhPBq-_cIAo5V_gbwbf02YKxoQuSe2wF6Ax7GywMadlh2K5XLKg4uw"
           />
           <div className="absolute inset-0 hero-overlay"></div>
         </div>

         <div className="relative z-10 w-full px-4 md:px-[48px] max-w-[1280px] mx-auto text-white">
           <div className="max-w-xl">
             <h1 className="font-[Montserrat] text-[28px] md:text-[40px] font-bold leading-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
               We Deliver <span className="text-[#fe6b00]">More Than</span> Parcels
             </h1>
             <p className="text-[15px] leading-[26px] mb-8" style={{ color: 'rgba(239,244,255,0.90)' }}>
               Premium Air, Surface, Rail, Domestic and International logistics solutions engineered for the modern enterprise.
             </p>
             <div className="flex flex-wrap gap-3">
               <Link to="/track-shipment"
                 className="bg-[#fe6b00] text-white px-6 py-3 rounded-xl font-bold text-base active:scale-95 transition-all"
                 style={{ boxShadow: '0 10px 40px rgba(254,107,0,0.20)' }}>
                 Track Shipment
               </Link>
               <Link to="/get-quote"
                 className="glass-card text-white px-6 py-3 rounded-xl font-bold text-base border border-white/20 hover:bg-white/10 active:scale-95 transition-all">
                 Get Quote
               </Link>
             </div>
           </div>
         </div>

         {/* Floating Scroll Indicator */}
         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
           <ChevronsDown size={32} className="text-white/50" />
         </div>
       </section>

      {/* ── White Transition Bar ── */}
      <div className="h-24" style={{ background: 'linear-gradient(to bottom, #f8f9ff 0%, #ffffff 100%)' }}></div>

      {/* ── Tracking Preview Bento ── */}
      <section className="px-4 md:px-[48px] max-w-[1280px] mx-auto -mt-8 relative z-20 pb-8">
         <div className="glass-card rounded-[2rem] p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <h2 className="font-[Montserrat] text-[24px] font-semibold text-[#000520] mb-2">Live Tracking</h2>
              <p className="text-[16px] text-[#45464f]">Real-time visibility into your global supply chain, powered by Cargonics GPS.</p>
            </div>
            <div className="lg:col-span-2">
              <div className="flex flex-col md:flex-row gap-4 p-2 rounded-2xl border" style={{ background: '#e5eeff', borderColor: 'rgba(198,197,208,0.30)' }}>
                <input
                  className="flex-grow bg-transparent border-none outline-none px-4 py-4 text-[16px]"
                  placeholder="Enter Tracking Number (e.g. CRG-2024-XXXX)"
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
                />
                <button
                  onClick={handleTrack}
                  className="bg-[#0a1b4d] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#162E74] transition-colors flex items-center justify-center gap-2"
                >
                  <Crosshair size={20} />
                  Track Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Section (Bento Grid) ── */}
      <section className="py-8 px-4 md:px-[48px] max-w-[1280px] mx-auto">
        <div className="text-center mb-8">
          <span className="text-[#fe6b00] font-bold tracking-[0.2em] text-[13px] uppercase" style={{ fontFamily: 'Inter' }}>Our Expertise</span>
          <h2 className="font-[Montserrat] text-[24px] md:text-[48px] font-bold text-[#000520] mt-4">Precision Logistics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px]">
          {/* Air Freight */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-3xl" style={{ height: '400px' }}>
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Commercial cargo jet on runway at night"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZl_hByo8cM8nf4qHBsCicXfyLO9Xwbq7FM8tCHkYyqvTuKoLEpUMuquzQ7gSPw-BXU6sRYfZPUMVdipJimkidjCM9Z-eha_DM2L2y-twAFE3drhz6brBYu0Wypqd_arR8KfFSKOXJ80fJkCahP0YOR0HmltPekL8VGZFp2HGeVrMVrz0TLRDW2gbFFjx4K_Q--G5fhgQy6fPT7VN38M0-dWYNf0kOiRc53lxqLobebZNZ_59Ry7Ee_e2jjuc7VB0kjauwFGBFBik"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end" style={{ background: 'linear-gradient(to top, rgba(0,5,32,0.90) 0%, rgba(0,5,32,0.20) 60%, transparent 100%)' }}>
              <h3 className="text-white font-[Montserrat] text-[24px] font-semibold mb-2">Express Air Freight</h3>
              <p className="text-[#eff4ff] text-[16px] max-w-md">Priority delivery for your time-critical shipments worldwide.</p>
            </div>
          </div>

          {/* Surface */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-3xl" style={{ height: '400px' }}>
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Sleek modern semi-truck driving on highway"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8uhq3-BHOm9t2kfQrKv62rfkVy8kXdpLYP3HRMuf_V4K63T6c4tz5v286SpyOWVuCfrlKKogzoWi5nlBuUe_C-soKHPLMBxssxt0oMRVkpGu9v1X5d7N6-NeDkcaA9y3FHZIdMr4gy76X2vDe7VcSZCes-LERNdsWrgH9JXXlhqXk1EOqe4Uw_VM4L-xjrPIXDNhJTnZLzq44jDoFr4NowKXN2KQSPosCEhPYctYkTjFVwUCPsmZc23SA_j49jymXVZihq5V3Ois"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end" style={{ background: 'linear-gradient(to top, rgba(0,5,32,0.90) 0%, rgba(0,5,32,0.20) 60%, transparent 100%)' }}>
              <h3 className="text-white font-[Montserrat] text-[24px] font-semibold mb-2">Surface Transport</h3>
              <p className="text-[#eff4ff] text-[16px]">Extensive fleet network covering 20,000+ pin codes across India.</p>
            </div>
          </div>

          {/* Rail */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-3xl" style={{ height: '400px' }}>
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Heavy freight train crossing misty landscape"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPzcJpYMBe1xnVS4pugbCh_fDS8bObcySCov0JYGVoJaqr8FVBrx1F-3GnxBM3Nx6Mi2Weg5zTkrMm7Bptv5Gs1wGwoVqICMNzJ_d1e507Dy1cnr7VSNADweZZJjQZhwG921pPHDQ8a9JBdeTFJ1viouxQbnxFmDct8ktpE01uq2wJt5Jtu0zDsbPwxmEU_5a1wa2OSv32aJ8__JTI1YeH916oDi85WcfNiOhsqNysWc39d5coC730nuyG5SkVJTruZJtcCzw7wcg"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end" style={{ background: 'linear-gradient(to top, rgba(0,5,32,0.90) 0%, rgba(0,5,32,0.20) 60%, transparent 100%)' }}>
              <h3 className="text-white font-[Montserrat] text-[24px] font-semibold mb-2">Rail Solutions</h3>
              <p className="text-[#eff4ff] text-[16px]">Cost-effective and sustainable bulk transit options.</p>
            </div>
          </div>

          {/* International */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-3xl" style={{ height: '400px' }}>
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Container ship in ocean waters"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB94MxKy97RvhgqOzfgH_BUSnnS26SaXN5NT_9NHPTaavwb-ZO-scPt77gF5cq9IbNajvxCTH9tJxgPy97ChCgaQfgh6P1pnnEE24T7qdKkxfu-Wav9Hf-A9CGG6rVZ_ZhWqg_g2agL8Cpyib-N-aAJfndkdNxJyTsmMoIzpyZUJ_-bFDtsLeBlElTZbCgoQE-VwEoftB_M7s0XfVsKO3DDaIRUqLZiToXlvTlfJ08IAiGfviT7R7M91zsB4ef8z84iOi5LYdL44f4"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end" style={{ background: 'linear-gradient(to top, rgba(0,5,32,0.90) 0%, rgba(0,5,32,0.20) 60%, transparent 100%)' }}>
              <h3 className="text-white font-[Montserrat] text-[24px] font-semibold mb-2">Global Logistics</h3>
              <p className="text-[#eff4ff] text-[16px] max-w-md">Seamless door-to-door delivery across 200+ countries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-8 overflow-hidden relative" style={{ background: '#000520', color: '#fff' }}>
        <div className="absolute top-0 right-0 w-1/3 h-full rounded-full" style={{ background: 'rgba(254,107,0,0.10)', filter: 'blur(120px)' }}></div>
        <div className="px-4 md:px-[48px] max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-[#fe6b00] font-bold tracking-[0.2em] text-[13px] uppercase">Advantages</span>
            <h2 className="font-[Montserrat] text-[24px] md:text-[48px] font-bold mt-4 mb-8 leading-tight">The Cargonics Competitive Edge</h2>
            <div className="space-y-8">
              {[
                { Icon: ShieldCheck, title: 'Unmatched Reliability', desc: '99.8% on-time delivery rate with fully insured cargo handling.' },
                { Icon: Zap, title: 'Hyper Speed', desc: 'Optimized routing algorithms that reduce transit times by up to 24 hours.' },
                { Icon: Network, title: 'Expansive Network', desc: 'Strategic hubs across major trade corridors in India and the world.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border" style={{ background: 'rgba(255,255,255,0.10)', borderColor: 'rgba(255,255,255,0.20)' }}>
                    <item.Icon size={22} className="text-[#fe6b00]" />
                  </div>
                  <div>
                    <h4 className="font-[Montserrat] text-[24px] font-semibold mb-2">{item.title}</h4>
                    <p className="text-[16px] text-[#7684bc]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square glass-card rounded-[3rem] p-2 overflow-hidden" style={{ borderColor: 'rgba(255,255,255,0.10)' }}>
              <img
                className="w-full h-full object-cover rounded-[2.8rem]"
                alt="Distribution center with automated systems"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdRrrdh2xNozFr9wSZu01AIZ0875ZLIyu7v1H9whQU3dNgoWMuswDCzCjzWePvhNskREZd3weoWF7TtBNyyfx-aTMTyiYQvQkLoASiFizQa3brpLJj49QHhUSuhyk5ziQe4CqsSXnsXE8ulzD9kIMu3ES-EhuN9cOxDrHfQ2L_3g4Dwk1-4IxODgRdg8v2Fou3oM70FK4VEz57HZlXiOB3KwJ6P_sepjVxNUk7O3199cTj8kZhqkvd0ikpEWL3T9K4MWSLMzIsquU"
              />
            </div>
            {/* Stat Badge */}
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl" style={{ borderColor: 'rgba(255,255,255,0.20)' }}>
              <div className="text-[#fe6b00] text-3xl font-extrabold">200+</div>
              <div className="text-[#0b1c30] text-[16px]">Global Port Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Network Map ── */}
      <section className="py-8" style={{ background: '#f8f9ff' }}>
        <div className="px-4 md:px-[48px] max-w-[1280px] mx-auto text-center mb-10">
          <h2 className="font-[Montserrat] text-[24px] md:text-[48px] font-bold text-[#000520]">Pan India &amp; Global Presence</h2>
          <p className="text-[16px] text-[#45464f] mt-4 max-w-3xl mx-auto">
            Our comprehensive logistics network spans across the entire Indian sub-continent, covering 20,000+ pin codes with localized express hubs, while simultaneously maintaining a robust global shipping corridor connecting businesses to over 220 countries and territories.
          </p>
        </div>

        <div className="px-4 md:px-[48px] max-w-[1280px] mx-auto rounded-[3rem] overflow-hidden relative" style={{ height: '600px', boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.05)' }}>
          <img
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%)', opacity: 0.4 }}
            alt="Digital world map with glowing logistics routes"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNzbArKk4pLfAQT3Gx5Hc9_egtlCh2Uwdn6Kyd7tVPzlKFt7Q4mr4AxODTdZHPQc3pZRQ8qNV0hYKUKAhdbl8uTFVAXe_9pGWlGkCMEBfvwkxUKDW4uN_VRgTCMDAnf5ZNOmBpfeS63xBHxq9b6zyAdK23x755jwI9sFzqqFnYT4L5cggzDnQH15yqZ3oT65c8Zni_lBdafZPFp_JjhUOzRGELjyxNpAsXdmlCGHM8Wk8FPhupnqwGBYvSg1NLadrHKmSSFldvZv0"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block p-12 rounded-full animate-pulse" style={{ border: '1px solid rgba(0,5,32,0.10)', background: 'rgba(255,255,255,0.20)', backdropFilter: 'blur(8px)' }}>
                <Globe size={60} className="text-[#000520]" />
              </div>
            </div>
          </div>

          {/* City Markers */}
          <div className="absolute group cursor-pointer" style={{ top: '50%', left: '25%' }}>
            <div className="w-3 h-3 bg-[#fe6b00] rounded-full animate-ping"></div>
            <div className="hidden group-hover:block absolute bg-white p-2 rounded shadow-lg text-xs font-bold whitespace-nowrap" style={{ top: '24px', left: 0 }}>Hub: New York</div>
          </div>
          <div className="absolute group cursor-pointer" style={{ top: '45%', left: '62%' }}>
            <div className="w-3 h-3 bg-[#fe6b00] rounded-full animate-ping"></div>
            <div className="hidden group-hover:block absolute bg-white p-2 rounded shadow-lg text-xs font-bold whitespace-nowrap" style={{ top: '24px', left: 0 }}>HQ: New Delhi</div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-8" style={{ background: '#eff4ff' }}>
        <div className="px-4 md:px-[48px] max-w-[1280px] mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-[#fe6b00] font-bold tracking-[0.2em] text-[13px] uppercase">Success Stories</span>
              <h2 className="font-[Montserrat] text-[24px] md:text-[48px] font-bold text-[#000520] mt-4">Trusted by Industry Leaders</h2>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-white transition-colors" style={{ borderColor: '#767680' }}>
                <ArrowLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-white transition-colors" style={{ borderColor: '#767680' }}>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {[
              { quote: '"Cargonics has completely transformed our supply chain. Their express air freight is consistently reliable even during peak holiday seasons."', name: 'Vikram Singh', role: 'Supply Chain Director, TechNova', avatarBg: '#0a1b4d' },
              { quote: '"The live tracking accuracy is miles ahead of traditional logistics firms. We can provide our customers with precise delivery windows."', name: 'Sarah Miller', role: 'Operations Manager, GlobalRetail', avatarBg: '#fe6b00' },
              { quote: '"Sustainable bulk transit options through their rail network allowed us to hit our ESG goals while reducing costs by 15%."', name: 'Anita Rao', role: 'Logistics Head, GreenBuild India', avatarBg: '#cbdbf5' },
            ].map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-[2rem] shadow-sm border flex flex-col justify-between" style={{ borderColor: 'rgba(198,197,208,0.30)' }}>
                <p className="text-[16px] text-[#45464f] italic">{t.quote}</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex-shrink-0" style={{ background: t.avatarBg }}></div>
                  <div>
                    <div className="font-bold text-[#000520]">{t.name}</div>
                    <div className="text-sm text-[#45464f]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Preview ── */}
      <section className="py-8 px-4 md:px-[48px] max-w-[1280px] mx-auto">
         <div className="max-w-3xl mx-auto">
           <h2 className="font-[Montserrat] text-[24px] md:text-[48px] font-bold text-[#000520] mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: 'rgba(198,197,208,0.50)' }}>
                <button
                  className="w-full flex justify-between items-center p-6 cursor-pointer font-bold text-[18px] text-[#000520] text-left"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  {faq.q}
                  <ChevronDown size={22} className="flex-shrink-0 ml-4 transition-transform" style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-0 text-[16px] text-[#45464f] border-t" style={{ borderColor: 'rgba(198,197,208,0.20)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/faqs" className="text-[#fe6b00] font-bold underline underline-offset-4" style={{ textDecorationColor: 'rgba(254,107,0,0.30)' }}>
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA Banner ── */}
      <section className="py-8 px-4 md:px-[48px] max-w-[1280px] mx-auto">
         <div className="rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden" style={{ background: '#0A1B4D' }}>
           <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
              <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#grid-pattern)"></path>
            </svg>
          </div>
<h2 className="font-[Montserrat] text-[32px] md:text-[48px] font-bold text-white mb-4">Ready to Streamline Your Supply Chain?</h2>
           <p className="text-[17px] mb-8 max-w-2xl mx-auto" style={{ color: '#eff4ff' }}>
             Get a personalized logistics quote in under 2 minutes and experience the Cargonics difference.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-quote" className="bg-[#fe6b00] text-white px-10 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-xl" style={{ boxShadow: '0 20px 40px rgba(254,107,0,0.20)' }}>
              Get Free Quote
            </Link>
            <Link to="/contact-us" className="text-white px-10 py-4 rounded-xl font-bold text-xl border border-white/20 backdrop-blur hover:bg-white/20 transition-all" style={{ background: 'rgba(255,255,255,0.10)' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="w-full text-white mt-auto border-t" style={{ background: '#0a1b4d', borderColor: 'rgba(255,255,255,0.10)' }}>
        <div className="w-full py-8 px-4 md:px-[48px] flex flex-col md:flex-row justify-between gap-6 md:gap-8 max-w-[1280px] mx-auto">
          <div className="space-y-4 md:max-w-[320px]">
            <div className="flex items-center h-16 overflow-hidden mb-4">
              <img src="/logo/new logo.png" alt="Cargonics Express" className="h-36 w-auto object-contain -my-10" />
            </div>
            <p className="text-[14px]" style={{ color: 'rgba(118,132,188,0.80)' }}>
              Empowering global trade through technological precision and logistical excellence.
            </p>
            <div className="space-y-2 pt-2 text-[14px]" style={{ color: 'rgba(118,132,188,0.80)' }}>
              <p className="flex items-start gap-2">
                <MapPin size={18} className="text-[#fe6b00] mt-0.5 flex-shrink-0" />
                <span>Cabin No 201, SCO No-2,<br />Chaura Bazar 2,<br />Chandigarh-Ambala Highway,<br />Zirakpur, Punjab.</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} className="text-[#fe6b00]" />
                <span>+91 9599196008</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} className="text-[#fe6b00]" />
                <span>info@cargonics.com</span>
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
          <p className="text-[13px]" style={{ color: 'rgba(118,132,188,0.60)' }}>© 2026 Cargonics Express Services. GST: 03AANCC6927C1ZT. All Rights Reserved.</p>
        </div>
      </footer>

      {/* ── Mobile Bottom NavBar ── */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 px-4 py-3 flex justify-around border-t shadow-2xl" style={{ background: '#f8f9ff', borderColor: '#c6c5d0' }}>
        <Link to="/" className="flex flex-col items-center gap-1 text-[#fe6b00]">
          <HomeIcon size={22} />
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        <Link to="/about-us" className="flex flex-col items-center gap-1 text-[#45464f]">
          <Info size={22} />
          <span className="text-[10px] font-bold">About</span>
        </Link>
        <Link to="/our-services" className="flex flex-col items-center gap-1 text-[#45464f]">
          <Truck size={22} />
          <span className="text-[10px] font-bold">Services</span>
        </Link>
        <Link to="/track-shipment" className="flex flex-col items-center gap-1 text-[#45464f]">
          <MapPin size={22} />
          <span className="text-[10px] font-bold">Track</span>
        </Link>
        <Link to="/contact-us" className="flex flex-col items-center gap-1 text-[#45464f]">
          <Headphones size={22} />
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
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-1.122 4.102 4.195-1.1c.96.539 2.016.88 3.09.88 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.769-5.767-5.769zm3.387 8.192c-.146.415-.852.762-1.157.808-.304.048-.681.088-1.985-.452-1.57-.649-2.58-2.249-2.658-2.353-.078-.103-.639-.851-.639-1.624s.401-1.151.543-1.306c.143-.155.309-.193.412-.193.104 0 .207.001.297.006.096.004.225-.035.352.27.13.313.444 1.077.482 1.154.039.077.065.167.013.271-.052.103-.077.167-.155.257-.077.091-.161.203-.23.273-.078.077-.159.16-.068.315.091.155.404.667.865 1.077.595.53 1.096.694 1.25.772.155.077.247.065.338-.041.091-.106.39-.452.494-.606.104-.155.208-.13.351-.077.143.052.906.427 1.062.505.155.077.259.116.297.181.04.063.04.364-.105.779z" /></svg>
        <span className="hidden md:inline font-bold text-[13px]">WhatsApp Us</span>
      </a>

    </div>
  )
}
