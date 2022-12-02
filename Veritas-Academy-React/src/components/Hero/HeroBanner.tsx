import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { GridItemsImages } from "./GridItemsImages";
export function HeroBanner() {
  return (
    <Grid
      container
      sx={{ maxWidth: "750px", maxHeight: "350px", position: "relative" }}
    >
      <GridItemsImages />
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "fit-content",
            height: "fit-content",
            backgroundColor: "yellow",
          }}
        >
          <Typography
            variant="h3"
            fontWeight="700"
            textAlign="center"
            color="black"
            sx={{ padding: "2rem" }}
          >
            Learn and grow
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
