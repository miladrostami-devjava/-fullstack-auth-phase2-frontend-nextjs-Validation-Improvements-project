/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}" // اگر از ساختار app router استفاده می‌کنی
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
