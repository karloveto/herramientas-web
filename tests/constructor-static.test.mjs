import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const files = ["public/constructor.html", "docs/constructor.html"];

for (const file of files) {
  test(`${file} contiene los constructores restringidos`, async () => {
    const html = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
    assert.match(html, /Constructor de tema/);
    assert.match(html, /Constructor de cabecera/);
    assert.match(html, /Prompt para IA/);
    assert.match(html, /Integración ShareLinks/);
    assert.match(html, /id="theme-preview"/);
    assert.match(html, /id="header-preview"/);
    assert.match(html, /id="header-image" type="file"/);
    assert.match(html, /image\/png,image\/jpeg,image\/webp/);
    assert.match(html, /optimizeHeaderImage/);
    assert.match(html, /class="brand-image"/);
    assert.match(html, /Paleta controlada/);
    assert.doesNotMatch(html, /type="color"/);
  });
}

test("las versiones public y docs están sincronizadas", async () => {
  const [publicHtml, docsHtml] = await Promise.all(
    files.map((file) => readFile(new URL(`../${file}`, import.meta.url), "utf8")),
  );
  assert.equal(publicHtml, docsHtml);
});
