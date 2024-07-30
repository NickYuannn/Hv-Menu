import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { useRef } from "react";

function App() {
  const homeRef = useRef(Home);
  const menuRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
