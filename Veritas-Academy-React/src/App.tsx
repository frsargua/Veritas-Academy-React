import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes";
import Navbar from "./components/Navbar";
import { LandingPage } from "./components/Pages/LandingPage";
import { Container } from "@mui/system";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container maxWidth="xl">
        <LandingPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
