// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./jest.config.js')
config.testMatch = ['**/*.spect.ts']
module.exports = config
