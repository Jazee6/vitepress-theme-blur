/** @type {import('tailwindcss').Config} */
export default {
    content: ["./.vitepress/theme/**/*.vue"],
    theme: {
        extend: {},
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px'
        }
    },
    plugins: [
        require("@tailwindcss/typography"),
    ],
}