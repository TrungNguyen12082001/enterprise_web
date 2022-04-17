import React, { useEffect, useState } from "react";
import axios from "axios";
import UserSidebar from "../UserSidebar/UserSidebar";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const AllSubmissions = ({ id }) => {
  const [submissions, setSubmissions] = useState("");
  const disableDate = React.useState(new Date());
  console.log(disableDate);
  const user = JSON.parse(localStorage.getItem("user"));
  const requestHeader = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  const fetchSubmissions = async () => {
    const res = await axios.get(
      `https://localhost:7133/api/Idea/GetAllSubmissions`,
      requestHeader
    );
    console.log(res, "All Submissions");
    setSubmissions(res.data);
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  // const date = moment(disableDate).format("DD MMM, YYYY");
  // console.log(date);

  var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
  console.log(date);

  // const disable = false;

  const renderSubmissionTable = Object.values(submissions).map((item) => {
    // const handleChange = () => {
    //   if (item.closureDate < date) {
    //     disable = true;
    //   } else {
    //     disable = false;
    //   }
    // };
    // let isValid = false;
    // const sId = item.id;

    // if (disableDate > new Date(item.closureDate)) {
    //   isValid = true;
    // } else {
    //   isValid = false;
    // }

    return (
      <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="h5" component="div">
              {item.description}
            </Typography>
            <Typography variant="h5" component="div">
              {item.closureDate}
            </Typography>
            <Typography variant="h5" component="div">
              {item.finalClosureDate}
            </Typography>
          </CardContent>
          <CardActions>
            <NavLink to={{ pathname: "/add-idea/" + item.id }}>
              <Button size="small">Add Ideas</Button>
            </NavLink>
            <NavLink to={{ pathname: "/all-ideas/" + item.id }}>
              <Button>Detail</Button>
            </NavLink>
          </CardActions>
        </Card>
      </Grid>
    );
  });
  return (
    <>
      <UserSidebar />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ marginTop: 20 }}
      >
        {renderSubmissionTable}
      </Grid>
    </>
  );
};

export default AllSubmissions;
