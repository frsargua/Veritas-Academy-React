import {
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import image from "../../assets/images/Owner.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function AboutUs() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2" textAlign="center" fontWeight="600">
        Kabir Kumar
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        textAlign="center"
        fontWeight="500"
        sx={{ mb: "3rem" }}
      >
        Owner
      </Typography>
      <Paper elevation={0}>
        <CardContent>
          <Grid container spacing={0}>
            <Grid item xs={12} md={4}>
              <Typography
                component="img"
                src={image}
                sx={{
                  height: "300px",
                  width: "80%",
                  objectFit: "cover",
                  borderRadius: "10%",
                  border: "1px solid gray",
                  mb: "1rem",
                }}
              />

              <Box sx={{ ml: "1.5rem" }}>
                <Box sx={{ mb: "0.5rem" }}>
                  <Typography variant="body1" textAlign="start">
                    CONTACT
                  </Typography>
                  <Box>
                    <LinkedInIcon /> <EmailIcon /> <LocalPhoneIcon />
                  </Box>
                </Box>
                <Typography variant="body1" textAlign="start">
                  T: XXX-XXXX-XXX
                </Typography>
                <Typography variant="body1" textAlign="start">
                  E: XXXXXXXXXX
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h6" sx={{ mt: "2rem" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum magnam et molestiae ex nesciunt reiciendis esse? Cumque
                maiores fugiat, nostrum suscipit dicta, quibusdam libero facere
                fugit veniam, accusantium ad. Vel sequi unde officiis ab minus
                ducimus ut distinctio, dolores praesentium?
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Paper>
    </Container>
  );
}

export default AboutUs;
