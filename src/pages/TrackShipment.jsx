import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import {
  Menu, X, Home as HomeIcon, Info, Truck, MapPin, Globe, Headphones,
  Search, ArrowRight, Phone, Mail, Package, AlertCircle, Loader2,
  PlaneTakeoff, Clock, Building2
} from 'lucide-react'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000'

// ── Helpers ──────────────────────────────────────────────────────────────
function formatDate(dateStr) {
  if (!dateStr) return '—'
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  }) + ' · ' + d.toLocaleTimeString('en-IN', {
    hour: '2-digit', minute: '2-digit', hour12: true
  })
}

function getStatusColor(status) {
  if (!status) return { bg: '#e5eeff', text: '#0a1b4d', dot: '#0a1b4d' }
  const s = status.toLowerCase()
  if (s.includes('delivered')) return { bg: '#dcfce7', text: '#166534', dot: '#16a34a' }
  if (s.includes('pending')) return { bg: '#fef9c3', text: '#854d0e', dot: '#ca8a04' }
  if (s.includes('rto') || s.includes('return')) return { bg: '#fee2e2', text: '#991b1b', dot: '#dc2626' }
  if (s.includes('out for delivery')) return { bg: '#fff7ed', text: '#9a3412', dot: '#ea580c' }
  return { bg: '#dbeafe', text: '#1e40af', dot: '#3b82f6' }
}

function getShipmentLocations(awb, shipment) {
  if (!shipment) return { origin: '—', destination: '—' }

  const cleanAwb = awb ? awb.trim() : ''


  // Fallback / General parsing for other AWBs
  let origin = shipment.Origin ?? '—'
  let destination = shipment.Destination ?? '—'

  // Clean Origin Hub string
  if (origin && origin !== '—') {
    origin = origin
      .replace(/_[A-Z0-9]+(?=\s|$)/gi, '') // remove depot tags like _D, _H
      .replace(/_/g, ' ')
      .trim()
    if (!origin.toLowerCase().includes('india') && !origin.toLowerCase().includes('in')) {
      if (origin.toLowerCase().includes('kerala') || origin.toLowerCase().includes('delhi')) {
        origin += ', IN'
      }
    }
  }

  // Clean Destination using Consignee details if present
  const consignee = shipment.Consignee
  if (consignee) {
    const city = consignee.City
    const state = consignee.State
    const country = consignee.Country

    // Special UAE/Dubai check for international shipments
    if (state?.toLowerCase() === 'dubai' || country?.toLowerCase() === 'uae' || country?.toLowerCase() === 'dubai') {
      destination = `${state || 'Dubai'}, AE`
    } else {
      const parts = [city, state, country].filter(Boolean)
      if (parts.length > 0) {
        destination = parts.join(', ')
      }
    }
  }

  return { origin, destination }
}

// ── Nav items shared across all pages ────────────────────────────────────
const NAV_ITEMS = [
  { to: '/', Icon: HomeIcon, label: 'Home' },
  { to: '/about-us', Icon: Info, label: 'About' },
  { to: '/our-services', Icon: Truck, label: 'Services' },
  { to: '/track-shipment', Icon: MapPin, label: 'Tracking', active: true },
  { to: '/network-and-coverage', Icon: Globe, label: 'Network' },
  { to: '/contact-us', Icon: Headphones, label: 'Contact' },
]

export default function TrackShipment() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [trackingInput, setTrackingInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [shipment, setShipment] = useState(null)
  const [error, setError] = useState(null)

  const location = useLocation()
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  // API Call helper
  const performTracking = async (awb) => {
    setLoading(true)
    setError(null)
    setShipment(null)

    try {
      const res = await fetch(`${API_BASE}/api/tracking/${encodeURIComponent(awb)}`)
      const json = await res.json()

      if (!res.ok || json.status === 'error') {
        throw new Error(json.message || 'Failed to fetch tracking info.')
      }

      const data = json.data.ShipmentData?.[0]?.Shipment
      if (!data) throw new Error('No shipment data found for this number.')
      setShipment(data)
    } catch (err) {
      setError(err.message)
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleTrack = async (e) => {
    e.preventDefault()
    const awb = trackingInput.trim()
    if (!awb) {
      toast.error('Please enter a tracking number.')
      return
    }
    performTracking(awb)
  }

  // Automatically track if redirected from Home page with a tracking number in state
  useEffect(() => {
    if (location.state && location.state.trackingNumber) {
      const awb = location.state.trackingNumber.trim()
      setTrackingInput(awb)
      performTracking(awb)
    }
  }, [location.state])

  // Extract display fields from the API response
  const awb = shipment?.AWB ?? '—'
  const refNo = shipment?.ReferenceNo ?? '—'
  const { origin, destination } = getShipmentLocations(awb, shipment)
  const currentStatus = shipment?.Status?.Status ?? '—'
  const statusLocation = shipment?.Status?.StatusLocation ?? ''
  const statusDateTime = shipment?.Status?.StatusDateTime ?? ''
  const statusInstructions = shipment?.Status?.Instructions ?? ''
  const consigneeName = shipment?.Consignee?.Name ?? ''
  const scans = shipment?.Scans ?? []
  const statusColor = getStatusColor(currentStatus)

  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col" style={{ background: '#f8f9ff' }}>

      {/* ── TopAppBar ── */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b shadow-sm"
        style={{ background: 'rgba(248,249,255,0.85)', borderColor: 'rgba(198,197,208,0.20)' }}>
        <div className="flex flex-col w-full px-4 md:px-[48px] py-2 max-w-[1280px] mx-auto">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center h-16 overflow-hidden">
              <img src="/logo/new logo.png" alt="Cargonics Express" className="h-36 w-auto object-contain -my-10 mix-blend-multiply" />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link key={item.to} to={item.to}
                  className={`font-medium transition-all duration-300 text-[16px] ${item.active ? 'text-[#fe6b00] font-bold border-b-2 border-[#fe6b00]' : 'text-[#45464f] hover:text-[#fe6b00]'}`}>
                  {item.label}
                </Link>
              ))}
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
              {NAV_ITEMS.map((item) => (
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

      {/* ── Main ── */}
      <main className="flex-1 pt-24 pb-32 md:pb-24 px-4 md:px-[48px] max-w-[1280px] w-full mx-auto">

        {/* ── Hero Search ── */}
        <section className="mb-10 text-center">
          <h1 className="font-[Montserrat] text-[32px] md:text-[48px] font-bold mb-4 text-[#0a1b4d] pt-4" style={{ letterSpacing: '-0.02em' }}>
            Track Your Shipment
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[28px] text-[#45464f] mb-8 max-w-2xl mx-auto">
            Enter your AWB / waybill number to get real-time tracking updates powered by Delhivery.
          </p>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleTrack}>
              <div className="flex flex-col md:flex-row gap-3 p-2 bg-white rounded-2xl shadow-xl border"
                style={{ borderColor: 'rgba(198,197,208,0.30)' }}>
                <div className="flex-1 flex items-center px-4">
                  <Search size={20} className="text-[#767680] mr-3 flex-shrink-0" />
                  <input
                    className="w-full border-none outline-none text-[16px] text-[#000520] placeholder:text-[#767680] py-4 bg-transparent"
                    placeholder="e.g. DL344247825XB"
                    type="text"
                    value={trackingInput}
                    onChange={(e) => setTrackingInput(e.target.value)}
                  />
                </div>
                <button type="submit" disabled={loading}
                  className="bg-[#fe6b00] hover:bg-[#a04100] disabled:opacity-60 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95">
                  {loading ? <Loader2 size={20} className="animate-spin" /> : <><span>Track Now</span><ArrowRight size={20} /></>}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* ── Loading ── */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-[#45464f]">
            <Loader2 size={48} className="animate-spin text-[#fe6b00]" />
            <p className="text-[18px] font-medium">Fetching shipment details…</p>
          </div>
        )}

        {/* ── Error ── */}
        {!loading && error && (
          <div className="max-w-xl mx-auto mt-6 p-6 rounded-2xl border flex items-start gap-4"
            style={{ background: '#fee2e2', borderColor: '#fecaca' }}>
            <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-red-700 text-[16px]">Tracking Failed</p>
              <p className="text-red-600 text-[15px] mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* ── Result ── */}
        {!loading && shipment && (
          <div className="space-y-6 max-w-4xl mx-auto">

            {/* ── Shipment Header Card ── */}
            <div className="bg-white rounded-3xl p-6 md:p-10 border shadow-sm"
              style={{ borderColor: 'rgba(198,197,208,0.25)' }}>

              {/* AWB + Ref */}
              <div className="text-center mb-6 border-b pb-5" style={{ borderColor: 'rgba(198,197,208,0.25)' }}>
                <p className="text-[11px] uppercase font-bold text-[#767680] tracking-widest mb-1">Shipment AWB</p>
                <h2 className="font-[Montserrat] text-[18px] md:text-[26px] font-bold text-[#0a1b4d] break-all">
                  {awb}
                </h2>
                {refNo !== '—' && (
                  <p className="text-[14px] text-[#45464f] font-semibold mt-1">Order No: <span className="text-[#0a1b4d]">{refNo}</span></p>
                )}
                {consigneeName && (
                  <p className="text-[13px] text-[#767680] mt-1">Consignee: {consigneeName}</p>
                )}
              </div>

              {/* Origin → Destination */}
              <div className="flex flex-col md:flex-row items-stretch gap-3 mb-6">
                <div className="flex-1 rounded-2xl border p-3 md:p-4" style={{ borderColor: 'rgba(198,197,208,0.30)', background: '#f8f9ff' }}>
                  <p className="text-[11px] uppercase font-bold text-[#767680] tracking-widest mb-1">📍 Origin</p>
                  <p className="text-[14px] md:text-[16px] font-bold text-[#0a1b4d] break-words">{origin}</p>
                </div>
                {/* Arrow — horizontal on desktop, vertical on mobile */}
                <div className="flex md:flex-col items-center justify-center md:px-2 py-1 md:py-0">
                  <PlaneTakeoff size={24} className="text-[#fe6b00] rotate-0 md:rotate-0" />
                </div>
                <div className="flex-1 rounded-2xl border p-3 md:p-4" style={{ borderColor: 'rgba(198,197,208,0.30)', background: '#f8f9ff' }}>
                  <p className="text-[11px] uppercase font-bold text-[#767680] tracking-widest mb-1">🏁 Destination</p>
                  <p className="text-[14px] md:text-[16px] font-bold text-[#0a1b4d] break-words">{destination}</p>
                </div>
              </div>

              {/* Current Status Banner */}
              <div className="rounded-2xl p-4 md:p-5 flex flex-col gap-3"
                style={{ background: statusColor.bg }}>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full flex-shrink-0 animate-pulse" style={{ background: statusColor.dot }}></span>
                  <div>
                    <p className="text-[11px] uppercase font-bold tracking-widest" style={{ color: statusColor.dot }}>Current Status</p>
                    <p className="font-[Montserrat] text-[18px] md:text-[20px] font-bold" style={{ color: statusColor.text }}>{currentStatus}</p>
                  </div>
                </div>
                <div className="space-y-1 pl-6">
                  {statusInstructions && <p className="text-[13px] font-medium" style={{ color: statusColor.text }}>{statusInstructions}</p>}
                  {statusLocation && <p className="text-[12px] flex items-center gap-1" style={{ color: statusColor.text }}><Building2 size={12} className="flex-shrink-0" /><span className="break-words">{statusLocation}</span></p>}
                  {statusDateTime && <p className="text-[12px]" style={{ color: statusColor.text }}><Clock size={11} className="inline mr-1" />{formatDate(statusDateTime)}</p>}
                </div>
              </div>
            </div>

            {/* ── Scan Timeline ── */}
            <div className="bg-white rounded-3xl p-6 md:p-10 border shadow-sm"
              style={{ borderColor: 'rgba(198,197,208,0.25)' }}>
              <h3 className="font-[Montserrat] text-[20px] font-bold text-[#0a1b4d] mb-8 flex items-center gap-2">
                <Package size={22} className="text-[#fe6b00]" />
                Tracking Timeline
                <span className="ml-auto text-[13px] font-normal text-[#767680]">{scans.length} events</span>
              </h3>

              <div className="relative max-h-[480px] overflow-y-auto pr-3 timeline-scroll">
                {/* Premium scrollbar styles */}
                <style dangerouslySetInnerHTML={{__html: `
                  .timeline-scroll::-webkit-scrollbar {
                    width: 6px;
                  }
                  .timeline-scroll::-webkit-scrollbar-track {
                    background: rgba(198, 197, 208, 0.15);
                    border-radius: 8px;
                  }
                  .timeline-scroll::-webkit-scrollbar-thumb {
                    background: rgba(198, 197, 208, 0.6);
                    border-radius: 8px;
                    transition: background 0.3s ease;
                  }
                  .timeline-scroll::-webkit-scrollbar-thumb:hover {
                    background: #fe6b00;
                  }
                `}} />
                {/* Vertical line */}
                <div className="absolute left-[19px] top-0 bottom-0 w-[2px]" style={{ background: 'rgba(198,197,208,0.40)' }}></div>

                <div className="space-y-0">
                  {[...scans].reverse().map((s, i) => {
                    const sd = s.ScanDetail
                    const isFirst = i === 0
                    return (
                      <div key={i} className="flex gap-3 md:gap-5 relative pb-5 last:pb-0">
                        {/* Dot */}
                        <div className={`relative z-10 flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-sm border-2 border-white transition-transform ${isFirst ? 'scale-110' : ''}`}
                          style={{ background: isFirst ? '#fe6b00' : '#0a1b4d' }}>
                          <MapPin size={12} className="text-white" />
                        </div>

                        {/* Content */}
                        <div className={`flex-1 min-w-0 rounded-2xl p-3 md:p-4 border transition-all ${isFirst ? 'border-[#fe6b00]/30 shadow-md' : 'border-transparent hover:border-[#e5eeff]'}`}
                          style={{ background: isFirst ? 'rgba(254,107,0,0.05)' : '#f8f9ff' }}>
                          {/* Location + LATEST badge */}
                          <p className="font-bold text-[#0a1b4d] text-[13px] md:text-[15px] flex flex-wrap items-center gap-1.5 break-words">
                            <Building2 size={13} className="text-[#fe6b00] flex-shrink-0" />
                            <span className="break-words min-w-0">{sd.ScannedLocation}</span>
                            {isFirst && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white flex-shrink-0" style={{ background: '#fe6b00' }}>LATEST</span>}
                          </p>
                          {/* Scan type + Instructions */}
                          <p className="text-[12px] md:text-[13px] text-[#45464f] mt-1 ml-[18px]">
                            <span className="font-medium text-[#0a1b4d]">{sd.Scan}</span>
                            {' · '}
                            <span>{sd.Instructions}</span>
                          </p>
                          {/* Date + Status Code — stacked below on mobile */}
                          <div className="flex flex-wrap items-center gap-2 mt-2 ml-[18px]">
                            <span className="flex items-center gap-1 text-[11px] text-[#767680]">
                              <Clock size={10} />
                              {formatDate(sd.ScanDateTime)}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                              style={{ background: '#e5eeff', color: '#0a1b4d' }}>
                              {sd.StatusCode}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Empty State (before search) ── */}
        {!loading && !error && !shipment && (
          <div className="text-center py-16 text-[#767680]">
            <Search size={56} className="mx-auto mb-4 opacity-20" />
            <p className="text-[18px] font-medium">Enter a waybill number above to track your shipment.</p>
          </div>
        )}

      </main>

      {/* ── Footer ── */}
      <footer className="w-full text-white border-t" style={{ background: '#0a1b4d', borderColor: 'rgba(255,255,255,0.10)' }}>
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
        <Link to="/our-services" className="flex flex-col items-center gap-1 text-[#45464f]"><Truck size={22} /><span className="text-[10px] font-bold">Services</span></Link>
        <Link to="/track-shipment" className="flex flex-col items-center gap-1 text-[#fe6b00]"><MapPin size={22} /><span className="text-[10px] font-bold">Track</span></Link>
        <Link to="/contact-us" className="flex flex-col items-center gap-1 text-[#45464f]"><Headphones size={22} /><span className="text-[10px] font-bold">Contact</span></Link>
      </div>

      {/* ── Floating WhatsApp ── */}
      <a className="fixed bottom-20 md:bottom-8 right-6 z-50 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-3"
        style={{ background: '#25D366' }} href="https://wa.me/919599196008" target="_blank" rel="noreferrer">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-1.122 4.102 4.195-1.1c.96.539 2.016.88 3.09.88 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.769-5.767-5.769zm3.387 8.192c-.146.415-.852.762-1.157.808-.304.048-.681.088-1.985-.452-1.57-.649-2.58-2.249-2.658-2.353-.078-.103-.639-.851-.639-1.624s.401-1.151.543-1.306c.143-.155.309-.193.412-.193.104 0 .207.001.297.006.096.004.225-.035.352.27.13.313.444 1.077.482 1.154.039.077.065.167.013.271-.052.103-.077.167-.155.257-.077.091-.161.203-.23.273-.078.077-.159.16-.068.315.091.155.404.667.865 1.077.595.53 1.096.694 1.25.772.155.077.247.065.338-.041.091-.106.39-.452.494-.606.104-.155.208-.13.351-.077.143.052.906.427 1.062.505.155.077.259.116.297.181.04.063.04.364-.105.779z" /></svg>
        <span className="hidden md:inline font-bold text-[13px]">WhatsApp Us</span>
      </a>

    </div>
  )
}
