
const testimonials = [
  { stars: '★★★★★', text: 'Serviço impecável! Agendei pelo WhatsApp, foi super fácil e meu carro ficou como novo. Com certeza voltarei sempre.', name: 'Carlos S.', city: 'Criciúma - SC', initials: 'CS', gradient: 'linear-gradient(135deg,var(--primary),#8B5CF6)' },
  { stars: '★★★★★', text: 'Melhor lavação que já fiz na cidade. Muito caprichosos, pontuais no horário e o preço é justo. Super recomendo!', name: 'Fernanda R.', city: 'Içara - SC', initials: 'FR', gradient: 'linear-gradient(135deg,#8B5CF6,#EC4899)' },
  { stars: '★★★★★', text: 'Fiz o polimento e ficou perfeito — riscos que eu achei que nunca sairiam simplesmente sumiram. Valeu cada centavo!', name: 'Marcos T.', city: 'Criciúma - SC', initials: 'MT', gradient: 'linear-gradient(135deg,#0D9488,#3B82F6)' }
]

const Depoimentos = () => {
  return (
    <section style={{ background: 'var(--surface)', padding: '80px 5%' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>Clientes</div>
        <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, marginBottom: '14px' }}>O que nossos clientes dizem</h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--muted)', maxWidth: '540px', margin: '0 auto 52px', textAlign: 'center' }}>A satisfação de quem já confiou no nosso serviço fala por nós.</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
        {testimonials.map((t, idx) => (
          <div key={idx} className="animate-on-scroll" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '28px 24px', backdropFilter: 'blur(4px)' }}>
            <div style={{ color: '#FBBF24', fontSize: '1.1rem', marginBottom: '14px' }}>{t.stars}</div>
            <p style={{ fontSize: '0.93rem', color: '#D1D5DB', marginBottom: '20px', lineHeight: '1.7' }}>{t.text}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: t.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>{t.initials}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{t.city}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Depoimentos