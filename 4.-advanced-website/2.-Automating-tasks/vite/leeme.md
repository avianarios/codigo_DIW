# Proyecto de web con empaquetador (vite) e iconos en Node.js

Vite es un empaquetador moderno y extremadamente rápido para aplicaciones web, diseñado para mejorar la experiencia de desarrollo y construcción de proyectos front-end. A diferencia de herramientas más tradicionales, Vite aprovecha las capacidades nativas de los módulos ES (ESM) en los navegadores modernos, lo que lo convierte en una opción ideal para proyectos de cualquier tamaño, desde pequeños prototipos hasta aplicaciones complejas. Características principales:
   - **Desarrollo ultrarrápido**:
      - Vite utiliza módulos ES nativos en desarrollo, lo que permite cargar solo los archivos necesarios en lugar de reconstruir todo el proyecto en cada cambio. Esto resulta en tiempos de recarga casi instantáneos, incluso en proyectos grandes.
      - El servidor de desarrollo de Vite es extremadamente rápido, gracias a su arquitectura basada en ESM y su uso de ESBuild para la compilación de dependencias.
   - **Compilación automática**:
      - Vite detecta automáticamente los tipos de archivos del proyecto (Sass, TypeScript, JSX, etc.) y los compila sin necesidad de configuración adicional.
      - Soporta una amplia gama de tecnologías modernas, como Vue, React, Svelte, TypeScript, y más, gracias a su sistema de plugins.
   - **Autoprefijado automático del código CSS**:
      - Vite incluye soporte para autoprefijar CSS, lo que garantiza que las propiedades de CSS sean compatibles con diferentes navegadores. Esto se logra mediante PostCSS, que agrega automáticamente los prefijos necesarios según las reglas definidas en la configuración de browserslist.
      - La configuración de browserslist se puede definir en un archivo .browserslistrc o en el package.json, permitiendo especificar qué navegadores deben ser compatibles. Puedes consultar browsersl.ist para definir estas reglas.
   - **Reemplazo de módulos en caliente** (HMR): Vite ofrece un sistema de Hot Module Replacement (HMR) extremadamente rápido, que permite recargar solo los módulos modificados sin recargar toda la página. Esto mejora significativamente la productividad durante el desarrollo.
   - **Soporte para múltiples lenguajes y tecnologías**:
      - Vite soporta de manera nativa tecnologías como Sass, TypeScript, JSX, Vue, React, HTML, CSS, y más.
      - Además, su sistema de plugins permite extender su funcionalidad para adaptarse a casi cualquier necesidad.
   - **Configuración mínima, pero personalizable**: Vite funciona con una configuración mínima por defecto, lo que lo hace fácil de usar para proyectos pequeños. Sin embargo, también ofrece un alto grado de personalización a través de su archivo de configuración (vite.config.js) y su ecosistema de plugins.
   - **Optimización automática para producción**:
      - Al construir para producción (vite build), Vite optimiza automáticamente el código, incluyendo la minificación, la división de código (code splitting) y la compresión de recursos estáticos.
      - Vite utiliza Rollup para la construcción de producción, lo que garantiza un código optimizado y listo para implementar.
   - **Previsualización de producción**: Vite incluye un comando (vite preview) que permite previsualizar la versión de producción localmente, lo que facilita la verificación de los resultados antes de desplegar el proyecto.

 Algunas alternativas son:
   - Webpack, un empaquetador de módulos altamente configurable y potente. Aunque requiere más configuración que Parcel, ofrece una gran flexibilidad y un ecosistema robusto de extensiones (plugins) y cargadores (loaders).
   - Parcel es un empaquetador sin configuración. Funciona haciendo los procesos típicos sin configurar nada.
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
      - vite -> empaquetador que traduce, prefija, minimiza y empaqueta
   - Para producción: @fortawesome/fontawesome-free` -> paquete de iconos

4. Crear el fichero de configuración de vite, `vite.config.js` como, por ejemplo, el siguiente:
   ```js
   import { defineConfig } from 'vite';
   import { resolve } from 'path';
   import { createHtmlPlugin } from 'vite-plugin-html';

   export default defineConfig({
      appType: 'mpa', // Indica que es un proyecto multipágina
      base: './',
      root: resolve(__dirname, 'fuente'), // Especifica que "fuente" es la raíz
      build: {
         outDir: '../produccion',
         emptyOutDir: true,    //Vacía el directorio de producción antes de compilar
         rollupOptions: {
            input: {
            main: resolve(__dirname, 'fuente/index.html'),
            about: resolve(__dirname, 'fuente/html/servicios.html'),
            },
         },
         minify: 'terser', // Asegura que JS y CSS también se minimicen
      },
      plugins: [
         createHtmlPlugin({
            minify: true, // Minimiza el HTML
         }),
      ],
      server: {
         open: true,
      },
      preview: {
         open: true, // Abre automáticamente la previsualización
         port: 4173, // Puerto para el servidor de previsualización
      },
   });
   ```

   Este archivo de configuración hace lo siguiente:
      - Define un proyecto multipágina (MPA) con dos entradas: index.html y servicios.html.
      - Especifica que la carpeta `fuente` es la raíz del proyecto.
      - Configura la construcción para:
         - Guardar los archivos en el directorio `produccion`.
         - Vaciar el directorio de salida antes de cada construcción.
         - Minimizar el código HTML, JavaScript y CSS.
      - Usa un plugin para minimizar el HTML.
      - Configura el servidor de desarrollo para abrir automáticamente el navegador.
      - Configura la previsualización de producción para usar el puerto 4173 y abrir automáticamente el navegador.

5. **Abrir el archivo `package.json`** y crear los scripts necesarios para automatizar tareas.
   Si no se crean los scripts, deberás ejecutar manualmente:
   ```bash
   npx vite
   ```

6. **Integrar los iconos de Fontawesome en tu proyecto`** Se puede hacer de varias formas (nosotros lo vamos a hacer con la tercera opción)
   1. Incluyendo el CDN en la cabecera: <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" rel="stylesheet"> Dependo de que el CDN esté disponible
   
   2. Instalándolo en node e integrándolo en local
      - `npm install @fortawesome/fontawesome-free`
      - Copia node_modules/@fortawesome/fontawesome-free/webfonts a tu directorio de css
      - Copia node_modules/@fortawesome/fontawesome-free/css/all.min.css a tu directorio de css
      - Enlaza all.min.css en tu html
      - Para incluir un en tu web, hay que copiar su etiqueta en tu código HTML. Para ver qué etiqueta corresponde a cada icono, búscalo en https://fontawesome.com/icons. El de instagram, por ejemplo, es `<i class="fa-brands fa-instagram"></i>`. Se puede controlar su tamaño usando las clases fa-xs, fa-sm, fa-lg, fa-2x, fa-3x, fa-4x y fa5x

   3. Enlazando, desde el fichero sass o el JavaScript principal, al css de fontawesome que está en node_modules/@fortawesome/fontawesome-free/css/all.min.css  (en este punto lo haremos así, puesto que ya sabemos manejar empaquetadores)
      ```
      Esto supone la siguiente estructura:
      proyecto/
      ├── node_modules/
      │   └── @fortawesome/
      │       └── fontawesome-free/
      │           └── css/
      │               └── all.min.css
      ├── fuente/
      │   ├── sass/
      │   │   └── principal.scss
      │   └── index.html
      ├── package.json
      └── parcel.config.js (opcional)
      ```
      ```scss
      // En el archivo SCSS principal (por ejemplo, fuente/sass/main.scss)
      @import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
      ```
      ```js
      // En el archivo JavaScript principal (por ejemplo, fuente/js/main.js)
      import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
      ```


