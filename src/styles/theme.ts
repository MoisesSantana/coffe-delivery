import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    warning: {
      light: '#F1E9C9',
      main: '#DBAC2C',
      dark: '#C47F17',
    },
    secondary: {
      light: '#EBE5F9',
      main: '#8047F8',
      dark: '#4B2995',
    },
    success: {
      light: '#1dd1a1',
      main: '#10ac84',
      dark: '#01a3a4',
    },
    grey: {
      50: '#FFFFFF',
      100: '#FAFAFA',
      200: '#F3F2F2',
      300: '#EDEDED',
      400: '#E6E5E5',
      500: '#D7D5D5',
      600: '#8D8686',
      700: '#574F4D',
      800: '#403937',
      900: '#272221',
    },
    background: {
      default: '#FAFAFA',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
  typography: {
    h1: {
      fontFamily: '"Baloo 2", cursive',
      color: '#272221',
      fontSize: 48,
    },
    h2: {
      fontFamily: '"Baloo 2", cursive',
      color: '#403937',
      fontSize: 32,
    },
    h3: {
      fontFamily: '"Baloo 2", cursive',
      color: '#403937',
      fontSize: 20,
    },
    h4: {
      fontFamily: '"Baloo 2", cursive',
      color: '#403937',
      fontSize: 18,
      fontWeight: 'bold',
    },
    caption: {
      fontFamily: '"Roboto", sans-serif',
      color: '#8D8686',
      fontStyle: 'italic',
    },
    subtitle1: {
      fontFamily: '"Roboto", sans-serif',
      color: '#403937',
      fontSize: 20,
    },
    body1: {
      fontFamily: '"Roboto", sans-serif',
      color: '#574F4D',
    },
    body2: {
      fontFamily: '"Roboto", sans-serif',
      color: '#8d8686',
    },
  },
});

export default theme;
