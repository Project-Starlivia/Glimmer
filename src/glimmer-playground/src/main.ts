import * as monaco from "monaco-editor";
import { parse } from "./parser";
import { generateWAT } from "./generator";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // ダークテーマ
import "prismjs/components/prism-wasm.js";  // WAT用ハイライト追加

async function loadGlimmerLanguage() {
  const response = await fetch("/glimmer.tmLanguage.json");
  if (!response.ok) {
    throw new Error("Failed to load glimmer.tmLanguage.json");
  }
  const tmLanguage = await response.json();

  monaco.languages.register({ id: "glimmer" });

  monaco.languages.setMonarchTokensProvider("glimmer", {
    tokenizer: {
      root: tmLanguage.patterns.map((pattern: { match: string; name: string }) => [
        new RegExp(pattern.match),
        pattern.name,
      ]),
    },
  });
}

async function initializeEditor() {
  await loadGlimmerLanguage();

  const editorElem = document.getElementById("editor");

  if (!editorElem) {
    throw new Error("Editor element not found");
  }

  const editor = monaco.editor.create(editorElem, {
    value: "const a = 10;",
    language: "glimmer",
    theme: "vs-dark",
    fontSize: 14,
    minimap: { enabled: false },
  });

  const codeBlock = document.getElementById("output");
  if (!codeBlock) {
    throw new Error("Code block not found");

  }
  
  const code = editor.getValue();
  const ast = parse(code);
  const wat = generateWAT(ast);
  codeBlock.textContent = wat;
  Prism.highlightElement(codeBlock as HTMLElement);
}

initializeEditor().catch((error) => {
  console.error("Failed to initialize editor:", error);
});