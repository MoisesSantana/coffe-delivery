import { createTheme } from '@mui/material/styles';

export const customPallet = {
  yellow: {
    main: '#DBAC2C',
    dark: '#C47F17',
    light: '#F1E9C9',
  },
  purple: {
    main: '#8047F8',
    dark: '#4B2995',
    light: '#EBE5F9',
  },
  base: {
    title: '#272221',
    subtitle: '#403937',
    text: '#574f4d',
    label: '#8d8686',
    hover: '#d7d5d5',
    button: '#e6e5e5',
    input: '#ededed',
    card: '#f3f2f2',
    background: '#fafafa',
    white: '#fff',
  },
};

const theme = createTheme({
  palette: {
    ...customPallet,
  },
});

export default theme;
