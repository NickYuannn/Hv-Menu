import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setSticky(false);
      } else {
        setSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToHome() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function scrollToMenu() {
    window.scrollTo({ top: 800, behavior: "smooth" });
  }
  function scrollToContact() {
    window.scrollTo({ top: 1600, behavior: "smooth" });
  }
  return (
    <nav className={sticky ? "navbar-container active" : "navbar-container"}>
      <h1 onClick={scrollToHome}>Home</h1>
      <h1 onClick={scrollToMenu}>Menu</h1>
      <h1 onClick={scrollToContact}>Contact</h1>
    </nav>
  );
}

export default Navbar;
