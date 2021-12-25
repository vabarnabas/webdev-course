module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        editorDark: '#21252b',
        editorLight: '#282c34',
        textPurple: '#c678dd',
        textRed: '#e06c75',
        textOrange: '#d19a66',
        textYellow: '#ffd700',
        textBlue: '#61afef',
        textGreen: '#98c379',
        textGray: '#7f8591',
        textWhite: '#cccccc',
      },
      fontFamily: {
          menlo: "'Menlo', sans-serif"
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}
