exports.config = {
  tests: './tests/acceptance/test/*.test.js',
  output: './tests/acceptance/output',
  helpers: {
    Nightmare: {
      url: 'http://localhost',
      show: false
    }
  },
  include: {
    I: './tests/acceptance/steps.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'projectx.loc'
}