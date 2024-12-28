module.exports = {
  presets: [
    require('@vercel/examples-ui/tailwind'),
    require('@dakhfa/design-system/tailwind'),
  ],
  content: [
    // All the packages that might include stories
    './node_modules/@vercel/examples-ui/**/*.js',
    './node_modules/@dakhfa/design-system/**/*.js',
    './node_modules/@dakhfa/pages/**/*.js',
  ],
}
