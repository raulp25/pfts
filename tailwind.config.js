/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-rgba': 'rgba(154, 230, 180, 0.16)',
        'pink-rgba': 'rgba(230, 154, 179, 0.16)',
        'green-text-rgba': 'rgb(154,230,180)',
        'pink-text-rgba': 'rgb(255, 126, 206)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require("tailwindcss-hyphens"),
    require("flowbite/plugin"),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
      const isFirefoxRule = postcss.atRule({
        name: '-moz-document',
        params: 'url-prefix()',
      });
      isFirefoxRule.append(container.nodes);
      container.append(isFirefoxRule);
      isFirefoxRule.walkRules((rule) => {
        rule.selector = `.${e(
        `firefox${separator}${rule.selector.slice(1)}`
        )}`;
      });
      });
    }),
  ],
}
