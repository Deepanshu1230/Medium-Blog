/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        leftright:{
          '0%,100%':{transform:'translateY(5) translateX(0)'},
          '50%':{transform : 'translateY(-20px) translateX(-20px)'}
        }
      },
      animation: {
        updown: 'updown 3s ease-in-out infinite',
        leftright:"leftright 3s linear infinite"
      },
    },
  },
    
  plugins: [],
}

