[toc]

En el desarrollo de software, es común trabajar con diferentes tipos de código dependiendo de la etapa del proceso en la que nos encontremos. A continuación, se explican las diferencias entre **código fuente**, **código para desarrollo** y **código para producción**, y cómo los empaquetadores ayudan a gestionar estas diferencias.

---

# 1. Código fuente

El **código fuente** es la versión original del código que escriben los desarrolladores. Este código suele estar escrito en un lenguaje de programación de alto nivel (como JavaScript, Python, TypeScript, etc.) y es legible para los humanos. Sin embargo, no está optimizado para ser ejecutado directamente en un entorno de producción.

- **Características**:
  - Legible y fácil de entender.
  - Puede incluir comentarios y documentación.
  - No está optimizado para rendimiento.
  - Puede contener dependencias no necesarias en producción.
  - Suele estar dividido en múltiples archivos y módulos.

- **Ejemplo**: 
    ```javascript
    // Archivo: app.js
    function saludar(nombre) {
        console.log(`Hola, ${nombre}!`);
    }
    saludar("Mundo");
    ```

    ```scss
    // Archivo: styles/main.scss
    $primary-color: #3498db;
    
    body {
      font-family: Arial, sans-serif;
      color: $primary-color;
      user-select: none; // Evita que el usuario seleccione texto
    }
    ```
    
    ```html
    <!-- Archivo: index.html -->
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
        <title>Mi Aplicación</title>
         <!--Enlace al fichero SASS, no al css-->
           <link rel="stylesheet" href="styles/main.scss">
           <script src="scripts/app.js" defer></script>
        </head>
        <body>
        <h1>Hola, Mundo!</h1>
          </body>
    ```


# 2. Código para desarrollo

El **código para desarrollo** es una versión del código fuente que ha sido procesada para facilitar  la depuración y las pruebas durante el desarrollo. Este código suele  incluir herramientas como **source maps** (mapas de origen) que permiten a los desarrolladores rastrear errores en el código fuente original.

- **Características**:
  
  - Incluye herramientas de depuración (como `console.log` o `debugger`).
  - Puede contener dependencias de desarrollo (como linters, testers, etc.).
  - No está optimizado para rendimiento.
  - Suele ser más grande en tamaño debido a la inclusión de herramientas y comentarios.
- Ejemplo
    ```javascript
    // Archivo: app.dev.js
    function saludar(nombre) {
      console.log(`Hola, ${nombre}!`);
      debugger; // Herramienta de depuración
    }
    saludar("Mundo");
    ```
    
	```css
    /* Archivo: styles/main.css */
    /*El empaquetador traduce el código sass a css*/
    body {
      font-family: Arial, sans-serif;
      color: #3498db;
      -webkit-user-select: none; /* Prefijo para Safari y Chrome */
      -moz-user-select: none;    /* Prefijo para Firefox */
	  -ms-user-select: none;     /* Prefijo para Internet Explorer */
	  user-select: none;         /* Versión estándar */
    }
    ```
    
    ```html
    <!-- Archivo: index.dev.html -->
    <!--El empaquetador cambia el scss por css y cambia el app.js por app.dev.js-->
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Mi Aplicación (Desarrollo)</title>
      <link rel="stylesheet" href="styles/main.css">
      <script src="scripts/app.dev.js" defer></script>
    </head>
    <body>
      <h1>Hola, Mundo!</h1>
    </body>
    </html>
    ```


# 3. Código para producción

El **código para producción** es una versión optimizada del código fuente, lista para ser desplegada  en un entorno real. Este código ha sido procesado por un **empaquetador** (como Webpack, Vite, Rollup o parcel) para mejorar el rendimiento y reducir el tamaño del archivo.

- **Características**:
  - **Optimizado**: Se eliminan dependencias innecesarias y se aplican técnicas como **sacudida de árbol (tree shaking)**, que evitan incluir código muerto o no usado en el código para producción. Ejemplo:
      ```javascript
      // Archivo: math.js
      //Función que no se usa
      export function sum(a, b) {
        return a + b;
      }
      
      export function multiply(a, b) {
        return a * b;
      }
      ```
      ```javascript
      // Archivo procesado: app.js
      import { sum } from './math.js';
      console.log(sum(2, 3)); // 5
      ```
    
  - **Prefijado**: Se añaden prefijos específicos de navegadores a las propiedades CSS para  garantizar la compatibilidad con versiones antiguas de navegadores. Por  ejemplo, la propiedad `display: flex` puede necesitar prefijos como `-webkit-display: flex` para funcionar en versiones antiguas de Safari.
  - **Minimizado**: Se eliminan espacios, comentarios y se acortan nombres de variables.
  
  - Listo para ser ejecutado en un navegador o servidor.
- **Ejemplo**:
	
	```javascript
	// Archivo: app.prod.js
	function s(n){console.log(`Hola, ${n}!`)}s("Mundo");
	```
	
	```css
	/* Archivo: styles/main.min.css */
	body{font-family:Arial,sans-serif;color:#3498db;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}
	```
	
	```html
	<!-- Archivo: index.prod.html (Minimizado) -->
	<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>Mi Aplicación</title><link rel="stylesheet" href="styles/main.min.css"><script src="scripts/app.min.js" defer></script></head><body><h1>Hola, Mundo!</h1></body></html>
	```

​	

# 4. Papel de los empaquetadores

Los **empaquetadores** (como Webpack, Vite, Rollup, etc.) son herramientas que transforman el  código fuente en código listo para producción. Su función principal es:

1. **Unificar módulos**: Combinar múltiples archivos en uno o varios bundles.
2. **Optimizar**: Minificar, ofuscar y eliminar código innecesario.
3. **Gestionar dependencias**: Incluir solo las librerías necesarias para producción.
4. **Incluir recursos de dependencias externas**. El empaquetador detecta que se usan recursos de dependencias externas como, por ejemplo, node_modules, bibliotecas CSS o imágenes, los coloca en el directorio de producción y cambia los enlaces del código html, js o sass.
5. **Generar source maps**: Para facilitar la depuración en desarrollo.



Por tanto, una aplicación pasa por tres fases:

1. **Código Fuente**:
   - Archivos HTML, SCSS y JS en su forma original.
   - Ejemplo: `index.html`, `styles/main.scss`, `scripts/app.js`.
2. **Código para Desarrollo**:
   - Archivos procesados pero no optimizados.
   - Ejemplo: `index.dev.html`, `styles/main.css`, `scripts/app.dev.js`.
3. **Código para Producción**:
   - Archivos minimizados, prefijados, optimizados y consolidados en un directorio de salida.
   - Ejemplo: `index.prod.html` (minimizado), `styles/main.min.css`, `scripts/app.min.js`.