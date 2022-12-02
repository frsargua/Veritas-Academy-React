import { Box, Typography } from "@mui/material";
import { SinglePlanCard } from "./SinglePlanCard";

export function Plans() {
  return (
    <>
      <Typography variant="h3" textAlign="center">
        The services we offer
      </Typography>
      <Typography variant="h5" textAlign="center">
        We only work with highly experienced tutors. We especialised in Science,
        and Maths.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <SinglePlanCard
          discount="15% OFF"
          cost="15"
          year="KS3"
          subjects={["English", "Chemistry", "Physics", "Biology"]}
        />
        <SinglePlanCard
          discount="15% OFF"
          cost="15"
          year="KS3"
          subjects={["English", "Chemistry", "Physics", "Biology"]}
        />
        <SinglePlanCard
          discount="15% OFF"
          cost="15"
          year="KS3"
          subjects={["English", "Chemistry", "Physics", "Biology"]}
        />
      </Box>
    </>
  );
}
