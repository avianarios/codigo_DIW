# Proyecto de web con empaquetador (Parcel) e iconos en Node.js

Parcel es un empaquetador (bundler) de aplicaciones web que facilita la construcción y optimización de proyectos front-end. Se destaca por ser fácil de usar y ofrecer una configuración mínima, lo que lo convierte en una excelente opción para proyectos pequeños y medianos. Características principales:
   - Compilación automática: Parcel detecta los tipos de archivos que estás utilizando (Sass, TypeScript, imágenes, etc.) y los compila sin necesidad de configuración adicional.
   - Hot Module Replacement (HMR): Permite la recarga en caliente de módulos durante el desarrollo, lo que facilita la prueba de cambios sin recargar toda la página.
   - Soporte para múltiples lenguajes y tecnologías: Parcel soporta de manera nativa tecnologías como Sass, TypeScript, JSX, HTML, CSS, y más.
   - cero-configuración. Funciona sin configurar nada, aunque puedes personalizarla si es necesario.
   - Optimización automática para producción

 Algunas alternativas son:
   - Webpack, un empaquetador de módulos altamente configurable y potente. Aunque requiere más configuración que Parcel, ofrece una gran flexibilidad y un ecosistema robusto de extensiones (plugins) y cargadores (loaders).
   - Vite es un empaquetador moderno de próxima generación. Se enfoca en tiempos de construcción rápidos y utiliza la compilación en el navegador durante el desarrollo, lo que mejora la velocidad de recarga.
   - Rollup es otro empaquetador muy eficiente que se especializa en la creación de bibliotecas y paquetes JavaScript. Ofrece un enfoque más centrado en el rendimiento y es ideal para proyectos que generan librerías reutilizables.

Los pasos para echar a andar este proyecto con Node.js son los siguientes:

1. **Instalar Node.js** en el equipo

2. **Iniciar el proyecto desde su directorio con `npm init`**.  
   Responde a las preguntas para generar el archivo `package.json`, que es el fichero de configuración de Node.js.
   No uses mayúsculas, espacios ni caracteres especiales en el campo "name"

3. **Instalar paquetes y sus dependencias** 
   -`npm install --save-dev <nombre_paquete>` para instalar paquetes en el proyecto actual que solo se necesitan para desarrollo
   -`npm install <nombre_paquete>` para instalar paquetes en el proyecto actual que se necesitan para producción
   -`npm install -g <nombre_paquete>` para instalar paquetes de forma global, no sólo para el proyecto actual
   
   Paquetes necesarios para este proyecto:
   - Para desarrollo
      - rimraf -> permite eliminar directorios de forma recursiva
      - npm-run-all -> permite ejecutar más de un script
         - En paralelo, si no tocamos nada es el valor por defecto, o con el atajo run-p
         - En serie, con npm-run-all --serial o con el atajo run-s
      - Parcel -> empaquetador de mínima configuración que traduce, prefija, minimiza y empaqueta
   - Para producción: @fortawesome/fontawesome-free` -> paquete de iconos

4. **Abrir el archivo `package.json`** y crear los scripts necesarios para automatizar tareas.
   Si no se crean los scripts, deberás ejecutar manualmente:
   ```bash
   npx parcel ruta/index.html --dist-dir desarrollo
   ```

5. **Integrar los iconos de Fontawesome en tu proyecto`** Se puede hacer de varias formas (nosotros lo vamos a hacer con node)
   -Incluyendo el CDN en la cabecera: <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" rel="stylesheet"> Dependo de que el CDN esté disponible
   -Instalándolo en node e integrándolo en local (lo haremos así)
      - `npm install @fortawesome/fontawesome-free`
      - Copia node_modules/@fortawesome/fontawesome-free/webfonts a tu directorio de css
      - Copia node_modules/@fortawesome/fontawesome-free/css/all.min.css a tu directorio de css
      - Enlaza all.min.css en tu html
      - Para incluir un en tu web, hay que copiar su etiqueta en tu código HTML. Para ver qué etiqueta corresponde a cada icono, búscalo en https://fontawesome.com/icons. El de instagram, por ejemplo, es <i class="fa-brands fa-instagram"></i>. Se puede controlar su tamaño usando las clases fa-xs, fa-sm, fa-lg, fa-2x, fa-3x, fa-4x y fa5x


