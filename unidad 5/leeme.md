# Accesibilidad

# Índice

1. Introducción
2. Pautas de accesibilidad para el contenido web (WCAG)
3. Jerarquía de accesibilidad
    1. Principios
    2. Pautas
    3. Criterios
4. Comprobación del cumplimiento de los criterios de accesibilidad
    1. Pruebas de usuario
    2. Herramientas automatizadas
    3. Tecnologías asistivas
5. Documentación y revisión continua

- **Guía de Accesibilidad Web (WAI):** 

----

# 1- Introducción

La WAI ([Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)) es una iniciativa del W3C (World Wide Web Consortium) que tiene como objetivo promover la accesibilidad en la web. Su misión es asegurar que las personas con discapacidades puedan acceder y usar los recursos y servicios en línea de manera efectiva.

La accesibilidad en diseño web se refiere a la práctica de crear sitios web que sean utilizables por personas con diversas discapacidades. Esto incluye a personas con limitaciones visuales, auditivas, motoras o cognitivas, entre otras. Un diseño web accesible permite que todos los usuarios, independientemente de sus habilidades, puedan navegar, interactuar y obtener la información que buscan de manera eficiente.

Algunos principios clave de la accesibilidad web incluyen:
    - **Perceptibilidad**: El contenido debe ser presentado de manera que los usuarios puedan percibirlo. Esto incluye el uso de colores contrastantes para garantizar que el texto sea legible para personas con deficiencias visuales y proporcionar alternativas textuales (como descripciones de imágenes) para aquellos que no pueden verlas.
    - **Operabilidad**: Los usuarios deben poder interactuar con la interfaz web de manera eficiente. Esto significa que el sitio debe ser navegable mediante teclado, ya que algunas personas no pueden usar un ratón. También es importante que los controles y formularios sean fácilmente accesibles.
    - **Comprensibilidad**: La información y la interfaz deben ser fáciles de entender. El uso de un lenguaje claro, instrucciones claras y un diseño consistente contribuye a que el sitio sea más fácil de usar para todos.
    - **Robustez**: El sitio debe funcionar correctamente en una variedad de dispositivos y tecnologías, incluidos lectores de pantalla, dispositivos móviles, y herramientas de asistencia. La compatibilidad con tecnologías emergentes también es un factor importante.

Para lograr estos principios, los diseñadores y desarrolladores web siguen pautas y estándares, como las Pautas de Accesibilidad para el Contenido Web (WCAG) desarrolladas por el World Wide Web Consortium (W3C). Estas pautas proporcionan un conjunto de recomendaciones para hacer el contenido web más accesible.

Además, hay varias leyes y regulaciones en todo el mundo que requieren que los sitios web sean accesibles, como la Ley de Estadounidenses con Discapacidades (ADA) en los Estados Unidos y la Directiva de Accesibilidad Web en la Unión Europea.

----

# 2- Pautas de accesibilidad para el contenido web (WCAG)

Las Pautas de Accesibilidad para el Contenido Web (**WCAG**, por sus siglas en inglés: **Web Content Accessibility Guidelines**) son un conjunto de recomendaciones internacionales desarrolladas por el World Wide Web Consortium (W3C) a través de su iniciativa WAI (Web Accessibility Initiative). Estas pautas tienen como objetivo hacer que el contenido web sea accesible para todas las personas, incluyendo aquellas con discapacidades, como discapacidades visuales, auditivas, motoras, cognitivas o neurológicas.

Las WCAG son el estándar más reconocido y utilizado en el mundo para la accesibilidad web, y muchas leyes y regulaciones en diferentes países se basan en ellas para garantizar que los sitios web sean accesibles.

Las WCAG han evolucionado con el tiempo. Las versiones más importantes son:
- WCAG 1.0 (1999): Fue la primera versión, centrada en pautas generales para hacer el contenido web accesible.
- WCAG 2.0 (2008): Introdujo un enfoque más estructurado y basado en principios. Esta versión es ampliamente adoptada y sigue siendo relevante.
- WCAG 2.1 (2018): Amplió las pautas para incluir mejoras en la accesibilidad para dispositivos móviles y personas con discapacidades cognitivas o de baja visión.
- WCAG 2.2 (2023): La versión más reciente, que añade nuevas pautas para mejorar la accesibilidad en interacciones más complejas y tecnologías modernas. [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)

----

# 3- Jerarquía de accesibilidad
La accesibilidad se organiza en una jerarquía donde el nivel más alto contiene grandes objetivos que se van concretando conforme se baja a los niveles inferiores, hasta que se alcanza el último nivel, donde los parámetros ya son medibles. Así, la organización, de más alto a más bajo nivel es la siguiente:
- **Principios**. Proporcionan una visión general de lo que significa la accesibilidad web y ayudan a los diseñadores y desarrolladores a pensar en las necesidades de todos los usuarios desde el inicio del proyecto.
- **Pautas**. Cada principio se divide en pautas que concretan un poco más dicho principio.
- **Criterios de éxito**. La forma de comprobar si una pauta se cumple es mediante la verificación de una serie de criterios de éxito que, ya sí, proporcionan parámetros medibles para comprobar si un determinado diseño cumple con un determinado nivel de conformidad.


## 3.1- Principios
Las WCAG se basan en cuatro principios fundamentales:
- **Perceptible**: La información y los componentes de la interfaz de usuario deben ser presentados de manera que los usuarios puedan percibirlos. Si algo no puede ser percibido por un usuario, debe ofrecerse una alternativa accesible. 
- **Operable**: Los componentes de la interfaz y la navegación deben ser operables por todos los usuarios, es decir, se debe poder interactuar con el sitio usando diferentes métodos (teclado, ratón o dispositivos de asistencia).
- **Comprensible**: La información y el funcionamiento de la interfaz de usuario deben ser comprensibles, predecible y fácil de usar.
- **Robusto**: El contenido debe ser suficientemente robusto para ser interpretado de manera fiable por una amplia variedad de tecnologías, incluyendo tecnologías asistivas, es decir, el contenido debe funcionar correctamente en diferentes navegadores, dispositivos y tecnologías, tanto actuales como futuras.


## 3.2- Pautas
Cada principio de accesibilidad se desglosa en pautas, que son directrices más específicas sobre cómo hacer que el contenido web sea accesible. Hay, en total 13

**Perceptible:**
- **Pauta 1.1: Contenido no textual:** Proporcionar alternativas textuales para cualquier contenido no textual para que pueda ser cambiado a otras formas que las personas necesiten, como el texto en braille, el habla, los símbolos o un lenguaje más simple.
- **Pauta 1.2: Medios temporales (audio y video):** Proporcionar alternativas para los contenidos de audio y video pregrabados, como subtítulos y descripciones de audio.
- **Pauta 1.3: Adaptable:** Crear contenido que pueda ser presentado de diferentes maneras, incluyendo la adaptación a las necesidades de los usuarios sin pérdida de información o estructura.
- **Pauta 1.4: Distinguible:** Facilitar que los usuarios vean y oigan el contenido, separando el contenido del fondo y haciendo que el contenido sea distinguible.

**Operable:**
- **Pauta 2.1: Teclado accesible:** Asegurar que todas las funcionalidades estén disponibles desde un teclado, permitiendo a los usuarios navegar y operar el contenido sin necesidad de un ratón.
- **Pauta 2.2: Tiempo suficiente:** Proporcionar a los usuarios tiempo suficiente para leer y usar el contenido, permitiendo la extensión de los límites de tiempo o la desactivación de las interrupciones.
- **Pauta 2.3: Convulsiones y reacciones físicas:** Evitar contenido que pueda causar convulsiones o reacciones físicas, como el parpadeo o los destellos.
- **Pauta 2.4: Navegable:** Proporcionar maneras para ayudar a los usuarios a navegar, encontrar contenido y determinar dónde se encuentran.
- **Pauta 2.5: Métodos de entrada adicionales:** Proporcionar métodos adicionales para la entrada de datos, como el reconocimiento de voz y la entrada táctil.

**Comprensible:**
- **Pauta 3.1: Legible:** Hacer el texto legible y comprensible, asegurando que el contenido sea claro y fácil de entender.
- **Pauta 3.2: Predecible:** Hacer que las páginas web aparezcan y funcionen de manera predecible, con un diseño y comportamiento consistentes.
- **Pauta 3.3: Asistencia en la entrada de datos:** Ayudar a los usuarios a evitar y corregir errores, proporcionando instrucciones claras y sugerencias para la entrada de datos.

**Robusto:**
- **Pauta 4.1: Compatible:** Asegurar que el contenido sea compatible con los agentes de usuario actuales y futuros, incluyendo tecnologías de asistencia.


## 3.3- Criterios de éxito
Mientras que las pautas siguen siendo elementos generales, los criterios las concretan y las hacen medibles para determinar el grado en el que un determinado diseño es accesible.

Para medir el grado de accesibilidad de un sitio web, las WCAG definen **tres niveles de conformidad que se asocian a los critrerios**:
- **A (nivel mínimo)**: Este nivel incluye los requisitos más fundamentales y debe cumplirse para asegurar la accesibilidad mínima. No cumplir con estos requisitos puede hacer que el sitio sea completamente inaccesible para algunos usuarios.
- **AA (nivel intermedio)**: Este nivel cubre los requisitos que son necesarios para que el contenido sea accesible para una amplia gama de personas con diversas discapacidades. Este es el nivel recomendado para la mayoría de los sitios web.
- **AAA (nivel óptimo)**: Este es el nivel más alto de conformidad y cubre las mejores prácticas para hacer que un sitio sea accesible para la mayor cantidad de personas posible. Sin embargo, cumplir con todos los requisitos de este nivel puede ser difícil o innecesario para todos los sitios web.

    
Ejemplo para la pauta 1.2 (contenido multimedia):
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


# Criterios de usabilidad, agrupados por niveles, junto con las pautas a las que pertenecen

| Pauta de Accesibilidad                          | Criterios a tener en cuenta (Nivel A)                                                                 |
|------------------------------------------------|------------------------------------------------------------------------------------------------------|
| **1.1 Contenido no textual**                   | 1.1.1 Alternativas textuales para contenido no textual.                                             |
| **1.2 Medios temporales**                      | 1.2.1 Solo audio y solo video (pregrabado): Alternativas textuales.                                 |
| **1.2 Medios temporales**                      | 1.2.2 Subtítulos (pregrabados): Subtítulos para contenido de audio en videos pregrabados.           |
| **1.2 Medios temporales**                      | 1.2.3 Descripción de audio o alternativa para medios (pregrabados): Descripción de audio para contenido visual. |
| **1.3 Adaptable**                              | 1.3.1 Información y relaciones: Estructura semántica clara.                                         |
| **1.3 Adaptable**                              | 1.3.2 Secuencia significativa: Orden lógico del contenido.                                          |
| **1.3 Adaptable**                              | 1.3.3 Características sensoriales: No depender solo de forma, tamaño o ubicación.                   |
| **1.4 Distinguible**                           | 1.4.1 Uso del color: El color no debe ser el único medio para transmitir información.               |
| **1.4 Distinguible**                           | 1.4.2 Control de audio: Pausar, detener o ajustar volumen en audio automático.                      |
| **2.1 Teclado accesible**                      | 2.1.1 Teclado: Todo el contenido debe ser operable mediante teclado.                                |
| **2.1 Teclado accesible**                      | 2.1.2 Sin trampa de teclado: Evitar que los usuarios queden atrapados en contenido.                 |
| **2.1 Teclado accesible**                      | 2.1.4 Atajos de teclado: Proporcionar atajos de teclado para funcionalidades clave.                 |
| **2.2 Tiempo suficiente**                      | 2.2.1 Tiempo ajustable: Dar tiempo suficiente para leer y usar el contenido.                        |
| **2.2 Tiempo suficiente**                      | 2.2.2 Pausa, detención, ocultación: Permitir pausar, detener o ocultar contenido en movimiento.     |
| **2.3 Convulsiones y reacciones físicas**      | 2.3.1 Tres destellos o por debajo del umbral: No usar contenido que pueda causar convulsiones.      |
| **2.4 Navegable**                              | 2.4.1 Evitar bloques: Proporcionar un método para saltar bloques de contenido repetitivo.           |
| **2.4 Navegable**                              | 2.4.2 Título de la página: Título descriptivo y único.                                              |
| **2.4 Navegable**                              | 2.4.3 Orden de enfoque: Orden lógico al navegar con el teclado.                                     |
| **2.4 Navegable**                              | 2.4.4 Propósito del enlace (en contexto): Texto del enlace claro y descriptivo.                     |
| **2.5 Métodos de entrada**                     | 2.5.1 Puntero: Hacer que todas las funcionalidades sean accesibles mediante puntero.               |
| **2.5 Métodos de entrada**                     | 2.5.2 Cancelación de puntero: Proporcionar alternativas para la entrada de puntero.                |
| **2.5 Métodos de entrada**                     | 2.5.3 Etiquetas en el nombre: Proporcionar etiquetas claras para la entrada de datos.               |
| **2.5 Métodos de entrada**                     | 2.5.4 Movimiento: Evitar que el contenido requiera movimientos específicos.                        |
| **3.1 Legible**                                | 3.1.1 Idioma de la página: Idioma principal identificable en el HTML.                               |
| **3.2 Predecible**                             | 3.2.1 Al enfocar: No cambiar el contexto al recibir el foco.                                        |
| **3.2 Predecible**                             | 3.2.2 Al ingresar datos: No cambiar el contexto al ingresar datos.                                  |
| **3.3 Asistencia en la entrada de datos**      | 3.3.1 Identificación de errores: Indicar errores y describirlos.                                    |
| **3.3 Asistencia en la entrada de datos**      | 3.3.2 Etiquetas o instrucciones: Proporcionar etiquetas claras para la entrada de datos.            |

| Pauta de Accesibilidad                          | Criterios a tener en cuenta (Nivel AA)                                                              |
|------------------------------------------------|------------------------------------------------------------------------------------------------------|
| **1.2 Medios temporales**                      | 1.2.4 Subtítulos (en vivo): Subtítulos para contenido de audio en vivo.                             |
| **1.2 Medios temporales**                      | 1.2.5 Descripción de audio (pregrabada): Descripción de audio para contenido visual pregrabado.     |
| **1.3 Adaptable**                              | 1.3.4 Orientación: Permitir contenido en orientación horizontal y vertical.                         |
| **1.3 Adaptable**                              | 1.3.5 Identificación de la finalidad de la entrada: Proporcionar identificación de la finalidad de la entrada. |
| **1.4 Distinguible**                           | 1.4.3 Contraste mínimo: Contraste de al menos 4.5:1 para texto normal.                              |
| **1.4 Distinguible**                           | 1.4.4 Redimensionamiento de texto: Texto redimensionable sin pérdida de funcionalidad.             |
| **1.4 Distinguible**                           | 1.4.5 Imágenes de texto: Evitar imágenes de texto, a menos que sean esenciales.                     |
| **1.4 Distinguible**                           | 1.4.10 Reflujo: El contenido debe refluir correctamente al cambiar el tamaño de la ventana.        |
| **1.4 Distinguible**                           | 1.4.11 Contraste no textual: Contraste de al menos 3:1 para contenido no textual.                   |
| **1.4 Distinguible**                           | 1.4.12 Espaciado de texto: Permitir ajustar el espaciado de texto.                                  |
| **1.4 Distinguible**                           | 1.4.13 Contenido a la vista: Permitir ajustar el contenido visible sin desplazamiento.              |
| **2.4 Navegable**                              | 2.4.5 Múltiples formas: Proporcionar más de una forma de encontrar una página.                      |
| **2.4 Navegable**                              | 2.4.6 Encabezados y etiquetas: Encabezados y etiquetas descriptivos.                               |
| **2.4 Navegable**                              | 2.4.7 Enfoque visible: El elemento enfocado debe ser claramente visible.                           |
| **2.4 Navegable**                              | 2.4.8 Ubicación: Proporcionar información sobre la ubicación del usuario en el sitio.               |
| **2.4 Navegable**                              | 2.4.11 Propósito de la página: Proporcionar información sobre el propósito de la página.            |
| **2.5 Métodos de entrada**                     | 2.5.7 Funcionalidad de puntero: Proporcionar alternativas para la funcionalidad de puntero.        |
| **2.5 Métodos de entrada**                     | 2.5.8 Movimiento limitado: Evitar que el contenido requiera movimientos limitados.                 |
| **3.1 Legible**                                | 3.1.2 Idioma de partes: Identificar el idioma de partes del contenido.                              |
| **3.2 Predecible**                             | 3.2.3 Navegación consistente: Mantener la navegación consistente en todas las páginas.             |
| **3.2 Predecible**                             | 3.2.4 Identificación consistente: Identificar componentes de manera consistente.                   |
| **3.3 Asistencia en la entrada de datos**      | 3.3.3 Sugerencias para errores: Proporcionar sugerencias para corregir errores.                    |
| **3.3 Asistencia en la entrada de datos**      | 3.3.4 Prevención de errores (legales, financieros, de datos): Confirmación antes de enviar datos sensibles. |
| **3.3 Asistencia en la entrada de datos**      | 3.3.8 Ayuda para el usuario: Proporcionar ayuda para corregir errores.                             |
| **4.1 Compatible**                             | 4.1.3 Mensajes de estado: Mensajes de estado programáticamente identificables.                      |

| Pauta de Accesibilidad                          | Criterios a tener en cuenta (Nivel AAA)                                                             |
|------------------------------------------------|------------------------------------------------------------------------------------------------------|
| **1.2 Medios temporales**                      | 1.2.6 Lengua de señas (pregrabada): Lengua de señas para contenido de audio pregrabado.             |
| **1.2 Medios temporales**                      | 1.2.7 Descripción de audio ampliada (pregrabada): Descripción de audio más detallada.              |
| **1.2 Medios temporales**                      | 1.2.8 Alternativa para medios (pregrabados): Alternativa textual completa para contenido multimedia.|
| **1.2 Medios temporales**                      | 1.2.9 Solo audio (en vivo): Alternativa textual para contenido de audio en vivo.                    |
| **1.3 Adaptable**                              | 1.3.6 Identificación de la finalidad de la entrada: Proporcionar identificación de la finalidad de la entrada. |
| **1.4 Distinguible**                           | 1.4.6 Contraste mejorado: Contraste de al menos 7:1 para texto normal.                              |
| **1.4 Distinguible**                           | 1.4.7 Texto sin imágenes: Usar texto real en lugar de imágenes de texto.                            |
| **1.4 Distinguible**                           | 1.4.8 Presentación visual: Permitir personalización de colores, espaciado y fuentes.               |
| **1.4 Distinguible**                           | 1.4.9 Imágenes de texto (sin excepciones): No usar imágenes de texto.                              |
| **2.1 Teclado accesible**                      | 2.1.3 Teclado (sin excepciones): Todo el contenido debe ser operable mediante teclado.              |
| **2.2 Tiempo suficiente**                      | 2.2.3 Sin límite de tiempo: No imponer límite de tiempo para la lectura.                            |
| **2.2 Tiempo suficiente**                      | 2.2.4 Interrupciones: Permitir a los usuarios posponer interrupciones.                              |
| **2.2 Tiempo suficiente**                      | 2.2.5 Reautenticación: Permitir a los usuarios mantener la autenticación.                          |
| **2.2 Tiempo suficiente**                      | 2.2.6 Tiempo ajustable: Permitir a los usuarios ajustar el tiempo límite.                          |
| **2.3 Convulsiones y reacciones físicas**      | 2.3.2 Tres destellos: No usar contenido que pueda causar convulsiones.                             |
| **2.3 Convulsiones y reacciones físicas**      | 2.3.3 Animaciones: Permitir desactivar animaciones.                                                |
| **2.4 Navegable**                              | 2.4.12 Ubicación: Proporcionar información sobre la ubicación del usuario en el sitio.               |
| **2.4 Navegable**                              | 2.4.13 Encabezados de sección: Usar encabezados para organizar el contenido.                        |
| **2.5 Métodos de entrada**                     | 2.5.5 Cancelación de movimiento: Proporcionar alternativas para la entrada de movimiento.          |
| **2.5 Métodos de entrada**                     | 2.5.6 Movimiento con restricciones: Evitar que el contenido requiera movimientos con restricciones. |
| **3.1 Legible**                                | 3.1.3 Palabras inusuales: Explicar palabras inusuales o jergas.                                     |
| **3.1 Legible**                                | 3.1.4 Abreviaturas: Proporcionar expansión de abreviaturas.                                         |
| **3.1 Legible**                                | 3.1.5 Nivel de lectura: Texto fácil de leer y comprender.                                           |
| **3.1 Legible**                                | 3.1.6 Pronunciación: Proporcionar pronunciación para palabras ambiguas.                             |
| **3.2 Predecible**                             | 3.2.5 Cambios en el contexto: Cambios solo con confirmación explícita del usuario.                  |
| **3.3 Asistencia en la entrada de datos**      | 3.3.5 Prevención de errores (todos los contextos): Minimizar los errores en formularios críticos.   |
| **3.3 Asistencia en la entrada de datos**      | 3.3.6 Ayuda en la entrada de datos: Proporcionar ayuda para corregir errores.                       |
| **3.3 Asistencia en la entrada de datos**      | 3.3.9 Ayuda para el usuario: Proporcionar ayuda para corregir errores.                             |








# Criterios de Accesibilidad por Niveles

## Nivel A

| Criterio                                       | Pauta de Accesibilidad                          |
|------------------------------------------------|------------------------------------------------|
| 1.1.1 Alternativas textuales para contenido no textual. | **1.1 Contenido no textual**                   |
| 1.2.1 Solo audio y solo video (pregrabado): Alternativas textuales. | **1.2 Medios temporales**                      |
| 1.2.2 Subtítulos (pregrabados): Subtítulos para contenido de audio en videos pregrabados. | **1.2 Medios temporales**                      |
| 1.2.3 Descripción de audio o alternativa para medios (pregrabados): Descripción de audio para contenido visual. | **1.2 Medios temporales**                      |
| 1.3.1 Información y relaciones: Estructura semántica clara. | **1.3 Adaptable**                              |
| 1.3.2 Secuencia significativa: Orden lógico del contenido. | **1.3 Adaptable**                              |
| 1.3.3 Características sensoriales: No depender solo de forma, tamaño o ubicación. | **1.3 Adaptable**                              |
| 1.4.1 Uso del color: El color no debe ser el único medio para transmitir información. | **1.4 Distinguible**                           |
| 1.4.2 Control de audio: Pausar, detener o ajustar volumen en audio automático. | **1.4 Distinguible**                           |
| 2.1.1 Teclado: Todo el contenido debe ser operable mediante teclado. | **2.1 Teclado accesible**                      |
| 2.1.2 Sin trampa de teclado: Evitar que los usuarios queden atrapados en contenido. | **2.1 Teclado accesible**                      |
| 2.1.4 Atajos de teclado: Proporcionar atajos de teclado para funcionalidades clave. | **2.1 Teclado accesible**                      |
| 2.2.1 Tiempo ajustable: Dar tiempo suficiente para leer y usar el contenido. | **2.2 Tiempo suficiente**                      |
| 2.2.2 Pausa, detención, ocultación: Permitir pausar, detener o ocultar contenido en movimiento. | **2.2 Tiempo suficiente**                      |
| 2.3.1 Tres destellos o por debajo del umbral: No usar contenido que pueda causar convulsiones. | **2.3 Convulsiones y reacciones físicas**      |
| 2.4.1 Evitar bloques: Proporcionar un método para saltar bloques de contenido repetitivo. | **2.4 Navegable**                              |
| 2.4.2 Título de la página: Título descriptivo y único. | **2.4 Navegable**                              |
| 2.4.3 Orden de enfoque: Orden lógico al navegar con el teclado. | **2.4 Navegable**                              |
| 2.4.4 Propósito del enlace (en contexto): Texto del enlace claro y descriptivo. | **2.4 Navegable**                              |
| 2.5.1 Puntero: Hacer que todas las funcionalidades sean accesibles mediante puntero. | **2.5 Métodos de entrada**                     |
| 2.5.2 Cancelación de puntero: Proporcionar alternativas para la entrada de puntero. | **2.5 Métodos de entrada**                     |
| 2.5.3 Etiquetas en el nombre: Proporcionar etiquetas claras para la entrada de datos. | **2.5 Métodos de entrada**                     |
| 2.5.4 Movimiento: Evitar que el contenido requiera movimientos específicos. | **2.5 Métodos de entrada**                     |
| 3.1.1 Idioma de la página: Idioma principal identificable en el HTML. | **3.1 Legible**                                |
| 3.2.1 Al enfocar: No cambiar el contexto al recibir el foco. | **3.2 Predecible**                             |
| 3.2.2 Al ingresar datos: No cambiar el contexto al ingresar datos. | **3.2 Predecible**                             |
| 3.3.1 Identificación de errores: Indicar errores y describirlos. | **3.3 Asistencia en la entrada de datos**      |
| 3.3.2 Etiquetas o instrucciones: Proporcionar etiquetas claras para la entrada de datos. | **3.3 Asistencia en la entrada de datos**      |

## Nivel AA

| Criterio                                       | Pauta de Accesibilidad                          |
|------------------------------------------------|------------------------------------------------|
| 1.2.4 Subtítulos (en vivo): Subtítulos para contenido de audio en vivo. | **1.2 Medios temporales**                      |
| 1.2.5 Descripción de audio (pregrabada): Descripción de audio para contenido visual pregrabado. | **1.2 Medios temporales**                      |
| 1.3.4 Orientación: Permitir contenido en orientación horizontal y vertical. | **1.3 Adaptable**                              |
| 1.3.5 Identificación de la finalidad de la entrada: Proporcionar identificación de la finalidad de la entrada. | **1.3 Adaptable**                              |
| 1.4.3 Contraste mínimo: Contraste de al menos 4.5:1 para texto normal. | **1.4 Distinguible**                           |
| 1.4.4 Redimensionamiento de texto: Texto redimensionable sin pérdida de funcionalidad. | **1.4 Distinguible**                           |
| 1.4.5 Imágenes de texto: Evitar imágenes de texto, a menos que sean esenciales. | **1.4 Distinguible**                           |
| 1.4.10 Reflujo: El contenido debe refluir correctamente al cambiar el tamaño de la ventana. | **1.4 Distinguible**                           |
| 1.4.11 Contraste no textual: Contraste de al menos 3:1 para contenido no textual. | **1.4 Distinguible**                           |
| 1.4.12 Espaciado de texto: Permitir ajustar el espaciado de texto. | **1.4 Distinguible**                           |
| 1.4.13 Contenido a la vista: Permitir ajustar el contenido visible sin desplazamiento. | **1.4 Distinguible**                           |
| 2.4.5 Múltiples formas: Proporcionar más de una forma de encontrar una página. | **2.4 Navegable**                              |
| 2.4.6 Encabezados y etiquetas: Encabezados y etiquetas descriptivos. | **2.4 Navegable**                              |
| 2.4.7 Enfoque visible: El elemento enfocado debe ser claramente visible. | **2.4 Navegable**                              |
| 2.4.8 Ubicación: Proporcionar información sobre la ubicación del usuario en el sitio. | **2.4 Navegable**                              |
| 2.4.11 Propósito de la página: Proporcionar información sobre el propósito de la página. | **2.4 Navegable**                              |
| 2.5.7 Funcionalidad de puntero: Proporcionar alternativas para la funcionalidad de puntero. | **2.5 Métodos de entrada**                     |
| 2.5.8 Movimiento limitado: Evitar que el contenido requiera movimientos limitados. | **2.5 Métodos de entrada**                     |
| 3.1.2 Idioma de partes: Identificar el idioma de partes del contenido. | **3.1 Legible**                                |
| 3.2.3 Navegación consistente: Mantener la navegación consistente en todas las páginas. | **3.2 Predecible**                             |
| 3.2.4 Identificación consistente: Identificar componentes de manera consistente. | **3.2 Predecible**                             |
| 3.3.3 Sugerencias para errores: Proporcionar sugerencias para corregir errores. | **3.3 Asistencia en la entrada de datos**      |
| 3.3.4 Prevención de errores (legales, financieros, de datos): Confirmación antes de enviar datos sensibles. | **3.3 Asistencia en la entrada de datos**      |
| 3.3.8 Ayuda para el usuario: Proporcionar ayuda para corregir errores. | **3.3 Asistencia en la entrada de datos**      |
| 4.1.3 Mensajes de estado: Mensajes de estado programáticamente identificables. | **4.1 Compatible**                             |

## Nivel AAA

| Criterio                                       | Pauta de Accesibilidad                          |
|------------------------------------------------|------------------------------------------------|
| 1.2.6 Lengua de señas (pregrabada): Lengua de señas para contenido de audio pregrabado. | **1.2 Medios temporales**                      |
| 1.2.7 Descripción de audio ampliada (pregrabada): Descripción de audio más detallada. | **1.2 Medios temporales**                      |
| 1.2.8 Alternativa para medios (pregrabados): Alternativa textual completa para contenido multimedia. | **1.2 Medios temporales**                      |
| 1.2.9 Solo audio (en vivo): Alternativa textual para contenido de audio en vivo. | **1.2 Medios temporales**                      |
| 1.3.6 Identificación de la finalidad de la entrada: Proporcionar identificación de la finalidad de la entrada. | **1.3 Adaptable**                              |
| 1.4.6 Contraste mejorado: Contraste de al menos 7:1 para texto normal. | **1.4 Distinguible**                           |
| 1.4.7 Texto sin imágenes: Usar texto real en lugar de imágenes de texto. | **1.4 Distinguible**                           |
| 1.4.8 Presentación visual: Permitir personalización de colores, espaciado y fuentes. | **1.4 Distinguible**                           |
| 1.4.9 Imágenes de texto (sin excepciones): No usar imágenes de texto. | **1.4 Distinguible**                           |
| 2.1.3 Teclado (sin excepciones): Todo el contenido debe ser operable mediante teclado. | **2.1 Teclado accesible**                      |
| 2.2.3 Sin límite de tiempo: No imponer límite de tiempo para la lectura. | **2.2 Tiempo suficiente**                      |
| 2.2.4 Interrupciones: Permitir a los usuarios posponer interrupciones. | **2.2 Tiempo suficiente**                      |
| 2.2.5 Reautenticación: Permitir a los usuarios mantener la autenticación. | **2.2 Tiempo suficiente**                      |
| 2.2.6 Tiempo ajustable: Permitir a los usuarios ajustar el tiempo límite. | **2.2 Tiempo suficiente**                      |
| 2.3.2 Tres destellos: No usar contenido que pueda causar convulsiones. | **2.3 Convulsiones y reacciones físicas**      |
| 2.3.3 Animaciones: Permitir desactivar animaciones. | **2.3 Convulsiones y reacciones físicas**      |
| 2.4.12 Ubicación: Proporcionar información sobre la ubicación del usuario en el sitio. | **2.4 Navegable**                              |
| 2.4.13 Encabezados de sección: Usar encabezados para organizar el contenido. | **2.4 Navegable**                              |
| 2.5.5 Cancelación de movimiento: Proporcionar alternativas para la entrada de movimiento. | **2.5 Métodos de entrada**                     |
| 2.5.6 Movimiento con restricciones: Evitar que el contenido requiera movimientos con restricciones. | **2.5 Métodos de entrada**                     |
| 3.1.3 Palabras inusuales: Explicar palabras inusuales o jergas. | **3.1 Legible**                                |
| 3.1.4 Abreviaturas: Proporcionar expansión de abreviaturas. | **3.1 Legible**                                |
| 3.1.5 Nivel de lectura: Texto fácil de leer y comprender. | **3.1 Legible**                                |
| 3.1.6 Pronunciación: Proporcionar pronunciación para palabras ambiguas. | **3.1 Legible**                                |
| 3.2.5 Cambios en el contexto: Cambios solo con confirmación explícita del usuario. | **3.2 Predecible**                             |
| 3.3.5 Prevención de errores (todos los contextos): Minimizar los errores en formularios críticos. | **3.3 Asistencia en la entrada de datos**      |
| 3.3.6 Ayuda en la entrada de datos: Proporcionar ayuda para corregir errores. | **3.3 Asistencia en la entrada de datos**      |
| 3.3.9 Ayuda para el usuario: Proporcionar ayuda para corregir errores. | **3.3 Asistencia en la entrada de datos**      |





# Criterios de Accesibilidad por Niveles

# Criterios de Accesibilidad por Niveles

## Nivel A

### 1. Perceptible

| **Criterio**                                   | **Pauta de Accesibilidad**                    |
|------------------------------------------------|------------------------------------------------|
| 1.1.1 Alternativas textuales para contenido no textual. | **1.1 Contenido no textual**                   |
| 1.2.1 Solo audio y solo video (pregrabado): Alternativas textuales. | **1.2 Medios temporales**                      |
| 1.2.2 Subtítulos (pregrabados): Subtítulos para contenido de audio en videos pregrabados. | **1.2 Medios temporales**                      |
| 1.2.3 Descripción de audio o alternativa para medios (pregrabados): Descripción de audio para contenido visual. | **1.2 Medios temporales**                      |
| 1.3.1 Información y relaciones: Estructura semántica clara. | **1.3 Adaptable**                              |
| 1.3.2 Secuencia significativa: Orden lógico del contenido. | **1.3 Adaptable**                              |
| 1.3.3 Características sensoriales: No depender solo de forma, tamaño o ubicación. | **1.3 Adaptable**                              |
| 1.4.1 Uso del color: El color no debe ser el único medio para transmitir información. | **1.4 Distinguible**                           |
| 1.4.2 Control de audio: Pausar, detener o ajustar volumen en audio automático. | **1.4 Distinguible**                           |

### 2. Operable

| **Criterio**                                   | **Pauta de Accesibilidad**                    |
|------------------------------------------------|------------------------------------------------|
| 2.1.1 Teclado: Todo el contenido debe ser operable mediante teclado. | **2.1 Teclado accesible**                      |
| 2.1.2 Sin trampa de teclado: Evitar que los usuarios queden atrapados en contenido. | **2.1 Teclado accesible**                      |
| 2.1.4 Atajos de teclado: Proporcionar atajos de teclado para funcionalidades clave. | **2.1 Teclado accesible**                      |
| 2.2.1 Tiempo ajustable: Dar tiempo suficiente para leer y usar el contenido. | **2.2 Tiempo suficiente**                      |
| 2.2.2 Pausa, detención, ocultación: Permitir pausar, detener o ocultar contenido en movimiento. | **2.2 Tiempo suficiente**                      |
| 2.3.1 Tres destellos o por debajo del umbral: No usar contenido que pueda causar convulsiones. | **2.3 Convulsiones y reacciones físicas**      |
| 2.4.1 Evitar bloques: Proporcionar un método para saltar bloques de contenido repetitivo. | **2.4 Navegable**                              |
| 2.4.2 Título de la página: Título descriptivo y único. | **2.4 Navegable**                              |
| 2.4.3 Orden de enfoque: Orden lógico al navegar con el teclado. | **2.4 Navegable**                              |
| 2.4.4 Propósito del enlace (en contexto): Texto del enlace claro y descriptivo. | **2.4 Navegable**                              |
| 2.5.1 Puntero: Hacer que todas las funcionalidades sean accesibles mediante puntero. | **2.5 Métodos de entrada**                     |
| 2.5.2 Cancelación de puntero: Proporcionar alternativas para la entrada de puntero. | **2.5 Métodos de entrada**                     |
| 2.5.3 Etiquetas en el nombre: Proporcionar etiquetas claras para la entrada de datos. | **2.5 Métodos de entrada**                     |
| 2.5.4 Movimiento: Evitar que el contenido requiera movimientos específicos. | **2.5 Métodos de entrada**                     |

### 3. Comprensible

| **Criterio**                                   | **Pauta de Accesibilidad**                    |
|------------------------------------------------|------------------------------------------------|
| 3.1.1 Idioma de la página: Idioma principal identificable en el HTML. | **3.1 Legible**                                |
| 3.2.1 Al enfocar: No cambiar el contexto al recibir el foco. | **3.2 Predecible**                             |
| 3.2.2 Al ingresar datos: No cambiar el contexto al ingresar datos. | **3.2 Predecible**                             |
| 3.3.1 Identificación de errores: Indicar errores y describirlos. | **3.3 Asistencia en la entrada de datos**      |
| 3.3.2 Etiquetas o instrucciones: Proporcionar etiquetas claras para la entrada de datos. | **3.3 Asistencia en la entrada de datos**      |

## Nivel AA

### 1. Perceptible

| **Criterio**                                   | **Pauta de Accesibilidad**                    |
|------------------------------------------------|------------------------------------------------|
| 1.2.4 Subtítulos (en vivo): Subtítulos para contenido de audio en vivo. | **1.2 Medios temporales**                      |
| 1.2.5 Descripción de audio (pregrabada): Descripción de audio para contenido visual pregrabado. | **1.2 Medios temporales**                      |
| 1.3.4 Orientación: Permitir contenido en orientación horizontal y vertical. | **1.3 Adaptable**                              |
| 1.3.5 Identificación de la finalidad de la entrada: Proporcionar identificación de la finalidad de la entrada. | **1.3 Adaptable**                              |
| 1.4.3 Contraste mínimo: Contraste de al menos 4.5:1 para texto normal. | **1.4 Distinguible**                           |
| 1.4.4 Redimensionamiento de texto: Texto redimensionable sin pérdida de funcionalidad. | **1.4 Distinguible**                           |
| 1.4.5 Imágenes de texto: Evitar imágenes de texto, a menos que sean esenciales. | **1.4 Distinguible**                           |
| 1.4.10 Reflujo: El contenido debe refluir correctamente al cambiar el tamaño de la ventana. | **1.4 Distinguible**                           |
| 1.4.11 Contraste no textual: Contraste de al menos 3:1 para contenido no textual. | **1.4 Distinguible**                           |
| 1.4.12 Espaciado de texto: Permitir ajustar el espaciado de texto. | **1.4 Distinguible**                           |
| 1.4.13 Contenido a la vista: Permitir ajustar el contenido visible sin desplazamiento. | **1.4 Distinguible**                           |

### 2. Operable

| **Criterio**                                   | **Pauta de Accesibilidad**                    |
|------------------------------------------------|------------------------------------------------|
| 2.4.5 Múltiples formas: Proporcionar más de una forma de encontrar una página. | **2.4 Navegable**                              |
| 2.4.6 Encabezados y etiquetas: Encabezados y etiquetas descriptivos. | **2.4 Navegable**                              |
| 2.4.7 Enfoque visible: El elemento enfocado debe ser claramente visible. | **2.4 Navegable**                              |
| 2.4.8 Ubicación: Proporcionar información sobre la ubicación del usuario en el sitio. | **2.4 Navegable**                              |
| 2.4.11 Propósito de la página: Proporcionar información sobre el propósito de la página. | **2.4 Navegable**                              |
| 2.5.7 Funcionalidad de puntero: Proporcionar alternativas para la funcionalidad de puntero. | **2.5 Métodos de entrada**                     |
| 2.5.8 Movimiento limitado: Evitar que el contenido requiera movimientos limitados. | **2.5 Métodos de entrada**                     |

### 3. Comprensible

| **Criterio**                                   | **Pauta de Accesibilidad**                    |
|------------------------------------------------|------------------------------------------------|
| 3.1.2 Idioma de partes: Identificar el idioma de partes del contenido. | **3.1 Legible**                                |
| 3.2.3 Navegación consistente: Mantener la navegación consistente en todas las páginas. | **3.2 Predecible**                             |
| 3.2.4 Identificación consistente: Identificar componentes de manera consistente. | **3.2 Predecible**                             |
| 3.3.3 Sugerencias para errores: Proporcionar sugerencias para corregir errores. | **3.3 Asistencia en la entrada de datos**      |
| 3.3.4 Prevención de errores (legales, financieros, de datos): Confirmación antes de enviar datos sensibles. | **3.3 Asistencia en la entrada de datos**      |
| 3.3.8 Ayuda para el usuario: Proporcionar ayuda para corregir errores. | **3.3 Asistencia en la entrada de datos**      |

### 4. Robusto

| **Criterio**                                   | **Pauta de Accesibilidad**                    |
|------------------------------------------------|------------------------------------------------|
| 4.1.3 Mensajes de estado: Mensajes de estado programáticamente identificables. | **4.1 Compatible**                             |

## Nivel AAA

### 1. Perceptible

| **Criterio**                                   | **Pauta de Accesibilidad**                    |
|------------------------------------------------|------------------------------------------------|
| 1.2.6 Lengua de señas (pregrabada): Lengua de señas para contenido de audio pregrabado. | **1.2 Medios temporales**                      |
| 1.2.7 Descripción de audio ampliada (pregrabada): Descripción de audio más detallada. | **1.2 Medios temporales**                      |
| 1.2.8 Alternativa para medios (pregrabados): Alternativa textual completa para contenido multimedia. | **1.2 Medios temporales**                      |
| 1.2.9 Solo audio (en vivo): Alternativa textual para contenido de audio en vivo. | **1.2 Medios temporales**                      |
| 1.3.6 Identificación de la finalidad de la entrada: Proporcionar identificación de la finalidad de la entrada. | **1.3 Adaptable**                              |
| 1.4.6 Contraste mejorado: Contraste de al menos 7:1 para texto normal. | **1.4 Distinguible**                           |
| 1.4.7 Texto sin imágenes: Usar texto real en lugar de imágenes de texto. | **1.4 Distinguible**                           |
| 1.4.8 Presentación visual: Permitir personalización de colores, espaciado y fuentes. | **1.4 Distinguible**                           |
| 1.4.9 Imágenes de texto (sin excepciones): No usar imágenes de texto. | **1.4 Distinguible**                           |

### 2. Operable

| **Criterio**                                   | **Pauta de Accesibilidad**                    |
|------------------------------------------------|------------------------------------------------|
| 2.1.3 Teclado (sin excepciones): Todo el contenido debe ser operable mediante teclado. | **2.1 Teclado accesible**                      |
| 2.2.3 Sin límite de tiempo: No imponer límite de tiempo para la lectura. | **2.2 Tiempo suficiente**                      |
| 2.2.4 Interrupciones: Permitir a los usuarios posponer interrupciones. | **2.2 Tiempo suficiente**                      |
| 2.2.5 Reautenticación: Permitir a los usuarios mantener la autenticación. | **2.2 Tiempo suficiente**                      |
| 2.2.6 Tiempo ajustable: Permitir a los usuarios ajustar el tiempo límite. | **2.2 Tiempo suficiente**                      |
| 2.3.2 Tres destellos: No usar contenido que pueda causar convulsiones. | **2.3 Convulsiones y reacciones físicas**      |
| 2.3.3 Animaciones: Permitir desactivar animaciones. | **2.3 Convulsiones y reacciones físicas**      |
| 2.4.12 Ubicación: Proporcionar información sobre la ubicación del usuario en el sitio. | **2.4 Navegable**                              |
| 2.4.13 Encabezados de sección: Usar encabezados para organizar el contenido. | **2.4 Navegable**                              |
| 2.5.5 Cancelación de movimiento: Proporcionar alternativas para la entrada de movimiento. | **2.5 Métodos de entrada**                     |
| 2.5.6 Movimiento con restricciones: Evitar que el contenido requiera movimientos con restricciones. | **2.5 Métodos de entrada**                     |

### 3. Comprensible

| **Criterio**                                   | **Pauta de Accesibilidad**                    |
|------------------------------------------------|------------------------------------------------|
| 3.1.3 Palabras inusuales: Explicar palabras inusuales o jergas. | **3.1 Legible**                                |
| 3.1.4 Abreviaturas: Proporcionar expansión de abreviaturas. | **3.1 Legible**                                |
| 3.1.5 Nivel de lectura: Texto fácil de leer y comprender. | **3.1 Legible**                                |
| 3.1.6 Pronunciación: Proporcionar pronunciación para palabras ambiguas. | **3.1 Legible**                                |
| 3.2.5 Cambios en el contexto: Cambios solo con confirmación explícita del usuario. | **3.2 Predecible**                             |
| 3.3.5 Prevención de errores (todos los contextos): Minimizar los errores en formularios críticos. | **3.3 Asistencia en la entrada de datos**      |
| 3.3.6 Ayuda en la entrada de datos: Proporcionar ayuda para corregir errores. | **3.3 Asistencia en la entrada de datos**      |
| 3.3.9 Ayuda para el usuario: Proporcionar ayuda para corregir errores. | **3.3 Asistencia en la entrada de datos**      |





# 4- Comprobación del cumplimiento de los criterios de accesibilidad

En el desarrollo de aplicaciones y sitios web accesibles, las pruebas automatizadas desempeñan un papel crucial al identificar rápidamente problemas de accesibilidad mediante herramientas que evalúan el código y la interfaz de usuario. Sin embargo, para garantizar una experiencia inclusiva, es fundamental complementar estas pruebas con evaluaciones realizadas por usuarios reales, tanto con discapacidad como sin ella. Las pruebas con tecnologías asistivas, como lectores de pantalla y dispositivos de entrada alternativa, proporcionan una visión esencial de cómo los usuarios con diversas necesidades interactúan con el contenido digital. Además, una documentación exhaustiva y actualizada es vital para guiar a los desarrolladores y diseñadores en la implementación de mejores prácticas de accesibilidad, asegurando que todos los usuarios puedan acceder y disfrutar de la tecnología de manera equitativa.

## 4.1 - Pruebas de usuario

Las pruebas de usuario son una parte esencial del proceso de desarrollo de un sitio web accesible. Aunque las herramientas automáticas y las revisiones manuales pueden identificar muchos problemas de accesibilidad, no hay sustituto para la retroalimentación directa de los usuarios reales, especialmente aquellos con discapacidades. Las pruebas de usuario proporcionan una visión única y valiosa sobre cómo las personas interactúan con tu sitio web y qué barreras pueden encontrar.

Las pruebas de usuario de accesibilidad se parecen a las pruebas de usabilidad, pero son distintas:
- **Pruebas de Accesibilidad**: Se centran en asegurar que el sitio web sea utilizable por personas con discapacidades. Esto incluye la verificación de que el contenido sea perceptible, operable, comprensible y robusto, según las Pautas de Accesibilidad para el Contenido Web (WCAG).
- **Pruebas de Usabilidad**: Se centran en la facilidad de uso del sitio web para todos los usuarios, incluidos aquellos sin discapacidades. Evalúan aspectos como la eficiencia, la efectividad y la satisfacción del usuario.


### 4.1.1- Tipos de Discapacidades a Considerar

Para obtener una visión completa de la accesibilidad del sitio web, es importante incluir a usuarios con una variedad de discapacidades en las pruebas. Algunas de las discapacidades que se deben considerar incluyen:

- **Discapacidades Visuales:** Personas con ceguera, baja visión o daltonismo.
- **Discapacidades Auditivas:** Personas con sordera o dificultades auditivas.
- **Discapacidades Motrices:** Personas con limitaciones físicas que afectan el uso del teclado o el ratón.
- **Discapacidades Cognitivas:** Personas con dificultades de aprendizaje, problemas de memoria o trastornos del espectro autista.
- **Discapacidades del Habla:** Personas con dificultades para hablar o entender el habla.

### 4.1.2- Cómo Realizar Pruebas de Usuario

1. **Reclutamiento de Participantes**
    - **Diversidad:** Se debe reclutar una muestra diversa de usuarios que representen diferentes tipos de discapacidades.
    - **Compensación:** Se debe ofrecer una compensación adecuada por el tiempo y el esfuerzo de los participantes.
    - **Consentimiento:** Se debe obtener el consentimiento informado de los participantes antes de comenzar las pruebas.

2. **Preparación de las Pruebas**
    - **Escenarios de Uso:** Los escenarios de uso que los usuarios deben probar deben estar claros y ser específicos.
    - **Tareas:** Las tareas deben cubrir las funcionalidades clave de la web.
    - **Entorno:** El entorno de prueba debe ser accesible y cómodo para los participantes.

3. **Ejecución de las Pruebas**
    - **Observación:** Se debe observa cómo los usuarios interactúan con el sitio web sin interferir.
    - **Retroalimentación:** Se debe anima a los usuarios a pensar en voz alta y a proporcionar retroalimentación sobre cualquier dificultad que encuentren.
    - **Grabación:** Si es posible, se debe graba las sesiones de prueba para un análisis posterior.

4. **Análisis de Resultados**. Se debe identificar los problemas de accesibilidad que los usuarios encuentran durante las pruebas.


## 4.2- Herramientas automatizadas

### Herramientas en Línea
- **[W3C Markup Validation Service](https://validator.w3.org/)** permite comprobar que el código HTML y CSS es válido y no contiene errores que puedan afectar la accesibilidad.
- **[WAVE (Web Accessibility Evaluation Tool)](https://wave.webaim.org/)** proporciona una evaluación visual de la accesibilidad mediante iconos y barras laterales dentro de la página web.
- **[Tenon.io](https://tenon.io/)** es una API y herramienta en línea que identifica problemas de accesibilidad y proporciona recomendaciones para solucionarlos.
- **[TAW (Test de Accesibilidad Web)](https://www.tawdis.net/)** es una herramienta en línea que analiza la accesibilidad de una página web y proporciona un informe detallado.
  
### Extensiones de Navegador

- **[axe Accessibility Checker](https://www.deque.com/axe/)** es una extensión de navegador que realiza auditorías de accesibilidad automatizadas y proporciona informes detallados.
- **[Accessibility Insights for Web](https://accessibilityinsights.io/)** es una extensión de Microsoft que proporciona herramientas de auditoría y pruebas de accesibilidad.
- **[Siteimprove Accessibility Checker](https://siteimprove.com/)** es una extensión que analiza páginas web para identificar problemas de accesibilidad y proporciona recomendaciones.
 
### Herramientas de Escritorio
- **[aXe for Windows](https://www.deque.com/axe/windows)** es una aplicación de escritorio que integra la funcionalidad de axe para auditorías de accesibilidad en aplicaciones de Windows.
- **[SortSite](https://www.powermapper.com/products/sortsite/)** Es una herramienta de escritorio que realiza auditorías de accesibilidad, SEO y estándares web.

### Herramientas Integradas en IDE

- **[AccessLint]((https://accesslint.com/))** Es una herramienta de línea de comandos que se integra con el flujo de trabajo de desarrollo para auditar la accesibilidad del código.
- **[pa11y](https://pa11y.org/)** Es un conjunto de herramientas que ayudan a encontrar y solucionar problemas de accesibilidad en sitios web.

### Herramientas Integradas en Navegadores

- **[Lighthouse](https://developers.google.com/web/tools/lighthouse)** Es una herramienta integrada en Chrome DevTools que audita el rendimiento, accesibilidad y SEO de las páginas web.


## 4.3- Pruebas con Tecnologías Asistivas

Para garantizar que el sitio web sea accesible para todos los usuarios, es fundamental probar su funcionamiento con tecnologías asistivas. Estas herramientas permiten a personas con discapacidades navegar y comprender el contenido web de manera efectiva. Algunos de los principales lectores de pantalla son **NVDA, JAWS y VoiceOver**


# 5. Documentación y Revisión Continua

- **Documentación:** Se debe mantener  un informe detallado de todas las pruebas y revisiones realizadas, incluyendo los resultados y las acciones correctivas tomadas.
- **Revisión Periódica:** Se debe establecer un calendario para realizar revisiones periódicas de accesibilidad, ya que el contenido y la funcionalidad del sitio web pueden cambiar con el tiempo.






