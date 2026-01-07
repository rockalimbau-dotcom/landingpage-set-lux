# Guía de Despliegue - SetLux Landing Page

## Subir a GitHub

### 1. Inicializar Git (si no está inicializado)

```bash
cd "/Users/raul/Desktop/MIS COSAS/02_Set_Lux/Landing_SetLux"
git init
```

### 2. Añadir todos los archivos

```bash
git add .
```

### 3. Hacer el primer commit

```bash
git commit -m "Initial commit: SetLux Landing Page"
```

### 4. Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Crea un nuevo repositorio (por ejemplo: `landing-setlux`)
3. **NO** inicialices con README, .gitignore o licencia (ya los tenemos)

### 5. Conectar y subir

```bash
# Reemplaza TU_USUARIO y TU_REPOSITORIO con tus datos
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git branch -M main
git push -u origin main
```

## Desplegar en Vercel

### Opción 1: Desde la Web de Vercel (Recomendado)

1. Ve a https://vercel.com
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en "Add New Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente que es un proyecto Vite
6. Configuración automática:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
7. Haz clic en "Deploy"

### Opción 2: Desde la Terminal (CLI)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desde el directorio del proyecto
cd "/Users/raul/Desktop/MIS COSAS/02_Set_Lux/Landing_SetLux"
vercel

# Sigue las instrucciones:
# - ¿Set up and deploy? Y
# - ¿Which scope? (selecciona tu cuenta)
# - ¿Link to existing project? N
# - ¿What's your project's name? landing-setlux
# - ¿In which directory is your code located? ./
# - Override settings? N
```

### Configuración de Vercel

El archivo `vercel.json` ya está configurado con:
- Build command: `npm run build`
- Output directory: `dist`
- Rewrites para SPA (Single Page Application)

## Variables de Entorno (si las necesitas)

Si en el futuro necesitas variables de entorno (por ejemplo, para Formspree):

1. En Vercel Dashboard → Tu Proyecto → Settings → Environment Variables
2. Añade las variables necesarias
3. Vuelve a desplegar

## Actualizaciones Futuras

Para actualizar el sitio después de hacer cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

Vercel desplegará automáticamente los cambios cuando hagas push a la rama `main`.

## URLs

- **Producción**: Se generará automáticamente (ej: `landing-setlux.vercel.app`)
- **Preview**: Cada push a otras ramas crea un preview automático
- **Dominio personalizado**: Puedes añadirlo en Vercel Dashboard → Settings → Domains

