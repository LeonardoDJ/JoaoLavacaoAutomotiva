
const Contato = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5548XXXXXXXXX?text=Olá! Gostaria de agendar uma lavação.', '_blank')
  }

  return (
    <section id="contato" style={{ background: 'var(--surface)', padding: '80px 5%' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>Localização</div>
        <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, marginBottom: '14px' }}>Onde estamos</h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--muted)', maxWidth: '540px', margin: '0 auto 52px', textAlign: 'center' }}>Venha nos visitar em Criciúma ou agende direto pelo WhatsApp.</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>📍</div>
              <div>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '4px', fontWeight: 500 }}>Endereço</h4>
                <p style={{ fontSize: '0.95rem', fontWeight: 500 }}>Rua [Inserir endereço], Criciúma - SC</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>📱</div>
              <div>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '4px', fontWeight: 500 }}>WhatsApp</h4>
                <p style={{ fontSize: '0.95rem', fontWeight: 500 }}>(48) XXXXX-XXXX</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🕐</div>
              <div>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '4px', fontWeight: 500 }}>Horário de Atendimento</h4>
                <p style={{ fontSize: '0.95rem', fontWeight: 500 }}>Segunda a Sábado, 8h às 18h</p>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '32px' }}>
            <button onClick={handleWhatsApp} style={{ width: '100%', justifyContent: 'center', padding: '14px 28px', background: '#16a34a', color: '#fff', fontSize: '1rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
              📲 Chamar no WhatsApp
            </button>
          </div>
        </div>
        
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', height: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'var(--muted)', fontSize: '0.9rem' }}>
          <div style={{ fontSize: '3rem' }}>🗺️</div>
          <p style={{ textAlign: 'center', maxWidth: '200px' }}>Insira aqui o embed do Google Maps com a localização exata</p>
          <a href="https://maps.google.com/?q=Criciuma,SC" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>Ver no Google Maps →</a>
        </div>
      </div>
    </section>
  )
}

export default Contato