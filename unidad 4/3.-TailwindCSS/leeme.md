# Tailwind CSS

1. [Características](#1--características)
2. [Uso](#2--uso)
3. [Clases de utilidad esenciales](#3--clases-de-utilidad-esenciales)
4. [Diseño adaptable](#4--diseño-adaptable)
5. [Personalización](#5--personalización)
6. [Creación de componentes reutilizables](#6--creación-de-componentes-reutilizables)
7. [Organización del código](#7--organización-del-código)
8. [Extensiones](#8--extensiones)

----

# 1- Características 

Tailwind CSS es un entorno (framework) de CSS que permite diseñar interfaces sin más que agregar clases ya predefinidas al HTML.

- **Basado en utilidades** (utility-first): Define una gran cantidad de clases pequeñas, es decir, que modifican una sola propiedad CSS. Estas clases se aplican directamente en el fichero HTML. Por contra, otros entorno (frameworks) definen clases muy grandes que modifican muchas propiedades CSS y que, por sí solas, ya le dan aspecto a un componente como, por ejemplo, `btn` y `btn-primary` en `bootstrap`
```html
<button class="btn btn-primary">Botón de bootstrap</button>
<button class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">botón de tailwindcss</button>
```

- **Componentes y Directivas**: Aunque Tailwind es un entorno de utilidades, también permite la creación de componentes reutilizables mediante el uso de directivas como `@apply` en archivos CSS, o mediante la creación de clases personalizadas en el HTML.

- **Sin estilos por defecto** "unstyled by default": Tailwind no aplica estilos predeterminados a los elementos HTML, a diferencia de otros frameworks como Bootstrap o incluso los estilos que vienen por defecto en los navegadores:
  - **Sin márgenes predeterminados**. Elementos como `<h1>`, `<p>`, `<blockquote>`, etc., no tienen márgenes por defecto lo que evita inconsistencias entre navegadores.
  - **Encabezados sin estilo**. `<h1>`, `<h2>`, etc., no tienen un tamaño de fuente o peso predeterminado.
  - **Listas sin viñetas ni margen**. `<ul>` y `<ol>` no tienen estilos predeterminados. 
  - **Imágenes y elementos sustituidos como svg, video, canvas son display: block**. En HTML normal, las imágenes (`<img>`) son inline. Tailwind las convierte en display: block por defecto para evitar problemas con espacios en blanco no deseados.

- **Nombre de las clases muy descriptivo**: El nombre de las clases permite saber perfectamente qué hacen sin estudiar su código. Algunas clases tienen modificadores para mostrar que una cantidad ha cambiado o que una clase sólo se aplica a ciertas resoluciones.

- **Altamente personalizable**: A través del archivo `tailwind.config.js`, se pueden modificar colores, tamaños, tipografías y más.

- **Modo JIT (Just-In-Time)**: El modo JIT compila sólo las clases que realmente se usan en el HTML, en lugar de generar un archivo CSS con todas las clases posibles. Esto mejora significativamente el rendimiento al reducir el tamaño del archivo CSS y acelerar la carga de la página.

- **Diseño adaptable (responsive design)**: El diseño se adapta a todas las pantallas mediante el uso de prefijos en las clases que indican para qué resolución es válida dicha clase.

- **Normalización de estilos** mediante su clase `@tailwind base` para ofrecer una base consistente y eliminar diferencias de estilo entre los navegadores debido a los estilos predeterminados del navegador. No se realiza un reinicio completo. Esto incluye:
  - Eliminación de márgenes y paddings por defecto en la mayoría de los elementos.
  - Establecimiento de un tamaño de fuente y line-height básicos.
  - Todos los elementos de encabezado están completamente sin estilo por defecto y tienen el mismo tamaño de fuente y peso de fuente que el texto normal.
  - Las listas están sin estilo por defecto, sin viñetas / números y sin margen o relleno.
  - Los elementos de formulario están sin estilo, pero no pierden comportamientos interactivos.

- **Enfoque móvil-primero (mobile-first)** Las clases **sin prefijo** se aplican a todos los tamaños de pantalla y se definen prefijos para pantallas mayores que las de un móvil (640px en adelante). Por tanto, se diseña primero para móviles y luego se aplican clases para el resto de pantallas.
  ```html
  <p class="text-center sm:text-left">Texto centrado en móviles, alineado a la izquierda en pantallas más grandes</p>
  ```

  En este ejemplo:
  - En pantallas pequeñas, los elementos se apilan (`flex-col`).
  - A partir de `md:`, los elementos se colocan en fila (`flex-row`).

  ```html
  <article class="flex flex-col md:flex-row">
    <article class="p-4 bg-blue-300">Elemento 1</article>
    <article class="p-4 bg-blue-400">Elemento 2</article>
  </article>
  ```

Por tanto: 
  - **Las clases sin prefijo son globales y afectan a todos los tamaños de pantalla**.
  - **No se usa `sm:` para móviles**: simplemente usa la clase sin prefijo.
  - **Las clases con prefijo solo se aplican en el tamaño especificado y mayores**.


## Ventajas
- Las clases son totalmente reutilizables.
- Los nombres de las clases permiten saber perfectamente qué hacen.
- No hay que crear clases nuevas para cada componente (si no se usa entorno o framework) o modificar las que ya trae el entorno (framework) para adaptarlas a las necesidades del proyecto.
- El aspecto visual tiene más variabilidad y evita que todos los proyectos se vean iguales, como suele ocurrir con otros frameworks predefinidos.
- El diseño es adaptable mediante el uso de clases como `sm:`, `md:`, `lg:`.

## Desventajas
- El código HTML se hace más grande.
- En ocasiones puede ser necesario escribir muchas clases para darle el formato adecuado.
- Requiere un cambio de mentalidad si se está acostumbrado a CSS tradicional o a entornos como Bootstrap.

----

# 2- Uso
Se puede usar TailWindCSS mediante la inclusión de un enlace a un CDN (Content Delivery Network) o instalándolo mediante node

1. **Uso como recurso remoto**. Para probar Tailwind CSS o para proyectos pequeños, se puede usar un CDN:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
      <title>Ejemplo Tailwind</title>
    </head>
    <body>
      <h1 class="text-3xl font-bold underline">Hola, Tailwind CSS</h1>
    </body>
    </html>
    ```

    Esto es cómodo porque no hay que configurar nada, sólo incluir el enlace al CDN, pero se descarga todo el código de Tailwind, incluidas las clases que no se usen. En proyectos grandes es un pequeño sobrecoste a pagar por la comodidad, pero en proyectos pequeños la situación es peor porque posiblemente contenga muchas clases que no se usen. 

    El resultado es que se descarga un fichero más grandes de lo que se necesita, pudiendo afectar el rendimiento de la página al cargarla.
  
2. **Uso como recurso local**. Ideal para para proyectos más complejos y avanzados, donde se necesita poder cambiar la configuración.

Con esta opción, el fichero de clases de tailwindcss que se usa es el menor posible, porque no incluye las clases que no se utilizan y, además, si se usa un empaquetadaor, el código estará minimizado. Como desventaja, está que hay que **configurar el entorno** y **compilar el código tailwindcss** para que se genere un fichero sólo con las clases necesarias

En esta instalación se va a usar **node** y **parcel**, que ya minimiza, traduce SASS, autoprefija y empaqueta. Si se usara otro, es posible que hiciera falta instalar más paquetes.

  1. **Instalar Node.js**.

  2. **Iniciar el proyecto desde su directorio con `npm init`**.  
    Responde a las preguntas para generar el archivo `package.json`, que es el archivo de configuración para Node.js.  
    No uses mayúsculas, espacios o caracteres especiales en el campo «name».

  3. **Instalar tailwindcss** para node
      ```bash
      npm install --save-dev tailwindcss @tailwindcss/cli
      ```

  2. **Crear archivo de configuración** de tailwindcss (`tailwindcss.config.js`)
      ```bash
      npx taildinwdcss init
      ```

      Ejemplo de configuración de `tailwind.config.js` para indicarle a tailwindcss qué ficheros analizar, generando sólo las clases CSS necesarias


      ```javascript
      module.exports = {
        content: ["./src/**/*.{html,js}"],
        theme: {
          extend: {},
        },
        plugins: [],
      }
      ```

  3. **Incluir Tailwind** en el archivo CSS. En la versión antigua, hay que incluir:
      - `@tailwind base`: Incluye los estilos base predeterminados de Tailwind, como los reinicios de CSS y la normalización de estilos entre navegadores.
      - `@tailwind components`: Importa los estilos predefinidos de componentes que Tailwind incluye por defecto (como botones, formularios, etc.). Aunque estos componentes no son tan extensivos como los de otros marcos, se incluyen algunos básicos.
      - `@tailwind utilities`: Trae las clases utilitarias de Tailwind, que son las que usas más comúnmente (como m-6, text-center, bg-blue-500, etc.).

     En la versión nueva: `@import "tailwindcss"`

      ```css
      /*versión antigua:
      @tailwind base;
      @tailwind components;
      @tailwind utilities;*/

      /*Versión nueva */
      @import "tailwindcss";
      ```

  4. Configurar el empaquetador para incluir el CSS, prefijar, minimizar y empaquetar
  
  5. Añadir los scripts de tailwindcss a `package.json`
      ```json
      "scripts":{
        "compila": "tailwindcss -i ./fuente/estilos/principal.css -o ./fuente/estilos/salida.css",
        "vigila": "tailwindcss -i ./fuente/estilos/principal.css -o ./fuente/estilos/salida.css --watch",
      }
      ```

  6. Enlazar el archivo compilado de tailwindcss (salida.css) en el html
      ```html
      <link rel="stylesheet" href="../estilos/salida.css" type="text/css">
      ```

----
    
# 3- Clases de utilidad esenciales
Tailwind CSS proporciona una gran cantidad de clases de utilidad para modificar directamente el estilo de los elementos en HTML. Algunas de las más usadas incluyen:

- **Colores**: Tailwind ofrece una paleta de colores predefinida que se puede aplicar a fondos, textos y bordes:
```html
<article class="p-4 text-white bg-blue-500">Fondo azul</article>
<p class="text-red-600">Texto rojo</p>
<article class="p-2 border border-gray-300">Borde gris</article>
```

- **Espaciado (márgenes y padding)**: Controla el espaciado con `m-` (margen) y `p-` (padding):
```html
<article class="p-6 m-4 bg-gray-100">Margen de 4 y padding de 6</article>
```
Las clases `mt-`, `mb-`, `ml-` y `mr-` permiten ajustar márgenes inarticleidualmente.

- **Tipografía**: Modifica el tamaño, peso y alineación del texto:
```html
<p class="text-lg font-bold text-center">Texto grande y en negrita</p>
```

- **Posicionamiento**, usando flexbox y grid:
```html
<article class="flex items-center justify-center h-64 bg-gray-200">
  <p>Centro</p>
</article>
```
```html
<article class="grid grid-cols-3 gap-4">
  <article class="p-4 bg-blue-300">1</article>
  <article class="p-4 bg-blue-400">2</article>
  <article class="p-4 bg-blue-500">3</article>
</article>
```

- **Bordes y sombras**: Redondea bordes y aplica sombras con facilidad:
```html
<article class="p-4 bg-white rounded-lg shadow-md">Caja con borde redondeado y sombra</article>
```

Estas son solo algunas de las clases esenciales de Tailwind. Con ellas, puedes construir interfaces rápidamente sin necesidad de escribir CSS personalizado.

## Ejemplo de uso
```html
<button class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
  Clic aquí
</button>
```

----

# 4- Diseño adaptable

En Tailwind CSS, el diseño adaptable se logra utilizando prefijos que permiten aplicar estilos específicos a diferentes tamaños de pantalla. Estos prefijos se asocian a puntos de interrupción (breakpoints) que Tailwind tiene predefinidos. 

| Prefijo | Tamaño mínimo |
|---------|--------------|
| `sm:`   | 640px        |
| `md:`   | 768px        |
| `lg:`   | 1024px       |
| `xl:`   | 1280px       |
| `2xl:`  | 1536px       |

Las clases **con prefijo** (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) solo se aplican a partir de ese punto de ruptura y en adelante. Por ejemplo, `md:text-center` aplicará la propiedad `text-align: center` solo en pantallas de, como mínimo, 768px de anchura.


```html
<article class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-yellow-500">
  <p>Este article cambiará de color dependiendo del tamaño de la pantalla.</p>
</article>
```
----------

# 5- Personalización

Tailwind CSS es altamente configurable y permite personalizar los estilos predeterminados a través del archivo `tailwind.config.js`. Este archivo permite agregar o sobreescribir colores, tamaños, fuentes y configuraciones predeterminadas para adaptarlas a las necesidades del proyecto. 

- Ejemplo de ampliación de colores

  ```js
  module.exports = {
    theme: {
      extend: {
        colors: {
          'custom-blue': '#1DA1F2',
          'custom-green': '#17BF63',
        },
      },
    },
  }
  ```
  
  Tras añadir dos nuevos colores: custom-blue y custom-green, ahora se pueden utilizar estos colores en las clases de Tailwind:
  ```html
  <article class="text-white bg-custom-blue">
    <p>Este fondo es de color personalizado.</p>
  </article>
  ```

- Ejemplo de ampliación de tamaños
  ```js
  module.exports = {
    theme: {
      extend: {
        spacing: {
          '128': '32rem', // Tamaño personalizado para márgenes, rellenos, etc.
        },
      },
    },
  }
  ```

  Ahora se puede utilizar este nuevo tamaño en el proyecto:
  ```html
  <article class="mt-128">
    <p>Este margen superior tiene el tamaño personalizado de 32rem.</p>
  </article>
  ```

- Ejemplo de SUSTITUCIÓN de fuentes. Se elimina la palabra sección extend
  ```js
  module.exports = {
    theme: {
      fontFamily: {
        'custom-font': ['"Roboto"', 'sans-serif'],
      },
    },
  }
  ```

  Después de esto, se puede usar la nueva fuente personalizada en el HTML:
  ```html
  <div class="font-custom-font">
    <p>Este texto usa la fuente personalizada "Roboto".</p>
  </div>
  ```

----

# 6- Componentes reutilizables

Un **componente** es una unidad reutilizable de código que, encapsula los estilos CSS necesarios para darle una apariencia agradable de forma rápida a una web. Los componentes permiten modularizar la interfaz de usuario, facilitando su mantenimiento y reutilización en diferentes partes de un proyecto. Hay dos tipos de componentes reutilizables, según quien los construya: el usuario o alguna empresa externa

## Construidos por el usuario

Aunque no sea la filosofía de TailWindCSs, se puede crear componentes reutilizables para evitar la repetición de clases mediante el uso de `@apply`, una directiva de Tailwind que permite agrupar varias clases utilitarias en una sola clase personalizada.

Ejemplo: creación de un botón reutilizable con estilos predeterminados, como un fondo de color, bordes redondeados y un poco de sombra. En lugar de escribir las mismas clases en cada botón del proyecto, se puede usar `@apply` para definir una clase personalizada en el archivo CSS.

```css
/* styles.css */
.btn {
  @apply bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700;
}
```

```html
<button class="btn">
  Hacer clic
</button>
```

## Construidos por empresas externas

Otra opción es usar bibliotecas de componentes reutilizables de otras empresas que proporcionan componentes preconstruidos optimizados para Tailwind CSS. Algunas son:

 1. **Flowbite**: Rapidez y falicidad de uso
 2. **DaisyUI**: Rapidez y falicidad de uso
 3. **Headless UI**: Flexibilidad total
 4. **Tailwind UI**: Diseños profesionales de los creadores de Tailwindcss
 5. **Preline UI**: Gratuito

Uso de flowbite
  Flowbite ofrece una serie bastante amplia de componentes en su web. Algunos ofrecen simplemente un diseño bonito y otros tienen cierta funcionalidad. Éstos últimos necesitan de código JavaScript, que flowbite ofrece, para funcionar.

  Se puede ir a su web, copiar el código y pegarlo en nuestra web, pero los componentes que necesiten de JavaScript, no funcionarán. Para ello, hay que usar el CDN o servirlo en local usando node

  - Enlace con un CDN
    ```html
      <!--Uso de flowbite con CDN-->
      <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.1/dist/flowbite.min.css" rel="stylesheet" />
      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.1/dist/flowbite.min.js" defer></script>
    ```

  - Instalación en node:
      ```bash
      npm install flowbite
      ```
  
  - Importar flowbit como una extensión dentro de principal.css
      ```css
        @plugin "flowbite/plugin"
      ```
  - Añadir el código JavaScript al principal.css
      ```css
      @source "../node_modules/flowbite";
      ```
  - Añadir el script al html. Si se usa un empaquetador, éste cogerá el fichero y lo pondrá en la carpeta local al empaquetar
      ```html
      <script src="../node_modules/flowbite/dist/flowbite.min.js"></script>
      ```


----

# 7- Organización del código

El orden de las clases en un archivo HTML no afecta el funcionamiento del código en Tailwind CSS, pero seguir un **orden lógico y consistente** puede mejorar la **legibilidad**, **mantenibilidad** y facilitar la **colaboración** en proyectos más grandes. Aunque no hay un estándar definido de cómo ordenar las clases en la documentación oficial, una agrupación que se suele hacer en la práctica es:

  1. Las clases que afectan la **estructura** (disposición del elemento) suelen colocarse primero, porque estas son las que definen la estructura general.
  2. Las clases de **colores y fondos** se aplican una vez que la estructura está resuelta, ya que estas afectan el aspecto visual del elemento, pero no su posición o disposición.
  3. El **espaciado** se coloca después de los colores, porque generalmente el espaciado se ajusta después de aplicar la disposición de la estructura.
  4. La **tipografía** entra después de que se ha organizado el espaciado y los colores, ya que la tipografía es una propiedad importante pero que tiene un impacto visual posterior al color y el espaciado.
  5. Las **interacciones de estado** (como hover, focus, etc.) suelen ir al final, ya que estas clases son para definir cómo el elemento debe reaccionar a las interacciones del usuario, que es lo último que generalmente modificamos en el proceso de estilización.

Por tanto el orden recomendado sería:
- **1. Diseño y estructura**: clases como `container`, `flex`, `grid`, `block`, `inline`, etc.
- **2. Colores y fondos**: clases como `bg-blue-500`, `text-white`, `border-gray-300`, etc.
- **3. Espaciado**: clases como `p-4`, `m-2`, `mt-4`, `mx-auto`, etc.
- **4. Tipografía**: clases como `text-lg`, `font-semibold`, `leading-tight`, etc.
- **5. Bordes y sombras**: clases como `rounded-lg`, `bashadow-md`, `border`, etc.
- **6. Estado y comportamiento**: clases como `hover:bg-blue-700`, `focus:outline-none`, `active:bg-blue-500`, etc.

Hay extensiones que ordenan automáticamente las clases como, por ejemplo, `prettier` o `Headwind`. Aunque ya lo incluyen por defecto, se puede configurar cómo queremos que ordenen abriendo `~/.config/Code/User/settings.json`

Ejemplo de desorganización. Está puesto así para que el organizador automático de clases no cambie el orden y se vea el desorden
```html
<div class p-4 bg-gray-200 container mt-4 flex justify-center items-center rounded-lg shadow-md>
  <button class text-white bg-blue-500 hover:bg-blue-700 focus:outline-none p-2 rounded-lg shadow-sm>
    Hacer clic
  </button>
</div>
```

Ejemplo de código organizado
```html
<div class="container flex items-center justify-center p-4 mt-4 bg-gray-200 rounded-lg shadow-md">
  <button class="p-2 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none">
    Hacer clic
  </button>
</div>
```

En el ejemplo:
  1. Diseño y estructura: container, flex, justify-center, items-center
  2. Colores y fondos: bg-gray-200, bg-blue-500, text-white
  3. Espaciado: p-4, p-2, mt-4
  4. Bordes y sombras: rounded-lg, shadow-md, shadow-sm
  5. Estado y comportamiento: hover:bg-blue-700, focus:outline-none

---

# 8- Extensiones
Las extensiones (plugins) de Tailwind CSS son una forma de ampliar su funcionalidad agregando nuevas utilidades, componentes o características que no están incluidas de forma predeterminada. Estos plugins pueden ser oficiales (creados y mantenidos por el equipo de Tailwind CSS) o de la comunidad, y pueden ayudar a personalizar aún más un proyecto sin tener que escribir demasiado CSS manualmente.

Tipos de extensiones en Tailwind CSS:

1. **Oficiales**: Algunos de estos incluyen:
    - **@tailwindcss/forms**: Proporciona un conjunto de estilos prediseñados para formularios (inputs, selectores, botones, etc.), haciéndolos más fáciles de usar y personalizar.
    - **@tailwindcss/typography**: Mejora el estilo de los textos largos (como artículos o blogs), dándoles un aspecto más bonito sin tener que crear estilos adicionales.
    - **@tailwindcss/aspect-ratio**: Ayuda a controlar la proporción de un elemento (como un video o una imagen), sin tener que calcular manualmente los valores de padding-bottom.
    - **@tailwindcss/line-clamp**: Permite truncar el texto a un número específico de líneas, agregando el comportamiento de "línea de puntos suspensivos" (ellipsis).

2. De la comunidad
    - **tailwindcss-animations**: Agrega animaciones.
    - **tailwindcss-gradients**: Añade gradientes personalizados de manera más sencilla.
    - **tailwindcss-rtl**: Agrega soporte para idiomas de lectura de derecha a izquierda (como árabe o hebreo).

Para instalar las extensiones, sean oficiales o no, hay que

  1. Instalarlas en node
      ```bash
      npm install @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio @tailwindcss/line-clamp
      ```
  2. Habilitarlas en `tailwind.config.js`
      ```javascript
      module.exports = {
        plugins: [
          require('@tailwindcss/forms'),
          require('@tailwindcss/typography'),
          require('@tailwindcss/aspect-ratio'),
          require('@tailwindcss/line-clamp'),
        ],
      }
      ```
-----

# 9- Bibliotecas de componentes

