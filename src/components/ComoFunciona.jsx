
const steps = [
  { num: '01', icon: '🔍', title: 'Escolha o serviço', desc: 'Veja nossos pacotes e escolha o que melhor se encaixa para o seu veículo e orçamento.' },
  { num: '02', icon: '💬', title: 'Fale pelo WhatsApp', desc: 'Envie uma mensagem, confirme a data e horário direto com a nossa equipe — sem formulários.' },
  { num: '03', icon: '✨', title: 'Venha na hora certa', desc: 'Chegue no horário agendado e saia com o carro impecável, sem tempo perdido em filas.' }
]

const ComoFunciona = () => {
  return (
    <section id="como-funciona" style={{ background: 'var(--surface)', padding: '80px 5%' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>Processo</div>
        <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, marginBottom: '14px' }}>Como funciona?</h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--muted)', maxWidth: '540px', margin: '0 auto 52px', textAlign: 'center' }}>Agendar é simples, rápido e sem complicação.</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '24px' }}>
        {steps.map((step, idx) => (
          <div key={idx} className="animate-on-scroll" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px 28px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '3rem', fontWeight: 800, color: 'rgba(59,130,246,0.2)', marginBottom: '12px' }}>{step.num}</div>
            <div style={{ width: '52px', height: '52px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', margin: '0 auto 16px' }}>{step.icon}</div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{step.title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ComoFunciona