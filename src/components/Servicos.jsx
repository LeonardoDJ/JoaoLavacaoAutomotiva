
const services = [
  { icon: '🪣', name: 'Lavagem Simples', desc: 'Exterior completo, rodas e secagem com pano macio.', price: 'R$ 40', popular: false },
  { icon: '🚿', name: 'Lavagem Completa', desc: 'Lavagem simples + aspiração interna completa e limpeza do painel.', price: 'R$ 70', popular: true },
  { icon: '✨', name: 'Polimento', desc: 'Remoção de riscos leves e brilho intenso na pintura do veículo.', price: 'R$ 150', popular: false },
  { icon: '🧽', name: 'Higienização Interna', desc: 'Limpeza profunda de estofados, carpetes e detalhes internos.', price: 'R$ 120', popular: false },
  { icon: '💎', name: 'Cristalização', desc: 'Proteção e brilho duradouro para a pintura com camada vitrificada.', price: 'R$ 200', popular: false }
]

const Servicos = () => {
  const handleWhatsApp = (serviceName) => {
    const msg = serviceName ? `Olá! Gostaria de agendar uma ${serviceName}.` : 'Olá! Gostaria de agendar uma lavação.'
    window.open(`https://wa.me/5548XXXXXXXXX?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="servicos" style={{ padding: '80px 5%' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>Tabela de preços</div>
        <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, marginBottom: '14px' }}>Nossos Serviços</h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--muted)', maxWidth: '540px', margin: '0 auto 52px', textAlign: 'center' }}>Do básico ao premium — temos o pacote ideal para o seu carro.</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '20px' }}>
        {services.map((service, idx) => (
          <div key={idx} className="animate-on-scroll" style={{
            background: 'var(--card)',
            border: service.popular ? '1.5px solid var(--primary)' : '1px solid var(--border)',
            borderRadius: '16px',
            padding: '28px 24px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {service.popular && (
              <div style={{
                position: 'absolute',
                top: '-13px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--primary)',
                color: '#fff',
                fontSize: '0.75rem',
                fontWeight: 600,
                padding: '4px 14px',
                borderRadius: '999px',
                whiteSpace: 'nowrap'
              }}>Mais Popular</div>
            )}
            <div style={{ width: '46px', height: '46px', background: 'rgba(59,130,246,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>{service.icon}</div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{service.name}</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', flex: 1 }}>{service.desc}</p>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent)' }}>A partir de {service.price}</div>
            <button onClick={() => handleWhatsApp(service.name)} style={{
              width: '100%',
              justifyContent: 'center',
              padding: '10px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              border: service.popular ? 'none' : '1.5px solid var(--border)',
              background: service.popular ? 'var(--primary)' : 'transparent',
              color: service.popular ? '#fff' : 'var(--text)'
            }}>
              Agendar
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Servicos