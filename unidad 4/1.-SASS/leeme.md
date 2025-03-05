# Proyecto de web con sass e iconos en Node.js

SASS (Syntactically Awesome Stylesheets) es un preprocesador de CSS que amplía las capacidades del lenguaje añadiendo características como variables, anidación, mixins, herencia y más. Esto permite escribir estilos más organizados, reutilizables y fáciles de mantener.

Hay varios servicios que ofrecen colecciones de iconos gratis y de pago. Usarlos permite mantener la coherencia visual en todo el sitio y acelera el desarrollo. Suelen ser iconos escalables, por lo que no pierden calidad al aumentar su tamaño. Algunos de los más conocidos son:
   - Font Awesome (el que usaremos nosotros)
   - Hero icons
   - Feather icons
   - Material icons
   - Iconify
   - Flaticon

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
   - Para desarrollo: sass -> compilador oficial de sass (aunque no es imprescidible porque parcel ya lo hace)
   - Para producción: @fortawesome/fontawesome-free` -> paquete de iconos

4. **Abrir el archivo `package.json`** y crear los scripts necesarios para automatizar tareas.
   Si no se crean los scripts, deberás ejecutar manualmente:
   ```bash
   npx sass --watch fuente/scss:fuente/css

5. **Integrar los iconos de Fontawesome en tu proyecto`** Se puede hacer de varias formas (nosotros lo vamos a hacer con la segunda opción)
   1. Incluyendo el CDN en la cabecera: <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" rel="stylesheet"> Dependo de que el CDN esté disponible

   2. Instalándolo en node e integrándolo en local (en este punto lo haremos así, puesto que aún no sabemos manejar empaquetadores)
      - `npm install @fortawesome/fontawesome-free`
      - Copia node_modules/@fortawesome/fontawesome-free/webfonts a tu directorio de css
      - Copia node_modules/@fortawesome/fontawesome-free/css/all.min.css a tu directorio de css
      - Enlaza all.min.css en tu html
      - Para incluir un en tu web, hay que copiar su etiqueta en tu código HTML. Para ver qué etiqueta corresponde a cada icono, búscalo en https://fontawesome.com/icons. El de instagram, por ejemplo, es <i class="fa-brands fa-instagram"></i>. Se puede controlar su tamaño usando las clases fa-xs, fa-sm, fa-lg, fa-2x, fa-3x, fa-4x y fa5x
      
   3. Enlazando, desde el fichero sass o el JavaScript principal, al css de fontawesome que está en node_modules/@fortawesome/fontawesome-free/css/all.min.css

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

      ```scss
      // En el archivo SCSS principal (por ejemplo, fuente/sass/main.scss)
      @import '../../@fortawesome/fontawesome-free/css/all.min.css';
      ```
      ```js
      // En el archivo JavaScript principal (por ejemplo, fuente/js/main.js)
      import '../../@fortawesome/fontawesome-free/css/all.min.css';
      ```
