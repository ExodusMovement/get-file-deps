# @exodus/parse-deps

parse dependencies from a JS string (supports both `require` and `import`)

WARNING: this will not catch dynamic requires/imports, only static ones

# Usage


```js
const { parseDeps } = require('@exodus/parse-deps')

const deps = parseDeps(`
import a from 'somewhere'

const b = require('./something')

const c = 'ho'
`)

console.log(deps) // { imports: [ 'somewhere' ], requires: [ './something' ] }
```
