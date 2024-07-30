import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar({ homeRef, menuRef, contactRef }) {
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

  function scrollIntoView(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <nav className={sticky ? "navbar-container active" : "navbar-container"}>
      <h1 onClick={() => scrollIntoView(homeRef)}>Home</h1>
      <h1 onClick={() => scrollIntoView(menuRef)}>Menu</h1>
      <h1 onClick={() => scrollIntoView(contactRef)}>Contact</h1>
    </nav>
  );
}

export default Navbar;
