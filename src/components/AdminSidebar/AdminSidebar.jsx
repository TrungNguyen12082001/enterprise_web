import { AppBar, Toolbar } from "@mui/material";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MobileIcon } from "../Navbar/Navbar.elements";
import { FaBars } from "react-icons/fa";

const useStyles = makeStyles({
  header: {
    background: "#111111",
    display: "flex",
  },
  tabs: {
    color: "#fff",
    textDecoration: "none",
    marginRight: 20,
  },
});

const AdminSidebar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();
  // const user = JSON.parse(localStorage.getItem("user"));
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  const classes = useStyles();
  return (
    <AppBar
      className={classes.header}
      position="static"
      style={{ display: "flex" }}
      isOpen={isOpen}
      onClick={toggle}
    >
      <Toolbar>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavLink className={classes.tabs} to="/" exact>
          Greenwich
        </NavLink>
        <NavLink className={classes.tabs} to="/all-users" exact>
          All Users
        </NavLink>
        <NavLink className={classes.tabs} to="/add-user" exact>
          Add User
        </NavLink>
        <NavLink className={classes.tabs} to="/categories" exact>
          Categories
        </NavLink>
        <NavLink className={classes.tabs} to="/submissions" exact>
          Submissions
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

export default AdminSidebar;
