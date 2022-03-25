import react from "react";
import { AiFillHome } from "react-icons/ai";
import { BiUserPlus, BiCategory } from "react-icons/bi";
import { FcIdea } from "react-icons/fc";
import { BsCalendarEvent } from "react-icons/bs";
import CreateUser from "../ManageUsersByAdmin/User.admin";

export const AdminSidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    title: "Users",
    path: "/admin/CreateUser",
    icon: <BiUserPlus />,
    // Component: CreateUser,
  },
  {
    title: "Ideas",
    path: "",
    icon: <FcIdea />,
  },
  {
    title: "Create Events",
    path: "",
    icon: <BsCalendarEvent />,
  },
  {
    title: "Categories",
    path: "",
    icon: <BiCategory />,
  },
];
