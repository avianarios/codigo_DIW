const contenedor = document.getElementById("contenedor");
const picture = document.getElementById("picture");
const sourceAvif = document.getElementById("sourceAvif");
const sourceWebp = document.getElementById("sourceWebp");
const imagen = document.getElementById("imagen");

// Definir imágenes disponibles según tamaño
const imagenes = [
  { ancho: 1200, avif: "img/alhambra-granada_1200.avif", webp: "img/alhambra-granada_1200.webp", jpg: "img/alhambra-granada_1200.jpg" },
  { ancho: 768, avif: "img/alhambra-granada_768.avif", webp: "img/alhambra-granada_768.webp", jpg: "img/alhambra-granada_768.jpg" },
  { ancho: 0, avif: "img/alhambra-granada_480.avif", webp: "img/alhambra-granada_480.webp", jpg: "img/alhambra-granada_480.jpg" }
];

// Función para cambiar la imagen según el tamaño del contenedor
const cambiarImagen = (anchoContenedor) => {
  const imagenSeleccionada = imagenes.find(img => anchoContenedor >= img.ancho);

  // Si ya está cargada, no hacer nada
  if (imagen.dataset.actual === imagenSeleccionada.jpg) return;

  // Cambiar las fuentes de <source> y <img>
  sourceAvif.srcset = imagenSeleccionada.avif;
  sourceWebp.srcset = imagenSeleccionada.webp;
  imagen.src = imagenSeleccionada.jpg;
  
  // Guardar la imagen actual para evitar recargas innecesarias
  imagen.dataset.actual = imagenSeleccionada.jpg;
};

// Observar cambios en el tamaño del contenedor
const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    cambiarImagen(entry.contentRect.width);
  }
});

resizeObserver.observe(contenedor);
