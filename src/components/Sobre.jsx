
const Sobre = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5548996040737?text=Olá! Gostaria de agendar uma lavação.', '_blank')
  }

  return (
    <section id="sobre" style={{ padding: '80px 5%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '52px', alignItems: 'center' }}>
        <div style={{ background: 'linear-gradient(135deg,#0D1628,#1a2a4a)', borderRadius: '20px', height: '360px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', border: '1px solid rgba(59,130,246,0.15)', fontSize: '4rem' }}>
          <div>🚗✨</div>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', textAlign: 'center', maxWidth: '200px', lineHeight: '1.5' }}>Cuidando do seu carro com dedicação em Criciúma</p>
        </div>
        
        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>Quem somos</div>
          <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.2rem)', marginBottom: '16px' }}>Sobre a João Lavação Automotiva</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '28px', fontSize: '0.95rem', lineHeight: '1.8' }}>
            Nascemos do amor por carros e da vontade de oferecer um serviço diferente em Criciúma. Trabalhamos por agendamento para garantir atenção total a cada veículo — sem pressa, sem improvisação. Nossa missão é entregar qualidade que você vê e sente.
          </p>
          
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem' }}>
              <span style={{ width: '28px', height: '28px', background: 'rgba(34,197,94,0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green)', fontSize: '16px' }}>✓</span>
              Equipe treinada e experiente em lavação automotiva
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem' }}>
              <span style={{ width: '28px', height: '28px', background: 'rgba(34,197,94,0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green)', fontSize: '16px' }}>✓</span>
              Produtos de alta qualidade, seguros para a pintura
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem' }}>
              <span style={{ width: '28px', height: '28px', background: 'rgba(34,197,94,0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green)', fontSize: '16px' }}>✓</span>
              Atendimento por agendamento — pontual e sem espera
            </li>
          </ul>
          
          <button onClick={handleWhatsApp} style={{ padding: '14px 32px', fontSize: '1rem', borderRadius: '10px', background: 'var(--primary)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
            💬 Agendar agora
          </button>
        </div>
      </div>
    </section>
  )
}

export default Sobre