/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'divine-gold': '#FFD700',
        'saffron': '#FF6B00',
        'deep-saffron': '#FF4500',
        'sindoor': '#DC143C',
        'mandir-maroon': '#800000',
        'lotus-pink': '#FF69B4',
        'cosmic-dark': '#04010A',
        'void-purple': '#0D0020',
        'temple-stone': '#C8A870',
        'sacred-white': '#FFF8E7',
        'copper': '#B87333',
        'emerald': '#008000',
        'sky-blue': '#0047AB',
      },
      fontFamily: {
        'cinzel': ['Cinzel Decorative', 'serif'],
        'cinzel-regular': ['Cinzel', 'serif'],
        'hindi': ['Noto Sans Devanagari', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'mantra': ['Tillana', 'cursive'],
      },
      boxShadow: {
        'divine': '0 0 30px rgba(255, 215, 0, 0.5)',
        'saffron-glow': '0 0 20px rgba(255, 107, 0, 0.6)',
        'temple': '0 0 40px rgba(255, 215, 0, 0.3)',
      },
      animation: {
        'pulse-divine': 'pulseDivine 3s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 40s linear infinite',
        'rotate-slower': 'rotateSlower 60s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'diya-flicker': 'diyaFlicker 0.5s ease-in-out infinite',
      },
      keyframes: {
        pulseDivine: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotateSlower: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        diyaFlicker: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(0.95)' },
        },
      },
    },
  },
  plugins: [],
}
