module.exports = {
  presets: [
    require('@vercel/examples-ui/tailwind'),
    require('@qrmy/design-system/tailwind'),
  ],
  content: [
    // All the packages that might include stories
    './node_modules/@vercel/examples-ui/**/*.js',
    './node_modules/@qrmy/design-system/**/*.js',
    './node_modules/@qrmy/pages/**/*.js',
  ],
}
