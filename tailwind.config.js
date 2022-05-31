const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{html,ts,tsx}"],
    theme: {
        // screens: {},
        extends: {
            inset: {
                26: "6.5rem",
            },
        },
        colors: {
            ...colors,
        },
    },
};
