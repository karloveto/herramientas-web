import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the HTML Claro application shell", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>HTML Claro — Editor visual local<\/title>/i);
  assert.match(html, /src="\/editor\.html"/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("ships a standalone, offline editor with clean export controls", async () => {
  const editor = await readFile(
    new URL("../public/editor.html", import.meta.url),
    "utf8",
  );

  assert.match(editor, /id="source-code"/);
  assert.match(editor, /id="preview"/);
  assert.match(editor, /application\/x-html-claro-blocked/);
  assert.match(editor, /Edición visual/);
  assert.match(editor, /Limpiar residuos/);
  assert.match(editor, /Descargar HTML/);
  assert.match(editor, /Copiar compatible/);
  assert.match(editor, /createConfluenceFragment/);
  assert.match(editor, /createCompatibleFragment/);
  assert.match(editor, /minifyCompatibleHtml/);
  assert.match(editor, /HTML compatible y compacto copiado/);
  assert.doesNotMatch(editor, /COMPATIBLE_INLINE_PROPERTIES/);
  assert.doesNotMatch(editor, /protectVisibleStyles/);
  assert.match(editor, /id="formatbar"/);
  assert.match(editor, /A44DFF/);
  assert.match(editor, /FF8900/);
  assert.match(editor, /insertVisualBox/);
  assert.match(editor, /id="add-video"/);
  assert.match(editor, /id="add-display"/);
  assert.match(editor, /id="add-section"/);
  assert.match(editor, /normalizeVideoSource/);
  assert.match(editor, /insertVisualVideo/);
  assert.match(editor, /createDisplayImage/);
  assert.match(editor, /insertVisualDisplay/);
  assert.match(editor, /image\/webp/);
  assert.match(editor, /insertVisualSection/);
  assert.match(editor, /id="add-divider"/);
  assert.match(editor, /id="add-table"/);
  assert.match(editor, /id="table-add-row"/);
  assert.match(editor, /id="table-remove-row"/);
  assert.match(editor, /id="table-add-column"/);
  assert.match(editor, /id="table-remove-column"/);
  assert.match(editor, /insertVisualDivider/);
  assert.match(editor, /insertVisualTable/);
  assert.match(editor, /modifyVisualTable/);
  assert.match(editor, /youtube\.com\/embed/);
  assert.match(editor, /player\.vimeo\.com\/video/);
  assert.match(editor, /allow-scripts allow-same-origin allow-presentation/);
  assert.match(editor, /chrome-extension:\\\/\\\//);
  assert.match(editor, /data-hve-/);
  assert.match(editor, /contenteditable/);
  assert.match(editor, /new Blob\(\[state\.source\]/);
  assert.doesNotMatch(editor, /https?:\/\/[^"']+\.(?:js|css)/i);
});

test("ships a GitHub Pages bundle for the online editor", async () => {
  const [landing, onlineEditor, sourceEditor, workflow] = await Promise.all([
    readFile(new URL("../docs/index.html", import.meta.url), "utf8"),
    readFile(new URL("../docs/editor.html", import.meta.url), "utf8"),
    readFile(new URL("../public/editor.html", import.meta.url), "utf8"),
    readFile(new URL("../.github/workflows/pages.yml", import.meta.url), "utf8"),
  ]);

  assert.match(landing, /href="editor\.html"/);
  assert.match(landing, /Disponible solamente en la suite local/);
  assert.doesNotMatch(landing, /ShareLinks-Herramientas\.zip/);
  assert.equal(onlineEditor, sourceEditor);
  assert.match(workflow, /actions\/configure-pages@v5/);
  assert.match(workflow, /actions\/upload-pages-artifact@v4/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
  assert.match(workflow, /path: docs/);
});
