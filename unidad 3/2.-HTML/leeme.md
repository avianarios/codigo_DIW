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