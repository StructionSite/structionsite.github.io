/** @type {import('tailwindcss').Config} */
const { colors: tailwindColors } = require("tailwindcss/defaultTheme")

const colors = {
    gold: {
        100: "#DDC289",
        300: "#D1AE62",
        500: "#C69A3B",
        700: "#B88F37",
        900: "#B88F37",
    },
    blue: {
        ...tailwindColors.blue,
        100: "#74CBF9",
        300: "#46B9F7",
        500: "#18A8F5",
        700: "#1697DD",
        900: "#1176AC",
    },
    orange: {
        ...tailwindColors.orange,
        300: "#edc5b2",
        400: "#e29979",
        500: "#d77044",
    },
    primary: {
        background: "#FEECC9",
        light: "#FED891",
        base: "#FBB83A",
        dark: "#DCA132",
    },
    secondary: {
        background: "#E6EEFD",
        light: "#82ABF7",
        base: "#2A70F1",
        dark: "#205BC7",
        // deprecated names
        100: "#E6EEFD",
        200: "#82ABF7",
        400: "#205BC7",
    },
    tertiary: {
        background: "#FBD5C3",
        light: "#F49264",
        base: "#F06B2C",
        dark: "#C45521",
    },
    navy: {
        700: "#30405E",
        900: "#0B1E42",
    },
    gray: {
        ...tailwindColors.gray,
        100: "#F7FAFC",
        200: "#EDF2F7",
        300: "#E2E8F0",
        400: "#CBD5E0",
        500: "#A0AEC0",
        600: "#718096",
        700: "#4A5568",
        800: "#2D3748",
        900: "#1A202C",
    },
    black: "#15181a",
    success: "#44A748",
    warning: "#FBB83A",
    danger: "#E03330",
    warning_refresh: {
        background: "#FDD3D2",
        light: "#F6625F",
        base: "#E03330",
        dark: "#B72A27",
    },
}

module.exports = {
    content: [
        "./templates/**/*.html", "./theme/**/*.html"
    ],
    theme: {
        extend: {
            colors, 
            boxShadow: {
                outline: `0 0 0 3px ${colors.orange[300]}`,
                banner: `0px 1px 8px rgba(0, 0, 0, 0.25)`,
            },

        },
    },
    variants: {
        backgroundColor: ["responsive", "hover", "focus", "group-hover"],
        borderColor: ["responsive", "hover", "focus", "group-hover", "focus-within"],
        textColor: ["responsive", "hover", "group-hover", "focus"],
        scale: ["responsive", "hover", "focus", "group-hover"],
        visibility: ["responsive", "group-hover", "group-focus"],
        fill: ["hover"],
        display: ({ variants }) => [...variants("display"), "last"],
    },
        plugins: [
            require('@tailwindcss/forms'),
            require('@tailwindcss/typography'),
        ],
}
