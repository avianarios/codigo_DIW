# Accesibilidad

# Índice



----

# 1- Introducción

La accesibilidad en diseño web se refiere a la práctica de crear sitios web que sean utilizables por personas con diversas discapacidades. Esto incluye a personas con limitaciones visuales, auditivas, motoras o cognitivas, entre otras. Un diseño web accesible permite que todos los usuarios, independientemente de sus habilidades, puedan navegar, interactuar y obtener la información que buscan de manera eficiente.

Algunos principios clave de la accesibilidad web incluyen:
    - **Perceptibilidad**: El contenido debe ser presentado de manera que los usuarios puedan percibirlo. Esto incluye el uso de colores contrastantes para garantizar que el texto sea legible para personas con deficiencias visuales y proporcionar alternativas textuales (como descripciones de imágenes) para aquellos que no pueden verlas.
    - **Operabilidad**: Los usuarios deben poder interactuar con la interfaz web de manera eficiente. Esto significa que el sitio debe ser navegable mediante teclado, ya que algunas personas no pueden usar un ratón. También es importante que los controles y formularios sean fácilmente accesibles.
    - **Comprensibilidad**: La información y la interfaz deben ser fáciles de entender. El uso de un lenguaje claro, instrucciones claras y un diseño consistente contribuye a que el sitio sea más fácil de usar para todos.
    - **Robustez**: El sitio debe funcionar correctamente en una variedad de dispositivos y tecnologías, incluidos lectores de pantalla, dispositivos móviles, y herramientas de asistencia. La compatibilidad con tecnologías emergentes también es un factor importante.

Para lograr estos principios, los diseñadores y desarrolladores web siguen pautas y estándares, como las Pautas de Accesibilidad para el Contenido Web (WCAG) desarrolladas por el World Wide Web Consortium (W3C). Estas pautas proporcionan un conjunto de recomendaciones para hacer el contenido web más accesible.

Además, hay varias leyes y regulaciones en todo el mundo que requieren que los sitios web sean accesibles, como la Ley de Estadounidenses con Discapacidades (ADA) en los Estados Unidos y la Directiva de Accesibilidad Web en la Unión Europea.

---

# 2- WCAG (Pautas de Accesibilidad para el Contenido Web)

Las Pautas de Accesibilidad para el Contenido Web (WCAG, por sus siglas en inglés: **Web Content Accessibility Guidelines**) son un conjunto de recomendaciones internacionales desarrolladas por el World Wide Web Consortium (W3C) a través de su iniciativa WAI (Web Accessibility Initiative). Estas pautas tienen como objetivo hacer que el contenido web sea accesible para todas las personas, incluyendo aquellas con discapacidades, como discapacidades visuales, auditivas, motoras, cognitivas o neurológicas.

Las WCAG son el estándar más reconocido y utilizado en el mundo para la accesibilidad web, y muchas leyes y regulaciones en diferentes países se basan en ellas para garantizar que los sitios web sean accesibles.

Las WCAG han evolucionado con el tiempo. Las versiones más importantes son:
- WCAG 1.0 (1999): Fue la primera versión, centrada en pautas generales para hacer el contenido web accesible.
- WCAG 2.0 (2008): Introdujo un enfoque más estructurado y basado en principios. Esta versión es ampliamente adoptada y sigue siendo relevante.
- WCAG 2.1 (2018): Amplió las pautas para incluir mejoras en la accesibilidad para dispositivos móviles y personas con discapacidades cognitivas o de baja visión.
- WCAG 2.2 (2023): La versión más reciente, que añade nuevas pautas para mejorar la accesibilidad en interacciones más complejas y tecnologías modernas.

## Niveles de conformidad

Las WCAG definen tres niveles de conformidad para medir el grado de accesibilidad de un sitio web:
- A (nivel mínimo): Este nivel incluye los requisitos más fundamentales y debe cumplirse para asegurar la accesibilidad mínima. No cumplir con estos requisitos puede hacer que el sitio sea completamente inaccesible para algunos usuarios.
- AA (nivel intermedio): Este nivel cubre los requisitos que son necesarios para que el contenido sea accesible para una amplia gama de personas con diversas discapacidades. Este es el nivel recomendado para la mayoría de los sitios web.
- AAA (nivel óptimo): Este es el nivel más alto de conformidad y cubre las mejores prácticas para hacer que un sitio sea accesible para la mayor cantidad de personas posible. Sin embargo, cumplir con todos los requisitos de este nivel puede ser difícil o innecesario para todos los sitios web.


La accesibilidad se estructura en principios, que se desglosan en pautas específicas y, dentro de cada pauta, hay criterios de éxito que son medibles y describen qué es necesario para cumplir con un determinado nivel de conformidad (A, AA o AAA).


## Principios de WCAG
Las WCAG se basan en cuatro principios fundamentales, conocidos como POUR:
- **Perceptible**: La información y los componentes de la interfaz de usuario deben ser presentados de manera que los usuarios puedan percibirlos. Si algo no puede ser percibido por un usuario, debe ofrecerse una alternativa accesible. Esto incluye:
    - Proporcionar alternativas textuales para contenido no textual (alt en imágenes o subtítulos y transcripciones para videos y transcripciones para audios).
    - Asegurar que el contenido sea adaptable y se pueda presentar de diferentes formas sin perder información.
    - Asegurar que el contraste de color sea suficiente para personas con dificultades visuales.
- **Operable**: Los componentes de la interfaz y la navegación deben ser operables por todos los usuarios, es decir, los usuarios deben poder interactuar con el sitio sin barreras, ya sea usando un teclado, ratón o dispositivos de asistencia.Esto implica:
    - Asegurar que todo el contenido sea accesible mediante teclado.
    - Dar suficiente tiempo a los usuarios para leer y usar el contenido.
    - No depender de un solo tipo de entrada (como el ratón).
- **Comprensible**: La información y el funcionamiento de la interfaz de usuario deben ser comprensibles. Esto incluye:
    - Hacer el texto legible y comprensible.
    - Asegurar que las páginas web funcionen de manera predecible.
    - Ayudar a los usuarios a corregir errores en formularios.
- **Robusto**: El contenido debe ser suficientemente robusto para ser interpretado de manera confiable por una amplia variedad de tecnologías, incluyendo tecnologías asistivas. Esto significa:
    - Usar código válido y bien estructurado.
    - Asegurar la compatibilidad con navegadores y dispositivos actuales y futuros.


## Pautas
Dentro de cada principio, las pautas son recomendaciones específicas sobre cómo hacer que el contenido web sea accesible. Estas pautas son más generales y se agrupan dentro de los principios. Por ejemplo:
- Principio Perceptible:
    - Pauta 1.1 (Contenido no textual): Asegúrate de que el contenido no textual tenga alternativas textuales.
    - Pauta 1.2 (Contenido multimedia): Proporciona subtítulos y otras alternativas para el contenido multimedia.
- Principio Operable:
    - Pauta 2.1 (Accesibilidad mediante teclado): Asegúrate de que todos los elementos interactivos sean accesibles con un teclado.
    - Pauta 2.4 (Navegación): Proporciona mecanismos para ayudar a los usuarios a navegar, encontrar contenido y determinar dónde están.

## Criterios de éxito
Son las condiciones exactas que deben cumplirse para lograr el cumplimiento de una pauta en un nivel de conformidad determinado (A, AA o AAA). Estos criterios son declaraciones medibles que permiten evaluar si un sitio cumple con las pautas. Por ejemplo:
- Pauta 1.1 (Contenido no textual): Uno de los criterios de éxito sería 1.1.1 (Contenido no textual), que establece que todo contenido no textual que sirva como función (como botones, imágenes con enlaces, etc.) debe tener una alternativa textual.
- Pauta 2.1 (Accesibilidad mediante teclado): Un criterio de éxito sería 2.1.1 (Teclado), que asegura que todo el contenido interactivo sea accesible mediante el teclado, es decir, que los usuarios puedan navegar por el sitio usando únicamente el teclado sin necesidad de un ratón.

