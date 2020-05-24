module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 0,
      lines: 50,
      statements: 50,
    },
  },
  setupFilesAfterEnv: ['./jest/customMatchers.js'],
}
