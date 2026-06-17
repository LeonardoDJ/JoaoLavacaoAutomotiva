
const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/5548996040737?text=Olá! Gostaria de agendar uma lavação.', '_blank')
  }

  return (
    <footer style={{ background: '#080808', borderTop: '1px solid var(--border)', padding: '48px 5% 28px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '40px', marginBottom: '40px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1.1rem', marginBottom: '12px' }}>
            <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>🚗</div>
            João Lavação Automotiva
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: '1.7', maxWidth: '280px' }}>
            Lavação automotiva premium por agendamento em Criciúma - SC. Qualidade, pontualidade e cuidado com o seu veículo.
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
            <div style={{ width: '38px', height: '38px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', cursor: 'pointer' }}>📸</div>
            <div style={{ width: '38px', height: '38px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', cursor: 'pointer' }}>👍</div>
            <div onClick={handleWhatsApp} style={{ width: '38px', height: '38px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', cursor: 'pointer' }}>💬</div>
          </div>
        </div>
        
        <div>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Navegação</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['servicos', 'como-funciona', 'sobre', 'contato'].map(item => (
              <li key={item}>
                <button onClick={() => scrollToSection(item)} style={{ background: 'none', border: 'none', fontSize: '0.88rem', color: '#6B7280', cursor: 'pointer' }}>
                  {item === 'como-funciona' ? 'Como Funciona' : item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Serviços</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><button onClick={() => scrollToSection('servicos')} style={{ background: 'none', border: 'none', fontSize: '0.88rem', color: '#6B7280', cursor: 'pointer' }}>Lavagem Simples</button></li>
            <li><button onClick={() => scrollToSection('servicos')} style={{ background: 'none', border: 'none', fontSize: '0.88rem', color: '#6B7280', cursor: 'pointer' }}>Lavagem Completa</button></li>
            <li><button onClick={() => scrollToSection('servicos')} style={{ background: 'none', border: 'none', fontSize: '0.88rem', color: '#6B7280', cursor: 'pointer' }}>Polimento</button></li>
            <li><button onClick={() => scrollToSection('servicos')} style={{ background: 'none', border: 'none', fontSize: '0.88rem', color: '#6B7280', cursor: 'pointer' }}>Higienização</button></li>
            <li><button onClick={() => scrollToSection('servicos')} style={{ background: 'none', border: 'none', fontSize: '0.88rem', color: '#6B7280', cursor: 'pointer' }}>Cristalização</button></li>
          </ul>
        </div>
      </div>
      
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>© 2025 João Lavação Automotiva. Todos os direitos reservados.</p>
        <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>Criciúma - SC</p>
      </div>
    </footer>
  )
}

export default Footer