'use client'

import { Mail, Github, Linkedin } from 'lucide-react'
import Logo from './Logo'
import ContactForm from './ContactForm'

const Footer = () => {
  return (
    <>
      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-16 relative overflow-hidden"
        style={{
          backgroundColor: '#1e293b',
        }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
            style={{
              backgroundColor: '#F27405',
              opacity: 0.1,
            }}
          ></div>
          <div 
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
            style={{
              backgroundColor: '#0476D9',
              opacity: 0.1,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-6">
                <div 
                  className="rounded-xl p-3 mr-3 shadow-lg"
                  style={{ backgroundColor: '#0476D9' }}
                >
                  <Logo size="sm" className="!p-0 !bg-transparent !shadow-none" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-white block">SetLux</span>
                  <span 
                    className="text-sm font-semibold"
                    style={{ color: '#F27405' }}
                  >
                    ALL IN ONE
                  </span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                La solución completa para la gestión del departamento de iluminación 
                en producciones audiovisuales.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Enlaces</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#features" 
                    className="hover:opacity-80 transition-opacity flex items-center group text-gray-300"
                    style={{ color: '#F27405' }}
                  >
                    <span className="w-2 h-2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: '#F27405' }}></span>
                    Características
                  </a>
                </li>
                <li>
                  <a 
                    href="#benefits" 
                    className="hover:opacity-80 transition-opacity flex items-center group text-gray-300"
                    style={{ color: '#F27405' }}
                  >
                    <span className="w-2 h-2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: '#F27405' }}></span>
                    Ventajas
                  </a>
                </li>
                <li>
                  <a 
                    href="#use-cases" 
                    className="hover:opacity-80 transition-opacity flex items-center group text-gray-300"
                    style={{ color: '#F27405' }}
                  >
                    <span className="w-2 h-2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: '#F27405' }}></span>
                    Casos de Uso
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" style={{ color: '#F27405' }} />
                  <a 
                    href="mailto:contacto@setlux.com" 
                    className="hover:opacity-80 transition-opacity text-gray-300"
                    style={{ color: '#F27405' }}
                  >
                    contacto@setlux.com
                  </a>
                </li>
                <li className="flex items-center mt-6">
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="hover:opacity-80 transition-opacity p-2 hover:bg-white/10 rounded-lg" 
                      aria-label="GitHub"
                      style={{ color: '#F27405' }}
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a 
                      href="#" 
                      className="hover:opacity-80 transition-opacity p-2 hover:bg-white/10 rounded-lg" 
                      aria-label="LinkedIn"
                      style={{ color: '#F27405' }}
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 mb-2">
              © {new Date().getFullYear()} SetLux. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-500">
              Diseñado específicamente para profesionales del departamento de iluminación.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
