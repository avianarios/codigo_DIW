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
Cada principio de accesibilidad se desglosa sen pautas, que son directrices más específicas sobre cómo hacer que el contenido web sea accesible. Por ejemplo:
- Principio Perceptible:
    - Pauta 1.1 (Contenido no textual): Asegúrate de que el contenido no textual tenga alternativas textuales.
    - Pauta 1.2 (Contenido multimedia): Proporciona subtítulos y otras alternativas para el contenido multimedia.
- Principio Operable:
    - Pauta 2.1 (Accesibilidad mediante teclado): Asegúrate de que todos los elementos interactivos sean accesibles con un teclado.
    - Pauta 2.4 (Navegación): Proporciona mecanismos para ayudar a los usuarios a navegar, encontrar contenido y determinar dónde están.

## Criterios de éxito
Mientras que las pautas siguen siendo elementos generales, los criterios las concretan y las hacen medibles para determinar si un determinado diseño cumple con un determinado nivel de conformidad (A, AA o AAA). Esos criterios están organizados según el nivel de conformidad:
- **Nivel A**: Los criterios más fundamentales que, si no se cumplen, hacen que el sitio sea inaccesible para muchos usuarios.
- **Nivel AA**: Criterios importantes, pero no críticos para que el sitio sea accesible en términos básicos. Aun así, cumplirlos mejora considerablemente la accesibilidad para una gran cantidad de usuarios, especialmente para aquellos con discapacidades comunes.
- **Nivel AAA**: Criterios adicionales para hacer que el contenido sea aún más accesible, pero que no siempre son necesarios en todos los casos. Este nivel está destinado a optimizar la accesibilidad para personas con discapacidades más específicas o graves.
    
Por ejemplo:
- Pauta 1.1 (Contenido no textual): 
    - Criterio 1.1.1 (Contenido no textual) (Nivel A):
        - Descripción: Todo contenido no textual debe tener una alternativa textual.
        - Ejemplo: Una imagen debe tener un atributo alt que describa su contenido.

- Pauta 1.2 (contenido multimedia):
    - Criterio 1.2.1 Solo audio y solo video (pregrabado) (Nivel A):
        - Descripción: Proporcionar alternativas textuales para contenido de solo audio o solo video pregrabado.
        - Ejemplo: Un podcast debe tener una transcripción textual disponible.

    - Criterio 1.2.2 Subtítulos (pregrabados) (Nivel A):
        - Descripción: Proporcionar subtítulos sincronizados para contenido de audio en videos pregrabados.
        - Ejemplo: Un video con diálogo debe tener subtítulos que transcriban el diálogo y otros sonidos relevantes.

    - Criterio 1.2.3 Descripción auditiva o alternativa para medios (pregrabados) (Nivel A):
        - Descripción: Proporcionar una descripción auditiva o una alternativa para contenido visual en videos pregrabados.
        - Ejemplo: Un video con información visual importante (como gráficos o acciones) debe tener una descripción auditiva que explique estos elementos.

    - Criterio 1.2.4 Subtítulos (en vivo) (Nivel AA):
        - Descripción: Proporcionar subtítulos en tiempo real para contenido de audio en vivo.
        - Ejemplo: Una transmisión en vivo de una conferencia debe tener subtítulos sincronizados.

    - Criterio 1.2.5 Descripción auditiva (pregrabada) (Nivel AA):
        - Descripción: Proporcionar una descripción auditiva para contenido visual en videos pregrabados.
        - Ejemplo: Un video con información visual importante debe tener una descripción auditiva que explique estos elementos.

    - Criterio 1.2.6 Lengua de señas (pregrabada) (Nivel AAA):
        - Descripción: Proporcionar una interpretación en lengua de señas para contenido de audio en videos pregrabados.
        - Ejemplo: Un video con diálogo importante puede incluir una interpretación en lengua de señas.

    - Criterio 1.2.7 Descripción auditiva ampliada (pregrabada) (Nivel AAA):
        - Descripción: Proporcionar una descripción auditiva más detallada para contenido visual en videos pregrabados.
        - Ejemplo: Un video con información visual compleja debe tener una descripción auditiva que explique todos los detalles.

    - Criterio 1.2.8 Alternativa para medios (pregrabados) (Nivel AAA):
        - Descripción: Proporcionar una alternativa textual completa para contenido multimedia pregrabado.
        - Ejemplo: Un video con audio y contenido visual debe tener una transcripción textual que incluya descripciones de ambos.


 # Pautas clave
 1. Perceptible. El contenido debe ser presentado de manera que los usuarios puedan percibirlo, independientemente de sus capacidades sensoriales.
Pautas clave:
- Pauta 1.1: Contenido no textual
    - Criterio clave: 1.1.1 Contenido no textual (Nivel A).
    - Objetivo: Proporcionar alternativas textuales para contenido no textual (imágenes, videos, iconos, etc.).
- Pauta 1.3: Adaptable
    - Criterio clave: 1.3.1 Información y relaciones (Nivel A).
    - Objetivo: Asegurar que el contenido pueda ser presentado de diferentes maneras sin perder información o estructura.
- Pauta 1.4: Distinguible
    - Criterio clave: 1.4.3 Contraste mínimo (Nivel AA).
    -Objetivo: Hacer que el contenido sea fácil de ver y escuchar, incluyendo requisitos como el contraste de color y la capacidad de ajustar el tamaño del texto.

2. Operable. Los componentes de la interfaz de usuario y la navegación deben ser operables por todos los usuarios, incluyendo aquellos que dependen del teclado o tecnologías asistivas.
Pautas clave:
- Pauta 2.1: Teclado accesible
        Criterio clave: 2.1.1 Teclado (Nivel A).
        Objetivo: Garantizar que todo el contenido y la funcionalidad sean accesibles mediante el teclado.
    Pauta 2.4: Navegable
        Criterios clave:
            2.4.2 Título de la página (Nivel A).
            2.4.7 Enfoque visible (Nivel AA).
        Objetivo: Facilitar la navegación y la localización de contenido, asegurando que los usuarios puedan encontrar lo que necesitan y saber dónde están.

3. Comprensible. La información y el funcionamiento de la interfaz de usuario deben ser comprensibles para todos los usuarios.
Pautas clave:
    Pauta 3.1: Legible
        Criterio clave: 3.1.1 Idioma de la página (Nivel A).
        Objetivo: Asegurar que el texto sea legible y comprensible, incluyendo la identificación del idioma del contenido.
    Pauta 3.2: Predecible
        Criterio clave: 3.2.1 Al enfocar (Nivel A).
        Objetivo: Hacer que las páginas web funcionen de manera predecible, evitando cambios inesperados en el contexto.
    Pauta 3.3: Entrada de datos asistida
        Criterio clave: 3.3.1 Identificación de errores (Nivel A).
        Objetivo: Ayudar a los usuarios a evitar y corregir errores en formularios y entradas de datos.

4. Robusto. El contenido debe ser suficientemente robusto para ser interpretado de manera confiable por una amplia variedad de tecnologías, incluyendo tecnologías asistivas.
Pautas clave:
    Pauta 4.1: Compatible
        Criterios clave:
            4.1.1 Procesamiento (Nivel A).
            4.1.2 Nombre, función, valor (Nivel A).
        Objetivo: Garantizar que el contenido sea compatible con las tecnologías asistivas actuales y futuras.


| Principio     | Pautas clave                          | Criterios clave                                                                 |
|---------------|---------------------------------------|---------------------------------------------------------------------------------|
| **Perceptible** | 1.1 Contenido no textual              | 1.1.1 Contenido no textual (Nivel A).                                           |
|               | 1.3 Adaptable                         | 1.3.1 Información y relaciones (Nivel A).                                       |
|               | 1.4 Distinguible                      | 1.4.3 Contraste mínimo (Nivel AA).                                              |
| **Operable**    | 2.1 Teclado accesible                 | 2.1.1 Teclado (Nivel A).                                                        |
|               | 2.4 Navegable                         | 2.4.2 Título de la página (Nivel A), 2.4.7 Enfoque visible (Nivel AA).          |
| **Comprensible**| 3.1 Legible                           | 3.1.1 Idioma de la página (Nivel A).                                            |
|               | 3.2 Predecible                        | 3.2.1 Al enfocar (Nivel A).                                                     |
|               | 3.3 Entrada de datos asistida         | 3.3.1 Identificación de errores (Nivel A).                                      |
| **Robusto**     | 4.1 Compatible                        | 4.1.1 Procesamiento (Nivel A), 4.1.2 Nombre, función, valor (Nivel A).          |