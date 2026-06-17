import { useEffect } from 'react' 
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ComoFunciona from './components/ComoFunciona'
import Servicos from './components/Servicos'
import Depoimentos from './components/Depoimentos'
import Sobre from './components/Sobre'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  useEffect(() => {
    // Configurar Intersection Observer para animações
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1'
          e.target.style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.1 })

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <ComoFunciona />
      <Servicos />
      <Depoimentos />
      <Sobre />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App