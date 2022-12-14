import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes";
import Navbar from "./components/Navbar";
import { LandingPage } from "./components/Pages/LandingPage";
import { Enquire } from "./components/Pages/Enquire";
import Footer from "./components/Footer";
import { Box } from "@mui/system";
import AboutUs from "./components/Pages/AboutUs";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/contact" element={<Enquire />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
