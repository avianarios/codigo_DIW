# Carga Diferida de Imágenes

La **carga diferida de imágenes** (también conocida como **lazy loading**) es una técnica de optimización de rendimiento web que consiste en cargar las imágenes de una página web solo cuando son necesarias, es decir, cuando están a punto de ser visualizadas por el usuario. Esta técnica es especialmente útil en páginas con muchas imágenes o contenido multimedia, ya que mejora los tiempos de carga iniciales.

## ¿En qué consiste la carga diferida?

En lugar de cargar todas las imágenes de una página de inmediato cuando se carga el sitio, con la carga diferida solo se cargan las imágenes que están a la vista del usuario en ese momento. Las imágenes fuera de la pantalla (por ejemplo, las que se encuentran más abajo en una página larga) no se cargan hasta que el usuario se desplace y las vea en su pantalla. Así, el navegador las cargará conforme las imágenes se acerquen al viewport porque el usuario vaya desplazándose. ¿A cuánta distancia del límite inferior del viewport? Pues depende de cada navegador y de su configuración

### Beneficios de la carga diferida

1. **Mejora en el tiempo de carga inicial**: Al no cargar todas las imágenes al inicio, la página se carga más rápido, lo que mejora la experiencia del usuario.
2. **Reducción del consumo de datos**: Las imágenes que no se ven no se cargan, lo que ahorra ancho de banda, especialmente en dispositivos móviles.
3. **Mejor rendimiento en dispositivos con recursos limitados**: Los dispositivos con poca memoria o capacidad de procesamiento se benefician de no cargar imágenes innecesarias.
4. **Optimización para SEO**: Aunque Google y otros motores de búsqueda pueden leer el contenido cargado de forma diferida, utilizar esta técnica mejora la experiencia del usuario, lo cual puede influir positivamente en el posicionamiento.

## ¿Cómo implementar la carga diferida de imágenes?

La carga diferida se puede implementar fácilmente usando el atributo `loading="lazy"` en las imágenes en HTML. Este atributo le indica al navegador que no debe cargar la imagen hasta que esté cerca de ser visualizada. Aquí tienes un ejemplo básico:

```html
<img src="imagen.jpg" alt="Descripción de la imagen" loading="lazy">
```

# Alternativa con JavaScript

La API de Intersection Observer permite usar javaScript para aplicar esta técnica. Esta API detecta cuándo una imagen entra en la vista del usuario y la carga en ese momento.

```javascript
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('img[data-src]');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; // Cargar la imagen desde 'data-src'
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => {
    observer.observe(img);
  });
});
```
En este ejemplo, las imágenes se cargan solo cuando están a punto de ser vistas por el usuario. La fuente de la imagen se almacena en el atributo data-src y solo se asigna al atributo src cuando la imagen entra en el área visible.

----

# Uso de tipografías externas

1. **Seleccionar la tipografía**: Elige una tipografía de la plataforma que  prefieras (Google Fonts, Adobe Fonts, Font Squirrel, etc.).

2. **Obtener la tipografía** de alguna de las dos formas siguientes:
    - Usar un enlace a un CDN para incluirlo directamente en el HTML.
    - Descargar la fuente y servirla desde mi web

3. **Incluir el enlace o importar la fuente**:
    - Si el servicio proporciona un enlace, lo agregas dentro de la etiqueta `<head>` de tu documento HTML.
    - Si tienes archivos de la fuente, los subes a tu servidor y los declaras usando la regla `@font-face` en tu archivo CSS.

4. **Aplicar la fuente en CSS**: Usa la propiedad `font-family` para aplicar la tipografía seleccionada en tu archivo CSS a los elementos deseados.


¿Qué método elegir?

1. Usar un enlace (CDN)
    - Ventajas:
      - Simplicidad: Solo necesitas copiar y pegar un enlace en tu HTML. Es fácil de configurar y rápido de implementar.
      - Rendimiento: Muchas tipografías populares (como las de Google Fonts) son ampliamente utilizadas, por lo que es probable que los usuarios ya tengan la fuente en caché en sus navegadores, mejorando la carga.
      - Mantenimiento: El servicio se encarga de la actualización y el mantenimiento de las fuentes, lo que reduce la carga de trabajo.
      - Acceso a fuentes de alta calidad: Servicios como Google Fonts y Adobe Fonts ofrecen una gran variedad de tipografías de alta calidad que están optimizadas para su uso en la web.

    - Inconvenientes:
      - Dependencia externa: Si el servicio de CDN se cae o tiene problemas, las fuentes no se cargarán correctamente, lo que podría afectar la apariencia de tu página.
      - Rendimiento: En algunos casos, depender de un servidor externo puede aumentar el tiempo de carga, especialmente si el servidor está lejos del usuario o si la conexión es lenta.
      - Privacidad: Al usar un servicio externo, los datos de los usuarios pueden ser compartidos con el proveedor del servicio (por ejemplo, Google Fonts). Esto podría ser un problema si deseas mantener la privacidad de los usuarios, especialmente en regiones con leyes de protección de datos estrictas, como la GDPR.

2. Usar archivos locales con @font-face
    - Ventajas:
        - Control total: Tienes control total sobre las fuentes, ya que las descargas y usas desde tu propio servidor. No dependes de un servicio externo.
        - Mejor rendimiento: Si los archivos de las fuentes están alojados localmente, pueden cargarse más rápido, especialmente si el servidor está cerca del usuario.
        - Privacidad: No se comparte información con un servicio externo, lo que es una ventaja desde el punto de vista de la privacidad.

    - Inconvenientes:
        - Mayor complejidad: Debes gestionar la carga de las fuentes, asegurarte de que los archivos estén disponibles en el servidor y configurar correctamente @font-face.
        - Tamaño del archivo: Los archivos de las fuentes pueden ser pesados, especialmente si usas varias variantes (por ejemplo, diferentes pesos o estilos), lo que podría afectar el tiempo de carga de la página.
        - Compatibilidad: Necesitas asegurarte de que los formatos de la fuente sean compatibles con todos los navegadores (por ejemplo, .woff, .woff2, .ttf, etc.).
        - Mantenimiento: Eres responsable de las actualizaciones de las fuentes, lo que puede requerir más trabajo.