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

La etiqueta <img> es la forma más simple de mostrar una imagen en HTML. Contiene una serie de atributos que permiten que el navegador seleccione el archivo más adecuado según la compatibilidad del equipo de destino con distintos tipos de imágenes, la densidad de píxeles de la pantalla y el tamaño de la ventana del navegador (viewport). Para ello usa los siguientes atributos: 

- `src`, que permite especificar un archivo de imagen que actuará como imagen de respaldo en caso de que el resto no sean compatibles con el navegador.
```html
<!-- Versión más simple, se le envía una imagen al navegador -->
<img src="paisaje.jpg" alt="un bonito paisaje">
```
- `srcset`: Permite ofrecer al navegador varias imágenes en diferentes resoluciones y formatos, indicando su tamaño o la densidad de píxeles a la que están destinadas. Con esta información, el navegador elige la imagen más adecuada según:
    - **El formato del archivo**: Si no se especifica ni la densidad de píxeles ni el tamaño del archivo, el navegador seleccionará la imagen basándose en el formato compatible (por ejemplo, image.webp en lugar de image.jpg si el navegador soporta WebP).
    - **La densidad de píxeles de la pantalla**: Si se especifica la densidad de píxeles para cada imagen (usando descriptores como 1x, 2x, 3x), el navegador seleccionará automáticamente la imagen con la resolución adecuada para que se vea nítida en la pantalla del dispositivo. Por ejemplo:
        - 1x: Para pantallas estándar.
        - 2x: Para pantallas de alta densidad (como Retina).
        - 3x: Para pantallas con densidad aún mayor.
    - **El tamaño de la ventana del navegador (viewport)**: Si se especifica el ancho de cada imagen (usando descriptores como 300w, 600w, etc.), el navegador elegirá la imagen más adecuada según el ancho disponible en la ventana del navegador. En este caso, es necesario usar el atributo sizes para indicar cómo se mostrará la imagen en el layout de la página.

    ```html
    <!-- El navegador descargará la primera imagen que soporte  según el orden definido -->
    <img src="paisaje.jpg" srcset="paisaje.webp, paisaje.jpg" alt="Paisaje">

    <!-- El navegador decidirá qué imagen descargar en función del ancho del viewport -->
    <img src="paisaje.jpg" srcset="paisaje-500.jpg 500w, paisaje-1000.jpg 1000w" alt="Un paisaje">

    <!-- El navegador descargará la primera imagen que soporte y que se ajuste al ancho del viewport, según el orden definido -->
    <img 
        src="paisaje.jpg" 
        srcset="paisaje-500.webp 500w, paisaje-1000.webp 1000w, 
                paisaje-500.jpg 500w, paisaje-1000.jpg 1000w" 
        alt="Un paisaje">

    <!-- El navegador descargará la imagen más adecuada en función de la densidad de píxeles 
    - Aquí estamos ofreciendo tres versiones de la misma imagen:
        - 1x (imágenes para pantallas con densidad estándar, unos 90ppp).
        - 2x (imágenes para pantallas con el doble de densidad, como las pantallas Retina).
        - 3x (imágenes para pantallas con tres veces la densidad, como algunas pantallas de gama alta).-->
        <img src="paisaje.jpg" srcset="paisaje-500.jpg 1x, paisaje-1000.jpg 2x, paisaje-1500.jpg 3x" alt="Un paisaje">
    ```

- `sizes` se utiliza junto con `srcset` en la etiqueta `<img>`, **cuando se usan descriptores de ancho**, para indicarle al navegador con qué tamaño renderizar la imagen en pantalla según el tamaño del viewport. Si se usan descriptores de densidad, el navegador la ignora.

    ```html
    <!-- El navegador ajusta el tamaño de la imagen según el tamaño del navegador-->
    <img 
        srcset="../img/paisaje-500.webp 500w, ../img/paisaje-900.webp 900w, ../img/paisaje-1400.webp 1400w, 
                ../img/paisaje-500.jpg 500w, ../img/paisaje-900.jpg 900w, ../img/paisaje-1400.jpg 1400w"
        sizes="(max-width: 799px) 100vw,
            (min-width: 800px) and (max-width: 1199px) 50vw,
            (min-width: 1200px) 33vw"
        src="../img/paisaje-900.jpg"
        alt="Un bonito paisaje">

    <!-- Descripción del ejemplo: 
    - srcset proporciona una lista de imágenes en diferentes resoluciones y formatos, junto con sus anchos en píxeles (usando el descriptor w).
        En este caso, se ofrecen dos formatos de imagen: WebP (moderno y más eficiente) y JPG (compatible con todos los navegadores).
        Las imágenes están disponibles en tres tamaños:
            - 500 píxeles de ancho (500w).
            - 900 píxeles de ancho (900w).
            - 1400 píxeles de ancho (1400w).
        Esto permite al navegador elegir la imagen más adecuada según el ancho disponible en el layout de la página.
    
    - sizes le indica al navegador cuánto espacio ocupará la imagen en la página, dependiendo del tamaño de la ventana del navegador (viewport). En este caso, se definen tres condiciones:
        (max-width: 799px) 100vw: Si el ancho de la ventana es de 799 píxeles o menos, la imagen ocupará el 100% del ancho del viewport (100vw).
        (min-width: 800px) and (max-width: 1199px) 50vw: Si el ancho de la ventana está entre 800 y 1199 píxeles, la imagen ocupará el 50% del ancho del viewport (50vw).
        (min-width: 1200px) 33vw: Si el ancho de la ventana es de 1200 píxeles o más, la imagen ocupará el 33% del ancho del viewport (33vw).
    Con esta información, el navegador puede calcular cuál de las imágenes en srcset es la más adecuada para cargar.
    
    - src proporciona una imagen de respaldo para navegadores que no soportan srcset o sizes.
        En este caso, se usa ../img/paisaje-900.jpg como imagen predeterminada.
    - alt proporciona un texto alternativo para la imagen, que se muestra si la imagen no puede cargarse o para mejorar la accesibilidad (por ejemplo, para lectores de pantalla).

    ¿Cómo funciona esto en la práctica?

    El navegador evalúa el ancho de la ventana (viewport) y aplica la regla correspondiente en sizes para determinar cuánto espacio ocupará la imagen.
    Luego, elige la imagen más adecuada de srcset basándose en:
        El ancho calculado (según sizes).
        La densidad de píxeles de la pantalla.
        El formato de imagen compatible (por ejemplo, si el navegador soporta WebP, elegirá esa versión en lugar de JPG).
    Si el navegador no soporta srcset o sizes, simplemente carga la imagen definida en src.    -->

    ```
----

## 2. La etiqueta `<picture>`

La etiqueta `<picture>` es una opción más avanzada y flexible. Permite especificar diferentes versiones de una imagen para adaptarse a las características del dispositivo (como el tamaño del viewport, la resolución de pantalla y la compatibilidad con formatos específicos).

```html
<!-- Se sirven dos formatos distintos de la misma imagen -->
<picture>
  <source srcset="paisaje.webp" type="image/webp">
  <source srcset="paisaje.jpg" type="image/jpeg">
  <img src="paisaje.jpg" alt="Paisaje">
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








Entonces, ¿cuál elegir?

    Si solo te importa usar WebP cuando sea posible y no necesitas controlar otros factores como medios o tamaños específicos:
    Usar srcset con <img> es suficiente, ya que si WebP está primero, y el navegador lo soporta, lo elegirá.

    Si quieres más control sobre las condiciones en las que se cargan las imágenes (por ejemplo, diferenciar entre dispositivos con soporte de WebP y sin soporte, o diferentes tamaños de pantalla)**:
    Usar <picture> te da más flexibilidad, permitiéndote definir diferentes fuentes con criterios más complejos, como el uso de media queries.


Diferencias clave de <picture> frente a srcset en <img>:

    Control sobre formatos y medios:
        Con <picture>, puedes usar el atributo media para especificar condiciones adicionales basadas en el tamaño de la pantalla, la resolución o incluso el tipo de dispositivo. Esto te permite ofrecer diferentes formatos de imagen según las características del dispositivo.
        Por ejemplo, podrías elegir WebP para pantallas de alta resolución (Retina), pero una imagen JPEG o PNG para dispositivos que no soportan WebP.

    Selección de imágenes basada en más criterios:
        Puedes definir múltiples fuentes de imágenes con <source> dentro de <picture>. Esto te permite no solo ofrecer diferentes formatos, sino también condiciones específicas sobre cuándo mostrar cada formato.
        Por ejemplo:

        <picture>
          <source srcset="paisaje.webp" type="image/webp">
          <source srcset="paisaje.jpg" type="image/jpeg">
          <img src="paisaje.jpg" alt="Paisaje">
        </picture>

        Aquí, el navegador seleccionará WebP si es compatible, y si no, caerá al formato JPEG.

    Flexibilidad para manejar diversos casos:
        srcset con <img> es útil para ofrecer diferentes tamaños de imagen, pero no te da el mismo control sobre formatos alternativos basados en características de los dispositivos.
        Con <picture>, puedes decirle al navegador qué imagen elegir según el contexto (tamaño de pantalla, densidad de píxeles, soporte de formato, etc.).

Resumiendo:

    Con srcset en <img>, el navegador simplemente elegirá el primer formato compatible según el orden que pongas, y usará el tamaño adecuado para la pantalla.

    Con <picture>, tienes un control más detallado, pudiendo especificar diferentes fuentes de imágenes y usar media queries para que el navegador seleccione la mejor opción según una variedad de condiciones (tamaño de la pantalla, tipo de imagen, etc.).

Entonces, lo que aporta <picture> es mayor capacidad de personalización en función del dispositivo o del entorno, no solo ofrecer un orden de formatos, sino también condiciones específicas para cada caso.





Con <img> y srcset, el navegador elige la mejor imagen según el ancho y densidad de píxeles, sin priorizar formatos.
Con <picture> y <source>, el navegador elige el primer formato compatible, antes de considerar el tamaño.


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