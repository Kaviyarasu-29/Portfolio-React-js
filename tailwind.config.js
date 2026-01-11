/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            colors: {
                primary: '#6d28d9', // violet-700
                'primary-light': '#8b5cf6', // violet-500
                accent: '#06b6d4', // cyan-500
                'bg-primary': '#050505',
                'bg-secondary': '#0a0a0a',
                'bg-card': '#111111',
            },
            backgroundImage: {
                'gradient-main': 'linear-gradient(135deg, #6d28d9 0%, #06b6d4 100%)',
                'gradient-text': 'linear-gradient(135deg, #c4b5fd 0%, #67e8f9 100%)',
            }
        },
    },
    plugins: [],
}
