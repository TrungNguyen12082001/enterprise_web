import { Button, FormGroup, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AllCategories from "./AllCategories";

const useStyles = makeStyles({
  root: {
    width: "50%",
    margin: "5% 0 0 25%",
  },

  field: {
    marginBottom: 20,
  },
});

export const Categories = () => {
  const classes = useStyles();
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const headRequest = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const onSubmit = async () => {
    await axios.post(
      "https://localhost:7133/api/Idea/CreateCategory",
      {
        name: name,
        description: description,
      },
      headRequest
    );
    setDescription("");
    setName("");
  };

  return (
    <>
      <AdminSidebar />
      <FormGroup className={classes.root}>
        <TextField
          style={{ marginBottom: 20 }}
          label="Name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />

        <TextField
          label="Description"
          value={description}
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          variant="outlined"
          color="secondary"
          multiline
          rows={5}
          fullWidth
          required
        />

        <Button
          style={{ marginTop: 30 }}
          variant="contained"
          color="primary"
          onClick={() => onSubmit()}
        >
          Add
        </Button>
      </FormGroup>

      <AllCategories />
    </>
  );
};
