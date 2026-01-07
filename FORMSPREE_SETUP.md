# Configuración de Formspree para el Formulario de Contacto

Para que el formulario de contacto envíe emails directamente a `setluxapp@gmail.com`, necesitas configurar Formspree:

## Pasos:

1. **Crear cuenta en Formspree:**
   - Ve a https://formspree.io/
   - Crea una cuenta gratuita (permite hasta 50 envíos/mes gratis)

2. **Crear un nuevo formulario:**
   - En el dashboard, haz clic en "New Form"
   - Configura el email de destino: `setluxapp@gmail.com`
   - Copia el **Form ID** que te proporcionan (algo como `xrgkqjpn`)

3. **Actualizar el código:**
   - Abre `src/components/ContactForm.tsx`
   - Busca la línea: `const formId = 'YOUR_FORM_ID'`
   - Reemplaza `'YOUR_FORM_ID'` con tu Form ID real de Formspree

4. **Configurar el template (opcional):**
   - En Formspree, puedes personalizar el template del email
   - Los campos que se envían son:
     - `nombre`
     - `apellido`
     - `rol`
     - `mensaje`
     - `_subject` (asunto del email)

## Alternativa sin Formspree:

Si prefieres no usar Formspree, puedes:
- Crear un endpoint backend propio (Node.js, Python, etc.)
- Usar EmailJS (requiere configuración adicional)
- Usar otro servicio de email como SendGrid, Mailgun, etc.

