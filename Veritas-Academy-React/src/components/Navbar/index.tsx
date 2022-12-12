import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button, { ButtonProps } from "@mui/material/Button";
import Logo from "../../assets/images/VeritasAcademy.png";
import { Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  let [menuState, setMenuState] = React.useState(false);

  const NbSmScreenButton = styled(Button)<ButtonProps>(({ theme }) => ({
    display: menuState ? "block" : "none",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));
  const LinkCustom = styled(Link)(() => ({
    border: "none",
    textDecoration: "none",
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

  const LinksCustomDesktop = (text: string, redirect: string) => {
    return (
      <LinkCustom to={`/${redirect}`}>
        <NbLgScreenButton variant="navbarButton" sx={{ color: "white" }}>
          {text}
        </NbLgScreenButton>
      </LinkCustom>
    );
  };
  const LinksCustomMobile = (text: string, redirect: string) => {
    return (
      <LinkCustom to={`/${redirect}`}>
        <NbSmScreenButton variant="navbarButton" sx={{ color: "white" }}>
          {text}
        </NbSmScreenButton>
      </LinkCustom>
    );
  };

  const mobileButtons = () => {
    return (
      <>
        {LinksCustomMobile("Testimonials", "testimonials")}
        {LinksCustomMobile("About Us", "AboutUs")}

        <LinkCustom to={`/Request`}>
          <NbSmScreenButton variant="navbarButton" sx={{ color: "white" }}>
            Request
          </NbSmScreenButton>
        </LinkCustom>
      </>
    );
  };

  const desktopButtons = () => {
    return (
      <Toolbar sx={{ display: { xs: "none", md: "flex" } }}>
        {LinksCustomDesktop("Testimonials", "testimonials")}
        {LinksCustomDesktop("About Us", "AboutUs")}
        <LinkCustom to={`/contact`}>
          <NbLgScreenButton variant="contained" color="inherit">
            Request
          </NbLgScreenButton>
        </LinkCustom>
      </Toolbar>
    );
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static" color="blue500" sx={{ boxShadow: "none" }}>
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
              <LinkCustom to={"/"}>
                <Typography
                  component="img"
                  src={`${Logo}`}
                  sx={{ width: "200px" }}
                />
              </LinkCustom>
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
