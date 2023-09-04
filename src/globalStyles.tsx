import {
  createTheme,
  // responsiveFontSizes
} from '@mui/material/styles';
export const colors = {
  // Color palette for backgrounds
  background: {
    primary: '#FFFFFF',
    secondary: '#F9F7FF',
    tertiary: '#D4CFE5',
    dark: '#17161a',
  },
  // Color palette for text
  text: {
    primary: '#17161a',
    secondary: '#5b5766',
    tertiary: '#888299',
    inverse: '#ffffff',
  },
  // Color palette for primary color
  primary: {
    main: '#1f5D66',
    light: '#60aec2',
    dark: '#005264',
  },
  // Color palette for secondary color
  secondary: {
    main: '#463389',
    light: '#755db0',
    dark: '#150c53',
  },
};
export let theme = createTheme({
  palette: {
    primary: {
      main: '#1f5D66',
      light: '#60aec2',
      dark: '#005264',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#463389',
      light: '#755db0',
      dark: '#150c53',
      contrastText: '#ffffff',
    },
    // Override text color for secondary text
    text: {
      secondary: colors.text.secondary,
    },
  },
});
