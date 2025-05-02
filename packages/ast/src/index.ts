export interface VariableDeclaration {
    type: 'VariableDeclaration';
    name: string;
    value: number;
  }
  
export type ASTNode = VariableDeclaration;

export function parseAst(input: string): ASTNode[] {
    const lines = input.split(';').map(line => line.trim()).filter(Boolean);
    const ast: ASTNode[] = [];

    for (const line of lines) {
        const match = line.match(/^const\s+(\w+)\s*=\s*(-?\d+(\.\d+)?)/);
        if (match) {
        const [, name, value] = match;
        ast.push({
            type: 'VariableDeclaration',
            name,
            value: Number.parseFloat(value)
        });
        }
    }

    return ast;
}
  