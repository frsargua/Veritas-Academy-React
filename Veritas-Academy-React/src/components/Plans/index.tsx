import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { SinglePlanCard } from "./SinglePlanCard";

export function Plans() {
  return (
    <>
      <Container>
        <Typography variant="h3" textAlign="center" gutterBottom={true}>
          The services we offer
        </Typography>
        <Typography variant="h5" textAlign="center" sx={{ mb: "3rem" }}>
          We only work with highly experienced tutors. We especialised in
          Science, and Maths.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            mb: "6rem",
          }}
        >
          <SinglePlanCard
            discount="15% OFF"
            cost="15"
            year="KS3"
            subjects={["English", "Chemistry", "Physics", "Biology"]}
            color="blue"
          />
          <SinglePlanCard
            discount="15% OFF"
            cost="15"
            year="KS3"
            subjects={["English", "Chemistry", "Physics", "Biology"]}
            color="red"
          />
          <SinglePlanCard
            discount="15% OFF"
            cost="15"
            year="KS3"
            subjects={["English", "Chemistry", "Physics", "Biology"]}
            color="green"
          />
        </Box>
      </Container>
    </>
  );
}
