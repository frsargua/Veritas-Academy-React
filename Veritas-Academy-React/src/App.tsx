import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
