const functionalTheme = {
  spacing: (spacing: number) => `${spacing / 10}rem`,
};

const staticTheme = {
  colors: {
    // Cores normais
    normal: {
      background: {
        primary: "#F6F6F6",
        secondary: "#E5E5E5",
        tertiary: "#CACACA",
        inverted: "#121212",
      },
      text: {
        primary: "#121212",
        secondary: "#2C2C2C",
        tertiary: "#353535",
        inverted: "#F6F6F6",
      },
      icon: {
        primary: "#121212",
        secondary: "#2C2C2C",
        tertiary: "#353535",
        inverted: "#F6F6F6",
      },
      brand: {
        primary: "#28FFE5",
      },
      semantic: {
        success: "#00CC66",
        error: "#DF2935",
        info: "#3772ff",
        warning: "#fdca40",
      },
    },
    // Cores com gradiente
    gradient: {},
    // Cores com opacidade alterada
    translucent: {
      background: {
        primary: "rgba(246, 246, 246, 0.75)",
        secondary: "rgba(229, 229, 229, 0.75)",
        tertiary: "rgba(202, 202, 202, 0.75)",
        inverted: "rgba(18, 18, 18, 0.75)",
      },
    },
  },
  typography: {
    fontFamily: {
      normal: "Helvetica, sans-serif",
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    fontSize: {
      small: functionalTheme.spacing(12),
      base: functionalTheme.spacing(16),
      big: functionalTheme.spacing(20),
    },
  },
  borderRadius: {
    base: "5px",
  },
  transition: {
    fast: "100ms",
    normal: "200ms",
    slow: "400ms",
  },
  filter: {
    brightness: "brightness(0.8)",
  },
};

const theme = { ...staticTheme, ...functionalTheme };

export default theme;

type themeType = typeof theme;

// Sobrescrevendo o tema do styled-components
declare module "styled-components" {
  export interface DefaultTheme extends themeType {}
}
