// color design tokens export
export const colorTokens = {

  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },


purple: {
    0: "#FFFFFF",
    10: "#F7F0FA",
    50: "#EEDDF7",
    100: "#E5C9F3",
    200: "#DCB6F0",
    300: "#CA8FE9",
    400: "#B868E2",
    500: "#A841DB",
    600: "#962AD4",
    700: "#8423CD",
    800: "#721CC6",
    900: "#6015BF",
    1000:"#2C003A",
  },
  
  secondary: {
    50: "#E6D9F2",
    100: "#E5CCFF",
    200: "#CCB8E0",
    300: "#B285E0",
    400: "#B266FF",
    500: "#9933FF",
    600: "#7F00FF",
    700: "#6600CC",
    800: "#4C0099",
    900: "#330066",
  },

};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            secondary: {
              dark: colorTokens.secondary[200],
              main: colorTokens.secondary[300],
              light: colorTokens.secondary[800],
            },
            neutral: {
              dark: colorTokens.purple[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.purple[300],
              medium: colorTokens.grey[400],
              light: colorTokens.purple[700],
            },
            background: {
              default: colorTokens.purple[1000],
              alt: colorTokens.grey[800],
            },
          }
        : {
            // palette values for light mode
            secondary: {
              dark: colorTokens.secondary[700],
              main: colorTokens.secondary[400],
              light: colorTokens.secondary[50],
            },
            neutral: {
              dark: colorTokens.purple[800],
              main: colorTokens.grey[600],
              mediumMain: colorTokens.purple[500],
              medium: colorTokens.grey[400],
              light: colorTokens.purple[50],
            },
            background: {
              default: colorTokens.purple[100],
              alt: colorTokens.purple[0],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
