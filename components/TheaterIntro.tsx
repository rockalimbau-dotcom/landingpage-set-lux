'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'

const TheaterIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState<
    'dark' | 
    'left-light-only' | 
    'left-light-with-content' | 
    'right-light-only' | 
    'right-light-with-content' | 
    'front-light' | 
    'complete'
  >('dark')
  const [showContent, setShowContent] = useState(false)

  // Secuencia cinematográfica
  useEffect(() => {
    const timeline = [
      { delay: 1000, action: () => setStage('left-light-only') },           // Primero se enciende la luz izquierda
      { delay: 1300, action: () => setStage('left-light-with-content') },   // Luego aparecen letras y logo izquierdo (más rápido)
      { delay: 3800, action: () => setStage('right-light-only') },         // Primero se enciende la luz derecha
      { delay: 4100, action: () => setStage('right-light-with-content') }, // Luego aparecen letras y logo derecho (más rápido)
      { delay: 6100, action: () => setStage('front-light') },              // Luz frontal - todo visible
      { delay: 7600, action: () => setStage('complete') },                 // Luz aumenta hasta blanco
      { delay: 9600, action: () => {
        setShowContent(true)
        setTimeout(() => onComplete(), 500)
      }},
    ]

    const timers = timeline.map(({ delay, action }) => 
      setTimeout(action, delay)
    )

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [onComplete])

  // Función para obtener la opacidad y brillo de cada letra según la etapa
  const getLetterStyle = (letter: 'S' | 'e' | 't' | 'L' | 'u' | 'x') => {
    if (stage === 'dark' || stage === 'left-light-only') {
      // En estas etapas, las letras aún no aparecen (solo la luz)
      return { opacity: 0, filter: 'brightness(0)' }
    }
    
    if (stage === 'left-light-with-content') {
      // Luz izquierda: S muy iluminada, e menos, t poco. L, u, x aún no aparecen
      switch (letter) {
        case 'S':
          return { opacity: 1, filter: 'brightness(1.5) drop-shadow(0 0 20px rgba(173, 216, 230, 0.8))' }
        case 'e':
          return { opacity: 0.7, filter: 'brightness(1.2) drop-shadow(0 0 15px rgba(173, 216, 230, 0.6))' }
        case 't':
          return { opacity: 0.4, filter: 'brightness(0.8) drop-shadow(0 0 10px rgba(173, 216, 230, 0.4))' }
        case 'L':
        case 'u':
        case 'x':
          return { opacity: 0, filter: 'brightness(0)' }
        default:
          return { opacity: 0, filter: 'brightness(0)' }
      }
    }
    
    // En right-light-only, las letras S, e, t se MANTIENEN visibles
    if (stage === 'right-light-only') {
      switch (letter) {
        case 'S':
          return { opacity: 1, filter: 'brightness(1.5) drop-shadow(0 0 20px rgba(173, 216, 230, 0.8))' }
        case 'e':
          return { opacity: 0.7, filter: 'brightness(1.2) drop-shadow(0 0 15px rgba(173, 216, 230, 0.6))' }
        case 't':
          return { opacity: 0.4, filter: 'brightness(0.8) drop-shadow(0 0 10px rgba(173, 216, 230, 0.4))' }
        case 'L':
        case 'u':
        case 'x':
          return { opacity: 0, filter: 'brightness(0)' }
        default:
          return { opacity: 0, filter: 'brightness(0)' }
      }
    }
    
    if (stage === 'right-light-with-content') {
      // Luz derecha: x muy iluminada, u menos, L poco. S, e, t se mantienen VISIBLES con la misma intensidad
      switch (letter) {
        case 'x':
          return { opacity: 1, filter: 'brightness(1.5) drop-shadow(0 0 20px rgba(242, 116, 5, 0.8))' }
        case 'u':
          return { opacity: 0.7, filter: 'brightness(1.2) drop-shadow(0 0 15px rgba(242, 116, 5, 0.6))' }
        case 'L':
          return { opacity: 0.4, filter: 'brightness(0.8) drop-shadow(0 0 10px rgba(242, 116, 5, 0.4))' }
        case 'S':
          // Se mantiene encendida con la MISMA intensidad que antes
          return { opacity: 1, filter: 'brightness(1.5) drop-shadow(0 0 20px rgba(173, 216, 230, 0.8))' }
        case 'e':
          // Se mantiene encendida con la MISMA intensidad que antes
          return { opacity: 0.7, filter: 'brightness(1.2) drop-shadow(0 0 15px rgba(173, 216, 230, 0.6))' }
        case 't':
          // Se mantiene encendida con la MISMA intensidad que antes
          return { opacity: 0.4, filter: 'brightness(0.8) drop-shadow(0 0 10px rgba(173, 216, 230, 0.4))' }
        default:
          return { opacity: 0, filter: 'brightness(0)' }
      }
    }
    
    // Luz frontal: todo bien iluminado
    return { 
      opacity: 1, 
      filter: 'brightness(1.2) drop-shadow(0 0 25px rgba(4, 118, 217, 0.6)) drop-shadow(0 0 50px rgba(242, 116, 5, 0.4))' 
    }
  }

  // Estilo del logo según la etapa
  const getLogoStyle = () => {
    if (stage === 'dark' || stage === 'left-light-only') {
      // El logo aún no aparece
      return { 
        opacity: 0,
      }
    }
    
    if (stage === 'left-light-with-content') {
      // Logo izquierdo visible con buena iluminación
      return {
        opacity: 0.7,
        filter: 'brightness(0.9) drop-shadow(0 0 15px rgba(173, 216, 230, 0.6))',
        clipPath: 'inset(0 50% 0 0)',
        WebkitClipPath: 'inset(0 50% 0 0)',
      }
    }
    
    if (stage === 'right-light-only') {
      // El logo se MANTIENE visible (mitad izquierda) cuando solo se enciende el foco derecho
      return {
        opacity: 0.7,
        filter: 'brightness(0.9) drop-shadow(0 0 15px rgba(173, 216, 230, 0.6))',
        clipPath: 'inset(0 50% 0 0)',
        WebkitClipPath: 'inset(0 50% 0 0)',
      }
    }
    
    if (stage === 'right-light-with-content') {
      // Logo completo visible: izquierda se mantiene, derecha aparece con baja intensidad
      return {
        opacity: 0.7,
        filter: 'brightness(0.7) drop-shadow(0 0 12px rgba(242, 116, 5, 0.5)) drop-shadow(0 0 10px rgba(173, 216, 230, 0.4))',
        clipPath: 'none',
        WebkitClipPath: 'none',
      }
    }
    
    // Solo cuando se enciende el foco frontal, el logo aparece completamente iluminado
    return {
      opacity: 1,
      filter: 'brightness(1.2) drop-shadow(0 0 25px rgba(4, 118, 217, 0.6)) drop-shadow(0 0 50px rgba(242, 116, 5, 0.4))',
      clipPath: 'none',
      WebkitClipPath: 'none',
    }
  }

  return (
    <div 
      className={`fixed inset-0 z-50 transition-opacity duration-2000 ${
        showContent ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Fondo completamente negro */}
      <div className="absolute inset-0 bg-black" />

      {/* Contenido central - Logo y Título */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Logo */}
        <div 
          className="relative mb-8"
          style={{
            ...getLogoStyle(),
            transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 1s cubic-bezier(0.4, 0, 0.2, 1), clip-path 1s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Logo 
            size="xl" 
            isDark={false}
            className="drop-shadow-2xl"
          />
        </div>

        {/* Texto SetLux - Cada letra con su propia iluminación */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold relative">
          <span 
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, #0476D9 0%, #F27405 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              ...getLetterStyle('S'),
              transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            S
          </span>
          <span 
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, #0476D9 0%, #F27405 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              ...getLetterStyle('e'),
              transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            e
          </span>
          <span 
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, #0476D9 0%, #F27405 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              ...getLetterStyle('t'),
              transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            t
          </span>
          <span 
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, #0476D9 0%, #F27405 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              ...getLetterStyle('L'),
              transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            L
          </span>
          <span 
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, #0476D9 0%, #F27405 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              ...getLetterStyle('u'),
              transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            u
          </span>
          <span 
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, #0476D9 0%, #F27405 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              ...getLetterStyle('x'),
              transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            x
          </span>
        </h1>

        {/* Subtítulo */}
        <p 
          className="mt-6 text-xl md:text-2xl font-light"
          style={{
            color: '#94a3b8',
            opacity: stage === 'right-light-with-content' || stage === 'front-light' || stage === 'complete' ? 1 : 0,
            transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: stage === 'right-light-with-content' ? '0.3s' : '0s',
          }}
        >
          All in One
        </p>
      </div>

      {/* Luz lateral izquierda - Blanco azulado */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          opacity: stage === 'left-light-only' || stage === 'left-light-with-content' || stage === 'right-light-only' || stage === 'right-light-with-content' || stage === 'front-light' || stage === 'complete' ? 0.6 : 0,
          transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[600px] blur-3xl"
          style={{
            background: 'radial-gradient(ellipse at left center, rgba(173, 216, 230, 0.8) 0%, rgba(135, 206, 250, 0.6) 30%, transparent 60%)',
            transform: 'translateY(-50%)',
          }}
        />
      </div>

      {/* Luz lateral derecha - Cálida/Naranja */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          opacity: stage === 'right-light-only' || stage === 'right-light-with-content' || stage === 'front-light' || stage === 'complete' ? 0.6 : 0,
          transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[600px] blur-3xl"
          style={{
            background: 'radial-gradient(ellipse at right center, rgba(242, 116, 5, 0.8) 0%, rgba(255, 165, 0, 0.6) 30%, transparent 60%)',
            transform: 'translateY(-50%)',
          }}
        />
      </div>

      {/* Luz frontal - Ilumina todo al final y aumenta hasta blanco */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          opacity: stage === 'front-light' || stage === 'complete' ? 1 : 0,
          transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[900px] blur-3xl"
          style={{
            background: stage === 'complete' 
              ? 'radial-gradient(ellipse at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 30%, rgba(255, 255, 255, 0.7) 50%, transparent 70%)'
              : 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.5) 0%, rgba(173, 216, 230, 0.4) 25%, rgba(242, 116, 5, 0.3) 50%, transparent 70%)',
            transform: 'translateX(-50%)',
            transition: 'background 2s cubic-bezier(0.4, 0, 0.2, 1)',
            animation: stage === 'front-light' || stage === 'complete' ? 'fadeInScale 1.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }}
        />
      </div>

      {/* Overlay blanco que aumenta gradualmente hasta cubrir todo */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          opacity: stage === 'complete' ? 1 : 0,
          transition: 'opacity 2s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div 
          className="absolute inset-0 bg-white"
        />
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translateX(-50%) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
        }
        
      `}</style>
    </div>
  )
}

export default TheaterIntro
