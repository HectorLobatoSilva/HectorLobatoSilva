const colors = require("tailwindcss/colors");
module.exports = {
    content: ["./src/**/*.{html,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Light theme
                "l-title": "var(--light-title)",
                "l-subtitle": "var(--light-subtitle)",
                "l-background": "var(--light-background)",
                "l-button": "var(--light-button)",
                // Dark theme
                "d-title": "var(--dark-title)",
                "d-subtitle": "var(--dark-subtitle)",
                "d-background": "var(--dark-background)",
                "d-button": "var(--dark-button)",
            },
        },
        colors: {
            ...colors,
        },
    },
    plugins: [],
};
