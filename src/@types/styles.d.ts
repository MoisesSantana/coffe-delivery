import '@mui/material/styles';

declare module '@mui/material/styles' {
  export interface PaletteOptions {
    yellow: {
      main: string;
      dark: string;
      light: string;
    };
    purpleMain?: string;
    purpleDark?: string;
    purpleLight?: string;
    baseTitle?: string;
    baseSubtitle?: string;
    baseText?: string;
    baseLabel?: string;
    baseHover?: string;
    baseButton?: string;
    baseInput?: string;
    baseCard?: string;
    baseBackground?: string;
    baseWhite?: string;
  }

  export interface Palette {
    yellow: {
      main: string;
      dark: string;
      light: string;
    };
    purpleMain?: string;
    purpleDark?: string;
    purpleLight?: string;
    baseTitle?: string;
    baseSubtitle?: string;
    baseText?: string;
    baseLabel?: string;
    baseHover?: string;
    baseButton?: string;
    baseInput?: string;
    baseCard?: string;
    baseBackground?: string;
    baseWhite?: string;
  }
}

declare module '@mui/material/TextField' {
  export interface TextFieldPropsColorOverrides {
    yellow: {
      main: true;
      dark: true;
      light: true;
    };
  }
}
