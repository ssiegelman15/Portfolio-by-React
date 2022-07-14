import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  // Render page based on state with About page as the default
  const renderPage = () => {
    if ((currentPage = Contact)) {
      return <Contact />;
    } else if ((currentPage = Projects)) {
      return <Projects />;
    } else {
      return <About />;
    }
  };

  const changePage = (page) => setCurrentPage(page);

  return (
    <div className="portfolio">
      <div className="navbar">
        <Navbar currentPage={currentPage} changePage={changePage} />
      </div>
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
