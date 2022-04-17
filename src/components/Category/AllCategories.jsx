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

const AllCategories = () => {
  const [category, setCategory] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const requestHeader = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  const fetchCategory = async () => {
    const res = await axios.get(
      "https://localhost:7133/api/Idea/GetAllCategories",
      requestHeader
    );
    console.log(res, "All Categories");
    setCategory(res.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const getData = () => {
    axios
      .get(`https://localhost:7133/api/Idea/GetAllCategories`, requestHeader)
      .then((getData) => {
        setCategory(getData.data);
      });
  };

  const onDelete = (id) => {
    // setCategory(category.filter((item) => item.name !== name));
    axios
      .delete(`https://localhost:7133/api/category/${id}`, requestHeader)
      .then(() => {
        getData();
      });
  };

  const renderCategoryTable = Object.values(category).map((cate) => {
    return (
      <>
        <TableRow>
          <TableCell>{cate.id}</TableCell>
          <TableCell>{cate.name}</TableCell>
          <TableCell>{cate.description}</TableCell>
          <TableCell>
            <Button
              variant="contained"
              onClick={() => onDelete(cate.id)}
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
