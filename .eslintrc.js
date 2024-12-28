module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-qrmy`
  extends: ['qrmy'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
