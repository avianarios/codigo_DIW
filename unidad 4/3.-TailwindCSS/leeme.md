# Tailwind CSS

Tailwind CSS es un framework de CSS que permite diseñar interfaces utilizando clases de utilidad en HTML. A diferencia de frameworks como Bootstrap, Tailwind no proporciona componentes predefinidos, sino que facilita la construcción de estilos personalizados de manera eficiente y flexible.

## Características principales
- **Basado en utilidades**: Define clases que modifican una sola propiedad CSS y que cuentan con un nombre muy descriptivo como, por ejemplo, `flex`, `pt-4`, `text-center`, etc.. Estas clases se aplican directamente en el fichero HTML. Por contra, otros frameworks definen clases que, por sí solas, ya le dan aspecto a un componente como, por ejemplo, `btn` y `btn-primary` en `bootstrap`
```html
<button class="btn btn-primary">Botón de bootstrap</button>
<button class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">botón de tailwindcss</button>
```
- **Altamente personalizable**: A través del archivo `tailwind.config.js`, se pueden modificar colores, tamaños, tipografías y más.
- **Elimina CSS innecesario**: Utiliza PurgeCSS para eliminar clases no utilizadas en la producción, reduciendo el tamaño del CSS final.
- **Modo JIT (Just-In-Time)**: Genera las clases de manera dinámica a medida que se usan, mejorando el rendimiento y reduciendo el tamaño del archivo CSS.
- **Diseño adaptable**: Define prefijos de puntos de ruptura en las clases. Por ejemplo, md:text-center aplicará la propiedad text-align: center solo en pantallas de tamaño medio (medium) y superiores.
- **Componentes y Directivas**: Aunque Tailwind es principalmente un framework de utilidades, también permite la creación de componentes reutilizables mediante el uso de directivas como @apply en archivos CSS, o mediante la creación de clases personalizadas en el HTML.

## Instalación
### Usando npm
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### Configuración básica (`tailwind.config.js`)
```js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Uso en CSS
En un archivo CSS, importa Tailwind:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Ejemplo de uso
```html
<button class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
  Clic aquí
</button>
```

## Ventajas
- Evita escribir CSS repetitivo.
- Diseño responsivo mediante clases como `sm:`, `md:`, `lg:`.
- Mejora la coherencia y mantenibilidad del código.

## Desventajas
- Puede hacer que el HTML se vea saturado de clases.
- Requiere un cambio de mentalidad si se está acostumbrado a CSS tradicional o a frameworks como Bootstrap.

## Recursos
- [Documentación oficial](https://tailwindcss.com/)
- [Playground de Tailwind](https://play.tailwindcss.com/)
