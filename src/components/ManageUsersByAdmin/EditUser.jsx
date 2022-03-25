import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { addUser, getUserList } from "../../store/actions/user-action";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { useNavigate, useParams } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
  },
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  departmentId: "",
  userRoleId: "",
};

const EditUser = () => {
  const classes = useStyles();
  const [newUser, setNewUser] = useState(initialValues);
  const { firstName, lastName, email, password, departmentId, userRoleId } =
    newUser;
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadUserData();
  });

  const loadUserData = async () => {
    const response = await getUserList(userId);
    setNewUser(response.data);
  };

  const onValueChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const editNewUser = async () => {
    await addUser(newUser);
    navigate("/all-user");
  };
  return (
    <>
      <AdminSidebar />
      <FormGroup className={classes.container}>
        <Typography variant="h3" style={{ textAlign: "center" }}>
          Edit user
        </Typography>
        <FormControl style={{ marginTop: 30 }}>
          <InputLabel>First Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="firstName"
            value={firstName}
          />
        </FormControl>
        <FormControl style={{ marginTop: 30 }}>
          <InputLabel>Last Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="lastName"
            value={lastName}
          />
        </FormControl>
        <FormControl style={{ marginTop: 30 }}>
          <InputLabel>Email</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="email"
            value={email}
          />
        </FormControl>
        <FormControl style={{ marginTop: 30 }}>
          <InputLabel>Password</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="password"
            value={password}
          />
        </FormControl>
        <FormControl style={{ marginTop: 30 }}>
          <InputLabel>Department</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="departmentId"
            value={departmentId}
          />
        </FormControl>
        <FormControl style={{ marginTop: 30 }}>
          <InputLabel>Role</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="userRoleId"
            value={userRoleId}
          />
        </FormControl>
        <Button
          style={{ marginTop: 30 }}
          variant="contained"
          color="primary"
          onClick={() => editNewUser()}
        >
          Edit user
        </Button>
      </FormGroup>
    </>
  );
};

export default EditUser;
