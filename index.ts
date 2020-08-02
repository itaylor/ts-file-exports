import ts from 'typescript';
import { resolve } from 'path';
import { existsSync } from 'fs';

export default function run(tsFile: string, complierOpts: ts.CompilerOptions = { allowJs: true }): ts.Symbol[] {
  const fName = resolve(tsFile);
  // console.log(fName);
  if (!existsSync(fName)) {
    throw new Error(`The file ${fName} does not exist`);
  }
  const program = ts.createProgram([fName], complierOpts);
  const checker = program.getTypeChecker();
  const sourceFile = program.getSourceFile(fName);
  if (!sourceFile) return [];
  const exportSymbol = checker.getSymbolAtLocation(sourceFile?.getChildAt(0));
  // @ts-ignore see: https://stackoverflow.com/questions/62865648/how-should-i-get-common-js-exports-with-the-typescript-compiler-api
  const exps = checker.getExportsAndPropertiesOfModule(exportSymbol || sourceFile.symbol);
  return exps;  
}
