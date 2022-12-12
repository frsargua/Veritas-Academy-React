import { Box, Grid, Typography } from "@mui/material";
import veritasLogoImage from "../../assets/images/veritas.png";
import EnquireForm from "../EnquireForm";

export function Enquire() {
  return (
    <Box sx={{ my: "5rem" }}>
      <Typography variant="h1" textAlign="center" fontWeight={"700"}>
        want to learn more?
      </Typography>

      <Grid container spacing={2} justifyContent={"center"} alignItems="center">
        <Grid item xs={6} component="img" src={`${veritasLogoImage}`} />
        <Grid item xs={6}>
          <EnquireForm />
        </Grid>
      </Grid>
    </Box>
  );
}
