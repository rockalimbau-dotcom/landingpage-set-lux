# Instrucciones de Instalación - SetLux Landing Page

## Requisitos Previos
- Node.js v20 o superior (recomendado v20 LTS)
- npm v10 o superior

## Instalación Limpia

### 1. Detener todos los procesos
```bash
# Detener cualquier proceso en el puerto 5174
lsof -ti:5174 | xargs kill -9 2>/dev/null

# Detener procesos de Next.js si existen
pkill -f "next dev" 2>/dev/null
```

### 2. Limpiar completamente el proyecto
```bash
cd "/Users/raul/Desktop/MIS COSAS/02_Set_Lux/Landing_SetLux"

# Eliminar cachés y dependencias
rm -rf node_modules package-lock.json .next dist node_modules/.vite

# Limpiar caché de npm (opcional)
npm cache clean --force
```

### 3. Instalar dependencias
```bash
npm install
```

### 4. Iniciar el servidor de desarrollo
```bash
npm run dev
```

El servidor debería iniciar en: **http://localhost:5174**

## Solución de Problemas

### Si ves errores de Next.js en el navegador:

1. **Limpia el caché del navegador:**
   - Chrome/Edge: `Cmd+Shift+Delete` (Mac) o `Ctrl+Shift+Delete` (Windows)
   - Selecciona "Cached images and files"
   - O simplemente presiona `Cmd+Shift+R` (Mac) / `Ctrl+Shift+R` (Windows) para recargar sin caché

2. **Abre en ventana de incógnito:**
   - `Cmd+Shift+N` (Chrome Mac) / `Ctrl+Shift+N` (Chrome Windows)
   - Navega a `http://localhost:5174`

3. **Desregistra Service Workers (si existen):**
   - Abre DevTools (F12)
   - Ve a Application > Service Workers
   - Haz clic en "Unregister" si hay alguno registrado

### Si el servidor no inicia:

1. Verifica que el puerto 5174 esté libre:
```bash
lsof -i :5174
```

2. Si está ocupado, mata el proceso:
```bash
lsof -ti:5174 | xargs kill -9
```

3. Verifica la versión de Node.js:
```bash
node --version
```

### Si hay errores de módulos:

1. Reinstala las dependencias:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Estructura del Proyecto

```
Landing_SetLux/
├── src/
│   ├── components/     # Componentes React
│   ├── contexts/       # Contextos (ThemeContext)
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── public/
│   └── logos/          # Logos de la aplicación
├── index.html          # HTML principal
├── vite.config.ts      # Configuración de Vite
├── tailwind.config.ts  # Configuración de Tailwind
└── package.json        # Dependencias del proyecto
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo (puerto 5174)
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## Notas

- Este proyecto usa **Vite** como bundler (NO Next.js)
- El puerto por defecto es **5174**
- Los estilos usan **Tailwind CSS**
- El tema (claro/oscuro) se guarda en `localStorage`
