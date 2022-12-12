import { Box, Container } from "@mui/system";
import spacer2 from "../../assets/images/svg/spacer2.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { Grid } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        aspectRatio: 900 / 90,
        height: "150px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${spacer2})`,
        mt: "auto",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              aspectRatio: 900 / 90,
              height: "150px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{
                borderRadius: "15px",
                width: "100px",
                height: "100px",
                backgroundColor: "blue",
              }}
            >
              <Grid item xs={6} display="flex" justifyContent="center">
                <InstagramIcon />
              </Grid>
              <Grid item xs={6} display="flex" justifyContent="center">
                <TwitterIcon />
              </Grid>
              <Grid item xs={6} display="flex" justifyContent="center">
                <LinkedInIcon />
              </Grid>
              <Grid item xs={6} display="flex" justifyContent="center">
                <FacebookIcon />
              </Grid>
            </Grid>
            <Box sx={{ marginLeft: "auto" }}>
              <ul style={{ display: "flex", listStyle: "none" }}>
                <li style={{ marginLeft: "1rem" }}>About us</li>
                <li style={{ marginLeft: "1rem" }}>Contact Us</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
