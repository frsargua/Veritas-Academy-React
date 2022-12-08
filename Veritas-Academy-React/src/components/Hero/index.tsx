import { HeroActionCard } from "./HeroActionCard";
import { HeroBanner } from "./HeroBanner";
import { Box } from "@mui/system";

export function Hero() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          alignItems: "center",
          mb: "6rem",
        }}
      >
        <HeroBanner />
        <HeroActionCard />
      </Box>
    </>
  );
}
