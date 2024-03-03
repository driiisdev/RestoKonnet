/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js',
    ],
    theme: {
        extend: {
            colors: {
                ryellow: '#FFAA29',
                rgreen: {
                    100: '#489B53',
                    200: '#306737',
                }
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('preline/plugin'),
    ],
}