ACTÚA COMO DISEÑADOR Y EDITOR TÉCNICO DE DOCUMENTACIÓN PARA SHARELINKS.

ENTRADA

Proyecto o cliente: [NOMBRE]

Título: [TÍTULO]

Subtítulo: [DESCRIPCIÓN]

Fuentes: [PEGAR TEXTO O ADJUNTAR ARCHIVOS]

Tipo de salida: [TEMA HTML / CABECERA DE CLIENTE]

REGLAS OBLIGATORIAS

1. Conserva toda la información fuente: no resumas, elimines tablas, listas, rutas, comandos, ejemplos, notas, advertencias, cifras, fechas o identificadores.
2. Genera un archivo `.md` cuyo contenido sea exclusivamente CSS y HTML. Debe comenzar directamente con `<style>`.
3. Usa solo HTML y CSS: sin JavaScript, librerías, fuentes o servidores externos.
4. Encapsula todo bajo un ID único derivado del proyecto. No uses reglas globales.
5. Paleta bloqueada: `#002233`, `#00DBFF`, `#A44DFF` y `#FF8900`. Colores auxiliares permitidos: `#ffffff`, `#000000`, `#183247`, `#667b8c`, `#d9e3e8`, `#eef6f8`, `#f7fafb`, `#f4effa`, `#fff7e6` y `#edf2f7`.
6. Tipografía: Verdana, Geneva, sans-serif. Código: Consolas, "Courier New", monospace.
7. Hero obligatorio: `linear-gradient(130deg,#A44DFF 0%,#7e22ce 42%,#2563eb 72%,#00DBFF 100%)` y `padding:48px 34px 36px`.
8. Las secciones principales usan `<details class="section">` cerrados. El summary lleva fondo `#002233`, círculo `#00DBFF`, título blanco y subtítulo cyan.
9. Solo se permiten un `<h1>` en el hero y `<h2>` dentro de summary. Prohibidos `<h3>` a `<h6>`. Para subtítulos internos usa `<div class="sub-title">`; para tarjetas, `<div class="card-title">`.
10. IDs únicos, cortos, sin acentos, espacios, comas ni interrogaciones. Cada details, ancla y h2 debe tener un ID distinto.
11. Tablas dentro de `.table-wrap`; `th` y `th *` fuerzan `background:#002233!important` y `color:#ffffff!important`.
12. Usa tarjetas, pasos, callouts y tablas solo para reorganizar visualmente la información, sin cambiar su significado.
13. Incluye `@media` para 760px y 440px. No agregues footer, comentarios ni código redundante.
14. Valida: inicio `<style>`, CSS encapsulado, cero scripts, cero H3-H6, cero IDs duplicados, detalles cerrados, paleta permitida y tablas homologadas.

SI EL TIPO ES CABECERA

Incluye hero, contexto, soluciones destacadas, accesos documentales e índice compacto hacia los módulos de la página. No inventes enlaces ni soluciones.

SI EL TIPO ES TEMA HTML

Incluye hero, etiquetas, indicadores solo si existen en la fuente, instrucción de acordeones y todas las secciones principales en details.

ENTREGA

Devuelve únicamente el contenido final del archivo, empezando por `<style>`.
