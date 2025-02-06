# Tailwind CSS

1. [Features](#1--features)
2. [Usage](#2--usage)
3. [Essential Utility Classes](#3--essential-utility-classes)
4. [Responsive Design](#4--responsive-design)
5. [Customization](#5--customization)
6. [Creating Reusable Components](#6--creating-reusable-components)
7. [Code Organization](#7--code-organization)
9. [Plugins](#8--plugins)

----

# 1- Features
Tailwind CSS is a CSS framework that allows designing interfaces by simply adding pre-defined classes to HTML.

- **Utility-first approach**: It defines a large number of small classes, meaning each class modifies a single CSS property. These classes are applied directly in the HTML file. In contrast, other frameworks define large classes that modify many CSS properties and provide a predefined look to components, such as `btn` and `btn-primary` in `Bootstrap`:
```html
<button class="btn btn-primary">Bootstrap button</button>
<button class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Tailwind CSS button</button>
```

- **Components and Directives**: Although Tailwind is a utility-first framework, it also allows creating reusable components using directives like `@apply` in CSS files or by defining custom classes in HTML.

- **Unstyled by default**: Tailwind does not apply default styles to HTML elements, unlike other frameworks like Bootstrap or even browser default styles:
  - **No default margins**. Elements like `<h1>`, `<p>`, `<blockquote>`, etc., do not have default margins, preventing inconsistencies between browsers.
  - **Unstyled headings**. `<h1>`, `<h2>`, etc., do not have a predefined font size or weight.
  - **Lists without bullets or margins**. `<ul>` and `<ol>` do not have default styles.
  - **Images and replaced elements like `<svg>`, `<video>`, and `<canvas>` use `display: block`**. By default, images (`<img>`) are inline in HTML. Tailwind sets them to `display: block` by default to avoid unwanted whitespace issues.

- **Descriptive class names**: Class names clearly indicate what they do without needing to inspect the CSS code. Some classes have modifiers to specify size variations or resolution-specific application.

- **Highly customizable**: Using the `tailwind.config.js` file, colors, sizes, fonts, and more can be modified.

- **JIT (Just-In-Time) Mode**: JIT mode compiles only the classes actually used in the HTML instead of generating a CSS file with all possible classes. This significantly improves performance by reducing CSS file size and speeding up page load times.

- **Responsive design**: Tailwind enables responsive design by using class prefixes that indicate the resolution at which a class applies.

- **Style normalization** using its `@tailwind base` class to provide a consistent base and eliminate style differences between browsers due to browser defaults. No hard reset is performed. This includes:
  - Removal of default margins and paddings on most elements.
  - Setting a basic font size and line-height.
  - All heading elements are completely unstyled by default and have the same font size and font weight as normal text.
  - Lists are unstyled by default, with no bullets/numbers and no margin or padding.
  - Form elements are unstyled, but do not lose interactive behaviours.
  
- **Mobile-first approach**: Classes **without prefixes** apply to all screen sizes, and prefixes are used for screens larger than mobile (640px and above). The design starts with mobile screens, and additional classes are applied for larger screens.
  ```html
  <p class="text-center sm:text-left">Centered text on mobile, left-aligned on larger screens</p>
  ```
  
  Example:
  - On small screens, elements stack (`flex-col`).
  - From `md:` onwards, elements are arranged in a row (`flex-row`).
  ```html
  <article class="flex flex-col md:flex-row">
    <article class="p-4 bg-blue-300">Element 1</article>
    <article class="p-4 bg-blue-400">Element 2</article>
  </article>
  ```
  
  Therefore:
  - **Classes without prefixes are global and affect all screen sizes**.
  - **Do not use `sm:` for mobile**; just use the class without a prefix.
  - **Prefixed classes only apply to the specified size and larger**.

## Advantages
- Classes are fully reusable.
- Class names clearly indicate their function.
- No need to create new classes for each component or modify pre-existing framework classes.
- Provides greater visual variety, preventing projects from looking identical, as often happens with predefined frameworks.
- Responsive design is easily implemented using classes like `sm:`, `md:`, `lg:`.

## Disadvantages
- HTML code becomes larger.
- Sometimes many classes are needed to achieve the desired styling.
- Requires a shift in mindset if accustomed to traditional CSS or frameworks like Bootstrap.

----

# 2- Usage
Tailwind CSS can be used by linking to a CDN (Content Delivery Network) or installing it via Node.js.

1. **Using a remote resource**: For testing Tailwind CSS or small projects, a CDN can be used:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
      <title>Tailwind Example</title>
    </head>
    <body>
      <h1 class="text-3xl font-bold underline">Hello, Tailwind CSS</h1>
    </body>
    </html>
    ```

2. **Using a local setup**: Recommended for more complex projects where customization is needed.

  1. Install Tailwind CSS, PostCSS, and Autoprefixer:
    ```bash
    npm install --save-dev tailwindcss postcss autoprefixer
    npx tailwindcss init
    ```
  
  2. Create the Tailwind configuration file (`tailwindcss.config.js`):
    ```js
    module.exports = {
      content: ["./src/**/*.{html,js}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

  3. **Include Tailwind** in the CSS file. In the old version, you need to include:
      - `@tailwind base`: Includes Tailwind's default base styles, such as CSS restarts and cross-browser style normalisation.
      - `@tailwind components`: Imports the predefined styles of components that Tailwind includes by default (such as buttons, forms, etc.). Although these components are not as extensive as those of other frameworks, some basic ones are included.
      - `@tailwind utilities`: Brings the Tailwind utility classes, which are the ones you use most commonly (like m-6, text-center, bg-blue-500, etc.).

     In the new version: `@import ‘tailwindcss’`.

      ```css
      /*old version:
      @tailwind base;
      @tailwind components;
      @tailwind utilities;*/

      /*new version */
      @import ‘tailwindcss’;
      ```  

  4. Configure the bundler to include, prefix, minify, and bundle the CSS.
  
  5. Add scripts to `package.json`:
    ```json
    "scripts": {
      "compile": "tailwindcss -i ./src/styles.css -o ./dist/output.css --watch",
      "watch": "tailwindcss -i ./src/styles.css -o ./dist/output.css --minify"
    }
    ```

  6. Link the compiled tailwindcss file (output.css) in the html
      ````html
      <link rel=‘stylesheet’ href=‘../styles/output.css’ type=‘text/css’>
      ```

# 3- Essential Utility Classes

Tailwind CSS provides a wide range of utility classes to directly modify the style of HTML elements. Some of the most commonly used include:

- **Colors**: Tailwind offers a predefined color palette that can be applied to backgrounds, text, and borders:
```html
<article class="p-4 text-white bg-blue-500">Blue background</article>
<p class="text-red-600">Red text</p>
<article class="p-2 border border-gray-300">Gray border</article>
```

- **Spacing (margins and padding)**: Control spacing with `m-` (margin) and `p-` (padding):
```html
<article class="p-6 m-4 bg-gray-100">Margin of 4 and padding of 6</article>
```
The classes `mt-`, `mb-`, `ml-`, and `mr-` allow individual margin adjustments.

- **Typography**: Modify text size, weight, and alignment:
```html
<p class="text-lg font-bold text-center">Large and bold text</p>
```

- **Positioning**, using flexbox and grid:
```html
<article class="flex items-center justify-center h-64 bg-gray-200">
  <p>Center</p>
</article>
```
```html
<article class="grid grid-cols-3 gap-4">
  <article class="p-4 bg-blue-300">1</article>
  <article class="p-4 bg-blue-400">2</article>
  <article class="p-4 bg-blue-500">3</article>
</article>
```

- **Borders and shadows**: Easily round borders and apply shadows:
```html
<article class="p-4 bg-white rounded-lg shadow-md">Box with rounded border and shadow</article>
```

These are just some of Tailwind's essential classes. With them, you can quickly build interfaces without needing to write custom CSS.

## Usage Example
```html
<button class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
  Click here
</button>
```

----

# 4- Responsive Design

In Tailwind CSS, responsive design is achieved using prefixes that allow styles to be applied to different screen sizes. These prefixes correspond to predefined breakpoints in Tailwind.

| Prefix  | Minimum size |
|---------|--------------|
| `sm:`   | 640px        |
| `md:`   | 768px        |
| `lg:`   | 1024px       |
| `xl:`   | 1280px       |
| `2xl:`  | 1536px       |

Classes **with a prefix** (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) only apply from that breakpoint onward. For example, `md:text-center` will apply `text-align: center` only on screens that are at least 768px wide.

```html
<article class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-yellow-500">
  <p>This article will change color depending on screen size.</p>
</article>
```

----------

# 5- Customization

Tailwind CSS is highly configurable and allows customization of default styles through the `tailwind.config.js` file. This file enables adding or overriding colors, sizes, fonts, and default settings to adapt them to the project’s needs.

- Example of extending colors

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
  
  After adding two new colors: `custom-blue` and `custom-green`, these colors can now be used in Tailwind classes:
  ```html
  <article class="text-white bg-custom-blue">
    <p>This background has a custom color.</p>
  </article>
  ```

- Example of extending spacing
  ```js
  module.exports = {
    theme: {
      extend: {
        spacing: {
          '128': '32rem', // Custom size for margins, padding, etc.
        },
      },
    },
  }
  ```

  Now you can use this new size in your project:
  ```html
  <article class="mt-128">
    <p>This top margin has a custom size of 32rem.</p>
  </article>
  ```

- Example of REPLACING fonts. The word "extend" section is removed
  ```js
  module.exports = {
    theme: {
      fontFamily: {
        'custom-font': ['"Roboto"', 'sans-serif'],
      },
    },
  }
  ```

  After this, the new custom font can be used in HTML:
  ```html
  <div class="font-custom-font">
    <p>This text uses the custom "Roboto" font.</p>
  </div>
  
----

# 6- Creating Reusable Components

A **component** is a reusable unit of code that encapsulates the CSS styles needed to quickly give a website a nice look and feel. Components allow the user interface to be modularised, making it easy to maintain and reuse in different parts of a project. There are two types of reusable components, depending on who builds them: the user or an external company.

## User-built

Although it is not TailWindCSs philosophy, reusable components can be created to avoid repetition of classes by using `@apply`, a Tailwind directive that allows to group several utility classes into a single custom class.

Example: creating a reusable button with default styles, such as a coloured background, rounded edges and some shading. Instead of writing the same classes on every button in the project, you can use `@apply` to define a custom class in the CSS file.

Translated with DeepL.com (free version)
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

## Built by third-party companies

Another option is to use reusable component libraries from other companies that provide pre-built components optimised for Tailwind CSS. Some of these are:

 1. **Flowbite**: Fast and easy to use.
 2. **DaisyUI**: Speed and ease-of-use
 3. **Headless UI**: Total flexibility
 4. **Tailwind UI**: Professional designs by the creators of Tailwindcss
 5. **Preline UI**: Free of charge

### Using flowbite
  Flowbite offers quite a wide range of components on its website. Some simply offer a nice design and others have some functionality. The latter require JavaScript code, which flowbite offers, to work.

  You can go to their website, copy the code and paste it into your website, but the components that require JavaScript will not work. For this, you have to use the CDN or serve it locally using node.

  - Link to a CDN
    ````html
    <!--Use of flowbite with CDN-->
    <link href=‘https://cdn.jsdelivr.net/npm/flowbite@3.1.1/dist/flowbite.min.css’ rel=‘stylesheet’ />
    <script src=‘https://cdn.jsdelivr.net/npm/flowbite@3.1.1/dist/flowbite.min.js’ defer></script>
    ```

  - Use with node
    - Installation as a node package:
      ````bash
      npm install flowbite
      ```
  
    - Import flowbit as an extension inside principal.css
      ````css
      @plugin ‘flowbite/plugin’
      ```
    - Add JavaScript code to main.css
      ````css
      @source ‘../node_modules

----

# 7- Code Organization

The order of classes in an HTML file does not affect how the code works in Tailwind CSS, but following a **logical and consistent order** can improve **readability**, **maintainability**, and facilitate **collaboration** in larger projects. While there is no officially defined standard in the documentation, a common practice is:

1. **Structure-affecting classes** (element positioning) are placed first, as these define the overall layout.
2. **Color and background classes** are applied once the structure is set since they affect the element’s appearance but not its position.
3. **Spacing classes** come after colors, as spacing is usually adjusted after defining the structure.
4. **Typography classes** are applied once spacing and colors are organized, as typography has a visual impact but comes after layout adjustments.
5. **State interactions** (such as hover, focus, etc.) are placed at the end, since these define how the element reacts to user interactions, which is typically one of the final styling steps.

The recommended order is:
- **1. Layout and structure**: Classes like `container`, `flex`, `grid`, `block`, `inline`, etc.
- **2. Colors and backgrounds**: Classes like `bg-blue-500`, `text-white`, `border-gray-300`, etc.
- **3. Spacing**: Classes like `p-4`, `m-2`, `mt-4`, `mx-auto`, etc.
- **4. Typography**: Classes like `text-lg`, `font-semibold`, `leading-tight`, etc.
- **5. Borders and shadows**: Classes like `rounded-lg`, `shadow-md`, `border`, etc.
- **6. State and behavior**: Classes like `hover:bg-blue-700`, `focus:outline-none`, `active:bg-blue-500`, etc.

There are extensions that automatically organize classes, such as `prettier` or `Headwind`. While they already include automatic class sorting by default, you can configure the order by opening `~/.config/Code/User/settings.json`.

Example of disorganized code. It is written this way so that the automatic class organizer does not change the order, allowing the disorganization to be visible:
```html
<div class p-4 bg-gray-200 container mt-4 flex justify-center items-center rounded-lg shadow-md>
  <button class text-white bg-blue-500 hover:bg-blue-700 focus:outline-none p-2 rounded-lg shadow-sm>
    Click Here
  </button>
</div>
```

Example of organized code:
```html
<div class="container flex items-center justify-center p-4 mt-4 bg-gray-200 rounded-lg shadow-md">
  <button class="p-2 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none">
    Click Here
  </button>
</div>
```

In this example:
1. Layout and structure: `container`, `flex`, `justify-center`, `items-center`
2. Colors and backgrounds: `bg-gray-200`, `bg-blue-500`, `text-white`
3. Spacing: `p-4`, `p-2`, `mt-4`
4. Borders and shadows: `rounded-lg`, `shadow-md`, `shadow-sm`
5. State and behavior: `hover:bg-blue-700`, `focus:outline-none`

----

# 8- Plugins

Tailwind CSS plugins are a way to extend its functionality by adding new utilities, components or features that are not included by default. These plugins can be official (created and maintained by the Tailwind CSS team) or from the community, and can help to further customise a project without having to write too much CSS manually.

Types of plugins in Tailwind CSS:

1. **Official**: Some of these include:
    - **@tailwindcss/forms**: Provides a set of pre-designed styles for forms (inputs, selectors, buttons, etc.), making them easier to use and customise.
    - @tailwindcss/typography**: Improves the styling of long texts (such as articles or blogs), giving them a nicer look without having to create additional styles.
    - **@tailwindcss/aspect-ratio**: Helps to control the proportion of an element (such as a video or an image), without having to manually calculate padding-bottom values.
    - **@tailwindcss/line-clamp**: Allows to truncate text to a specific number of lines, adding the ‘ellipsis’ (ellipsis) behaviour.

2. From the community
    - **tailwindcss-animations**: Adds animations.
    - **tailwindcss-gradients**: Add custom gradients in a simpler way.
    - **tailwindcss-rtl**: Adds support for right-to-left reading languages (such as Arabic or Hebrew).


To install the extensions, whether official or not, you have to

  1. Install them in node
      ```bash
      npm install @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio @tailwindcss/line-clamp
      ```

  2. Enable them in `tailwind.config.js`.    
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


