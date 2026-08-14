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
    assert.doesNotMatch(html, /Integración ShareLinks/);
    assert.doesNotMatch(html, /view-integracion/);
    assert.match(html, /id="theme-preview"/);
    assert.match(html, /id="header-preview"/);
    assert.match(html, /id="header-image" type="file"/);
    assert.match(html, /image\/png,image\/jpeg,image\/webp/);
    assert.match(html, /optimizeHeaderImage/);
    assert.match(html, /class="brand-image"/);
    assert.match(html, /id="theme-highlights"/);
    assert.match(html, /id="theme-video-url"/);
    assert.match(html, /id="theme-icon-picker"/);
    assert.match(html, /id="header-icon-picker"/);
    assert.match(html, /id="icon-dialog"/);
    assert.match(html, /const iconChoices=/);
    assert.match(html, /function insertIcon/);
    assert.match(html, /class="hero-tag"/);
    assert.match(html, /class="hero-highlights"/);
    assert.match(html, /class="hero-highlight-icon">✓/);
    assert.match(html, /class="eyebrow-dot"/);
    assert.match(html, /class="label-icon">◆/);
    assert.match(html, /class="label-icon">→/);
    assert.match(html, /class="index-icon">☰/);
    assert.match(html, /class="content-index" open/);
    assert.match(html, /class="index-module"/);
    assert.match(html, /class="feature-grid"/);
    assert.match(html, /class="step-list"/);
    assert.match(html, /class="sub-title"/);
    assert.match(html, /looksHtml=.*style\|div\|details\|h1/);
    assert.match(html, /confluence=d\.querySelector\("#main-content"\)/);
    assert.match(html, /querySelectorAll\(`h1,h2,h3,h4,h5,h6/);
    assert.match(html, /sections\.unshift\(intro\)/);
    assert.match(html, /parsed\.tags\?\.join\(", "\)\|\|""/);
    assert.match(html, /details\.section/);
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
