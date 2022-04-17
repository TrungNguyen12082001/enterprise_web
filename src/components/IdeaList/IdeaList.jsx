import React, { useEffect, useState } from "react";
import axios from "axios";
import UserSidebar from "../UserSidebar/UserSidebar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { CommentCreate } from "../Comment/CommentCreate";
import CommentList from "../Comment/CommentList";
import { NavLink, useParams } from "react-router-dom";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import jwt_decode from "jwt-decode";

const IdeaList = () => {
  const [ideas, setIdeas] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  const requestHeader = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  let { id } = useParams();
  console.log(id);

  const fetchIdeas = async () => {
    const res = await axios.get(
      `https://localhost:7133/api/Idea/GetAllIdeas/${id}`,
      requestHeader
    );
    setIdeas(res.data);
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  const handleLike = async (ideaId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    var userInfo = jwt_decode(user.token);

    await axios.post(
      `https://localhost:7133/api/Reaction/DoLike`,
      {
        ideaId: ideaId,
        userId: userInfo.userId,
      },
      requestHeader
    );
  };

  const handleDisLike = async (ideaId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    var userInfo = jwt_decode(user.token);

    await axios.post(
      `https://localhost:7133/api/Reaction/DoUnLike`,
      {
        ideaId: ideaId,
        userId: userInfo.userId,
      },
      requestHeader
    );
  };

  const handleView = async (ideaId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    var userInfo = jwt_decode(user.token);
    await axios.post(
      `https://localhost:7133/api/ViewMonitoring/CreateView`,
      {
        ideaId: ideaId,
        userId: userInfo.userId,
      },
      requestHeader
    );
  };

  const renderedIdeas = Object.values(ideas).map((idea) => {
    return (
      <>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {idea.title}
                <Button
                  onClick={() => handleDisLike(idea.id)}
                  style={{ float: "right" }}
                >
                  <AiFillDislike style={{ fontSize: 25, marginRight: 10 }} />
                  {idea.unLikeCount}
                </Button>
                <Button
                  onClick={() => handleLike(idea.id)}
                  style={{ float: "right" }}
                >
                  <AiFillLike
                    style={{
                      fontSize: 25,
                      marginRight: 10,
                    }}
                  />
                  {idea.likeCount}
                </Button>
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {idea.description}
              </Typography>
              <Typography variant="body2">{idea.content}</Typography>
            </CardContent>
            <CardActions>
              <NavLink to={{ pathname: "/idea-detail/" + idea.id }}>
                <Button size="small" onClick={() => handleView(idea.id)}>
                  View ({idea.viewCount})
                </Button>
              </NavLink>
            </CardActions>
            <CommentList ideaId={idea.id} />
            <CommentCreate ideaId={idea.id} />
          </Card>
        </Grid>
      </>
    );
  });

  return (
    <div>
      <UserSidebar />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ marginTop: 20 }}
      >
        {renderedIdeas}
      </Grid>
    </div>
  );
};

export default IdeaList;
