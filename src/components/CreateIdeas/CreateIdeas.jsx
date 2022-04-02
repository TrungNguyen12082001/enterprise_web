import axios from "axios";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import UserSidebar from "../UserSidebar/UserSidebar";
import jwt_decode from "jwt-decode";
import { MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "50%",
    margin: "5% 0 0 25%",
  },

  field: {
    marginBottom: 20,
  },
});

const CreateIdeas = () => {
  const [categories, setCategories] = useState("");
  const [cates, setCates] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [submissionId, setSubmissionId] = useState("");
  // const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const user = JSON.parse(localStorage.getItem("user"));
  const requestHeader = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  let { id } = useParams();
  console.log(id);
  const onSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    var userInfo = jwt_decode(user.token);
    // e.preventDefault();
    await axios.post(
      `https://localhost:7133/api/Idea/CreateIdea`,
      {
        title: title,
        description: description,
        content: content,
        userId: userInfo.userId,
        categoryId: categoryId,
        submissionId: parseInt(id),
      },
      requestHeader
    );
    setTitle("");
    setDescription("");
    setContent("");
    setCategoryId("");
    setSubmissionId("");
  };

  const getCategoryList = async () => {
    const res = await axios.get(
      "https://localhost:7133/api/Idea/GetAllCategories",
      requestHeader
    );

    setCategories(res.data);
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  // const fetchSubmissions = async () => {
  //   const res = await axios.get(
  //     "https://localhost:7133/api/Idea/GetAllSubmissions",
  //     data
  //   );
  //   setSubmissionId(res.data);
  // };

  // useEffect(() => {
  //   fetchSubmissions();
  // }, []);

  const handleChange = (event) => {
    setCategoryId(event.target.value);
  };

  const renderCategories = Object.values(categories).map((item) => {
    return <MenuItem value={item.id}>{item.name}</MenuItem>;
  });

  // const renderSubmissionId = Object.values(submissionId).map((sub) => {
  //   return <>{sub.id}</>;
  // });

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
          onChange={(e) => setDescription(e.target.value)}
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />

        <TextField
          label="Contents"
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
            value={categoryId}
            label="Category"
            onChange={handleChange}
          >
            {renderCategories}
          </Select>
        </FormControl>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Agree terms and conditions of company"
            required
          />
          {/* <Checkbox {...label} /> */}
        </FormGroup>

        <Button
          style={{ marginTop: 30 }}
          variant="contained"
          color="primary"
          value={submissionId}
          onChange={(e) => setSubmissionId(e.target.value)}
          onClick={() => onSubmit()}
          // disabled={() => setSubmissionId()}
          // disabled={false}
        >
          Submit
        </Button>
      </FormGroup>
    </>
  );
};

export default CreateIdeas;
