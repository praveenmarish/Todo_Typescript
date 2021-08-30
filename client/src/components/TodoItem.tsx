import { Button, colors, Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (_id: string) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  const [checked, setchecked] = useState(todo.status);

  return (
    <Container
      maxWidth="xs"
      style={{
        backgroundColor: colors.blue[200],
        borderRadius: "10px",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={6} style={{ padding: "10px" }}>
          <Typography
            component="h1"
            style={{
              fontWeight: "bold",
              fontFamily: "Serif",
              fontSize: "20px",
              textDecoration: checked ? "line-through" : "",
            }}
          >
            {todo.name}
          </Typography>
          <Typography
            component="h2"
            style={{
              fontFamily: "Serif",
              fontSize: "15px",
            }}
          >
            {todo.description}
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ padding: "10px" }}>
          <Button
            style={{
              fontFamily: "Serif",
              fontSize: "15px",
            }}
            onClick={() => {
              updateTodo(todo);
              setchecked(!checked);
            }}
          >
            Completed
          </Button>
          <Button
            style={{
              fontFamily: "Serif",
              fontSize: "15px",
            }}
            onClick={() => deleteTodo(todo._id)}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Todo;
