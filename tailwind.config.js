/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'urbanist': ['BB Urbanist', 'sans-serif'],
      },
      colors: {
        'sonic-white': '#F5F5F5',
        'sonic-black': '#121214',
        'background': '#121214',
        'foreground': '#F5F5F5',
        'sonic-white': '#F5F5F5',
        'sonic-black': '#121214',
        'shade-light': '#FFEEDB',
        'card': '#1a1c1e',
      },
      borderColor: {
        'sonic-black/10': 'hsl(var(--sonic-black)/.1)',
      },
      divideColor: {
        'sonic-black/15': 'hsl(var(--sonic-black)/.15)',
        'sonic-white/20': 'hsl(var(--sonic-white)/.2)',
      },
      backgroundImage: {
        'gradient-sonic-horizontal': 'linear-gradient(270deg,#214e82 25%,#506077 50%,#ec5409 75%,#ffc966)',
        'gradient-sonic-mirrored': 'linear-gradient(90deg, #214e81, #506179, #ed5409, #ffcb67, #ffcb67, #ed5409, #506179, #214e81)',
        'gradient-sonic-mirrored': 'linear-gradient(90deg,#214e81,#506179,#ed5409,#ffcb67,#ffcb67,#ed5409,#506179,#214e81)',
        'gradient-sonic-vertical': 'linear-gradient(0deg,#214e82 25%,#506077 50%,#ec5409 75%,#ffc966)',
        'planet-glow': 'conic-gradient(from 45deg at 50% 50%,#f43,#ffcb67,#214e81,#f43)',
        'planet-glow-foreground': 'radial-gradient(#000 50%,transparent 100%),conic-gradient(from 45deg at 50% 50%,#f43,#ffcb67,#214e81,#f43)',
      },
      backgroundSize: {
        '200%': '200% auto', 
      },
      textColor: {
        'sonic-black': '#000',
        'sonic-white': '#fff',
      },
      fontSize: {
        'd-body': '1rem',
        'd-body-large': '1.5rem',
        'd-body-small': '1.125rem',
        'body-lg': '.875rem',
        'd-h1': '8rem',
        'd-h2': '6rem',
        'd-h3': '5rem',
        'd-h4': '4rem',
        'd-h5': '3rem',
        'd-h6': '2rem',
        'd-micro': '.75rem',
        'm-body': '1rem',
        'm-body-large': '1.125rem',
        'm-body-small': '.875rem',
        'm-caption': '.875rem',
        'm-h1': '3.5rem',
        'm-h2': '2.5rem',
        'm-h3': '2rem',
        'm-h4': '1.5rem',
        'm-h5': '1.25rem',
        'm-h6': '1rem',
        'm-micro': '.625rem',
        't-body': '1rem',
        't-body-large': '1.125rem',
        't-body-small': '.875rem',
        't-caption': '.875rem',
        't-h1': '6rem',
        't-h2': '3.375rem',
        't-h3': '2.5rem',
        't-h4': '1.5rem',
        't-h5': '1.25rem',
        't-h6': '1rem',
        't-micro': '.75rem',
        'h1': ['3.5rem', '3.5rem'],
        'h2': ['2.5rem', '4rem'],
        'h3': ['2rem', '3rem'],
        'h4': ['1.5rem', '1.75rem'],
        'h5': ['1.25rem', '1.5rem'],
        'h6': ['1rem', '1.125rem'],
        'body-lg': ['1.125rem', '1.5rem'],
        'body': ['1rem', '1.5rem'],
        'body-sm': ['0.875rem', '1.375rem'],
        'body-xs': ['0.75rem', '1.125rem'],
        'caption': ['0.875rem', '1.25rem'],
      },
      keyframes: {
        spin: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        pulse: {
          "50%": {
            opacity: ".5",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
      },
    },
  },
  plugins: [],
}