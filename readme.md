# ts-file-exports
A utility for getting all the named exports of a TypeScript or JavaScript file.

## What kinds of module exports are supported?

In `.ts` files: 
  * Typescript exports, and typescript wildcard exports
In `.js` files: 
  * ES Modules exports including wildcard exports
  * CommonJS exports 

For more details on the supported export types, see the `tests/cli.ts` file and the `fixtures/` folders.

## How to use from CLI

```bash
yarn global add ts-file-exports
# or 
npm install -g ts-file-exports
```

Then:
```bash
ts-file-exports path/to/ts/or/js/file.ts
```
It will print the names of the exports in that file, each on a separate line.

## How to use as an API

```typescript
import getExports from 'ts-file-exports';

const exports: string[] = getExports('path/to/ts/or/js/file.ts');
console.log(exports);
// Prints an array of string names of the exports for the referenced file.
```

## How does it work?
It just loads typescript to parse/analyze/check the file.  Then it calls to the `checker.getExportsAndPropertiesOfModule` TypeScript API.

## It's pretty slow...
Yes, it has to spin up all of TypeScript to be able to work.
