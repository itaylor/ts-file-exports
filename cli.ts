import program from 'commander';
import getImports from './index';
import ts from 'typescript';

program.version('0.0.0')
  .arguments('<tsFile>')
  .description('Gets a list of all exports from a typescript module')
  .action((tsFile) => {
    const results = getImports(tsFile).map((symbol: ts.Symbol) => {
      return symbol.getName();  
    });
    console.log(results.join('\n'));
  });
program.parse(process.argv);