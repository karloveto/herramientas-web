# HTML Claro

Editor visual local para HTML estático. Permite modificar el código y la vista previa, editar textos directamente y descargar un archivo limpio.

## ShareLinks Studio

`constructor.html` reúne dos constructores restringidos:

- **Tema HTML:** replica la plantilla vigente de Costco con etiquetas e iconos, resaltados del hero, video opcional, indicadores, acordeones, párrafos, listas, pasos, tablas, tarjetas, notas, advertencias y código. La plantilla y la paleta no se pueden modificar.
- **Cabecera:** genera el hero con punto cyan, contexto con icono, soluciones, directorio numerado e índice abierto con módulos y subtemas. Permite cargar un logo PNG, JPG o WebP, lo optimiza y lo incrusta en el HTML para evitar dependencias externas.

Ambos generan archivos `.md` que comienzan con `<style>`, validan IDs, encabezados, detalles, scripts y paleta, y procesan todo dentro del navegador. El prompt equivalente está en `PROMPT_SHARELINKS_HTML_RESTRINGIDO.md`.

El botón **Insertar icono** incluye una paleta técnica controlada y coloca el icono en el campo de texto activo, justo en la posición del cursor.

Al importar una página exportada, el Studio genera simultáneamente el body y la cabecera. La introducción alimenta la descripción y el contexto de la cabecera; los módulos, subtemas e IDs reales del body reconstruyen automáticamente sus accesos documentales y su índice.

## Uso rápido

1. Abre `editor.html` en un navegador moderno.
2. Pulsa **Abrir archivo** o pega código en el panel izquierdo.
3. Activa **Edición visual** y haz doble clic sobre un texto.
4. Selecciona palabras y usa la barra contextual para aplicar negrita, cursiva, subrayado, tachado, listas, alineación o colores.
5. Cambia **Aplicar color a** entre texto y recuadro. También puedes agregar un recuadro después del elemento actual.
6. Pulsa **Descargar HTML** para guardar el resultado.

La paleta integrada identifica los colores principales `#002233`, `#00DBFF` y `#A44DFF`, el naranja ocasional `#FF8900` y los cinco colores transitorios. Cada muestra incluye una nota de uso en español.

Para pegar el resultado dentro de ShareLinks o Confluence, usa **Copiar compatible**. Esta opción conserva el CSS original junto al contenido, pero no repite estilos calculados en cada elemento: ShareLinks puede aplicar su propia fuente, colores y tamaños generales. La copia se compacta automáticamente, sin sangrías, comentarios ni espacios de relleno; el código editable conserva su formato normal.

En **Edición visual**, selecciona un texto con doble clic y usa **+ Video** para insertar enlaces de YouTube, Vimeo o archivos MP4/WebM/OGG. Usa **+ Sección** para crear una sección plegable después de la sección actual. Si el documento utiliza el formato `costco-guide`, los elementos nuevos reutilizan automáticamente sus clases y apariencia.

El botón **Display** solicita un texto principal y una segunda línea opcional, genera localmente una imagen WebP tipo pantalla POS y la inserta después del elemento seleccionado. Si el navegador no admite WebP, utiliza PNG. La imagen queda incorporada al HTML y no requiere archivos externos.

Los divisores grises definidos por bloques como `.sb` se muestran y conservan. El botón **+ Divisor** permite insertar una línea gris adicional. Para tablas, **+ Tabla** crea una nueva; después haz doble clic en una celda para editarla o usa **+ Fila**, **− Fila**, **+ Columna** y **− Columna** para cambiar su estructura.

La entrega unificada se encuentra en `outputs/ShareLinks-Suite`. El archivo **Abrir Herramientas ShareLinks.bat** muestra una pantalla inicial para elegir entre el Editor HTML y la herramienta ShareLinks Wiki Tool incluida en el ZIP original. Esta última se conserva en su propia subcarpeta con todos sus scripts auxiliares.

## Publicación en GitHub Pages

La carpeta `docs` contiene la versión web estática y `.github/workflows/pages.yml` publica automáticamente su contenido al enviar cambios a la rama `main`. En GitHub, entra a **Settings → Pages** y selecciona **GitHub Actions** como origen. El Editor HTML funciona en línea; la exportación de ShareLinks continúa siendo local porque depende de PowerShell, control de Chrome, archivos del equipo y una sesión autenticada.

Todo se procesa en el navegador. Los archivos no se suben a ningún servidor y los scripts importados no se ejecutan en la vista previa.

## Desarrollo

La aplicación de desarrollo presenta el editor independiente desde `public/editor.html`. El archivo independiente funciona también mediante `file://` y no requiere dependencias externas.
