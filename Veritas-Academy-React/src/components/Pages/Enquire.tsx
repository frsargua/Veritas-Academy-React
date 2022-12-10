import { Grid, Typography } from "@mui/material";
import veritasLogoImage from "../../assets/images/veritas.png";
import EnquireForm from "../EnquireForm";

export function Enquire() {
  return (
    <>
      <Typography variant="h1" textAlign="center">
        want to learn more?
      </Typography>

      <Grid container spacing={2} justifyContent={"center"} alignItems="center">
        <Grid item xs={6} component="img" src={`${veritasLogoImage}`} />
        <Grid item xs={6}>
          <EnquireForm />
        </Grid>
      </Grid>
    </>
  );
}
