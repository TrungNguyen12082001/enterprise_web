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
import {
  CreateUserContainer,
  //Table,
  TBody,
  Th,
  Thead,
  TrUserContent,
  Tr,
} from "./User.admin.elements";
import { Link } from "react-router-dom";

class CreateUser extends Component {
  userTable = () => {
    const { userList } = this.props;
    console.log("aaa", userList);
    if (userList.userList && userList.userList.length > 0) {
      return userList.userList.map((user, index) => {
        return (
          <TableRow>
            <TableCell>{index}</TableCell>
            {/* <TableCell>{user.userId}</TableCell> */}
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
              <Button variant="contained" style={{ background: "#b2102f" }}>
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
              {/* <TableCell>UserId</TableCell> */}
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
    // <></>
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
