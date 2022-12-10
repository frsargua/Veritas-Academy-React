import { HeroActionCard } from "./HeroActionCard";
import { HeroBanner } from "./HeroBanner";
import { Box } from "@mui/system";
import spacer1 from "../../assets/images/svg/spacer-1.svg";
import { Container } from "@mui/material";

export function Hero() {
  return (
    <>
      <Box
        sx={{
          py: "5rem",
          backgroundColor: "#0d6efd",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-around",
            alignItems: "center",
          }}
          maxWidth="xl"
        >
          <HeroBanner />
          <HeroActionCard />
        </Container>
      </Box>
      <Box sx={{ width: "100%", mb: "6rem" }}>
        <img
          style={{
            aspectRatio: "900/100",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            border: "none",
            display: "block",
          }}
          src={`${spacer1}`}
        />
      </Box>
    </>
  );
}
