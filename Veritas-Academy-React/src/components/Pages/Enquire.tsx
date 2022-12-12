import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import veritasLogoImage from "../../assets/images/veritas.png";
import EnquireForm from "../EnquireForm";

export function Enquire() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: "5rem" }}>
        <Typography
          variant="h1"
          gutterBottom
          textAlign="center"
          fontWeight={"500"}
        >
          Want to learn more?
        </Typography>

        <Grid
          container
          spacing={6}
          justifyContent={"center"}
          alignItems="center"
        >
          <Grid item xs={6} component="img" src={`${veritasLogoImage}`} />
          <Grid item xs={6}>
            <EnquireForm />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
