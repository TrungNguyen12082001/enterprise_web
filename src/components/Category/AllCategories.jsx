import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UserSidebar from "../UserSidebar/UserSidebar";

const AllCategories = () => {
  const [category, setCategory] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const data = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  const fetchCategory = async () => {
    const res = await axios.get(
      "https://localhost:7133/api/Idea/GetAllCategories",
      data
    );
    setCategory(res.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const renderCategoryTable = Object.values(category).map((cate) => {
    return (
      <>
        <TableRow>
          <TableCell>{cate.id}</TableCell>
          <TableCell>{cate.name}</TableCell>
          <TableCell>{cate.description}</TableCell>
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
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <>{renderCategoryTable}</>
        </TableBody>
      </Table>
    </>
  );
};

export default AllCategories;
