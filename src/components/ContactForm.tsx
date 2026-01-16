

import { useState, useRef, useEffect } from 'react'
import { Send, AlertCircle } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useTranslation } from 'react-i18next'

const ContactForm = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    apellido: '',
    rol: '',
    interes: [] as string[],
    mensaje: '',
    company: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formError, setFormError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [consentAccepted, setConsentAccepted] = useState(false)
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const [isRoleOpen, setIsRoleOpen] = useState(false)
  const [isInterestOpen, setIsInterestOpen] = useState(false)
  const roleDropdownRef = useRef<HTMLDivElement>(null)
  const interestDropdownRef = useRef<HTMLDivElement>(null)
  const roles = t('contactForm.roles', { returnObjects: true }) as { value: string; label: string }[]
  const interestOptions = t('contactForm.interests', { returnObjects: true }) as { value: string; label: string }[]

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

  const validateForm = () => {
    const errors: Record<string, string> = {}
    const nombre = formData.nombre.trim()
    const email = formData.email.trim()
    const apellido = formData.apellido.trim()
    const rol = formData.rol.trim()

    if (formData.company.trim()) {
      return { errors, formError: t('contactForm.validation.honeypot') }
    }

    if (!nombre) {
      errors.nombre = t('contactForm.validation.nameRequired')
    }

    if (!apellido) {
      errors.apellido = t('contactForm.validation.lastNameRequired')
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = t('contactForm.validation.emailInvalid')
    }

    if (!rol) {
      errors.rol = t('contactForm.validation.roleRequired')
    }

    if (formData.interes.length === 0) {
      errors.interes = t('contactForm.validation.interestRequired')
    }

    if (!consentAccepted) {
      errors.privacy = t('contactForm.validation.privacyRequired')
    }

    return { errors, formError: null }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)
    const { errors, formError: validationFormError } = validateForm()
    setFieldErrors(errors)
    if (validationFormError || Object.keys(errors).length > 0) {
      setSubmitStatus('error')
      setFormError(validationFormError)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Usar Formspree para enviar el email directamente
      const formId = 'mojvgnrp'
      const controller = new AbortController()
      const timeoutId = window.setTimeout(() => controller.abort(), 15000)
      const data = new FormData()
      data.append('_subject', t('contactForm.subject', { role: formData.rol }))
      data.append('nombre', formData.nombre.trim())
      data.append('email', formData.email.trim())
      data.append('apellido', formData.apellido.trim())
      data.append('rol', formData.rol)
      data.append('interes', formData.interes.join(', '))
      data.append('mensaje', formData.mensaje.trim())
      data.append('_replyto', formData.email.trim())
      data.append('company', formData.company)

      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: data,
        signal: controller.signal,
      })
      window.clearTimeout(timeoutId)

      if (response.ok) {
        setIsSubmitting(false)
        setSubmitStatus('success')
        setFormData({ nombre: '', email: '', apellido: '', rol: '', interes: [], mensaje: '', company: '' })
        setConsentAccepted(false)
        setFieldErrors({})
        
        // Resetear el estado después de 3 segundos
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 3000)
      } else {
        let message = 'No se pudo enviar. Revisa tu conexión e inténtalo de nuevo.'
        try {
          const payload = await response.json()
          if (payload?.errors?.[0]?.message) {
            message = payload.errors[0].message
          }
        } catch {
          // Ignorar errores de parseo
        }
        throw new Error(message)
      }
    } catch (error) {
      console.error('Error al enviar el email:', error)
      setIsSubmitting(false)
      setSubmitStatus('error')
      if (error instanceof Error) {
        if (error.name === 'AbortError' || error.message === 'Failed to fetch') {
          setFormError(t('contactForm.errorDefault'))
        } else {
          setFormError(error.message)
        }
      } else {
        setFormError(t('contactForm.errorDefault'))
      }
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" noValidate>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ display: 'none' }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Nombre */}
          <div>
              <label htmlFor="nombre" className={`block text-sm font-semibold mb-2 transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
                {t('contactForm.labels.nombre')}
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              value={formData.nombre}
              onChange={handleChange}
              aria-invalid={Boolean(fieldErrors.nombre)}
              className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 text-base"
              placeholder={t('contactForm.placeholders.nombre')}
            />
            {fieldErrors.nombre && (
              <div className="mt-2 flex items-center gap-2 text-xs md:text-sm" style={{ color: isDark ? '#F27405' : '#0476D9' }}>
                <AlertCircle className="w-4 h-4" />
                {fieldErrors.nombre}
              </div>
            )}
          </div>

          {/* Apellido */}
          <div>
            <label htmlFor="apellido" className={`block text-sm font-semibold mb-2 transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
              {t('contactForm.labels.apellido')}
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              required
              value={formData.apellido}
              onChange={handleChange}
              aria-invalid={Boolean(fieldErrors.apellido)}
              className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 text-base"
              placeholder={t('contactForm.placeholders.apellido')}
            />
            {fieldErrors.apellido && (
              <div className="mt-2 flex items-center gap-2 text-xs md:text-sm" style={{ color: isDark ? '#F27405' : '#0476D9' }}>
                <AlertCircle className="w-4 h-4" />
                {fieldErrors.apellido}
              </div>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={`block text-sm font-semibold mb-2 transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
            {t('contactForm.labels.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(fieldErrors.email)}
            className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 text-base"
            placeholder={t('contactForm.placeholders.email')}
          />
          {fieldErrors.email && (
            <div className="mt-2 flex items-center gap-2 text-xs md:text-sm" style={{ color: isDark ? '#F27405' : '#0476D9' }}>
              <AlertCircle className="w-4 h-4" />
              {fieldErrors.email}
            </div>
          )}
        </div>

        {/* Rol */}
        <div>
          <label htmlFor="rol" className={`block text-sm font-semibold mb-2 transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
            {t('contactForm.labels.rol')}
          </label>
          <div className="relative" ref={roleDropdownRef}>
            <button
              type="button"
              id="rol"
              aria-haspopup="listbox"
              aria-expanded={isRoleOpen}
              onClick={() => setIsRoleOpen(prev => !prev)}
              aria-invalid={Boolean(fieldErrors.rol)}
              className={`w-full px-3 md:px-4 py-3 md:py-3.5 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all duration-300 text-base min-h-[44px] text-left flex items-center justify-between gap-3 ${
                isDark
                  ? 'bg-white text-black border-gray-300 focus:border-orange-500 focus:ring-orange-500/20'
                  : 'bg-white text-slate-900 border-slate-200 shadow-sm focus:border-blue-400 focus:ring-blue-100'
              }`}
            >
              <span className={formData.rol ? '' : 'text-slate-400'}>
                {formData.rol
                  ? roles.find(role => role.value === formData.rol)?.label
                  : t('contactForm.placeholders.rol')}
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
                  isDark ? 'bg-white border-gray-200' : 'bg-white border-slate-200'
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
                          : 'text-black hover:bg-orange-100'
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
          {fieldErrors.rol && (
            <div className="mt-2 flex items-center gap-2 text-xs md:text-sm" style={{ color: isDark ? '#F27405' : '#0476D9' }}>
              <AlertCircle className="w-4 h-4" />
              {fieldErrors.rol}
            </div>
          )}
        </div>

        {/* Interés */}
        <div>
          <label htmlFor="interes" className={`block text-sm font-semibold mb-2 transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
            {t('contactForm.labels.interes')}
          </label>
          <div className="relative" ref={interestDropdownRef}>
            <button
              type="button"
              id="interes"
              aria-haspopup="listbox"
              aria-expanded={isInterestOpen}
              onClick={() => setIsInterestOpen(prev => !prev)}
              aria-invalid={Boolean(fieldErrors.interes)}
              className={`w-full px-3 md:px-4 py-3 md:py-3.5 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all duration-300 text-base min-h-[44px] text-left flex items-center justify-between gap-3 ${
                isDark
                  ? 'bg-white text-black border-gray-300 focus:border-orange-500 focus:ring-orange-500/20'
                  : 'bg-white text-slate-900 border-slate-200 shadow-sm focus:border-blue-400 focus:ring-blue-100'
              }`}
            >
              <span className={formData.interes.length ? '' : 'text-slate-400'}>
                {formData.interes.length
                  ? interestOptions
                      .filter(option => formData.interes.includes(option.value))
                      .map(option => option.label)
                      .join(', ')
                  : t('contactForm.placeholders.interes')}
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
                  isDark ? 'bg-white border-gray-200' : 'bg-white border-slate-200'
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
                            : 'text-black hover:bg-orange-100'
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
          {fieldErrors.interes && (
            <div className="mt-2 flex items-center gap-2 text-xs md:text-sm" style={{ color: isDark ? '#F27405' : '#0476D9' }}>
              <AlertCircle className="w-4 h-4" />
              {fieldErrors.interes}
            </div>
          )}
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="mensaje" className={`block text-sm font-semibold mb-2 transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
            {t('contactForm.labels.mensaje')}
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 resize-none text-base"
            placeholder={t('contactForm.placeholders.mensaje')}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <div className="flex items-start gap-3 mb-2">
            <input
              id="privacy"
              type="checkbox"
              checked={consentAccepted}
              onChange={(e) => setConsentAccepted(e.target.checked)}
              className="mt-1 h-4 w-4"
            />
            <label htmlFor="privacy" className={`text-xs md:text-sm ${isDark ? 'text-white' : 'text-black'}`}>
              {t('contactForm.privacy.labelPrefix')}{' '}
              <button
                type="button"
                onClick={() => setIsPrivacyOpen(true)}
                className="underline hover:opacity-80"
              >
                {t('contactForm.privacy.link')}
              </button>
              {t('contactForm.privacy.labelSuffix')}
            </label>
          </div>
          {fieldErrors.privacy && (
            <div className="mb-4 flex items-center gap-2 text-xs md:text-sm" style={{ color: isDark ? '#F27405' : '#0476D9' }}>
              <AlertCircle className="w-4 h-4" />
              {fieldErrors.privacy}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
            style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                {t('contactForm.submitting')}
              </>
            ) : (
              <>
                {t('contactForm.submit')}
                <Send className="w-4 h-4 md:w-5 md:h-5" />
              </>
            )}
          </button>
        </div>

        {/* Status Messages */}
        <div aria-live="polite" role="status">
          {submitStatus === 'success' && (
            <div className="p-4 rounded-xl bg-green-50 border-2 border-green-200 text-green-700 text-center">
              {t('contactForm.success')}
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-4 rounded-xl bg-red-50 border-2 border-red-200 text-red-700 text-center">
              {formError ?? t('contactForm.errorDefault')}
            </div>
          )}
        </div>
      </form>

      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50">
          <div className={`w-full max-w-2xl rounded-2xl p-6 md:p-8 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-lg md:text-xl font-bold">{t('contactForm.privacyModal.title')}</h3>
              <button
                type="button"
                onClick={() => setIsPrivacyOpen(false)}
                className="text-sm underline hover:opacity-80"
              >
                {t('contactForm.privacyModal.close')}
              </button>
            </div>
            <div className="space-y-3 text-sm md:text-base">
              <p>{t('contactForm.privacyModal.responsible')}</p>
              <p>{t('contactForm.privacyModal.purpose')}</p>
              <p>{t('contactForm.privacyModal.data')}</p>
              <p>{t('contactForm.privacyModal.legal')}</p>
              <p>{t('contactForm.privacyModal.retention')}</p>
              <p>{t('contactForm.privacyModal.recipients')}</p>
              <p>{t('contactForm.privacyModal.rights')}</p>
              <p>{t('contactForm.privacyModal.security')}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactForm

