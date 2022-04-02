import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UserSidebar from "../UserSidebar/UserSidebar";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const requestHeader = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  const getAllUsers = async () => {
    const res = await axios.get(
      "https://localhost:7133/api/User/GetAllUsers",
      requestHeader
    );
    setAllUsers(res.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const getData = () => {
    axios
      .get(`https://localhost:7133/api/User/GetAllUsers`, requestHeader)
      .then((getData) => {
        setAllUsers(getData.data);
      });
  };

  const onDelete = (id) => {
    // setCategory(category.filter((item) => item.name !== name));
    axios
      .delete(`https://localhost:7133/api/User/${id}`, requestHeader)
      .then(() => {
        getData();
      });
  };

  const renderAllUsers = Object.values(allUsers).map((user, index) => {
    return (
      <>
        <TableRow>
          <TableCell>{index}</TableCell>
          <TableCell>{user.fullName}</TableCell>
          <TableCell>{user.roleName}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.department}</TableCell>
          <TableCell>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: 10 }}
              //   component={Link}
              //   to={`/edit/${user.userId}`}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              onClick={() => onDelete(user.id)}
              style={{ background: "#b2102f" }}
            >
              Delete
            </Button>
          </TableCell>
        </TableRow>
      </>
    );
  });

  return (
    <>
      {/* <UserSidebar /> */}
      <Table style={{ marginTop: 30 }}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Department</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <>{renderAllUsers}</>
        </TableBody>
      </Table>
    </>
  );
};

export default AllUsers;
