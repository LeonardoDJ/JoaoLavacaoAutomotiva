import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Servicos.css'

const services = [
  {
    icon: '🪣',
    name: 'Lavagem Simples',
    desc: 'Exterior completo, rodas e secagem com pano macio.',
    price: 'R$ 40',
    popular: false,
    detalhes: 'Lavagem externa completa com produtos específicos, limpeza das rodas e pneus, e secagem manual com pano de microfibra para evitar riscos. Ideal para manutenção semanal do veículo.',
    imagens: [
      'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400',
      'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=400'
    ]
  },
  {
    icon: '🚿',
    name: 'Lavagem Completa',
    desc: 'Lavagem simples + aspiração interna completa e limpeza do painel.',
    price: 'R$ 70',
    popular: true,
    detalhes: 'Tudo da lavagem simples, mais aspiração completa do interior, limpeza e hidratação do painel, portas e console. Seu carro fica impecável por dentro e por fora.',
    imagens: [
      'https://images.unsplash.com/photo-1605618826115-fb9e775cc7c4?w=400',
      'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=400'
    ]
  },
  {
    icon: '✨',
    name: 'Polimento',
    desc: 'Remoção de riscos leves e brilho intenso na pintura do veículo.',
    price: 'R$ 150',
    popular: false,
    detalhes: 'Processo que remove micro riscos, oxidação e marcas de uso da pintura, devolvendo o brilho original do carro. Usamos politriz profissional e produtos de alta qualidade.',
    imagens: [
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400'
    ]
  },
  {
    icon: '🧽',
    name: 'Higienização Interna',
    desc: 'Limpeza profunda de estofados, carpetes e detalhes internos.',
    price: 'R$ 120',
    popular: false,
    detalhes: 'Limpeza profunda de bancos, carpetes, forros e detalhes internos, eliminando manchas, odores e ácaros. Deixa o interior do carro renovado e higienizado.',
    imagens: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400'
    ]
  },
  {
    icon: '💎',
    name: 'Cristalização',
    desc: 'Proteção e brilho duradouro para a pintura com camada vitrificada.',
    price: 'R$ 200',
    popular: false,
    detalhes: 'Aplicação de uma camada de proteção vitrificada sobre a pintura, garantindo brilho intenso e proteção contra raios UV, chuva ácida e sujeira por meses.',
    imagens: [
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400'
    ]
  }
]

const Servicos = () => {
  const [servicoSelecionado, setServicoSelecionado] = useState(null)

  const handleWhatsApp = (serviceName) => {
    const msg = serviceName ? `Olá! Gostaria de agendar uma ${serviceName}.` : 'Olá! Gostaria de agendar uma lavação.'
    window.open(`https://wa.me/5548996040737?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="servicos" className="servicos-section">
      <div style={{ textAlign: 'center' }}>
        <div className="servicos-eyebrow">Tabela de preços</div>
        <h2 className="servicos-titulo">Nossos Serviços</h2>
        <p className="servicos-subtitulo">Do básico ao premium — temos o pacote ideal para o seu carro.</p>
      </div>

      <div className="servicos-grid">
        {services.map((service, idx) => (
          <div key={idx} className="animate-on-scroll servico-card" style={{
            background: 'var(--card)',
            border: service.popular ? '1.5px solid var(--primary)' : '1px solid var(--border)',
            borderRadius: '16px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {service.popular && (
              <div className="servico-badge">Mais Popular</div>
            )}
            <div style={{ width: '46px', height: '46px', background: 'rgba(59,130,246,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>{service.icon}</div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{service.name}</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', flex: 1 }}>{service.desc}</p>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent)' }}>A partir de {service.price}</div>

            <div className="servico-card-botoes">
              <button onClick={() => setServicoSelecionado(service)} className="botoes-linha">
                Saber mais
              </button>
              <button onClick={() => handleWhatsApp(service.name)} className="botoes-linha" style={{
                border: service.popular ? 'none' : '1.5px solid var(--border)',
                background: service.popular ? 'var(--primary)' : 'transparent',
                color: service.popular ? '#fff' : 'var(--text)'
              }}>
                Agendar
              </button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {servicoSelecionado && (
          <motion.div
            className="modal-overlay"
            onClick={() => setServicoSelecionado(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{
                background: 'var(--card)',
                position: 'relative'
              }}
            >
              <button
                onClick={() => setServicoSelecionado(null)}
                className="botoes-linha"
              >
                ✕
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ width: '46px', height: '46px', background: 'rgba(59,130,246,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>
                  {servicoSelecionado.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{servicoSelecionado.name}</h3>
              </div>

              <div className="modal-imagens">
                {servicoSelecionado.imagens.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${servicoSelecionado.name} ${i + 1}`}
                    className="modal-imagem"
                  />
                ))}
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.6, marginTop: '18px', marginBottom: '20px' }}>
                {servicoSelecionado.detalhes}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent)' }}>
                  A partir de {servicoSelecionado.price}
                </span>
              </div>

              <button
                onClick={() => {
                  handleWhatsApp(servicoSelecionado.name)
                  setServicoSelecionado(null)
                }}
                className="modal-btn-agendar"
              >
                Agendar via WhatsApp
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Servicos