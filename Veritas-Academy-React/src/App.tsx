import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes";
import Navbar from "./components/Navbar";
import { LandingPage } from "./components/Pages/LandingPage";
import { Enquire } from "./components/Pages/Enquire";
import { Container } from "@mui/system";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container maxWidth="xl">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<Enquire />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
