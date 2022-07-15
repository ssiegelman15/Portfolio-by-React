import React from "react";
import Resume from "../assets/Resume.pdf";

function Navbar({ currentPage, changePage }) {
  return (
    <header>
      <h1 id="name">Shlomo Siegelman</h1>
      <div className="header-right">
        <a
          className={currentPage === "About"}
          href="#About"
          onClick={() => changePage("About")}
        >
          About Me
        </a>
        <a
          className={currentPage === "Projects"}
          href="#Projects"
          onClick={() => changePage("Projects")}
        >
          My Projects
        </a>
        <a
          className={currentPage === "Contact"}
          href="#Contact"
          onClick={() => changePage("Contact")}
        >
          Contact
        </a>
        <a href={Resume} target="_blank" rel="noreferrer noopener">
          Resume
        </a>
      </div>
    </header>
  );
}

export default Navbar;
