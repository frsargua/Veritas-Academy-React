import { Typography } from "@mui/material";
import { TestimonialsCarousel } from "../Carrousell";
import { testimonialsData } from "../../assets/data/testimonials";
import { Container } from "@mui/system";

function Testimonials() {
  return (
    <>
      <Container>
        <Typography variant="h3" textAlign="center" gutterBottom={true}>
          What others thought.
        </Typography>
        <Typography variant="h5" textAlign="center" sx={{ mb: "3rem" }}>
          Since, we started our business 4 years ago......, we have successfully
          helped out students reach their targets.
        </Typography>

        <TestimonialsCarousel testimonialsText={testimonialsData} />
      </Container>
    </>
  );
}

export default Testimonials;
