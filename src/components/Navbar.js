import React from "react";

function Navbar(currentPage, changePage) {
  return (
    <header>
      <h1 id="name">Shlomo Siegelman</h1>
      <div class="header-right">
        <a href="#about">About Me</a>
        <a href="#projects">My Projects</a>
        <a href="#contact">Contact Info</a>
        <a href="./assets/Shlomo Siegelman Resume 2022.pdf" download>
          Resume
        </a>
      </div>
    </header>
  );
}

export default Navbar;
