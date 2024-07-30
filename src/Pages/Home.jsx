import React, { useRef } from "react";
import "./Home.css";
import Hero from "../Components/Hero";
import Menu from "../Components/Menu";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";

function Home() {
  const heroRef = useRef(null);
  const menuRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar heroRef={heroRef} menuRef={menuRef} contactRef={contactRef} />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={menuRef}>
        <Menu />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default Home;
