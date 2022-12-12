import {
  Badge,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import DoneIcon from "@mui/icons-material/Done";

type propsType = {
  discount?: string;
  cost?: string;
  year?: string;
  subjects?: string[];
  color?: string;
};

export function SinglePlanCard(props: propsType) {
  let { discount, cost, year, subjects, color } = props;

  return (
    <Card
      sx={{
        width: { xs: "95%", md: "25%" },
        maxWidth: "300px",
        height: "430px",
        boxShadow: "0 0 20px 10px #f3f3f3",
        color: "white",
        margin: "1rem",
      }}
    >
      <Box sx={{ backgroundColor: `${color}` }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {year}
          </Typography>
          <Typography variant="h4" gutterBottom>
            From £{cost}
            <Typography variant="h6" component="span">
              /lesson
            </Typography>
          </Typography>
          <Chip color="default" sx={{ color: "white" }} label={`${discount}`} />
        </CardContent>
      </Box>
      <CardContent>
        {subjects?.map((subject) => (
          <List sx={{ padding: "0rem" }}>
            <ListItem>
              <DoneIcon color="success" />
              <ListItemText
                sx={{ color: "black", ml: "1rem" }}
                primary={subject}
              />
            </ListItem>
          </List>
        ))}
      </CardContent>
    </Card>
  );
}
