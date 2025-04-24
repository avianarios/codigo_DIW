# Índice

1. [Colocación de `index.html`](#1--colocación-de-indexhtml)
2. [Nombrado de ficheros](#2--nombrado-de-ficheros)
3. Estructura de directorios

---

# 1- Colocación de `index.html`
 
Debe estar fuera del directorio `html`

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

----

# 2- Nombrado de ficheros

Un nombre descriptivo para los ficheros de un proyecto web es crucial para mantener el proyecto organizado, fácil de entender y mantenible. A continuación se presentan algunas recomendaciones para nombrar los ficheros en un proyecto web:

1. **Usar nombres claros y específicos** que reflejen claramente el propósito del archivo. Algunos ejemplos son:
  - `header.js` o `footer.js` para scripts relacionados con esas secciones.
  - `main.css` o `styles.css` para el archivo principal de estilos.
  - `index.html` para la página principal o de inicio.
  - `contact.html` para una página de contacto.

2. **Evitar abreviaciones confusas**. Es preferible usar palabras completas que describan de manera precisa la función del archivo. Algunos ejemplos:
  - Usa `about-us.html` en lugar de `abt-us.html`.
  - Usa `user-profile.js` en lugar de `usr-prfl.js`.

3. **Usar guiones para separar palabras** en lugar de guiones bajos (`_`) o mayúsculas, ya que los guiones son más legibles. Ejemplo:
  - `user-profile.css` en lugar de `user_profile.css` o `UserProfile.css`.

4. **Incluir el tipo de archivo en el nombre**. Es importante que el nombre del archivo refleje su tipo, especialmente en proyectos grandes:
  - `app.js` para el archivo principal de JavaScript.
  - `styles.css` para los estilos.
  - `config.json` para archivos de configuración.

5. **Mantener un formato consistente** para todos los nombres de los archivos para facilitar la lectura y el trabajo en equipo. Algunas opciones son:
  - Ejemplo con camelCase: `userSettings.js`, `footerSection.js`.
  - Ejemplo con guiones: `user-settings.js`, `footer-section.js`.

6. **Incluir versiones si es necesario**. Ejemplo: `styles-v1.0.css`, `main-v2.3.js`.

7. **Evitar caracteres especiales**. Evita el uso de caracteres especiales (como `&`, `#`, `%`, etc.) en los nombres de los archivos. Estos pueden ser problemáticos en URLs y podrían causar errores en algunos sistemas operativos. Usa letras, números y guiones para mantener la compatibilidad.

8. **Evitar espacios** ya que pueden causar problemas en diferentes contextos. Ejemplos:
  - URLs y enlaces: Los espacios en los nombres de archivos deben codificarse como %20 en las URLs, lo que puede hacer que los enlaces sean más difíciles de leer y propensos a errores. Por ejemplo: ./1.-%20Adding%20JS%20to%20a%20webpage/readme.md
  - Scripts y terminales: En scripts de línea de comandos (como Bash), los espacios pueden romper los comandos si no se manejan adecuadamente con comillas o escapes. El siguiente comando fallará sin las comillas
    ```bash
      cp "1. Adding JS to a webpage/readme.md" destination/
    ```
  - Compatibilidad entre sistemas: Algunos sistemas o herramientas antiguas (o mal diseñadas) pueden no manejar correctamente nombres de ficheros con espacios.
  - Mantenimiento y organización: Los espacios hacen que los nombres de archivos sean más complicados de escribir o manipular en código. En comparación, nombres separados por guiones (-) o guiones bajos (_) son más fáciles de manejar.

Por tanto, se recomienda
  - Sustituir espacios por guiones o guiones bajos: En lugar de: `1. Adding JS to a webpage/readme.md` usa `1-adding-js-to-a-webpage/readme.md`
  - Mantén nombres en minúsculas: Para mayor consistencia y evitar problemas con sistemas sensibles a mayúsculas/minúsculas
  - Evitar caracteres especiales como &, #, o . (excepto para la extensión del archivo) en los nombres de los archivos.