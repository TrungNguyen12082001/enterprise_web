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

const AdminSidebar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <NavLink className={classes.tabs} to="/" exact>
          Greenwich
        </NavLink>
        <NavLink className={classes.tabs} to="/all-user" exact>
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
      </Toolbar>
    </AppBar>
  );
};

export default AdminSidebar;
