import { AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  header: {
    background: "#111111",
  },
  tabs: {
    color: "#fff",
    textDecoration: "none",
    marginRight: 20,
  },
});

const UserSidebar = () => {
  const navigate = useNavigate();
  // const user = JSON.parse(localStorage.getItem("user"));
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <NavLink className={classes.tabs} to="/" exact>
          Greenwich
        </NavLink>
        <NavLink className={classes.tabs} to="/all-submissions" exact>
          All Submissions
        </NavLink>
        <Button onClick={logout} style={{ color: "#fff", marginTop: 5 }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default UserSidebar;
