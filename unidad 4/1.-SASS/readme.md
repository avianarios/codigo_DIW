 # Working with SASS

  1. Basic SASS tutorial
    1. [Comments](#1--comments)
    2. [Nested rules](#2--nested-rules)
    3. [Data structures](#3--data-structures)
    4. [Interpolation](#4--interpolation)
    5. [Operators](#5--operators) (POR TERMINAR, FALTA PONER EL CSS RESULTANTE)
    6. [User functions](#6--user-functions)
    7. [Debugging](#7--debugging)
    8. [User-defined modules](#8--user-defined-modules)
    9. [Built-in functions](#9--built-in-functions)
      1. [Global built-in color functions](#91--global-built-in-color-functions)
      2. [sass:color built-in module](#92--sasscolor-built-in-module)
      3. [sass:list functions](#93--sasslist-functions)
      4. [sass:map functions](#94--sassmap-functions)
    10. Control structures
    11. Mixins
    12. Inheritance
  2. Creating a workflow

---

## 1- Comments

- `// This comment will not be at CSS code`
- `/* This comment will be at CSS, unless compressed mode is used */`
- `/*! This comment will always be at CSS */`

---

## 2- Nested Rules

Nested rules allows you to organise your code in a more structured, logical and readable way by reflecting the hierarchy of HTML elements directly in the styles. This means you can write rules nested inside other rules instead of repeating selectors at every level.

### Advantages:
- **Legibility**: Makes it easier to understand the relationship between selectors.
- **Order**: Keeps code cleaner by avoiding repetition.
- **Efficiency**: Reduces writing time and makes code more manageable in large projects.

Be careful of not nesting too much.

### Example 1: Basic Nested Selectors
```css
nav {
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
    }
  }
}
```
Resulting CSS:
```css
nav ul {
  margin: 0;
  padding: 0;
}
nav ul li {
  list-style: none;
}
nav ul li a {
  text-decoration: none;
}
```

### Example 2: Parent Selector (&)
```scss
button {
  &.primary {
    background-color: blue;
  }
  &:hover {
    background-color: darkblue;
  }
}
```
Resulting CSS:
```css
button.primary {
  background-color: blue;
}
```
button:hover {
  background-color: darkblue;
}
```

### Example 3: Parent Selector and Pseudoclasses
```scss
a {
  color: blue;
  &:hover {
    color: darkblue;
  }
  &::before {
    content: '→';
    margin-right: 5px;
  }
}
```
Resulting CSS:
```css
a {
  color: blue;
}
a:hover {
  color: darkblue;
}
a::before {
  content: '→';
  margin-right: 5px;
}
```

### Example 4: Nesting Properties with Common Prefixes
```scss
.box {
  margin: {
    top: 10px;
    bottom: 20px;
  }
  padding: {
    left: 15px;
    right: 15px;
  }
}
```
Resulting CSS:
```css
.box {
  margin-top: 10px;
  margin-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
}
```

### Example 5: Multiple Classes with Parent Selector
```scss
.button, .link {
  &--primary {
    background-color: blue;
    color: white;
  }
}
```
Resulting CSS:
```css
.button--primary {
  background-color: blue;
  color: white;
}
.link--primary {
  background-color: blue;
  color: white;
}
```

---

## 3- Data Structures

- **Variables**: They can be globals, at the beginning of the file, or locals, defined inside any class or label. Locals have preference over globals.
- **Lists**: Set of values accessed by index. First element = 1.
- **Maps**: Similar to lists, they have a key to access values.

### Example 1: Definición de Variables Globales
```scss
$color-primario: #3498db;
$tamaño-fuente: 16px;
```

Global variables usage:
```scss
body {
  font-size: $tamaño-fuente;
  background-color: $color-primario;
}
```

### Example 2: Definición de Variables Locales
```scss
// Definición de variables locales dentro de un bloque
$color-fondo: #ecf0f1;

.navbar {
  $color-fondo: #2c3e50; // Variable local, definida dentro de .navbar
  background-color: $color-fondo; // Usando la variable local
}
```

### Example 3: Lists
```scss
$tamanyos:(40px, 80px, 160px);
.banner {
  h1{
    font-size: nth($tamanyos,2);
  }
}
```

### Example 4: Maps
```scss
$error:(
  "leve": 1rem,
  "medio": 2rem,
  "grave": 2.5rem
);

.error-leve{
  font-size: map.get($error, "leve");
}
```

----

## 4- Interpolation

Interpolation allows you to dynamically insert values into a string or selector, using the syntax #{}
```
**Advantages**
- **Flexibility**: It allows creating more dynamic rules based on variable values, without needing to write each rule manually.
- **Reusability**: You can generate classes and selectors dynamically with the content of variables, making your code cleaner and easier to maintain.
- **Combination of values**: It allows combining strings and variables easily, which facilitates the generation of complex values.

### Example 1: Basic interpolation in a comment
```scss
$author: "Chiquito de la calzada";
/* Web developed by #{$author} */
```
**CSS Output**:
```css
/* Web developed by Chiquito de la calzada */
```

### Example 2: Interpolation in class or ID names
```scss
$color: 'red';

.button-#{$color} {
  background-color: $color;
}
```
**CSS Output**:
```css
.button-red {
  background-color: red;
}
```

### Example 3: Interpolation in CSS properties
```scss
$prefix: 'font';
$size: 'size';

#{$prefix}-#{$size} {
  font-size: 16px;
}
```
**CSS Output**:
```css
.font-size {
  font-size: 16px;
}
```

### Example 4: Interpolation for value combinations
```scss
$base: 'color';
$value: 'blue';

.selector {
  background-#{$base}: $value;
}
```
**CSS Output**:
```css
.selector {
  background-color: blue;
}
```

### Example 5: Interpolation inside URLs
```scss
$image-path: 'images/logo.png';

.selector {
  background-image: url('#{$image-path}');
}
```
**CSS Output**:
```css
.selector {
  background-image: url('images/logo.png');
}
```

---
## 5- Operators

### Example 1: Arithmetic Operators
**SASS Code:**
```scss
$base: 16px;

.container {
  font-size: $base * 1.5; // Result: 24px
  padding: $base - 2;     // Result: 14px
}
```

**CSS Output:**
```css
.container {
  font-size: 24px;
  padding: 14px;
}
```

### Example 2: Comparison Operators
**SASS Code:**
```scss
$size: 10px;

.container {
  font-size: if($size > 5px, $size, 5px); // Result: 10px if $size > 5px, 5px otherwise
}
```

**CSS Output:**
```css
.container {
  font-size: 10px;
}
```

### Example 3: Logical Operators
**SASS Code:**
```scss
$primary-color: #3498db;
$use-color: true;

.container {
  color: if($use-color and $primary-color, $primary-color, black); // Result: #3498db
}
```

**CSS Output:**
```css
.container {
  color: #3498db;
}
```


### Example 4: Concatenation Operator
**SASS Code:**
```scss
$base-color: 'color';
$variant: 'primary';

.result {
  content: $base-color + '-' + $variant; // Result: "color-primary"
}
```

**CSS Output:**
```css
.result {
  content: "color-primary";
}
```


## 6- User Functions

### Example 1: Converting Units
**SASS Code:**
```scss
@function px-to-rem($px, $base-font-size: 16px) {
  @return $px / $base-font-size * 1rem;
}

.container {
  padding: px-to-rem(32px); // Result: 2rem
}

.parrafo {
  padding: px-to-rem(16px); // Result: 1rem
}
```

**CSS Output:**
```css
.container {
  padding: 2rem;
}

.parrafo {
  padding: 1rem;
}
```


### Example 2: Unit Scaling
**SASS Code:**
```scss
@function escala-tipografica($base, $factor) {
  @return $base * $factor;
}

h1 {
  font-size: escala-tipografica(16px, 1.5); // Result: 24px
}

h2 {
  font-size: escala-tipografica(16px, 1.25); // Result: 20px
}
```

**CSS Output:**
```css
h1 {
  font-size: 24px;
}

h2 {
  font-size: 20px;
}
```


### Example 3: Chain Manipulation
**SASS Code:**
```scss
@function generar-clase-color($nombre) {
  @return '.color-' + $nombre;
}

#{generar-clase-color('primario')} {
  color: #3498db;
}

#{generar-clase-color('secundario')} {
  color: #34db8a;
}

#{generar-clase-color('resalto')} {
  color: #db3434;
}
```

**CSS Output:**
```css
.color-primario {
  color: #3498db;
}

.color-secundario {
  color: #34db8a;
}

.color-resalto {
  color: #db3434;
}
```


### Example 4: Adding Dynamic Prefixes
**SASS Code:**
```scss
@function add-prefix($prefix, $value) {
  @return "#{$prefix}-#{$value}";
}

#{add-prefix('btn', 'primary')} {
  color: blue;
}
```

**CSS Output:**
```css
.btn-primary {
  color: blue;
}
```

----

# 7- Debugging

Debugging in SASS allows printing results of calculations, methods, or variable values in the terminal. It does not work with the VS Code extension "Live Sass Compiler". Instead, use the Node package `sass` and configure a script like so:

```bash
sass --watch source:destination --source-map
```

## Example 1: Debugging Variables

```scss
$color-principal: #3498db;
$padding: 20px;

@debug $color-principal;
@debug $padding;
```

**Terminal Output:**

```
test.scss:5 DEBUG: #3498db
test.scss:6 DEBUG: 20px
```

## Example 2: Debugging Expressions with Operators

```scss
$base-size: 16px;
$multiplier: 1.5;
$calculated-size: $base-size * $multiplier;
@debug "Calculated size is #{$calculated-size}";
```

**Terminal Output:**

```
test.scss:10 DEBUG: "Calculated size is 24px"
```

## Example 3: Debugging User-Defined Functions

```scss
@function add-prefix($prefix, $value) {
  @return "#{$prefix}#{$value}";
}
@debug(add-prefix("button", ":hover"));
```

**Terminal Output:**

```
test.scss:16 DEBUG: "button:hover"
```

## Example 4: Debugging SASS Built-In Functions

```scss
@use 'sass:list';
$colors: red, blue, green;
@debug (list.append($colors, yellow));
```

**Terminal Output:**

```
test.scss:21 DEBUG: red, blue, green, yellow
```

----


## 8- User-Defined Modules

### Advantages

User-defined modules allow code to be organised and reused by splitting it into smaller, more specific files. This improves the readability, modularity, and maintainability of projects.

### How to Name Module Files
`_miModulo.scss`: The `_` prevents the Sass compiler from compiling these files, which are intended to be imported.

### How to Import Modules
Use the `@use` directive at the beginning of the file:
```scss
@use 'miModulo'; // (no _ and no .scss)
```

### What is a Directive?
- It's a special statement that affects the compiler's behavior or the file structure.
- They don't return any value but perform actions like import, mix, or condition.
- They start with an `@`.

### How to Use Imported Content in the Receiving Module
- `@use 'mySuperComplicatedFunctions'` creates a namespace named like the file. Resources must be accessed with the namespace, e.g., `mySuperComplicatedFunctions.variable` or `mySuperComplicatedFunctions.add(2,3)`.
- `@use 'mySuperComplicatedFunctions' as *` removes the namespace requirement, but it is risky due to potential conflicts.
- `@use 'mySuperComplicatedFunctions' as 'myFunc';` changes the namespace to `myFunc`.

### Forwarding Modules
In large projects, create an intermediate file that imports all modules before exporting them to the main file. This way, the main file doesn't need to import every single module individually.

Use the `@use` and `@forward` directives:
```scss
@use 'moduloInicial';
@forward 'miModulo';
```

### Good Practices
- Create an index file and use `@forward` on it.
- Avoid large namespaces.
- Organize modules based on their purpose:
  - Variables, mixins, functions, etc.
  - Components like header, sidebar, main, grid, etc.
  - A combination of components and layout (suggested organization):
```
proyecto/
├── fuente/
│   ├── sass/
│   │   ├── base/
│   │   │   ├── _normalizacion.scss
│   │   │   ├── _reinicio.scss
│   │   │   └── _tipografia.scss
│   │   ├── componentes/
│   │   │   ├── _botones.scss
│   │   │   ├── _cabecera.scss
│   │   │   ├── _pie.scss
│   │   │   └── _principal.scss
│   │   ├── disposicion/
│   │   │   ├── _disp_comun.scss
│   │   │   ├── _disp_cabecera.scss
│   │   │   ├── _disp_pie.scss
│   │   │   └── _disp_principal.scss
│   │   ├── global/
│   │   │   ├── _funciones.scss
│   │   │   ├── _medios.scss
│   │   │   ├── _mixins.scss
│   │   │   └── _variables.scss
│   │   ├── principal.scss
│   ├── html/
│   ├── js/
|   └── index.html
├── package.json
└── package-lock.json

```

### Reset and Normalize

#### What is a Reset?
A reset is a set of rules that remove the default styles browsers automatically apply to HTML elements. Each browser has its default stylesheet, causing inconsistencies. Eric Meyer's reset is a famous example.

#### What is Normalize?
Normalize keeps reasonable default styles, adjusting them for consistency across browsers. It's ideal for modern designs.


### Example 1: Importing Modules
File: `_misVariablesParaTodosLosCasos.scss`
```scss
$primary-color: #3498db;
```

Using `_misVariablesParaTodosLosCasos.scss` in `styles.scss`:
```scss
@use 'misVariablesParaTodosLosCasos';

.button {
  color: misVariablesParaTodosLosCasos.$primary-color;
}
```

### Example 2: Avoid Using Namespaces
Not recommended as it can cause conflicts.
File: `styles.scss`:
```scss
@use 'misVariablesParaTodosLosCasos' as *;
.button {
  color: $primary-color;
}
```

### Example 3: Avoid Large Namespaces
File: `styles.scss`:
```scss
@use 'misVariablesParaTodosLosCasos' as vars;
.button {
  color: vars.$primary-color;
}
```

### Example 4: Forwarding Imported Modules
File: `_colors.scss`:
```scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
```
File: `_styles.scss`:
```scss
@use 'colors';
@forward 'colors';
```
File: `main.scss`:
```scss
@use 'styles';

.button {
  background-color: styles.$primary-color;
}
```

### Example 5: Forwarding Multiple Modules
File: `_variables.scss`:
```scss
$font-size: 16px;
$primary-color: #3498db;
```
File: `_mixins.scss`:
```scss
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
File: `_functions.scss`:
```scss
@function multiply($value, $factor) {
  @return $value * $factor;
}
```
File: `_main.scss`:
```scss
@forward 'variables';
@forward 'mixins';
@forward 'functions';
```
File: `styles.scss`:
```scss
@use 'main';

.container {
  font-size: main.$font-size;
  color: main.$primary-color;
  @include main.center;
  width: main.multiply(10px, 2);
}
```

----


## 9- Built-in functions

SASS has built-in functions. Some are global and some others are organized into modules that need to be imported before using them.

These modules are organized by similarity:
- **sass:color** -> generates new colors based on existing ones, making it easy to build color themes.
- **sass:list** -> access and modify values in lists. They can be used to create dynamic collections like colors, sizes or menu elements.
- **sass:map** -> work with maps (a list of key-value pairs). They can be used to store configuration information, colors, sizes or any data that needs to be associated with a key in a map.
- **sass:math** -> operate on numbers.
- **sass:meta** -> obtain details about Sass files and facilitate manipulation of their structure.
- **sass:selector** -> allows you...
  - to create dynamic selectors
  - to analyze and modify selectors
- **sass:string** -> makes it easy to combine, search, or split apart strings. They are helpful for:
  - Dynamically modifying and formatting text in your style files, such as creating CSS values from variables and transforming strings.
  - Dynamic generation of classes or ids.
  - Working with paths or URLs.

The way of invoking sass built-in modules is `@use "sass:map";`

### 9.1- Global built-in color functions

They are global functions, so no need to import anything.

- **rgb($red, $green, $blue)**: Creates a color in RGB format from numeric values for red, green, and blue components.  
  `$color: rgb(52, 152, 219);`

- **rgba($red, $green, $blue, $alpha)**: Similar to rgb, but allows specifying the opacity of the color through an alpha value (transparency).  
  `$color: rgba(52, 152, 219, 0.5);`

- **hsla($hue, $saturation, $lightness, $alpha)**: Creates a color in the HSL color model (hue, saturation, lightness) with an alpha value for opacity.  
  `$color: hsla(200, 100%, 50%, 0.3);`

### 9.2- sass:color built-in module

```scss
@use 'sass:color';
$color: #3498db;
```

- **adjust-color($color, $adjustment...)**: Allows adjusting properties of a color, such as brightness, saturation, opacity, etc.  
  `.button2 { background-color: color.adjust($color-primary, $blue: -30%, $alpha: 0.5); }`

- **change-color($color, $changes...)**: Changes a specific property of a color, such as hue, saturation, or opacity, without affecting the others.  
  `$changed-color: color.change($color, $hue: 180deg, $alpha: 0.8);`

- **color.scale($color, $adjustments...)**: Scales a color, adjusting its brightness, saturation, opacity, etc. It's useful for creating variations of a base color.  
  `.button { background-color: color.scale($color, $lightness: -10%, $saturation: 15%); }`

- **mix($color1, $color2, $weight)**: Mixes two colors at a specified percentage. It’s useful for creating smooth transitions or color combinations.  
  `$color2: #e74c3c;`  
  `$mixed-color: color.mix($color1, $color2, 50%);`

- **complement($color)**: Calculates the complementary color of a given color.  
  `$complementary-color: color.complement($color);`

- **grayscale($color)**: Converts a color to its grayscale version. This removes the saturation from the color, but keeps the brightness.  
  `$grayscale-color: color.grayscale($color);`

- **invert($color, $amount)**: Inverts the colors by a given percentage. Useful for creating visual effects like color inversions in interactions or animations.  
  `$inverted-color: color.invert($color, 50%);`

### 9.3- sass:list functions

Sass lists are immutable, it doesn’t modify the original list.

```scss
@use 'sass:list';
$colors: red, blue, green;
$colors2: lightcoral, lightblue, lightgreen;
```

- **list.length($list)**: Returns the length of a list.  
  `$number-of-colors: list.length($colors);`  
  // Result: 3

- **list.index($list, $value)**: Returns the position of the first element in the list that matches $value.  
  `$index: list.index($colors, blue);`  
  // Result: 2

- **list.nth($list, $n)**: Returns the element at position $n of the list (starting from 1).  
  `$second-color: list.nth($colors, 2);`  
  // Result: blue

- **list.set-nth($list, $n, $value)**: Returns a copy of the list $list with the value $value at position $n.  
  `$second-color: list.set-nth($second-color, 3, green);`

- **list.append($list, $value)**: Adds a value to the end of the list.  
  `$new-colors: list.append($colors, yellow);`  
  // Result: red, blue, green, yellow

- **list.join($list, $separator)**: Joins the elements of the list into a string, separating them with the value $separator.  
  `$colors-string: list.join($colors, ', ');`  
  // Result: red, blue, green

- **list.zip($list1, $list2)**: Combines the lists by interleaving their values.  
  `$new-list: list.zip($colors, $colors2);`

## Example 4: Some list functions

```scss
@use "sass:list";
$colors: red, blue, green, yellow;
$menu-items: home, about, services, contact;
```

```scss
.example {
  color: list.nth($colors, 2);
}

.contenedor {
  width: list.length($menu-items) * 100px;
  display: grid;
  grid-template-columns: repeat(list.length($menu-items), 1fr);
}
```


### 9.4- sass:map functions

Maps in Sass are immutable, which means that the contents of a map value never change. Sass’s map functions all return new maps rather than modifying the originals.

```scss
$colors: (
  primary: #3498db,
  secondary: #2ecc71,
  accent: #e74c3c
);
```

### map.get($map, $key)
Returns the value associated with the key `$key` in the map `$map`.

```scss
$primary-color: map.get($colors, primary);
```
**Generated CSS:**
```css
$primary-color: #3498db;
```

### map.set($map, $key, $value)
Sets a new value in the map for the key `$key`.

```scss
$updated-colors: map.set($colors, accent, #e74c3c);
```
**Generated CSS:**
```css
$updated-colors: (primary: #3498db, secondary: #2ecc71, accent: #e74c3c);
```

### map.remove($map, $key)
Removes a value from the map at the specified key `$key`.

```scss
$updated-colors: map.remove($colors, accent);
```
**Generated CSS:**
```css
$updated-colors: (primary: #3498db, secondary: #2ecc71);
```

### map.has-key($map, $key)
Returns `true` if the map contains the key `$key`, or `false` otherwise.

```scss
$has-accent: map.has-key($colors, accent);
```
**Generated CSS:**
```css
$has-accent: false;
```

### map.keys($map)
Returns a list of all the keys in the map.

```scss
$keys: map.keys($colors);
```
**Generated CSS:**
```css
$keys: primary, secondary, accent;
```

### map.values($map)
Returns a list of all the values in the map.

```scss
$values: map.values($colors);
```
**Generated CSS:**
```css
$values: #3498db, #2ecc71, #e74c3c;
```

### map.merge($map1, $map2)
Merges two maps, adding the keys and values of `$map2` to `$map1`.

```scss
$map1: (
  primary: #3498db,
  secondary: #2ecc71
);

$map2: (
  accent: #e74c3c,
  background: #f1f1f1
);

$merged-map: map.merge($map1, $map2);
```
**Generated CSS:**
```css
$merged-map: (primary: #3498db, secondary: #2ecc71, accent: #e74c3c, background: #f1f1f1);
```

### map.deep-remove($map, $key)
Recursively removes the specified key at all levels of the map.

```scss
$nested-map: (
  colors: (
    primary: #3498db,
    secondary: #2ecc71
  ),
  typography: (
    header: 16px,
    body: 14px
  )
);

$updated-map: map.deep-remove($nested-map, secondary);
```
**Generated CSS:**
```css
$updated-map: (colors: (primary: #3498db), typography: (header: 16px, body: 14px));
```

### map.deep-merge($map1, $map2)
Merges two maps, but if a key has a map value in both maps, the values are merged recursively.

```scss
$map1: (
  colors: (
    primary: #3498db,
    secondary: #2ecc71
  )
);

$map2: (
  colors: (
    accent: #e74c3c
  )
);

$merged-map: map.deep-merge($map1, $map2);
```
**Generated CSS:**
```css
$merged-map: (colors: (primary: #3498db, secondary: #2ecc71, accent: #e74c3c));