import { parse } from "./parser";
import { generateWAT } from "./generator";

const runButton = document.getElementById("run");
if(runButton){
  runButton.addEventListener("click", () => {
    const input = (document.getElementById("input") as HTMLTextAreaElement).value;
    const ast = parse(input);
    const wat = generateWAT(ast);
    (document.getElementById("output") as HTMLPreElement).textContent = wat;
  });
}
