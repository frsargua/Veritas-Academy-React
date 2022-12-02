import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button, { ButtonProps } from "@mui/material/Button";
import Logo from "../../assets/VeritasAcademy.png";
import { Container } from "@mui/system";
import { alpha, styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  let [menuState, setMenuState] = React.useState(false);

  const NbSmScreenButton = styled(Button)<ButtonProps>(({ theme }) => ({
    display: menuState ? "block" : "none",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));

  const NbLgScreenButton = styled(Button)<ButtonProps>(({ theme }) => ({
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  function openMenu() {
    setMenuState((prev) => !prev);
  }

  const mobileButtons = () => {
    return (
      <>
        <NbSmScreenButton variant="navbarButton">Testimonials</NbSmScreenButton>
        <NbSmScreenButton variant="navbarButton">About Us</NbSmScreenButton>
        <NbSmScreenButton variant="navbarButton" color="dark">
          Request A Lesson
        </NbSmScreenButton>
      </>
    );
  };

  const desktopButtons = () => {
    return (
      <Toolbar sx={{ display: { xs: "none", md: "flex" } }}>
        <NbLgScreenButton variant="navbarButton">Testimonials</NbLgScreenButton>
        <NbLgScreenButton variant="navbarButton">About Us</NbLgScreenButton>
        <NbLgScreenButton variant="navbarButton" color="dark">
          Request A Lesson
        </NbLgScreenButton>
      </Toolbar>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "self-start", md: "center" },
            }}
          >
            <Toolbar>
              <Typography
                component="img"
                src={`${Logo}`}
                sx={{ width: "200px" }}
              />
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={openMenu}
                aria-label="menu"
                sx={{ mr: 2, ml: "auto", display: { xs: "block", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>

            {mobileButtons()}
            {desktopButtons()}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
