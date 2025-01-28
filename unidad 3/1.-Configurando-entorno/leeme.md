# `index.html` debe estar fuera del directorio `html`

## 1. **Convención estándar**
Por convención, **`index.html`** es considerado el archivo principal o "página de inicio" de un sitio web. Los servidores web (como Apache, Nginx o incluso servidores locales como Python HTTP Server) están configurados para buscar automáticamente un archivo llamado `index.html` o `index.htm` cuando un usuario accede a un directorio raíz o cualquier subdirectorio.

- Si el archivo `index.html` está en el **directorio raíz** del proyecto (fuera de carpetas como `html/`), no necesitas especificar la ruta completa. Por ejemplo:
  ```
  https://mi-sitio.com/
  ```
  Se traduce automáticamente a:
  ```
  https://mi-sitio.com/index.html
  ```

Si `index.html` estuviera dentro de un subdirectorio como `html/`, necesitarías indicarlo explícitamente en la URL:
```
https://mi-sitio.com/html/index.html
```

## 2. **Facilidad de acceso**
Cuando colocas `index.html` fuera del directorio `html/` y en la raíz, simplificas el acceso. Esto es especialmente útil para la **experiencia del usuario** y **SEO** porque:
- URLs más cortas son más fáciles de recordar.
- Mejora la presentación visual de tu URL.

Por ejemplo:
- ✅ `https://mi-sitio.com/` es más claro y limpio que `https://mi-sitio.com/html/index.html`.

## 3. **Compatibilidad con configuraciones predeterminadas del servidor**
Los servidores web están configurados para buscar un `index.html` en cada directorio como el archivo predeterminado que se debe servir. Si `index.html` está en un subdirectorio, necesitarías configurar explícitamente el servidor para redirigir o cambiar la raíz del documento (lo que no siempre es ideal).

## 4. **Organización del proyecto**
- Dejar `index.html` en la raíz permite organizar mejor los recursos adicionales (imágenes, scripts y estilos) en subdirectorios como `css/`, `js/` o `assets/`.
- Si pones `index.html` en `html/`, puede volverse confuso al estructurar otros archivos y se rompe con la convención estándar.

 **Resumen:** mantener `index.html` en la raíz del proyecto es una **mejor práctica** que simplifica la gestión del sitio y lo hace más accesible para los usuarios y compatible con configuraciones comunes del servidor.
