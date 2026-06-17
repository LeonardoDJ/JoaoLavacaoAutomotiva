
const WhatsAppFloat = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5548996040737?text=Olá! Gostaria de agendar uma lavação.', '_blank')
  }

  return (
    <button
      onClick={handleWhatsApp}
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 200,
        width: '58px',
        height: '58px',
        borderRadius: '50%',
        background: '#16a34a',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '28px',
        boxShadow: '0 4px 20px rgba(22,163,74,0.4)',
        transition: 'transform 0.2s, box-shadow 0.2s'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.08)'
        e.currentTarget.style.boxShadow = '0 6px 28px rgba(22,163,74,0.5)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(22,163,74,0.4)'
      }}
    >
      💬
    </button>
  )
}

export default WhatsAppFloat