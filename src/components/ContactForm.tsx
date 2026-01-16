

import { useState, useRef, useEffect } from 'react'
import { Send, Mail } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const ContactForm = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    apellido: '',
    rol: '',
    interes: [] as string[],
    mensaje: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isRoleOpen, setIsRoleOpen] = useState(false)
  const [isInterestOpen, setIsInterestOpen] = useState(false)
  const roleDropdownRef = useRef<HTMLDivElement>(null)
  const interestDropdownRef = useRef<HTMLDivElement>(null)
  const roles = [
    { value: 'gaffer', label: 'Gaffer' },
    { value: 'best-boy', label: 'Best Boy' },
    { value: 'electrico', label: 'Eléctrico' },
    { value: 'tecnico-mesa', label: 'Técnico de Mesa' },
    { value: 'finger-boy', label: 'Finger Boy' },
    { value: 'auxiliar', label: 'Auxiliar' },
    { value: 'otro', label: 'Otro' },
  ]
  const interestOptions = [
    { value: 'demo', label: 'Ver una demo' },
    { value: 'produccion', label: 'Gestionar producciones' },
    { value: 'equipo', label: 'Coordinar equipos de iluminación' },
    { value: 'presupuesto', label: 'Presupuestos y planificación' },
    { value: 'otro', label: 'Otro' },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (roleDropdownRef.current && !roleDropdownRef.current.contains(event.target as Node)) {
        setIsRoleOpen(false)
      }
      if (interestDropdownRef.current && !interestDropdownRef.current.contains(event.target as Node)) {
        setIsInterestOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsRoleOpen(false)
        setIsInterestOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

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
          email: formData.email,
          apellido: formData.apellido,
          rol: formData.rol,
          interes: formData.interes.join(', '),
          mensaje: formData.mensaje,
          _replyto: `contacto+${formData.nombre.toLowerCase()}.${formData.apellido.toLowerCase()}@setlux.com`, // Email ficticio para respuestas
        }),
      })

      if (response.ok) {
        setIsSubmitting(false)
        setSubmitStatus('success')
        setFormData({ nombre: '', email: '', apellido: '', rol: '', interes: [], mensaje: '' })
        
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

        {/* Email */}
        <div>
          <label htmlFor="email" className={`block text-sm font-semibold mb-2 transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 text-base"
            placeholder="Tu email"
          />
        </div>

        {/* Rol */}
        <div>
          <label htmlFor="rol" className={`block text-sm font-semibold mb-2 transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
            Rol *
          </label>
          <div className="relative" ref={roleDropdownRef}>
            <button
              type="button"
              id="rol"
              aria-haspopup="listbox"
              aria-expanded={isRoleOpen}
              onClick={() => setIsRoleOpen(prev => !prev)}
              className={`w-full px-3 md:px-4 py-3 md:py-3.5 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all duration-300 text-base min-h-[44px] text-left flex items-center justify-between gap-3 ${
                isDark
                  ? 'bg-gray-800 text-white border-gray-600 focus:border-orange-500 focus:ring-orange-500/20'
                  : 'bg-white text-slate-900 border-slate-200 shadow-sm focus:border-blue-400 focus:ring-blue-100'
              }`}
            >
              <span className={formData.rol ? '' : 'text-slate-400'}>
                {formData.rol
                  ? roles.find(role => role.value === formData.rol)?.label
                  : 'Selecciona tu rol'}
              </span>
              <span className={`transition-transform ${isRoleOpen ? 'rotate-180' : ''}`}>
                ▾
              </span>
            </button>

            {isRoleOpen && (
              <div
                role="listbox"
                aria-labelledby="rol"
                className={`absolute left-0 right-0 mt-2 rounded-xl border shadow-xl overflow-hidden z-20 ${
                  isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-slate-200'
                }`}
              >
                {roles.map(role => (
                  <button
                    key={role.value}
                    type="button"
                    role="option"
                    aria-selected={formData.rol === role.value}
                    onClick={() => {
                      setFormData({ ...formData, rol: role.value })
                      setIsRoleOpen(false)
                    }}
                    className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                      isDark
                        ? formData.rol === role.value
                          ? 'bg-gray-700 text-white'
                          : 'text-white hover:bg-[#F27405]'
                        : formData.rol === role.value
                          ? 'bg-blue-50 text-slate-900'
                          : 'text-slate-700 hover:bg-blue-100'
                    }`}
                  >
                    {role.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Interés */}
        <div>
          <label htmlFor="interes" className={`block text-sm font-semibold mb-2 transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
            ¿Para qué te interesaría SetLux? *
          </label>
          <div className="relative" ref={interestDropdownRef}>
            <button
              type="button"
              id="interes"
              aria-haspopup="listbox"
              aria-expanded={isInterestOpen}
              onClick={() => setIsInterestOpen(prev => !prev)}
              className={`w-full px-3 md:px-4 py-3 md:py-3.5 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all duration-300 text-base min-h-[44px] text-left flex items-center justify-between gap-3 ${
                isDark
                  ? 'bg-gray-800 text-white border-gray-600 focus:border-orange-500 focus:ring-orange-500/20'
                  : 'bg-white text-slate-900 border-slate-200 shadow-sm focus:border-blue-400 focus:ring-blue-100'
              }`}
            >
              <span className={formData.interes.length ? '' : 'text-slate-400'}>
                {formData.interes.length
                  ? interestOptions
                      .filter(option => formData.interes.includes(option.value))
                      .map(option => option.label)
                      .join(', ')
                  : 'Selecciona una o varias opciones'}
              </span>
              <span className={`transition-transform ${isInterestOpen ? 'rotate-180' : ''}`}>
                ▾
              </span>
            </button>

            {isInterestOpen && (
              <div
                role="listbox"
                aria-labelledby="interes"
                className={`absolute left-0 right-0 mt-2 rounded-xl border shadow-xl overflow-hidden z-20 ${
                  isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-slate-200'
                }`}
              >
                {interestOptions.map(option => {
                  const isSelected = formData.interes.includes(option.value)
                  return (
                    <button
                      key={option.value}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => {
                        setFormData(prev => ({
                          ...prev,
                          interes: isSelected
                            ? prev.interes.filter(value => value !== option.value)
                            : [...prev.interes, option.value],
                        }))
                      }}
                      className={`w-full px-4 py-2.5 text-left text-sm transition-colors flex items-center justify-between gap-3 ${
                        isDark
                          ? isSelected
                            ? 'bg-[#F27405] text-white'
                            : 'text-white hover:bg-[#F27405]'
                          : isSelected
                            ? 'bg-blue-50 text-slate-900'
                            : 'text-slate-700 hover:bg-blue-100'
                      }`}
                    >
                      <span>{option.label}</span>
                      <span className={isSelected ? 'opacity-100' : 'opacity-0'}>
                        ✓
                      </span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
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
            placeholder="Cuéntanos brevemente en qué tipo de producciones trabajas"
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
                Quiero probar SetLux
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

