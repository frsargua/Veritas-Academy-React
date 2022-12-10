import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    navbarButton: true;
  }
  interface ButtonPropsColorOverrides {
    dark: true;
    blue500: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    blue500: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    blue500?: PaletteOptions["primary"];
  }
}
declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    blue500: true;
  }
}

const defaultTheme = createTheme();

export const theme = createTheme({
  palette: {
    blue500: {
      main: "#0d6efd",
    },
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "navbarButton" },
          style: {
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
        },
        {
          props: { variant: "navbarButton", color: "dark" },
          style: {
            paddingLeft: "1rem",
            paddingRight: "1rem",
            color: "#eee",
            backgroundColor: "#222",
          },
        },
      ],
    },

    MuiAppBar: {},
  },
});
