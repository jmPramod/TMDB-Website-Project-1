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
  typography: {
    // Set default font family
    fontFamily: '"Lato", sans-serif',
  },

  // Customize styles for various Material-UI components
  components: {
    MuiButton: {
      styleOverrides: {
        // Custom styles for text button
        text: {
          background: 'transparent',
          color: '#463380',
          '&:hover': {
            backgroundColor: 'transparent',
            color: '#463380',
          },
        },
        // Custom styles for default button
        root: {
          textTransform: 'none',
          color: colors.text.inverse,
          backgroundColor: colors.primary.main,
          '&:hover': {
            backgroundColor: colors.primary.main,
            color: colors.text.inverse,
          },
        },
        // Custom styles for outlined button
        outlined: {
          border: `1px solid ${colors.primary.light}`,
          height: '42px',
          background: colors.text.inverse,
          color: colors.primary.light,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'transparent',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          color: 'transparent',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colors.primary.main,
        },
      },
    },
  },
});
