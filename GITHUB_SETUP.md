# Configuración de GitHub - SetLux Landing Page

## Repositorio
https://github.com/rockalimbau-dotcom/landingpage-set-lux.git

## Pasos para subir el código

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
git commit -m "Initial commit: SetLux Landing Page con Vite"
```

### 4. Conectar con el repositorio remoto

```bash
git remote add origin https://github.com/rockalimbau-dotcom/landingpage-set-lux.git
```

### 5. Cambiar a rama main

```bash
git branch -M main
```

### 6. Subir el código

```bash
git push -u origin main
```

Si te pide autenticación, usa un Personal Access Token de GitHub en lugar de tu contraseña.

## Desplegar en Vercel

Una vez subido a GitHub:

1. Ve a https://vercel.com
2. Inicia sesión con GitHub
3. Haz clic en "Add New Project"
4. Importa `rockalimbau-dotcom/landingpage-set-lux`
5. Vercel detectará automáticamente Vite
6. Configuración:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Haz clic en "Deploy"

¡Listo! Tu landing page estará en línea.

