/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                '39px': '39px',
                '51px': '51px',
            },
            colors: {
                yellow: '#F5C518',
                darkyellow: '#DAB018',
                gray: '#F1F1F1',
            },
            fontSize: {
                '32px': '32px',
                '15px': '15px',
            },
        },
    },
    plugins: [],
};
