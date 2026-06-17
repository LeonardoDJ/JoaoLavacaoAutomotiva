
const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5548996040737?text=Olá! Gostaria de agendar uma lavação.', '_blank')
  }

  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg,#0a0a0a 0%,#0D1628 50%,#0a0a0a 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '80px 5% 60px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 50% 40%,rgba(59,130,246,0.12) 0%,transparent 70%)'
      }} />
      
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.3)', color: 'var(--accent)', padding: '6px 16px', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 500, marginBottom: '28px' }}>
        ✦ Criciúma - SC
      </div>
      
      <h1 style={{ fontSize: 'clamp(2.4rem,6vw,4.2rem)', fontWeight: 800, marginBottom: '20px', maxWidth: '700px' }}>
        Seu carro merece o<br /><span style={{ color: 'var(--accent)' }}>melhor cuidado</span>
      </h1>
      
      <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 36px' }}>
        Lavação automotiva premium por agendamento. Sem espera, sem fila — com qualidade garantida.
      </p>
      
      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button onClick={handleWhatsApp} style={{ padding: '14px 32px', fontSize: '1rem', borderRadius: '10px', background: 'var(--primary)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
          💬 Agendar agora pelo WhatsApp
        </button>
        <button onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })} style={{ padding: '14px 32px', fontSize: '1rem', borderRadius: '10px', background: 'transparent', border: '1.5px solid var(--border)', color: 'var(--text)', cursor: 'pointer', fontWeight: 600 }}>
          Ver serviços
        </button>
      </div>
      
      <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2s infinite', color: 'var(--muted)', fontSize: '1.5rem' }}>
        ↓
      </div>
    </section>
  )
}

export default Hero