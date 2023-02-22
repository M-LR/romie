/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './src/js/index.js',
        './dist/index.html',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
    darkMode: 'class',
}
