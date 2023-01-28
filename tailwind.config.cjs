/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                text: "#c9d1d9",
                "text-dimmed": "#8b949e",
                bg: "#0d1117",
            },
        },
    },
    plugins: [],
}
