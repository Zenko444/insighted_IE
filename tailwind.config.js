/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0A1F44',
          800: '#0F2A5C',
          700: '#1E3A8A',
        },
        signal: {
          500: '#2563EB',
          400: '#3B82F6',
          300: '#60A5FA',
          200: '#93C5FD',
          100: '#DBEAFE',
          50: '#EFF6FF',
        },
        amber: {
          accent: '#F59E0B',
          glow: '#FBBF24',
        },
        paper: {
          50: '#FFFFFF',
          100: '#F8FAFC',
          200: '#F1F5F9',
          300: '#E2E8F0',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'slow-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
        'gradient-shift': 'gradient-shift 12s ease infinite',
        'slow-spin': 'slow-spin 40s linear infinite',
        breathe: 'breathe 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
