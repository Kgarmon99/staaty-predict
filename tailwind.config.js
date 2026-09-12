/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        staaty: {
          dark: '#0B0F19',
          card: '#111827',
          border: '#1F2937',
          accent: '#3B82F6',
          emerald: '#10B981',
          purple: '#8B5CF6',
          amber: '#F59E0B'
        }
      }
    },
  },
  plugins: [],
}
