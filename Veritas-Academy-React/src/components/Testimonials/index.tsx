import { Typography } from "@mui/material";
import { TestimonialsCarousel } from "../Carrousell";
import { testimonialsData } from "../../assets/data/testimonials";

function Testimonials() {
  return (
    <>
      <Typography variant="h3" textAlign="center" gutterBottom={true}>
        What others thought.
      </Typography>
      <Typography variant="h5" textAlign="center" sx={{ mb: "3rem" }}>
        Since, we started our business 4 years ago......, we have successfully
        helped out students reach their targets.
      </Typography>

      <TestimonialsCarousel testimonialsText={testimonialsData} />
    </>
  );
}

export default Testimonials;
