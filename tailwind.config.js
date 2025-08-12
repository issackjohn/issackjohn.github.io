/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,njk,md,js}"],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: "none",
                    },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
