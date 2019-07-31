# Usage

Parse dependencies from a JS string (supports both `require` and `import`)

```js
const { getDeps } = require('@exodus/parse-deps')

const deps = getDeps(`
import a from 'somewhere'

const b = require('./something')

const c = 'ho'
`)

console.log(deps) // { imports: [ 'somewhere' ], requires: [ './something' ] }s
```
