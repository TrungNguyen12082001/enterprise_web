import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import UserSidebar from "../UserSidebar/UserSidebar";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const AllSubmissions = ({ id }) => {
  const [submissions, setSubmissions] = useState("");
  // const [disable, setDisable] = useState(false);
  // const { linkDisabled } = useState();
  // const buttonRef = useRef();
  const disableDate = React.useState(new Date());
  // console.log(disableDate);
  const user = JSON.parse(localStorage.getItem("user"));
  const requestHeader = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  const fetchSubmissions = async () => {
    const res = await axios.get(
      "https://localhost:7133/api/Idea/GetAllSubmissions",
      requestHeader
    );
    setSubmissions(res.data);
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  // const handleDisable = (e) => {
  //   if (linkDisabled) e.preventDefault();
  // };

  // const disableButton = () => {
  //   buttonRef.current.disabled = true;
  // };

  const renderSubmissionTable = Object.values(submissions).map((item) => {
    // const handleChange = () => {
    //   if (item.closureDate < new Date()) {
    //     disable = false;
    //   } else {
    //     disable = true;
    //   }
    // };
    let isValid = false;
    const sId = item.id;

    if (disableDate > new Date(item.closureDate)) {
      isValid = true;
    } else {
      isValid = false;
    }

    const gotoAddIdeaPage = (id) => {
      document.location = `/add-idea/${id}`;
    };

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
              <Button
                size="small"
                // disabled="{isValid}"
                // onClick={gotoAddIdeaPage(item.id)}
              >
                Add Ideas
              </Button>
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
