import { Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IdeaDetail = () => {
  const [idea, setIdea] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const requestHeader = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  let { id } = useParams();

  const getIdeaList = async () => {
    const res = await axios.get(
      `https://localhost:7133/api/Idea/${id}`,
      requestHeader
    );
    setIdea(res.data);
  };

  useEffect(() => {
    getIdeaList();
  }, []);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {idea.title}
        </Typography>
        <Typography variant="h5" component="div">
          {idea.description}
        </Typography>
        <Typography variant="h5" component="div">
          {idea.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default IdeaDetail;
