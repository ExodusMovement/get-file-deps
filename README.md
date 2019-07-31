# Usage

Parse dependencies from a JS string (supports both `require` and `import`)

```js
const { parseDeps } = require('@exodus/parse-deps')

const deps = parseDeps(`
import a from 'somewhere'

const b = require('./something')

const c = 'ho'
`)

console.log(deps) // { imports: [ 'somewhere' ], requires: [ './something' ] }
```
