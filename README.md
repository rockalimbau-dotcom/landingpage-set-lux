# SetLux Landing Page

Landing page para SetLux - All in One, la solución completa para la gestión del departamento de iluminación en producciones audiovisuales.

## Tecnologías

- **Vite** - Build tool y dev server
- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Lucide React** - Iconos

## Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

3. Abre [http://localhost:5175](http://localhost:5175) en tu navegador.

## Scripts

- `npm run dev` - Inicia el servidor de desarrollo en el puerto 5175
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## Estructura del Proyecto

```
├── src/
│   ├── components/     # Componentes React
│   ├── contexts/       # Contextos de React (ThemeContext)
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── public/
│   └── logos/          # Logos de la marca
├── index.html          # HTML principal
└── vite.config.ts      # Configuración de Vite
```

## Características

- ✨ Introducción cinematográfica con animaciones de luces
- 🎨 Soporte para modo claro y oscuro
- 📱 Diseño responsive
- ⚡ Optimizado con Vite
- 📧 Formulario de contacto integrado con Formspree

## Despliegue

Ver `DEPLOY.md` para instrucciones detalladas de despliegue en GitHub y Vercel.
