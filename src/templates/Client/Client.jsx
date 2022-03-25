import React from "react";
import UserSidebar from "../../components/UserSidebar/UserSidebar";
import { ClientContainer } from "./Client.elements";

const Client = () => {
  return (
    <>
      <ClientContainer>
        <UserSidebar />
      </ClientContainer>
    </>
  );
};

export default Client;
