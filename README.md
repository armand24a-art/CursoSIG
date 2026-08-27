# Fundamentos de Razonamiento Espacial con SIG — sitio del curso

Sitio estático (HTML/CSS/JS puro, sin build) para presentar el curso, publicar
los materiales de cada práctica en formato `.zip` y enlazar el formulario de
entrega de la práctica final. Pensado para publicarse gratis con **GitHub Pages**.

## Estructura

```
curso-sig/
├── index.html              # página única con todas las secciones
├── css/style.css
├── js/script.js
├── materiales/
│   ├── practica-0.zip .. practica-5.zip   # paquetes descargables por práctica
│   └── practica-final.zip                 # guía + rúbrica de la evaluación integradora
└── README.md
```

Cada `.zip` de `materiales/` viene con un `README.txt` de marcador de posición.
**Reemplázalos por tus datos y guías reales** antes de la primera sesión:

1. Crea una carpeta local con los archivos de la práctica (shapefiles, CSV, guía en PDF, etc.).
2. Comprímela como `.zip` con el mismo nombre que usa la web, por ejemplo `practica-1.zip`.
3. Sustituye el archivo correspondiente dentro de `materiales/`.
4. Sube el cambio a GitHub (ver despliegue abajo). Los botones de "Descargar .zip"
   ya apuntan a esas rutas, así que no hay que tocar el HTML.

## Foto del instructor

La sección "Instructor" espera una imagen en `assets/instructor.jpg`. Mientras
ese archivo no exista, la web muestra automáticamente un ícono de silueta en su
lugar (no se rompe el diseño).

Para agregar la foto real:

1. Consigue el archivo de la foto (jpg o png, idealmente cuadrada, mínimo 640×640 px).
2. Guárdala como `assets/instructor.jpg` (si usas `.png`, cambia también el
   `src="assets/instructor.jpg"` por `src="assets/instructor.png"` en `index.html`,
   dentro de la sección `id="instructor"`).
3. Sube el cambio a GitHub.

> Nota: se intentó enlazar directamente una foto pública de Google Sites, pero
> ese tipo de imágenes (`lh3.googleusercontent.com/sitesv/...`) suele tener
> restricciones de "hotlink" y no siempre carga fuera del sitio de Google. Por
> eso el sitio ahora espera un archivo local en `assets/`, que es la forma
> confiable de mostrarla en GitHub Pages.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `curso-sig`) y sube todo el
   contenido de esta carpeta a la rama `main`.
2. En el repositorio, ve a **Settings → Pages**.
3. En "Build and deployment", elige **Deploy from a branch**, rama `main`,
   carpeta `/ (root)`.
4. Guarda. GitHub publicará el sitio en unos minutos en
   `https://<tu-usuario>.github.io/<nombre-del-repo>/`.
5. Cada vez que hagas `git push` a `main`, el sitio se actualiza automáticamente.

## Sobre la carga de archivos de los participantes

GitHub Pages es hosting **estático**: no tiene servidor propio, así que no
puede recibir ni almacenar archivos que suban los participantes. Por eso el
sitio usa dos mecanismos distintos:

- **Prácticas 0–5**: el recuadro "Preparar entrega" solo confirma, en el
  navegador de cada participante, qué archivo eligió — es una ayuda visual,
  no un envío real. La entrega efectiva se hace por el canal que definas
  (aula virtual, correo, carpeta compartida de Drive, etc.). Puedes editar
  el texto de la nota en `index.html` (sección `#practicas`) para indicar
  ese canal.
- **Práctica final**: se envía con el formulario de Google incrustado en la
  sección "Entrega final", que si está configurado para aceptar archivos
  adjuntos sí permite subir el mapa temático y el proyecto `.qgz`
  directamente desde el formulario.

Si más adelante quieres recepción real de archivos para las prácticas 0–5,
necesitarías un backend (por ejemplo, un formulario de Google por práctica,
un bucket con subida firmada, o una app con servidor). El sitio está
preparado para enlazar cualquiera de esas opciones sin rediseñar el resto.

## Créditos de imágenes

Las imágenes satelitales de la portada provienen de la colección pública
*Blue Marble* de NASA (dominio público, vía Wikimedia Commons) y de un mapa
de relieve sombreado con licencia Creative Commons BY-SA, ambos enlazados
directamente desde `index.html`.
