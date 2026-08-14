# Integración directa con ShareLinks

Es viable crear una extensión interna de Chrome/Edge que detecte una macro HTML mientras se edita una página de ShareLinks, envíe su contenido a ShareLinks Studio y coloque el resultado nuevamente en la macro.

La primera versión no debería guardar ni publicar automáticamente. El usuario debe revisar el resultado y ejecutar el guardado final.

## Implementación recomendada

1. Manifest V3 limitado a `https://share.linx.com.br/*`.
2. `content.js` detecta la macro seleccionada y ofrece **Abrir en Studio** e **Insertar resultado**.
3. Studio valida el HTML antes de devolverlo.
4. La extensión guarda un respaldo local del contenido anterior.
5. El usuario confirma la inserción y guarda manualmente la página.

## Evolución opcional

Una integración mediante REST API de Confluence puede actualizar páginas sin controlar visualmente el editor, pero exige autorización de IT, autenticación oficial, control de versiones y auditoría. Nunca se deben extraer cookies, contraseñas o tokens desde el navegador.

## Riesgos

- cambios concurrentes y borradores compartidos;
- transformaciones de macros realizadas por Confluence;
- pérdida de contenido si cambia la estructura del editor;
- permisos diferentes por espacio o página;
- publicación accidental de información incompleta;
- actualizaciones de ShareLinks que rompan selectores.

## Orden de entrega

- Fase 1: copiar contenido entre ShareLinks y Studio.
- Fase 2: insertar en la macro sin guardar.
- Fase 3: API oficial con confirmación, respaldo, versión esperada y auditoría.
