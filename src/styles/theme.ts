import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#424242',
    },
    secondary: {
      dark: '#182136',
      main: '#6D4AEC',
    },
    error: {
      main: red.A400,
    },
    success: {
      light: '#1dd1a1',
      main: '#10ac84',
      dark: '#01a3a4',
    },
    warning: {
      light: '#feca57',
      main: '#ff9f43',
      dark: '#ff7f50',
    },
  },
});

export default theme;
