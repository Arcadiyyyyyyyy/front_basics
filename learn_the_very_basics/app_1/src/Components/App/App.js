import React from "react";
import { useState } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button, Paper } from "@material-ui/core";
function App() {
  const [newItem, setNewItem] = useState("");

  function handleSubmit() {
    if (newItem !== "") {
      var amountOfIterations = parseInt(newItem);
      console.log(newItem);
    }
  }

  return (
    <Container maxWidth="md" className="App">
      <Paper>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App + Material-UI
        </Typography>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="number"
        />
        <br />
        <Button
          onClick={() => {
            var array_to_return = [];
            for (var i = 0; i < parseInt(newItem) ? newItem !== "" : 1; i++) {
              array_to_return.push(i);
            }
            return array_to_return.map((todo) => {
              <Button variant="contained" color="primary">
                {todo}
              </Button>;
            });
          }}
          variant="contained"
          color="primary"
          className="btn"
        >
          Submit
        </Button>
      </Paper>
    </Container>
  );
}
export default App;
