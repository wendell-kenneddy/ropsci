module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Barlow Semi Condensed"', 'sans-serif']
      },
      colors: {
        'dark-text': 'hsl(229, 25%, 31%)',
        score: 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'rock-border': '#dc2e4e',
        'scissors-border': '#ec9e0e',
        'paper-border': '#4865f4'
      }
    }
  },
  plugins: []
};
