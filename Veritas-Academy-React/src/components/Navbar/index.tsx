import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../../assets/VeritasAcademy.png";
import { Container } from "@mui/system";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              component="img"
              src={`${Logo}`}
              sx={{ width: "200px" }}
            />
            <Box>
              <Button color="inherit">Testimonials</Button>
              <Button color="inherit">About Us</Button>
              <Button color="warning">Login</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
