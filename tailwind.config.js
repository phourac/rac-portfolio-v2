/** @type {import('tailwindcss').Config} */

const primary = '#1C1A1F'

const colorsText = '#F5F5F5'

export default {
  theme: {
    extend: {
      colors: {
        primary: primary,
        paper: '#C4F000',
        secondary: '#180e77'
      },
      textColor: {
        primary: colorsText,
        secondary: '#B4B4B4'
      },
      fontSize: {
        sm: ['12px', '18px'], // Small text with 18px line-height
        base: ['16px', '24px'], // Default text size
        lg: ['20px', '28px'], // Large text
        xl: ['24px', '32px'], // Extra large text
        '2xl': ['30px', '36px'], // Double extra large text
        '3xl': ['36px', '40px'] // Triple extra large text
      }
    }
  },
  plugins: [require('daisyui')]
}
