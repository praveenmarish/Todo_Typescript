import { Button, Grid, Input, Typography } from "@material-ui/core";
import React, { useState } from "react";

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
};

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>();

  const handleForm = (e: any): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form onSubmit={(e) => saveTodo(e, formData)}>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ padding: "10px", textAlign: "center" }}>
          <Typography
            component="h1"
            style={{
              fontWeight: "bold",
              fontFamily: "Serif",
              fontSize: "20px",
            }}
          >
            Todo
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Name:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Description:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Input
            fullWidth
            placeholder="Enter Name"
            type="text"
            id="name"
            required
            onChange={handleForm}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            fullWidth
            placeholder="Enter Description"
            type="text"
            id="description"
            required
            onChange={handleForm}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={formData === undefined ? true : false}
          >
            Add Todo
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddTodo;
