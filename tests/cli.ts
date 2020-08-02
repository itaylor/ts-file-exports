import { execSync } from "child_process";
import 'mocha-ui-jest';

const expectedResult = `foo
MyClass
default
somethingElse
`;

describe('typescript exports', () => {
  test('regularExports - typescript', () => {
    const output = execSync('node build/cli.js fixtures/regularExports.ts', { encoding: 'utf8'});
    expect(output).toBe(expectedResult);
  });
  
  test('reExports - typescript', () => {
    const output = execSync('node build/cli.js fixtures/reExports.ts', { encoding: 'utf8'});
    expect(output).toBe(expectedResult);
  });
  
  test('wildcardExports - typescript', () => {
    const output = execSync('node build/cli.js fixtures/reExports.ts', { encoding: 'utf8'});
    expect(output).toBe(expectedResult);
  });
})

describe("Javascript ES Modules exports", () => {
  test('regularExports - javascript', () => {
    const output = execSync('node build/cli.js fixtures/regularExportsJS.js', { encoding: 'utf8' });
    expect(output).toBe(expectedResult);
  });
  
  test('reExports - javascript', () => {
    const output = execSync('node build/cli.js fixtures/reExportsJS.js', { encoding: 'utf8' });
    expect(output).toBe(expectedResult);
  });
  
  test('wildcardExports - javascript', () => {
    const output = execSync('node build/cli.js fixtures/reExportsJS.js', { encoding: 'utf8' });
    expect(output).toBe(expectedResult);
  });  
})

describe('CommonJS Exports, JavaScript', () => {
  test('regularExports - CommonJS', () => {
    const output = execSync('node build/cli.js fixtures/regularExportsCJS.js', { encoding: 'utf8' });
    expect(output).toBe(expectedResult);
  });
  
  test('singleExportObject - CommonJS', () => {
    const output = execSync('node build/cli.js fixtures/singleExportObjectCJS.js', { encoding: 'utf8' });
    expect(output).toBe(expectedResult);
  });
});
