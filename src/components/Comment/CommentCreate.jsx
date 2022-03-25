import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const CommentCreate = ({ ideaId }) => {
  const [content, setContent] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const headRequest = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const onSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    var userInfo = jwt_decode(user.token);

    await axios.post(
      `https://localhost:7133/api/Idea/CreateComment`,
      {
        ideaId: ideaId,
        content: content,
        userId: userInfo.userId,
      },
      headRequest
    );

    setContent("");
  };
  return (
    <>
      <FormGroup>
        <FormControl>
          <InputLabel>New Comment</InputLabel>
          <Input value={content} onChange={(e) => setContent(e.target.value)} />
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
