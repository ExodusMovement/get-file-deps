const _getImports = require('detective-es6')
const _getRequires = require('detective')

const defaults = {
  requires: {
    parse: {
      sourceType: 'module',
    },
  },
  imports: {
    skipTypeImports: true,
  },
}

const getImports = (content, options = defaults.imports) => _getImports(content, options)

const getRequires = (content, options = defaults.requires) => _getRequires(content, options)

const hasDeps = (content, options) => {
  return getImports(content, options).length || getRequires(content, detectiveOpts).length > 0
}

const getDeps = (content, options) => {
  const imports = getImports(content, options)
  const requires = getRequires(content, options)
  return {
    imports,
    requires,
  }
}

module.exports = {
  hasDeps,
  getDeps,
}
