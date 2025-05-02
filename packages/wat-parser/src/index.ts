import type { ASTNode } from "@glimmer/ast";

export function generateWAT(ast: ASTNode[]): string {
  const localDecls: string[] = [];
  const inits: string[] = [];

  for (const node of ast) {
    if (node.type === 'VariableDeclaration') {
      localDecls.push(`(local $${node.name} f64)`);
      inits.push(`f64.const ${node.value}\n    local.set $${node.name}`);
    }
  }

  return `(module
  (func $main (result f64)
    ${localDecls.join('\n    ')}

    ${inits.join('\n    ')}

    f64.const 0 ;; dummy return
  )
  (export "main" (func $main))
)`;
}
