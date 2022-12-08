import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, BoxProps } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { ReactComponentElement } from "react";

type Testimonial = {
  name?: string;
  year?: string;
  text?: string;
};

type PropsType = {
  testimonialsText: () => Testimonial[];
};

const CarouselItem = styled(Box)<BoxProps>(({ theme }) => ({
  width: "900px",
  height: "400px",

  // [theme.breakpoints.up("md")]: {
  //   display: "none",
  // },
}));

const CarouselContainer = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

export function TestimonialsCarousel({ testimonialsText }: PropsType) {
  function renderTestimonials(): React.ReactElement[] {
    let element = testimonialsText().map((el: Testimonial) => {
      return (
        <CarouselContainer>
          <CarouselItem>
            <Typography variant="h5" textAlign="center">
              {el.name}
            </Typography>
            <Typography variant="h5" textAlign="center">
              {el.year}
            </Typography>
            <Typography variant="body1" textAlign="center">
              {el.text}
            </Typography>
          </CarouselItem>
        </CarouselContainer>
      );
    });

    return element;
  }

  return (
    <Carousel autoPlay={true} showStatus={false}>
      {renderTestimonials()}
    </Carousel>
  );
}
