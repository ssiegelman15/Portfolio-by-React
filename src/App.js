/* eslint-disable no-const-assign */
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
    <div class="bg-black">
      <div class="flex-column justify-space-around">
        <Navbar currentPage={currentPage} changePage={changePage} />
        {renderPage()}
        <Footer />
      </div>
    </div>
  );
}

export default App;
