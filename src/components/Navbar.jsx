
const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/5548XXXXXXXXX?text=Olá! Gostaria de agendar uma lavação.', '_blank')
  }

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(13,13,13,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      padding: '0 5%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '64px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1.1rem' }}>
        <div style={{ width: '36px', height: '36px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🚗</div>
        João Lavação
      </div>
      
      <ul style={{ display: 'flex', gap: '28px', listStyle: 'none', margin: 0, padding: 0 }}>
        {['servicos', 'como-funciona', 'sobre', 'contato'].map(item => (
          <li key={item}>
            <button 
              onClick={() => scrollToSection(item)}
              style={{ background: 'none', border: 'none', fontSize: '0.9rem', color: 'var(--muted)', cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {item === 'como-funciona' ? 'Como Funciona' : item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      <div>
        <button 
          onClick={handleWhatsApp}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', background: 'var(--primary)', color: '#fff', border: 'none' }}
        >
          💬 Agendar pelo WhatsApp
        </button>
      </div>
    </nav>
  )
}

export default Navbar