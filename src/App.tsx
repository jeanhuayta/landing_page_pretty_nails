import { FormEvent, useState } from 'react'

const WHATSAPP_URL = 'https://wa.me/51940221473'

const gallery = [
  { src: '/WhatsApp Image 2026-09-28 at 22.29.37 (1).jpeg', alt: 'Pedicure frances sobre fondo rosa', name: 'French glow', type: 'Pedicure' },
  { src: '/WhatsApp Image 2026-09-28 at 22.29.38.jpeg', alt: 'Pedicure rosa con detalle floral', name: 'Soft flower', type: 'Pedicure' },
  { src: '/WhatsApp Image 2026-09-28 at 22.29.39.jpeg', alt: 'Uñas rosas con diseño de lunares', name: 'Pink details', type: 'Manicure' },
  { src: '/WhatsApp Image 2026-09-28 at 22.29.40 (1).jpeg', alt: 'Uñas lilas con decoración', name: 'Lilac bloom', type: 'Manicure' },
  { src: '/WhatsApp Image 2026-09-28 at 22.29.41 (2).jpeg', alt: 'Uñas rosas con flores y brillo', name: 'Garden shine', type: 'Manicure' },
  { src: '/WhatsApp Image 2026-09-28 at 22.29.41 (3).jpeg', alt: 'Uñas naranjas de acabado brillante', name: 'Bold orange', type: 'Manicure' },
]

function WhatsAppIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2a12.6 12.6 0 0 0-10.7 19.3L3.7 28l5.7-1.5A12.6 12.6 0 1 0 16 3.2Zm0 22.8c-2 0-4-.5-5.7-1.6l-.4-.2-3.4.9.9-3.3-.2-.4A9.9 9.9 0 1 1 16 26Zm5.4-7.4c-.3-.1-1.8-.9-2.1-1s-.5-.1-.7.2-.8 1-.9 1.2-.4.2-.7.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.5.2-.5c.1-.2 0-.4 0-.5l-1-2.4c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.6.1-.8.4s-1.1 1.1-1.1 2.8 1.1 3.3 1.3 3.5c.1.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" fill="currentColor" /></svg>
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [expandedPhoto, setExpandedPhoto] = useState<number | null>(null)

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const togglePhoto = (index: number) => {
    setExpandedPhoto((current) => current === index ? null : index)
  }

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = `Hola, quisiera reservar una cita.\n\nNombre: ${data.get('name')}\nServicio: ${data.get('service')}\nFecha preferida: ${data.get('date')}\nMensaje: ${data.get('message')}`
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return <main>
    <header className="nav">
      <button className="brand" onClick={() => goTo('inicio')} aria-label="Ir al inicio">
        <img src="/logo.jpeg" alt="Logo de la marca" />
        <span>Pretty Nails</span>
      </button>
      <nav className="desktop-nav" aria-label="Navegacion principal">
        <button onClick={() => goTo('inicio')}>Inicio</button>
        <button onClick={() => goTo('servicios')}>Servicios</button>
        <button onClick={() => goTo('galeria')}>Galería</button>
        <button className="nav-cta" onClick={() => goTo('contacto')}>Reserva tu cita</button>
      </nav>
      <button className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}><i /><i /></button>
    </header>

    <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
      <button onClick={() => goTo('inicio')}>Inicio</button>
      <button onClick={() => goTo('servicios')}>Servicios</button>
      <button onClick={() => goTo('galeria')}>Galería</button>
      <button onClick={() => goTo('contacto')}>Contacto</button>
    </div>

    <section id="inicio" className="hero section-pad">
      <div className="hero-copy">
        <p className="eyebrow">Manicure · Diseño · Cuidado</p>
        <h1>Uñas que hablan <em>de ti.</em></h1>
        <p className="hero-text">Detalles delicados, diseños que se sienten tuyos y un momento solo para consentirte.</p>
        <div className="hero-actions">
          <button className="button dark" onClick={() => goTo('contacto')}>Reserva tu cita <ArrowIcon /></button>
          <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Escribeme por WhatsApp <ArrowIcon /></a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/WhatsApp Image 2026-09-28 at 22.29.40 (3).jpeg" alt="Manicure profesional" />
        <div className="floating-note"><strong>Tu próxima<br />obsesión</strong><span>Desde la primera cita</span></div>
      </div>
      <div className="hero-detail"><span>Beauty, en<br />cada detalle</span><span className="scroll-mark">Desliza para explorar ↓</span></div>
    </section>

    <section id="servicios" className="services section-pad">
      <div className="section-intro"><p className="eyebrow">Elige tu momento</p><h2>Todo empieza en <em>tus manos.</em></h2></div>
      <div className="service-list">
        <article><span>01</span><div><h3>Manicure</h3><p>Un acabado limpio, cuidado y hecho para ti.</p></div><button onClick={() => goTo('contacto')} aria-label="Reservar manicure"><ArrowIcon /></button></article>
        <article><span>02</span><div><h3>Diseños personalizados</h3><p>Color, textura y detalles que cuentan tu estilo.</p></div><button onClick={() => goTo('contacto')} aria-label="Reservar diseño"><ArrowIcon /></button></article>
        <article><span>03</span><div><h3>Uñas con estilo</h3><p>Una manicura especial para verte y sentirte increíble.</p></div><button onClick={() => goTo('contacto')} aria-label="Reservar uñas con estilo"><ArrowIcon /></button></article>
      </div>
    </section>

    <section id="galeria" className="gallery section-pad">
      <div className="gallery-head"><div><p className="eyebrow">Mi trabajo</p><h2>Pequenas obras<br /><em>de arte.</em></h2></div><p>Cada set tiene su propia energia.<br />Encuentra el que va contigo.</p></div>
      <div className="gallery-grid">{gallery.map((photo, index) => <figure key={photo.src} className={expandedPhoto === index ? 'is-expanded' : ''} tabIndex={0} role="button" aria-pressed={expandedPhoto === index} onClick={() => togglePhoto(index)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); togglePhoto(index) } }}><img src={photo.src} alt={photo.alt} /><figcaption><span>0{index + 1} · {photo.type}</span><strong>{photo.name}</strong></figcaption></figure>)}</div>
    </section>

    <section id="contacto" className="contact section-pad">
      <div className="contact-image"><img src="/WhatsApp Image 2026-09-28 at 22.29.37.jpeg" alt="Detalle de uñas terminadas" /></div>
      <div className="contact-content"><p className="eyebrow">Reserva tu espacio</p><h2>Hagamos realidad<br /><em>tu próximo set.</em></h2><p>Cuéntame qué tienes en mente y coordinamos tu cita por WhatsApp.</p>
        <form onSubmit={submitForm}>
          <label>Nombre<input name="name" required placeholder="Como te llamas" /></label>
          <div className="form-row"><label>Servicio<select name="service" defaultValue=""><option value="" disabled>Elige un servicio</option><option>Manicure</option><option>Diseño personalizado</option><option>Uñas con estilo</option><option>Quiero asesoramiento</option></select></label><label>Fecha ideal<input name="date" type="date" /></label></div>
          <label>Mensaje<textarea name="message" placeholder="Cuéntame el estilo que buscas" rows={3} /></label>
          <button className="button dark form-button" type="submit">Enviar por WhatsApp <WhatsAppIcon /></button>
          {sent && <span className="form-success">Tu mensaje esta listo en WhatsApp.</span>}
        </form>
      </div>
    </section>

    <footer><div className="footer-brand"><img src="/logo.jpeg" alt="" /><span>Pretty Nails</span></div><p>Hecho con dedicación para tus manos.</p><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon /> 940 221 473</a></footer>
    <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp"><WhatsAppIcon /></a>
  </main>
}

export default App
