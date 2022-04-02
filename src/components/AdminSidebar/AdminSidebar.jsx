// import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai";
// import Navbar from "../../components/Navbar/Navbar";
// // import { AdminNavContainer, MenuBar } from "./AdminSidebar.elements";
// import { AdminSidebarData } from "./AdminSidebarData";
// import {
//   Nav,
//   NavMenuItems,
//   NavMenuLi,
//   NavMenuLiLink,
//   NavMenuSpan,
// } from "./AdminSidebar.elements";

// const AdminSidebar = () => {
//   const [sidebar, setSidebar] = useState(false);
//   const showSidebar = () => setSidebar(!sidebar);
//   return (
//     <>
//       {/* <AdminNavContainer>
//         <MenuBar>
//           <FaBars />
//         </MenuBar>
//       </AdminNavContainer> */}
//       {/* <FaBars /> */}
//       <Nav>
//         <NavMenuItems>
//           {/* <NavMenuLi>
//             <AiOutlineClose />
//           </NavMenuLi> */}
//           {AdminSidebarData.map((item, index) => {
//             return (
//               <NavMenuLi key={index}>
//                 <NavMenuLiLink to={item.path}>
//                   {item.icon}
//                   <NavMenuSpan>{item.title}</NavMenuSpan>
//                 </NavMenuLiLink>
//               </NavMenuLi>
//             );
//           })}
//         </NavMenuItems>
//       </Nav>
//     </>
//   );
// };

// export default AdminSidebar;

import { AppBar, Toolbar } from "@mui/material";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "../Navbar/Navbar.elements";
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
  const user = JSON.parse(localStorage.getItem("user"));
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
        <Button
          onClick={logout}
          // exact
          // size="small"
          style={{ color: "#fff", marginTop: 5 }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>

    // <>
    //   <Nav>
    //     <NavbarContainer>
    //       <NavLogo to="/">Greenwich</NavLogo>
    //       <MobileIcon onClick={toggle}>
    //         <FaBars />
    //       </MobileIcon>

    //       <NavMenu>
    //         <NavItem>
    //           <NavLink to="/all-users" exact>
    //             All Users
    //           </NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink to="/add-user" exact>
    //             Add User
    //           </NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink to="/categories" exact>
    //             Categories
    //           </NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink to="/submissions" exact>
    //             Submissions
    //           </NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink to="/all-submissions" exact>
    //             All Submissions
    //           </NavLink>
    //         </NavItem>
    //       </NavMenu>

    //       <NavBtn>
    //         <NavBtnLink onClick={logout}>Logout</NavBtnLink>
    //       </NavBtn>
    //     </NavbarContainer>
    //   </Nav>
    // </>
  );
};

export default AdminSidebar;
