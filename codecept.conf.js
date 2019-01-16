exports.config = {
  tests: './e2e/tests/*.test.js',
  output: './e2e/output',
  helpers: {
    Nightmare: {
      url: 'http://localhost',
      show: false
    }
  },
  include: {
    I: './e2e/steps.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'projectx.loc'
}