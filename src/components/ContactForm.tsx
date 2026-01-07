

import { useState } from 'react'
import { Send, Mail } from 'lucide-react'

const ContactForm = () => {
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
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#0476D9' }}>
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h2 
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: '#0476D9' }}
        >
          Contacta con nosotros
        </h2>
        <p className="text-lg text-gray-600">
          ¿Tienes alguna pregunta? Estamos aquí para ayudarte.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
              Nombre *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              placeholder="Tu nombre"
            />
          </div>

          {/* Apellido */}
          <div>
            <label htmlFor="apellido" className="block text-sm font-semibold text-gray-700 mb-2">
              Apellido *
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              required
              value={formData.apellido}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              placeholder="Tu apellido"
            />
          </div>
        </div>

        {/* Rol */}
        <div>
          <label htmlFor="rol" className="block text-sm font-semibold text-gray-700 mb-2">
            Rol *
          </label>
          <select
            id="rol"
            name="rol"
            required
            value={formData.rol}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white"
          >
            <option value="">Selecciona tu rol</option>
            <option value="gaffer">Gaffer</option>
            <option value="best-boy">Best Boy</option>
            <option value="electrico">Eléctrico</option>
            <option value="tecnico-mesa">Técnico de Mesa</option>
            <option value="finger-boy">Finger Boy</option>
            <option value="auxiliar">Auxiliar</option>
            <option value="maquinista">Maquinista</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
            placeholder="Escribe tu mensaje aquí..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#0476D9' }}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Enviando...
              </>
            ) : (
              <>
                Enviar mensaje
                <Send className="w-5 h-5" />
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

