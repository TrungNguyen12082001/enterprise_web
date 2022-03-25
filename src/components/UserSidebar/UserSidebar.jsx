import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { NavLink } from "react-router-dom";

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
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <NavLink className={classes.tabs} to="/" exact>
          Greenwich
        </NavLink>
        {/* <NavLink className={classes.tabs} to="/all-idea" exact>
          All Ideas
        </NavLink> */}
        {/* <NavLink className={classes.tabs} to="/add-idea" exact>
          Add Idea
        </NavLink> */}
        <NavLink className={classes.tabs} to="/all-categories" exact>
          All Categories
        </NavLink>
        <NavLink className={classes.tabs} to="/all-submissions" exact>
          All Submissions
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default UserSidebar;
