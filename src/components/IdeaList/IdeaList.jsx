import React, { useEffect, useState } from "react";
import axios from "axios";
import UserSidebar from "../UserSidebar/UserSidebar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { CommentCreate } from "../Comment/CommentCreate";
import CommentList from "../Comment/CommentList";
import { useParams } from "react-router-dom";

const IdeaList = ({ submissionId }) => {
  // const [submissionId, setsubmissionId] = useState("");
  const [ideas, setIdeas] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  const requestHeader = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  let { id } = useParams();
  console.log(id);

  // const fetchSubmissions = async () => {
  //   const res = await axios.get(
  //     `https://localhost:7133/api/Idea/GetAllSubmissions`,
  //     requestHeader
  //   );
  //   setsubmissions(res.data);
  // };

  // useEffect(() => {
  //   fetchSubmissions();
  // }, []);

  const fetchIdeas = async () => {
    const res = await axios.get(
      `https://localhost:7133/api/Idea/GetAllIdeas/${id}`,
      requestHeader
    );
    setIdeas(res.data);
    // setsubmissionId("");
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  // const renderSubmission = Object.values(submissions).map((item) => {
  //   return (
  //     <>
  //       <Grid item xs={2} sm={4} md={4}>
  //         <Card sx={{ minWidth: 275 }}>
  //           <CardContent>
  //             <Typography variant="h5" component="div">
  //               {item.name}
  //             </Typography>
  //           </CardContent>
  //         </Card>
  //       </Grid>
  //     </>
  //   );
  // });

  const renderedIdeas = Object.values(ideas).map((idea) => {
    return (
      <>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              {/* <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography> */}
              {/* <Typography variant="h5" component="div">
                {idea.submissionId}
              </Typography> */}
              {/* <Typography
                variant="h5"
                component="div"
                submissionId={idea.submissionId}
              >
                {idea.submissionId}
              </Typography> */}
              <Typography variant="h5" component="div">
                {idea.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {idea.description}
              </Typography>
              <Typography variant="body2">{idea.content}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Details</Button>
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
        // id={id}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ marginTop: 20 }}
      >
        {/* {renderSubmission} */}
        {renderedIdeas}
      </Grid>
    </div>
  );
};

export default IdeaList;
