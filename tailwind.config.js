module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1e40af',
        'brand-yellow': '#facc15',
      },
      padding: {
        '1/3': '33.33333',
        '2/3': '66.66667',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/aspect-ratio')],
    prefix: 'tw-',
  
    daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1e40af",
          "secondary": "#facc15",
          "accent": "#f472b6",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        }
          theme: {
            screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
          },
        },
      },
      "dark",
      "cupcake",
    ],
  },
};