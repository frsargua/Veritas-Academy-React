import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export function HeroActionCard() {
  return (
    <Card
      sx={{
        height: { xs: "200px", md: "420px" },
        width: { xs: "95%", md: "490px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography
          variant="h3"
          fontWeight="800"
          gutterBottom
          textAlign="center"
        >
          Looking for a quality tutor?
        </Typography>
        <Typography variant="h5" gutterBottom textAlign="center">
          We offer online and in-person tailored lessons.
        </Typography>

        <CardActions sx={{ justifyContent: "center" }}>
          <Button variant="contained" color="warning">
            Book Now!
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
