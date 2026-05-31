export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        sans: ['Poppins', 'Noto Sans Arabic', 'sans-serif'],
        arabic: ['Noto Sans Arabic', 'sans-serif'],
      },
      colors: {
        gold: '#D4AF37',
        silver: '#C0C0C0',
        amber: '#E6B45C',
        noir: '#0A0A0A',
      },
    },
  },
  plugins: [],
}
