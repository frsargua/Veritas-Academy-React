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

type propsType = {
  discount?: string;
  cost?: string;
  year?: string;
  subjects?: string[];
};

export function SinglePlanCard(props: propsType) {
  let { discount, cost, year, subjects } = props;

  return (
    <Card
      sx={{
        width: { xs: "95%", md: "25%" },
        maxWidth: "300px",
        height: "400px",
        boxShadow: "0 0 20px 10px #f3f3f3",
        color: "white",
        margin: "1rem",
      }}
    >
      <Box sx={{ backgroundColor: "green" }}>
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
          <Chip color="info" label={`${discount}`} />
        </CardContent>
      </Box>
      <CardContent>
        {subjects?.map((subject) => (
          <List sx={{ padding: "0rem" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText sx={{ color: "black" }} primary={subject} />
            </ListItem>
          </List>
        ))}
      </CardContent>
    </Card>
  );
}
