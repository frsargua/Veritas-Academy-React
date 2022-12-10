import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, Grid } from "@mui/material";

function EnquireForm() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Grid container direction={"column"} spacing={1}>
      <Grid item>
        <TextField
          id="FullName"
          label="Full name"
          fullWidth
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <TextField
          id="EmailInputBox"
          label="Email Address"
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item>
        <TextField
          id="phoneNumberInput"
          label="Phone number"
          fullWidth
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <FormControl fullWidth>
          <InputLabel id="yearAgeGroup">Age</InputLabel>
          <Select
            labelId="yearAgeGroup"
            id="yearAgeGroup"
            value={age}
            label="Year Group"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item>
        <TextField
          id="standard-multiline-static"
          label="What are you looking for?"
          multiline
          rows={4}
          fullWidth
          placeholder="Describe what you are looking for"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Button variant="contained">Submit</Button>
      </Grid>
    </Grid>
  );
}

export default EnquireForm;
