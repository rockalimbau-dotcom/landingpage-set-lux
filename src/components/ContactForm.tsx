

import { useState } from 'react'
import { Send, Mail } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const ContactForm = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    rol: '',
    mensaje: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Usar Formspree para enviar el email directamente
      const formId = 'mojvgnrp'
      
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Contacto desde SetLux - ${formData.rol}`,
          nombre: formData.nombre,
          apellido: formData.apellido,
          rol: formData.rol,
          mensaje: formData.mensaje,
          _replyto: `contacto+${formData.nombre.toLowerCase()}.${formData.apellido.toLowerCase()}@setlux.com`, // Email ficticio para respuestas
        }),
      })

      if (response.ok) {
        setIsSubmitting(false)
        setSubmitStatus('success')
        setFormData({ nombre: '', apellido: '', rol: '', mensaje: '' })
        
        // Resetear el estado después de 3 segundos
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 3000)
      } else {
        throw new Error('Error al enviar el formulario')
      }
    } catch (error) {
      console.error('Error al enviar el email:', error)
      setIsSubmitting(false)
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="text-center mb-6 md:mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full mb-3 md:mb-4" style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}>
          <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4"
          style={{ color: isDark ? '#F27405' : '#0476D9' }}
        >
          Contacta con nosotros
        </h2>
        <p className={`text-base md:text-lg transition-colors duration-700 ${isDark ? 'text-gray-300' : 'text-black'}`}>
          ¿Tienes alguna pregunta? Estamos aquí para ayudarte.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className={`block text-sm font-semibold mb-2 transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
              Nombre *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 text-base"
              placeholder="Tu nombre"
            />
          </div>

          {/* Apellido */}
          <div>
            <label htmlFor="apellido" className={`block text-sm font-semibold mb-2 transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
              Apellido *
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              required
              value={formData.apellido}
              onChange={handleChange}
              className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 text-base"
              placeholder="Tu apellido"
            />
          </div>
        </div>

        {/* Rol */}
        <div>
          <label htmlFor="rol" className={`block text-sm font-semibold mb-2 transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
            Rol *
          </label>
          <select
            id="rol"
            name="rol"
            required
            value={formData.rol}
            onChange={handleChange}
            className={`w-full px-3 md:px-4 py-3 md:py-3.5 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 text-base min-h-[44px] appearance-none bg-no-repeat bg-right pr-10 ${
              isDark 
                ? 'bg-gray-800 text-white border-gray-600' 
                : 'bg-white text-gray-900'
            }`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${isDark ? 'white' : 'black'}' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
              backgroundPosition: 'right 0.75rem center',
              backgroundSize: '1em 1em',
            }}
          >
            <option value="" className={isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>Selecciona tu rol</option>
            <option value="gaffer" className={isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>Gaffer</option>
            <option value="best-boy" className={isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>Best Boy</option>
            <option value="electrico" className={isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>Eléctrico</option>
            <option value="tecnico-mesa" className={isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>Técnico de Mesa</option>
            <option value="finger-boy" className={isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>Finger Boy</option>
            <option value="auxiliar" className={isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>Auxiliar</option>
            <option value="maquinista" className={isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>Maquinista</option>
            <option value="otro" className={isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>Otro</option>
          </select>
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="mensaje" className={`block text-sm font-semibold mb-2 transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 resize-none text-base"
            placeholder="Escribe tu mensaje aquí..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
            style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Enviando...
              </>
            ) : (
              <>
                Enviar mensaje
                <Send className="w-4 h-4 md:w-5 md:h-5" />
              </>
            )}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 rounded-xl bg-green-50 border-2 border-green-200 text-green-700 text-center">
            ¡Mensaje enviado correctamente! Te contactaremos pronto.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="p-4 rounded-xl bg-red-50 border-2 border-red-200 text-red-700 text-center">
            Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
          </div>
        )}
      </form>
    </div>
  )
}

export default ContactForm

