import React from "react";

function Navbar(currentPage, changePage) {
  return (
    <header>
      <h1 id="name">Shlomo Siegelman</h1>
      <div class="header-right">
        <a
          className={currentPage === "About"}
          href="#About"
          onClick={function () {
            changePage("About");
          }}
        >
          About Me
        </a>
        <a
          className={currentPage === "Projects"}
          href="#Projects"
          onClick={function () {
            changePage("Projects");
          }}
        >
          My Projects
        </a>
        <a
          className={currentPage === "Contact"}
          href="#Contact"
          onClick={function () {
            changePage("Contact");
          }}
        >
          Contact Info
        </a>
        <a href="../assets/Shlomo Siegelman Resume 2022.pdf" target="_blank">
          Resume
        </a>
      </div>
    </header>
  );
}

export default Navbar;
