/** @type {import('tailwindcss').Config} */

const  clampBuilder = ( minWidthPx, maxWidthPx, minFontSize, maxFontSize ) => {
  
  const minWidth = minWidthPx / 10 // 1 rem = 10px ;
  const maxWidth = maxWidthPx / 10 // 1 rem = 10px ;

  const slope = ( maxFontSize - minFontSize ) / ( maxWidth - minWidth );
  const yAxisIntersection = -minWidth * slope + minFontSize

  return `clamp( ${ minFontSize }rem, ${ yAxisIntersection }rem + ${ slope * 100 }vw, ${ maxFontSize }rem )`;
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily:{
      'Barlow': ['Barlow Condensed', 'sans-serif'],
      'Bellefair' : ['Bellefair', 'serif']
    },
    screens:{
      'mobile' : "576px",
      'tablet' : "768px",
      'pre-laptop': '992px',
      'laptop' : "1200px",
      'desktop' : "1440px"
    },
    extend: {
      fontSize : {
        'h1' : clampBuilder(375, 768, 8, 15),
        'h2' : clampBuilder(375, 768, 5.6, 10),
        'h3' : clampBuilder(375, 768, 2.4, 5.6),
        'h4' : clampBuilder(375, 768, 1.6, 3.2),
        'h5' : clampBuilder(375, 768, 1.6, 2.8),
        'sub-h1' : '2.8rem',
        'sub-h2' : '1.4rem',
        'nav-link' : clampBuilder(375, 768, 1.4, 1.6),
        'body-text' : clampBuilder(375, 768, 1.5, 1.8),
      },
      colors: {
        "lighting": "#FFFFFF",
        "light-blue": "#D0D6F9",
        "darking": "#0B0D17",
      },
      backgroundColor: {
        "lighting": "#FFFFFF",
        "light-blue": "#D0D6F9",
        "darking": "#0B0D17",
      },
      backgroundImage: {
        'home-mobile': "url('./assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('./assets/home/background-home-tablet.jpg')",
        'home-desktop': "url('./assets/home/background-home-desktop.jpg')",
        'destination-mobile': "url('./assets/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('./assets/destination/background-destination-tablet.jpg')",
        'destination-desktop': "url('./assets/destination/background-destination-desktop.jpg')",
        'crew-mobile': "url('./assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('./assets/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('./assets/crew/background-crew-desktop.jpg')",
        'technology-mobile': "url('./assets/technology/background-technology-mobile.jpg')",
        'technology-tablet': "url('./assets/technology/background-technology-tablet.jpg')",
        'technology-desktop': "url('./assets/technology/background-technology-desktop.jpg')",
      }
    },
  },
  plugins: [],
}

