# Deportes Streaming (Cloudflare Pages)

Este es un proyecto de streaming de deportes optimizado para ser desplegado en Cloudflare Pages.

## 🚀 Instrucciones para Desplegar en Cloudflare Pages

### **1. Subir el Repositorio a GitHub**
```sh
git init
git add .
git commit -m "Versión para Cloudflare Pages"
git branch -M main
git remote add origin https://github.com/tuusuario/deportes-streaming.git
git push -u origin main
```
(Reemplaza `tuusuario` por tu usuario real de GitHub).

### **2. Configurar Cloudflare Pages**
- Accede a [Cloudflare Pages](https://pages.cloudflare.com/).
- Conéctalo con el repositorio de GitHub.
- Configura los ajustes:
  - **Framework:** Vite
  - **Comando de Build:** `npm run build`
  - **Directorio de salida:** `dist`
- Inicia el despliegue.

### **3. Ver la Web en Vivo**
Cloudflare generará un enlace para tu página en vivo. 🚀
