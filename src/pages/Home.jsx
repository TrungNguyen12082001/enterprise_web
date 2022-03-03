import React, { useState } from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Info/Data";
import Info from "../components/Info/Info";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Banner />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Services />
      <Info {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
