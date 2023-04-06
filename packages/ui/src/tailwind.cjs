const plugin = require('tailwindcss/plugin');

module.exports = {
  unding() {
    return plugin(function() {}, {
        content: [
          './src/**/*.{html,js,svelte,ts}',
          './node_modules/@unding/*/src/**/*.{js,svelte,ts}'
        ],
        safelist: [
          ...Array.from({ length: 12 }).fill('').map((_, i) => `col-span-${i + 1}`)
        ],
      })
  }
};
