import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff4e6',
          100: '#ffe0b3',
          200: '#ffcc80',
          300: '#ffb84d',
          400: '#ffa41a',
          500: '#F27405',
          600: '#d96304',
          700: '#c05203',
          800: '#a74102',
          900: '#8e3001',
        },
        blue: {
          50: '#e6f2ff',
          100: '#b3d9ff',
          200: '#80c0ff',
          300: '#4da7ff',
          400: '#1a8eff',
          500: '#0476D9',
          600: '#0368c3',
          700: '#025aad',
          800: '#014c97',
          900: '#003e81',
        },
        primary: {
          DEFAULT: '#0476D9',
          50: '#e6f2ff',
          100: '#b3d9ff',
          200: '#80c0ff',
          300: '#4da7ff',
          400: '#1a8eff',
          500: '#0476D9',
          600: '#0368c3',
          700: '#025aad',
          800: '#014c97',
          900: '#003e81',
        },
        accent: {
          DEFAULT: '#F27405',
          50: '#fff4e6',
          100: '#ffe0b3',
          200: '#ffcc80',
          300: '#ffb84d',
          400: '#ffa41a',
          500: '#F27405',
          600: '#d96304',
          700: '#c05203',
          800: '#a74102',
          900: '#8e3001',
        },
      },
    },
  },
  plugins: [],
}
export default config

