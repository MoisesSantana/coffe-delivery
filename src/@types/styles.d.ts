import '@mui/material/styles';
import { customPallet } from '../styles/theme';

const { yellow, purple, base } = customPallet;
type CustomYellowType = typeof yellow;
type CustomPurpleType = typeof purple;
type CustomBaseType = typeof base;

declare module '@mui/material/styles' {
  export interface PaletteOptions {
    yellow: CustomYellowType;
    purple: CustomPurpleType;
    base: CustomBaseType;
  }
}

declare module '@mui/material/TextField' {
  export interface TextFiledPropsColorOverrides {
    yellow: true;
    purple: true;
    base: true;
  }
}
