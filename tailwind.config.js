/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./**/*.liquid"],
    theme: {
        colors: {
            primary: "#fdb819",
            secondary: "#212121",
            white: "#FFFFFF",
            "dark-grey": "#282828",
            grey: "#D1D2D3",
            "grey-2": "#919294",
            "light-grey": "#F8F8F8",
            "grey-light-background": "#f5f5f5",
            lime: colors.lime,
            red: colors.red,
        },
        fontFamily: {
            sans: "Rubik, sans-serif",
        },
        container: {
            center: true,
            padding: "0.5rem",
        },
        extend: {},
    },
    plugins: [],
};
