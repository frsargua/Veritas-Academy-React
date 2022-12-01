import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    navbarButton: true;
  }
  interface ButtonPropsColorOverrides {
    dark: true;
  }
}

const defaultTheme = createTheme();

export const theme = createTheme({
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
  },
});
