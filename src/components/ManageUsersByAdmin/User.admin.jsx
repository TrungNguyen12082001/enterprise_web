import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserList } from "../../store/actions/user-action";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { CreateUserContainer } from "./User.admin.elements";
import { Link } from "react-router-dom";
import axios from "axios";

class CreateUser extends Component {
  userTable = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const requestHeader = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const { userList } = this.props;
    console.log("aaa", userList);
    if (userList.userList && userList.userList.length > 0) {
      return userList.userList.map((user, index) => {
        const handleDelete = () => {
          const url = `https://localhost:7133/api/User/${user.userId}`;

          axios
            .delete(url, requestHeader)
            .then(() => {
              this.setState((previousState) => ({
                res: previousState.res.filter((m) => m.userId !== user.userId),
              }));
            })
            .catch((err) => {
              console.log(err);
            });
        };
        return (
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
                component={Link}
                to={`/edit/${user.userId}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                onClick={(e) => handleDelete(e, user)}
                style={{ background: "#b2102f" }}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        );
      });
    }
  };

  render() {
    return (
      <CreateUserContainer>
        <AdminSidebar />
        <Table>
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
            <>{this.userTable()}</>
          </TableBody>
        </Table>
      </CreateUserContainer>
    );
  }

  async componentDidMount() {
    this.props.dispatch(getUserList());
    //console.log("abc", this.props.userList);
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.user.userList,
  };
};

export default connect(mapStateToProps)(CreateUser);
// export default CreateUser;
