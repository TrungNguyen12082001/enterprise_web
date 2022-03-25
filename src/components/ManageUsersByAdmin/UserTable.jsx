import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getUserList } from "../../store/actions/user-action";
// import { getUserList } from "../../store/actions/user-action";
import { TBody, ThUserContent } from "./User.admin.elements";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUserList();
    console.log(response.data);
    setUsers(response.data);
  };

  // const getUserList = async () => {};
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Full Name</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Department</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow>
            <TableCell>{user.userId}</TableCell>
            <TableCell>{user.fullName}</TableCell>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.lastName}</TableCell>
            <TableCell>{user.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
