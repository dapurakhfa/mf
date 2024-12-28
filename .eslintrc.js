module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-dakhfa`
  extends: ['dakhfa'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
