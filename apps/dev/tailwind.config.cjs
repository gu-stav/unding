/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/@unding/ui/src/**/*.{js,svelte,ts}'
  ],
  safelist: [
    ...Array.from({ length: 12 }).fill('').map((_, i) => `col-span-${i + 1}`)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
