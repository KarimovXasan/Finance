/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1140': '1140px'
      },
      colors: {
        "darkBlue": "#111849",
        "blue": "#3029D9",
        "gray": "#A0ABB8",
        "liteBlue": "#5975FF",
        "bgColor": "#D6D4F7"
      },
      boxShadow: {
        "startShadow": "0px 50px 100px 0px rgba(0, 0, 0, 0.1)",
        "service": "0px 10px 100px 10px rgba(0, 0, 0, 0.1)"
      },
      backgroundImage: {
        'navbar': "url('/src/assets/img/blue.jpg')"
      }
    },
  },
  plugins: [],
}