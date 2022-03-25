import axios from "axios";
import { Button, FormGroup, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import UserSidebar from "../UserSidebar/UserSidebar";
import jwt_decode from "jwt-decode";
import { MenuItem, FormControl, InputLabel, Select } from "@mui/material";

const useStyles = makeStyles({
  root: {
    width: "50%",
    margin: "5% 0 0 25%",
  },

  field: {
    marginBottom: 20,
  },
});

const CreateIdeas = ({ description, content, categoryId }) => {
  const [categories, setCategories] = useState("");
  const [cates, setCates] = useState("");
  const [title, setTitle] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const data = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  const onSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    var userInfo = jwt_decode(user.token);
    // e.preventDefault();
    await axios.post(
      "https://localhost:7133/api/Idea/CreateIdeaRequest",
      {
        title: title,
        description: description,
        content: content,
        userId: userInfo.userId,
        categoryId: categoryId,
      },
      data
    );
    setTitle("");
  };

  const getCategoryList = async () => {
    const res = await axios.get(
      "https://localhost:7133/api/Idea/GetAllCategories",
      data
    );

    setCategories(res.data);
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  const handleChange = (event) => {
    setCates(event.target.value);
  };

  const renderCategories = Object.values(categories).map((item) => {
    return (
      <MenuItem key={item.id} value={item.id}>
        {item.name}
      </MenuItem>
    );
  });

  const classes = useStyles();
  return (
    <>
      <UserSidebar />
      <FormGroup className={classes.root}>
        <TextField
          style={{ marginBottom: 20 }}
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />

        <TextField
          style={{ marginBottom: 20 }}
          label="Description"
          value={description}
          // onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />

        <TextField
          label="Contents"
          variant="outlined"
          color="secondary"
          multiline
          rows={5}
          fullWidth
          required
        />

        <FormControl fullWidth style={{ marginTop: 20 }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cates}
            label="Category"
            onChange={handleChange}
          >
            {renderCategories}
          </Select>
        </FormControl>

        <Button
          style={{ marginTop: 30 }}
          variant="contained"
          color="primary"
          onClick={() => onSubmit()}
        >
          Submit
        </Button>
      </FormGroup>
    </>
  );
};

export default CreateIdeas;
