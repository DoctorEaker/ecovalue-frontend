module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'eco-blue': {
            100: '#D5EBFB',
            200: '#8ECFFF',
            300: '#6081F4',
            400: '#494FE9',
            500: '#2A38BB',
            600: '#0F1B84',
          },
          'eco-green': {
            100: '#C1FFF4',
            200: '#8AF8E4',
            300: '#6AE5CF',
            400: '#47DCC1',
            500: '#36C1A8',
            600: '#1BA189',
          },
          'eco-gray':{
            100: '#EDEEFF',
            200: '#D7D7EF',
            300: '#AFB0D6',
            400: '#858CA5',
            500: '#6F7792',
            600: '#525870',
          },
          'primary':'#494FE9',
          'secondary':'#47DCC1',
          'neutral': '#858CA5'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }