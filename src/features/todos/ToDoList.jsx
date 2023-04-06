import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import AddCircleOutlineRounded from "@mui/icons-material/AddCircleOutlineRounded";
import DeleteRounded from "@mui/icons-material/DeleteRounded";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
// Should import our queries and mutations

const ToDoList = () => {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const [newToDo, setNewToDo] = React.useState("");

  // To Do - These all states should get from useGetTodosQuery hook
  const todos = [
    {
      id: 1,
      title: "ToDo 1",
      completed: false,
    },
  ];
  const isLoading = false;
  const isFetching = false;
  const isSuccess = true;
  const isError = false;
  const error = null;
  // To Do - These all states should get from useGetTodosQuery hook

  // Initialize ToDos actions

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new ToDo action
    setNewToDo("");
  };

  let content;

  if (isLoading || isFetching) {
    content = <Typography component="p">Loading...</Typography>;
  } else if (isSuccess) {
    content = (
      <List dense={true}>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              sx={{ marginRight: 4 }}
              checked={todo.completed}
              onChange={() => {}} // Update complete status action
            />
            <ListItemText primary={todo.title} />

            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                onClick={() => {}} // Delete ToDo action
              >
                <DeleteRounded />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  } else if (isError) {
    content = <Typography component="p">{error}</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Typography component="h1" variant="h3">
        ToDo List
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          id="todo"
          variant="outlined"
          margin="normal"
          label="Enter ToDo"
          required
          fullWidth
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={!newToDo}
          startIcon={<AddCircleOutlineRounded />}
        >
          Add Todo
        </Button>
      </Box>

      {content}
    </Container>
  );
};

export default ToDoList;
