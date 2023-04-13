import { createTheme } from '@mui/material/styles';

// export const customPallet = {
//   yellow: {
//     main: '#DBAC2C',
//     dark: '#C47F17',
//     light: '#F1E9C9',
//   },
//   purple: {
//     main: '#8047F8',
//     dark: '#4B2995',
//     light: '#EBE5F9',
//   },
//   base: {
//     title: '#272221',
//     subtitle: '#403937',
//     text: '#574f4d',
//     label: '#8d8686',
//     hover: '#d7d5d5',
//     button: '#e6e5e5',
//     input: '#ededed',
//     card: '#f3f2f2',
//     background: '#fafafa',
//     white: '#fff',
//   },
// };

export const customPalette = {
  // yellowMain: '#DBAC2C',
  // yellowDark: '#C47F17',
  // YellowLight: '#F1E9C9',
  yellow: {
    main: '#DBAC2C',
    dark: '#C47F17',
    light: '#F1E9C9',
  },
  purpleMain: '#8047F8',
  purpleDark: '#4B2995',
  purpleLight: '#EBE5F9',
  baseTitle: '#272221',
  baseSubtitle: '#403937',
  baseText: '#574f4d',
  baseLabel: '#8d8686',
  baseHover: '#d7d5d5',
  baseButton: '#e6e5e5',
  baseInput: '#ededed',
  baseCard: '#f3f2f2',
  baseBackground: '#fafafa',
  baseWhite: '#fff',
};

const theme = createTheme({
  palette: {
    ...customPalette,
  },
});

export default theme;
