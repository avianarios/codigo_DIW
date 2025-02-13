# Viewport 

El viewport es el área visible del navegador donde se muestra el contenido de una página web. Es la "ventana" a través de la cual los usuarios ven e interactúan con el contenido de un sitio web. El concepto de viewport es crucial para el diseño web adaptativo (responsive design), ya que los dispositivos tienen diferentes tamaños de pantalla y resoluciones.

Características

- Tamaño: Puede variar según el dispositivo y la orientación (retrato o paisaje). En dispositivos móviles, el viewport suele ser más pequeño que en las pantallas de escritorio.

- Meta Tags: Los desarrolladores web utilizan la etiqueta `<meta name="viewport">` en el HTML para controlar el comportamiento del viewport en dispositivos móviles. Esta etiqueta permite definir propiedades como el ancho del viewport y la escala inicial.

    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- width=device-width: Establece el ancho del viewport igual al ancho del dispositivo.
    initial-scale=1.0: Define la escala inicial cuando la página se carga por primera vez.
    ```

- Escalabilidad: El viewport puede ser escalable, lo que permite a los usuarios hacer zoom dentro y fuera del contenido. Sin embargo, en diseños adaptativos, generalmente se desea evitar que los usuarios tengan que hacer zoom para ver el contenido correctamente.

- Diseño Adaptativo: El diseño adaptativo utiliza consultas de medios (media queries) para ajustar el diseño de una página según el tamaño del viewport. Esto asegura que el contenido se vea bien en diferentes dispositivos, desde teléfonos móviles hasta pantallas de escritorio grandes.

## Importancia del Viewport

- Experiencia del Usuario: Un viewport bien configurado mejora la experiencia del usuario al asegurar que el contenido sea legible y accesible sin necesidad de desplazarse horizontalmente o hacer zoom.

- SEO: Los motores de búsqueda, como Google, favorecen los sitios web que son adaptativos y tienen un viewport bien configurado, ya que proporcionan una mejor experiencia de usuario en dispositivos móviles.

- Accesibilidad: Un viewport adecuado ayuda a garantizar que el contenido sea accesible para todos los usuarios, independientemente del dispositivo que estén utilizando.

------




## 1. La etiqueta `<img>`

La etiqueta <img> es la forma más simple de mostrar una imagen en HTML. Permite especificar un solo archivo de imagen en el atributo `src` o un conjunto de imágenes en el atributo `srcset`. Aquí, el navegador seleccionará el archivo más adecuado según la resolución de la pantalla y las capacidades del dispositivo (como la compatibilidad con distintos tipos de imágenes).



- `srcset`: permite ofrecer la misma imagen en diferentes formatos y resoluciones. Además, se puede especificar que el navegador elija la más adecuada según su formato, densidad de píxeles de la pantalla o tamaño de la ventana del navegador. Así, el navegador elegirá según...
    - ...El formato del archivo, si no se indica ni densidad de píxeles ni tamaño del archivo.
    - ...La densidad de píxeles de la pantalla si se indica para cada imagen par qué densidad está destinada. El navegador seleccionará una imagen con suficiente resolución para que se vea nítida (1x estándar, 2x doble, 3x triple...).
    - ....El tamaño de la ventana del navegador (viewport). En este caso, hay que indicar la anchura de la imagen y el navegador elegirá la imagen según el ancho de la ventana del navegador.

```html
<!-- El navegador descargará la imagen que soporte (lo hará según el orden en srcset) -->
<img src="image.jpg" srcset="image.webp, image.jpg" alt="Paisaje">

<!-- El navegador descargará la imagen según el ancho del viewport -->
<img src="image.jpg" srcset="image-500.jpg 500w, image-1000.jpg 1000w" alt="Un paisaje">

<img 
    src="image.jpg" 
    srcset="image-500.webp 500w, image-1000.webp 1000w, image-500.jpg 500w, image-1000.jpg 1000w" 
    alt="Un paisaje" 
    type="image/webp">



<!-- En este caso, el navegador descargará la imagen más adecuada en función de la densidad de píxeles -->
<img src="image.jpg" srcset="image-500.jpg 1x, image-1000.jpg 2x, image-1500.jpg 3x" alt="Un paisaje">
```
- Aquí estamos ofreciendo tres versiones de la misma imagen:
    - 1x (imágenes para pantallas con densidad estándar, unos 90ppp).
    - 2x (imágenes para pantallas con el doble de densidad, como las pantallas Retina).
    - 3x (imágenes para pantallas con tres veces la densidad, como algunas pantallas de gama alta).



- `sizes` se utiliza junto con `srcset` en la etiqueta `<img>` para indicarle al navegador cómo calcular el tamaño de la imagen dependiendo del tamaño del viewport. En este caso, el navegador ya ha elegido una imagen del srcset y ahora necesita determinar cómo de grande debe renderizarla en función del espacio disponible en el viewport.

Cuando usas ambos atributos (srcset y sizes) en una etiqueta <img>, el navegador toma decisiones basadas en:

    Densidad de píxeles (dppx): Usando las versiones de imágenes con sufijos como 1x, 2x, 3x, etc., el navegador selecciona la imagen con la resolución adecuada para la densidad de píxeles de la pantalla.

    Tamaño del viewport: Usando el atributo sizes, le indicas al navegador cuánto espacio ocupará la imagen en la ventana del navegador, lo que ayuda a determinar qué imagen será más eficiente de cargar en términos de tamaño.

El navegador toma en cuenta ambos factores para elegir la imagen:

    El tamaño adecuado para el viewport usando sizes.
    La densidad de píxeles adecuada para la pantalla usando srcset.

```html
<img src="image.jpg" 
     srcset="image-500.jpg 1x, image-1000.jpg 2x, image-1500.jpg 3x" 
     sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
     alt="Paisaje">
```
Si el dispositivo tiene una pantalla de alta resolución (por ejemplo, Retina, 2x), el navegador elegirá la imagen de 1000x1000px (con 2x), siempre que el tamaño del viewport sea lo suficientemente grande para mostrarla adecuadamente.
Si el dispositivo tiene una pantalla estándar (1x), el navegador podría elegir la versión 500x500px si el viewport es pequeño, o la de 1000x1000px si el viewport es lo suficientemente grande.

Al usar srcset y sizes juntos:

    srcset permite al navegador elegir la resolución adecuada según la densidad de píxeles de la pantalla (1x, 2x, 3x).
    sizes le indica al navegador cuánto espacio ocupará la imagen en la página, lo que afecta a la selección de la imagen dependiendo del tamaño del viewport.

```html
<img 
    srcset="../img/paisaje-500.webp 500w, ../img/paisaje-900.webp 900w, ../img/paisaje-1400.webp 1400w, 
            ../img/paisaje-500.jpg 500w, ../img/paisaje-900.jpg 900w, ../img/paisaje-1400.jpg 1400w"
    sizes="(max-width: 799px) 100vw,
           (min-width: 800px) and (max-width: 1199px) 50vw,
           (min-width: 1200px) 33vw"
    src="../img/paisaje-900.jpg"
    alt="Un bonito paisaje">
```

- **`srcset`**: Especifica una lista de imágenes con diferentes resoluciones. El número que sigue a la extensión de cada archivo (300w, 600w, 1000w) indica el ancho de cada imagen.
- **`sizes`**: Define el ancho de la imagen en diferentes condiciones de la ventana gráfica. Esto ayuda al navegador a elegir la imagen adecuada en función del tamaño que ocupará en la página. Por ejemplo:
    - Si la ventana es menor de 600px, el navegador cargará una imagen que tenga un ancho de 100vw (100% del ancho de la ventana).
    - Si la ventana es mayor a 600px, el navegador cargará una imagen con 50vw (50% del ancho de la ventana).

El atributo src en <img> es el valor de respaldo en caso de que el navegador no entienda srcset o sizes, y se usará como la imagen predeterminada.

----

## 2. La etiqueta `<picture>`

La etiqueta `<picture>` es una opción más avanzada y flexible. Permite especificar diferentes versiones de una imagen para adaptarse a las características del dispositivo (como el tamaño del viewport, la resolución de pantalla y la compatibilidad con formatos específicos).

```html
<!-- Se sirven dos formatos distintos de la misma imagen -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Paisaje">
</picture>
```


```html
<!-- Se formulan condiciones basadas en el tamaño de la ventana del navegador (viewport) -->
<picture>
    <!-- WebP como primer intento -->
    <source type="image/webp" media="(max-width: 799px)" srcset="../img/paisaje-500.webp">
    <source type="image/webp" media="(min-width: 800px) and (max-width: 1199px)" srcset="../img/paisaje-900.webp">
    <source type="image/webp" media="(min-width: 1200px)" srcset="../img/paisaje-1400.webp">

    <!-- JPEG como fallback para navegadores que no soportan WebP -->
    <source type="image/jpg" media="(max-width: 799px)" srcset="../img/paisaje-500.jpg">
    <source type="image/jpg" media="(min-width: 800px) and (max-width: 1199px)" srcset="../img/paisaje-900.jpg">
    <source type="image/jpg" media="(min-width: 1200px)" srcset="../img/paisaje-1400.jpg">

    <!-- Imagen predeterminada para navegadores que no soportan <picture> -->
    <img src="paisaje-600.jpg" alt="Paisaje">
</picture>
```

- La etiqueta `<type>` permite especificar el tipo de medio que se encontrará el navegador. Aunque si no se pone, el navegador intentará descubrirlo por sí mismo, especificarlo explícitamente hace que el proceso de buscar imagen sea más rápido y eficiente.
- La etiqueta `<source>` se utiliza para proporcionar imágenes en diferentes formatos y tamaños.
- El atributo `media` permite especificar el tamaño de la ventana del navegador (viewport) (mediante media queries) que determinan qué imagen cargar.
- El orden es importante: el navegador intentará cargar primero el formato WebP si es compatible. Si no lo es, cargará la imagen JPEG.
- La etiqueta `<img>` actúa como una alternativa para navegadores antiguos que no soportan la etiqueta `<picture>` y especifica una imagen predeterminada en caso de que ninguna de las condiciones de las etiquetas `<source>` se cumpla.


### Uso del atributo sizes con la etiqueta `<picture> <source>`
El atributo sizes se usa junto con srcset para que el navegador sepa qué imagen cargar según el tamaño de la ventana de visualización. Es útil cuando usas diferentes imágenes para distintos tamaños de pantalla.

```html
<picture>
    <source 
        srcset="../img/paisaje-500.webp 500w, ../img/paisaje-900.webp 900w, ../img/paisaje-1400.webp 1400w"
        sizes="(max-width: 799px) 100vw, (min-width: 800px) and (max-width: 1199px) 50vw, (min-width: 1200px) 33vw">
    <img src="../img/paisaje-900.webp" alt="Un bonito paisaje">

    <source 
        srcset="../img/paisaje-500.jpg 500w, ../img/paisaje-900.jpg 900w, ../img/paisaje-1400.jpg 1400w"
        sizes="(max-width: 799px) 100vw, (min-width: 800px) and (max-width: 1199px) 50vw, (min-width: 1200px) 33vw">
    <img src="../img/paisaje-900.jpg" alt="Un bonito paisaje">
</picture>
```

`sizes` define cómo se deben comportar las imágenes en función del tamaño del viewport (ventana de visualización). Por ejemplo, en el código anterior:
- Si el ancho de la pantalla es de hasta 799px, la imagen se cargará con un ancho de 100vw (el 100% del ancho de la ventana).
- Entre 800px y 1199px, se cargará una imagen con un ancho del 50vw (el 50% del ancho de la ventana).
- Si el ancho es de 1200px o más, se cargará con un ancho de 33vw (el 33% del ancho de la ventana).



# Diferencias entre picture e img

Diferencias clave entre <img> y <picture>:

    Control sobre el formato:
        <img>: Permite usar srcset para ofrecer imágenes en diferentes formatos, pero el navegador elige el primer formato compatible.
        <picture>: Permite usar type en el <source> para especificar explícitamente qué formato debe servirse (por ejemplo, WebP, JPEG) en función de la compatibilidad del navegador.

    Media Queries:
        <img>: No soporta media queries de forma directa. Si usas srcset, el navegador elegirá la imagen más adecuada dependiendo de la resolución, pero no puedes controlar la imagen en función del tamaño del viewport.
        <picture>: Soporta media queries en el <source>, lo que te permite adaptar la imagen al tamaño del viewport, no solo a la resolución de la pantalla.

    Flexibilidad y adaptabilidad:
        <img>: Es más sencillo y directo, adecuado cuando no necesitas mucha personalización sobre el formato y la adaptación de la imagen.
        <picture>: Es más flexible y adecuado cuando necesitas servir imágenes de diferentes formatos o tamaños dependiendo de las características del dispositivo y del navegador.











        --------------


        # Uso de `<picture>` y `srcset` en imágenes

El propósito principal de `<picture>` es permitir que el navegador seleccione un tipo de archivo (como WebP o JPEG) basado en la compatibilidad del navegador, y luego ajustar la resolución según el tamaño de la pantalla mediante los media queries.

```html
<picture>
   <!-- WebP como primer intento -->
   <source type="image/webp" media="(max-width: 799px)" srcset="../img/Paisaje-arbol-300px.webp">
   <source type="image/webp" media="(min-width: 800px) and (max-width: 1199px)" srcset="../img/Paisaje-arbol-700px.webp">
   <source type="image/webp" media="(min-width: 1200px) and (max-width: 1899px)" srcset="../img/Paisaje-arbol-1000px.webp">
   <source type="image/webp" media="(min-width: 1900px)" srcset="../img/Paisaje-arbol-1600px.webp">
   
   <!-- JPEG como alternativa para navegadores que no soportan WebP -->
   <source type="image/jpeg" media="(max-width: 799px)" srcset="../img/Paisaje-arbol-300px.jpg">
   <source type="image/jpeg" media="(min-width: 800px) and (max-width: 1199px)" srcset="../img/Paisaje-arbol-700px.jpg">
   <source type="image/jpeg" media="(min-width: 1200px) and (max-width: 1899px)" srcset="../img/Paisaje-arbol-1000px.jpg">
   
   <!-- Imagen predeterminada en JPEG para navegadores más antiguos -->
   <img src="../img/Paisaje-arbol-1600px.jpg" alt="Un bonito paisaje">
</picture>
```

1. Primero se organiza por tipo de archivo (en este caso, primero WebP y luego JPEG). Esto asegura que los navegadores modernos que soportan WebP carguen ese formato, mientras que los navegadores más antiguos carguen JPEG.
2. Luego se usan los media queries para establecer las resoluciones dependiendo del tamaño de la pantalla.
3. El elemento `<img>` con la fuente predeterminada (`src`) es la alternativa para los navegadores que no soportan `<picture>`.

En el caso de `srcset` dentro de la etiqueta `<img>`, es mejor organizar las imágenes por resolución, ya que `srcset` permite al navegador seleccionar la imagen más adecuada en función de la resolución de la pantalla y el tamaño del viewport.

### Razón:

- El atributo `srcset` está diseñado para trabajar con la resolución de las imágenes (en píxeles) y el navegador seleccionará la mejor opción según la densidad de píxeles del dispositivo (por ejemplo, una pantalla Retina).
- Al organizar por resolución, el navegador puede elegir la imagen que mejor se ajuste a las condiciones actuales, sin tener que preocuparse de los formatos, ya que el navegador se encargará de eso dependiendo de la compatibilidad.

## Ejemplo de organización por resolución en `srcset`:

```html
<img
   srcset="../img/Paisaje-arbol-1600px.webp 1600w,
           ../img/Paisaje-arbol-1600px.jpg 1600w,
           ../img/Paisaje-arbol-1000px.webp 1000w,
           ../img/Paisaje-arbol-1000px.jpg 1000w,
           ../img/Paisaje-arbol-700px.webp 700w,
           ../img/Paisaje-arbol-700px.jpg 700w,
           ../img/Paisaje-arbol-300px.webp 300w,
           ../img/Paisaje-arbol-300px.jpg 300w"
   sizes="(max-width: 499px) 80vw,
          (max-width: 799px) 70vw,
          (max-width: 1199px) 60vw,
          (max-width: 1799px) 50vw,
          1600px"
   src="../img/Paisaje-arbol-300px.jpg"
   alt="Un bonito paisaje de sierra"
/>
```

En el atributo `srcset` de la etiqueta `<img>`, se especifican las imágenes organizadas en orden de resolución (de mayor a menor), lo que permite que el navegador seleccione la imagen más adecuada en función de la pantalla y el tamaño.

Cuando se especifica el atributo `sizes`, el navegador puede tomar una decisión más informada sobre qué imagen cargar, no solo basándose en el tamaño del dispositivo (como con `srcset`), sino también en el tamaño que realmente ocupará la imagen en la página. Esto ayuda a optimizar la carga de la imagen, ya que el navegador sabe con más precisión qué imagen es la mejor opción según las condiciones actuales del viewport.

## ¿Por qué es mejor organizar por resolución en `srcset`?

- El navegador seleccionará la imagen más adecuada de acuerdo con la densidad de píxeles de la pantalla y el tamaño de la ventana.
- Esto permite que el navegador elija automáticamente entre los diferentes tamaños de imágenes sin tener que especificar explícitamente los media queries como se hace en `<picture>`.

La diferencia principal entre usar `srcset` en la etiqueta `<img>` y usar `<picture>` radica en la flexibilidad y control sobre el formato de imagen y las condiciones bajo las cuales se seleccionan.

### 1. `srcset` en `<img>`:

- **Uso principal**: `srcset` dentro de la etiqueta `<img>` se utiliza principalmente para cambiar el tamaño de la imagen dependiendo de la resolución de la pantalla o el tamaño del viewport.
- **Selección de resolución**: Permite al navegador elegir la imagen más adecuada según la resolución (con `w` o `x` para representar ancho o densidad de píxeles).
- **No permite control sobre el tipo de archivo**: `srcset` solo permite cambiar el tamaño de la imagen, pero no el formato. El navegador seleccionará automáticamente el formato más adecuado según lo que soporte (WebP, JPEG, etc.), y no puedes especificar diferentes tipos de archivo para diferentes condiciones.
- **Ideal para cambios en el tamaño de la imagen, no en el formato**.

**Ejemplo**:

```html
<img srcset="paisaje-300.jpg 300w, paisaje-600.jpg 600w, paisaje-1000.jpg 1000w" sizes="(max-width: 600px) 100vw, 50vw" src="paisaje-600.jpg" alt="Paisaje">
```

### 2. `<picture>`:

- **Uso principal**: `<picture>` te da más control sobre el tipo de imagen que se sirve, como el formato de la imagen (por ejemplo, WebP vs JPEG) y el tamaño de la imagen.
- **Selección del formato**: A diferencia de `srcset`, `<picture>` te permite especificar diferentes formatos de archivo dependiendo de las condiciones de la pantalla (por ejemplo, si es un navegador que soporta WebP o no). Puedes usar múltiples `<source>` para especificar diferentes tipos de archivo (como WebP y JPEG) y también usar media queries para ajustar el tamaño de la imagen para distintos tamaños de pantalla.
- **Ideal para diferentes tipos de archivo y mayor control sobre condiciones**.

**Ejemplo**:

```html
<picture>
  <!-- WebP para navegadores que lo soporten -->
  <source type="image/webp" srcset="paisaje-300.webp 300w, paisaje-600.webp 600w, paisaje-1000.webp 1000w" media="(max-width: 600px)">
  <!-- JPEG como fallback -->
  <source type="image/jpeg" srcset="paisaje-300.jpg 300w, paisaje-600.jpg 600w, paisaje-1000.jpg 1000w" media="(max-width: 600px)">
  <!-- Imagen predeterminada -->
  <img src="paisaje-600.jpg" alt="Paisaje">
</picture>
```

## Diferencias clave:

- **Control sobre el formato de imagen**:
  - `<img srcset>`: No puedes controlar el formato, solo puedes cambiar la resolución de la imagen.
  - `<picture>`: Te permite especificar diferentes formatos de imagen (por ejemplo, WebP o JPEG), lo que es útil para aprovechar los formatos más eficientes como WebP en navegadores que lo soportan.
  
- **Condiciones de selección**:
  - `<img srcset>`: Solo se enfoca en la resolución y el tamaño de la pantalla, no en el formato.
  - `<picture>`: Puedes usar media queries para especificar diferentes tipos de imágenes y formatos según el tamaño de la pantalla y el tipo de dispositivo (por ejemplo, imagen más pequeña en móviles, y formato diferente si el navegador no soporta WebP).

- **Compatibilidad con navegadores antiguos**:
  - `<img srcset>`: Funciona bien para la selección de tamaño de imagen, pero no para diferentes formatos.
  - `<picture>`: Si usas formatos como WebP, puedes proporcionar un fallback con JPEG o PNG, lo que te da más control en cuanto a compatibilidad con navegadores antiguos.

## ¿Cuándo usar cada uno?

- Usa `srcset` si solo necesitas cambiar el tamaño de la imagen según la resolución de la pantalla o el tamaño del viewport y no te importa el formato.
- Usa `<picture>` si necesitas control total sobre el formato de la imagen (como servir WebP a navegadores compatibles y JPEG a los que no lo soportan) o si quieres personalizar la imagen en función de varios factores, como el tamaño de pantalla y el tipo de dispositivo.

## `sizes="(max-width: 799px) 100vw, (min-width: 800px) and (max-width: 1199px) 50vw, (min-width: 1200px) 33vw"`

Esto asegura que, dependiendo del tamaño de la pantalla, el navegador sepa cuántos píxeles debe descargar, de acuerdo con la resolución especificada en `srcset`. Específicamente:

- Si la pantalla tiene un ancho de hasta 799px, el navegador descarga una imagen con un ancho de `100vw` (ancho total de la ventana de visualización).
- Entre 800px y 1199px de ancho de pantalla, se elige una imagen con `50vw` (50% del ancho de la ventana).
- Si la pantalla es de 1200px o más, se elige una imagen con `33vw`.


El propósito principal de <picture> es permitir que el navegador seleccione un tipo de archivo (como WebP o JPEG) basado en la compatibilidad del navegador, y luego ajustar la resolución según el tamaño de la pantalla mediante los media queries.

<picture>
   <!-- WebP como primer intento -->
   <source type="image/webp" media="(max-width: 799px)" srcset="../img/Paisaje-arbol-300px.webp">
   <source type="image/webp" media="(min-width: 800px) and (max-width: 1199px)" srcset="../img/Paisaje-arbol-700px.webp">
   <source type="image/webp" media="(min-width: 1200px) and (max-width: 1899px)" srcset="../img/Paisaje-arbol-1000px.webp">
   <source type="image/webp" media="(min-width: 1900px)" srcset="../img/Paisaje-arbol-1600px.webp">
   
   <!-- JPEG como fallback para navegadores que no soportan WebP -->
   <source type="image/jpeg" media="(max-width: 799px)" srcset="../img/Paisaje-arbol-300px.jpg">
   <source type="image/jpeg" media="(min-width: 800px) and (max-width: 1199px)" srcset="../img/Paisaje-arbol-700px.jpg">
   <source type="image/jpeg" media="(min-width: 1200px) and (max-width: 1899px)" srcset="../img/Paisaje-arbol-1000px.jpg">
   
   <!-- Imagen predeterminada en JPEG para navegadores más antiguos -->
   <img src="../img/Paisaje-arbol-1600px.jpg" alt="Un bonito paisaje">
</picture>





Explicación:

    Primero se organiza por tipo de archivo (en este caso, primero WebP y luego JPEG). Esto asegura que los navegadores modernos que soportan WebP carguen ese formato, mientras que los navegadores más antiguos carguen JPEG.
    Luego se usan los media queries para establecer las resoluciones dependiendo del tamaño de la pantalla.
    El elemento <img> con la fuente predeterminada (src) es el fallback para los navegadores que no soportan <picture>.


    En el caso de srcset dentro de la etiqueta <img>, es mejor organizar las imágenes por resolución, ya que srcset permite al navegador seleccionar la imagen más adecuada en función de la resolución de la pantalla y el tamaño del viewport.
Razón:

    El atributo srcset está diseñado para trabajar con la resolución de las imágenes (en píxeles) y el navegador seleccionará la mejor opción según la densidad de píxeles del dispositivo (por ejemplo, una pantalla Retina).
    Al organizar por resolución, el navegador puede elegir la imagen que mejor se ajuste a las condiciones actuales, sin tener que preocuparse de los formatos, ya que el navegador se encargará de eso dependiendo de la compatibilidad.

Ejemplo de organización por resolución en srcset:

<img
   srcset="../img/Paisaje-arbol-1600px.webp 1600w,
           ../img/Paisaje-arbol-1600px.jpg 1600w,
           ../img/Paisaje-arbol-1000px.webp 1000w,
           ../img/Paisaje-arbol-1000px.jpg 1000w,
           ../img/Paisaje-arbol-700px.webp 700w,
           ../img/Paisaje-arbol-700px.jpg 700w,
           ../img/Paisaje-arbol-300px.webp 300w,
           ../img/Paisaje-arbol-300px.jpg 300w"
   sizes="(max-width: 499px) 80vw,
          (max-width: 799px) 70vw,
          (max-width: 1199px) 60vw,
          (max-width: 1799px) 50vw,
          1600px"
   src="../img/Paisaje-arbol-300px.jpg"
   alt="Un bonito paisaje de sierra"
/>

    En el atributo srcset de la etiquta img, se especifican las imágenes organizadas en orden de resolución (de mayor a menor), lo que permite que el navegador seleccione la imagen más adecuada en función de la pantalla y el tamaño.

    Cuando se especifica el atributo sizes, el navegador puede tomar una decisión más informada sobre qué imagen cargar, no solo basándose en el tamaño del dispositivo (como con srcset), sino también en el tamaño que realmente ocupará la imagen en la página. Esto ayuda a optimizar la carga de la imagen, ya que el navegador sabe con más precisión qué imagen es la mejor opción según las condiciones actuales del viewport.

¿Por qué es mejor organizar por resolución en srcset?

    El navegador seleccionará la imagen más adecuada de acuerdo con la densidad de píxeles de la pantalla y el tamaño de la ventana.
    Esto permite que el navegador elija automáticamente entre los diferentes tamaños de imágenes sin tener que especificar explícitamente los media queries como se hace en <picture>.

    La diferencia principal entre usar srcset en la etiqueta <img> y usar <picture> radica en la flexibilidad y control sobre el formato de imagen y las condiciones bajo las cuales se seleccionan.
1. srcset en <img>:

    Uso principal: srcset dentro de la etiqueta <img> se utiliza principalmente para cambiar el tamaño de la imagen dependiendo de la resolución de la pantalla o el tamaño del viewport.
    Selección de resolución: Permite al navegador elegir la imagen más adecuada según la resolución (con w o x para representar ancho o densidad de píxeles).
    No permite control sobre el tipo de archivo: srcset solo permite cambiar el tamaño de la imagen, pero no el formato. El navegador seleccionará automáticamente el formato más adecuado según lo que soporte (WebP, JPEG, etc.), y no puedes especificar diferentes tipos de archivo para diferentes condiciones.
    Ideal para cambios en el tamaño de la imagen, no en el formato.

Ejemplo:

<img srcset="paisaje-300.jpg 300w, paisaje-600.jpg 600w, paisaje-1000.jpg 1000w" sizes="(max-width: 600px) 100vw, 50vw" src="paisaje-600.jpg" alt="Paisaje">

2. <picture>:

    Uso principal: <picture> te da más control sobre el tipo de imagen que se sirve, como el formato de la imagen (por ejemplo, WebP vs JPEG) y el tamaño de la imagen.
    Selección del formato: A diferencia de srcset, <picture> te permite especificar diferentes formatos de archivo dependiendo de las condiciones de la pantalla (por ejemplo, si es un navegador que soporta WebP o no). Puedes usar múltiples <source> para especificar diferentes tipos de archivo (como WebP y JPEG) y también usar media queries para ajustar el tamaño de la imagen para distintos tamaños de pantalla.
    Ideal para diferentes tipos de archivo y mayor control sobre condiciones.

Ejemplo:

<picture>
  <!-- WebP para navegadores que lo soporten -->
  <source type="image/webp" srcset="paisaje-300.webp 300w, paisaje-600.webp 600w, paisaje-1000.webp 1000w" media="(max-width: 600px)">
  <!-- JPEG como fallback -->
  <source type="image/jpeg" srcset="paisaje-300.jpg 300w, paisaje-600.jpg 600w, paisaje-1000.jpg 1000w" media="(max-width: 600px)">
  <!-- Imagen predeterminada -->
  <img src="paisaje-600.jpg" alt="Paisaje">
</picture>

Diferencias clave:

    Control sobre el formato de imagen:
        <img srcset>: No puedes controlar el formato, solo puedes cambiar la resolución de la imagen.
        <picture>: Te permite especificar diferentes formatos de imagen (por ejemplo, WebP o JPEG), lo que es útil para aprovechar los formatos más eficientes como WebP en navegadores que lo soportan.

    Condiciones de selección:
        <img srcset>: Solo se enfoca en la resolución y el tamaño de la pantalla, no en el formato.
        <picture>: Puedes usar media queries para especificar diferentes tipos de imágenes y formatos según el tamaño de la pantalla y el tipo de dispositivo (por ejemplo, imagen más pequeña en móviles, y formato diferente si el navegador no soporta WebP).

    Compatibilidad con navegadores antiguos:
        <img srcset>: Funciona bien para la selección de tamaño de imagen, pero no para diferentes formatos.
        <picture>: Si usas formatos como WebP, puedes proporcionar un fallback con JPEG o PNG, lo que te da más control en cuanto a compatibilidad con navegadores antiguos.

¿Cuándo usar cada uno?

    Usa srcset si solo necesitas cambiar el tamaño de la imagen según la resolución de la pantalla o el tamaño del viewport y no te importa el formato.

    Usa <picture> si necesitas control total sobre el formato de la imagen (como servir WebP a navegadores compatibles y JPEG a los que no lo soportan) o si quieres personalizar la imagen en función de varios factores, como el tamaño de pantalla y el tipo de dispositivo.



    sizes="(max-width: 799px) 100vw, (min-width: 800px) and (max-width: 1199px) 50vw, (min-width: 1200px) 33vw": Esto asegura que, dependiendo del tamaño de la pantalla, el navegador sepa cuántos píxeles debe descargar, de acuerdo con la resolución especificada en srcset. Específicamente:

    Si la pantalla tiene un ancho de hasta 799px, el navegador descarga una imagen con un ancho de 100vw (ancho total de la ventana de visualización).
    Entre 800px y 1199px de ancho de pantalla, se elige una imagen con 50vw (50% del ancho de la ventana).
    Si la pantalla es de 1200px o más, se elige una imagen con 33vw.