# Tailwind CSS

1. [Características](#1--características)
2. [Uso](#2--uso)
3. [Clases de utilidad esenciales](#3--clases-de-utilidad-esenciales)
4. [Diseño adaptable](#4--diseño-adaptable)
5. [Personalización](#5--personalización)
6. [Creación de componentes reutilizables](#6--creación-de-componentes-reutilizables)
7. [Organización del código](#7--organización-del-código)

----
Tailwind CSS es un entorno (framework) de CSS que permite diseñar interfaces sin más que agregar clases ya predefinidas al HTML.

# 1- Características 

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

- **Elimina CSS innecesario**: Utiliza PurgeCSS para eliminar clases no utilizadas en la producción, reduciendo el tamaño del CSS final.

- **Modo JIT (Just-In-Time)**: El modo JIT compila sólo las clases que realmente se usan en el HTML, en lugar de generar un archivo CSS con todas las clases posibles. Esto mejora significativamente el rendimiento al reducir el tamaño del archivo CSS y acelerar la carga de la página.

- **Diseño adaptable (responsive design)**: El diseño se adapta a todas las pantallas mediante el uso de prefijos en las clases que indican para qué resolución es válida dicha clase.

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
      <script src="https://cdn.tailwindcss.com"></script>
      <title>Ejemplo Tailwind</title>
    </head>
    <body>
      <h1 class="text-3xl font-bold underline">Hola, Tailwind CSS</h1>
    </body>
    </html>
    ```

2. **Uso como recurso local**. Ideal para para proyectos más complejos y avanzados, donde se necesita poder cambiar la configuración

  1. Instalación de tailwindcss, postcss y autoprefixer
    ```bash
    npm install --save-dev tailwindcss postcss autoprefixer
    npx tailwindcss init
    ```
    ¿Por qué se necesita PostCSS y autoprefixer?
    - **PostCSS** procesa las clases utilitarias generadas por el framework, optimizando el código CSS, eliminando clases innecesarias y haciendo que el archivo resultante sea más pequeño y eficiente. Además, puede ayudar a compilar cualquier característica de CSS moderna que no sea compatible con todos los navegadores, a través de plugins adicionales.
    - **Autoprefixer** agrega automáticamente los prefijos necesarios para que el CSS sea compatible con diferentes navegadores. A menudo, las propiedades CSS no son completamente soportadas en todos los navegadores, por lo que se añaden prefijos como -webkit- o -moz-. Autoprefixer automatiza este proceso, asegurando que tu CSS funcione correctamente en una amplia gama de navegadores sin que tengas que agregar estos prefijos manualmente.

  2. Creación del archivo de configuración de tailwindcss (`tailwindcss.config.js`)
    ```bash
    npx taildinwdcss init
    ```
    Ejemplo de configuración de `tailwind.config.js` para indicarle a tailwindcss qué ficheros analizar, generando sólo las clases CSS necesarias
    ```js
    module.exports = {
      content: ["./src/**/*.{html,js}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

  3. Crear el archivo de configuración de PostCSS
    ```javascript
    module.exports = {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    }
    ```
  
  4. Incluir Tailwind en el archivo CSS

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

  5. Configurar el empaquetador para incluir el CSS, prefijar, minimizar y empaquetar (en este caso no es necesario porque se usa parcel)
  
  6. Crear los scripts en `package.json`
  ```json
    "scripts":{
      "parcel:desarrollo": "parcel fuente/index.html --dist-dir desarrollo",
      "parcel:produccion": "parcel build fuente/index.html --public-url './' --dist-dir 'produccion'",

      "tailwind:una-vez": "tailwindcss -i ./fuente/estilos/principal.css -o ./fuente/estilos/salida.css",
      "tailwind:vigila": "tailwindcss -i ./fuente/estilos/principal.css -o ./fuente/estilos/salida.css --watch",
  
      "des": "run-p tailwind:vigila parcel:desarrollo",
      "prod": "run-s limpia tailwind:una-vez parcel:produccion",
  
      "limpia": "rimraf desarrollo produccion .parcel-cache",
      "ordena": "prettier --write fuente"
    }
    
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

  Ahora puedes utilizar este nuevo tamaño en tu proyecto:
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

# 6- Creación de componentes reutilizables

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
