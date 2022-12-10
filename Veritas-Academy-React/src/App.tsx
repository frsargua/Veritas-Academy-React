import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes";
import Navbar from "./components/Navbar";
import { LandingPage } from "./components/Pages/LandingPage";
import { Enquire } from "./components/Pages/Enquire";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/contact" element={<Enquire />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
