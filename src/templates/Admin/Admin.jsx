import React from "react";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import { AdminContainer } from "./Admin.elements";

const Admin = () => {
  return (
    <>
      <AdminContainer>
        <AdminSidebar />
      </AdminContainer>
    </>
  );
};

export default Admin;
