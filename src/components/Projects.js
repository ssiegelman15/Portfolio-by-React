/* eslint-disable react/style-prop-object */
import React from "react";

const Projects = () => {
  return (
    <section id="work">
      <h3>Work</h3>
      <aside>
        <div class="main-content d-flex row">
          <div class="card mx-2" style="width: 18rem;">
            <img
              class="card-img-top"
              src="./assets/images/Park-Pass-Screenshot.png"
              alt="Park Pass Landing Page"
            />
            <div class="card-body">
              <h5 class="text-center">
                <a
                  class="card-title text-white"
                  href="https://gokublue007.github.io/Park-Pass/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Park Pass
                </a>
              </h5>
              <p class="card-text text-center">
                Check out some trails near your favorite National Parks!
              </p>
              <a
                href="https://github.com/gokublue007/Park-Pass"
                class="btn btn-primary"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github Page
              </a>
            </div>
          </div>
          <div class="card mx-2" style="width: 18rem;">
            <img
              class="card-img-top"
              src="./assets/images/beer_screenshot.png"
              alt="Beer Blog Homepage"
            />
            <div class="card-body">
              <h5 class="text-center">
                <a
                  class="card-title text-white"
                  href="https://radiant-meadow-34547.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Beer Blog
                </a>
              </h5>
              <p class="card-text text-center">
                Leave beers reviews and see what others have say as well!
              </p>
              <a
                href="https://github.com/ssiegelman15/Beer-Blog"
                class="btn btn-primary"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github Page
              </a>
            </div>
          </div>
          <div class="card mx-2" style="width: 18rem;">
            <img
              class="card-img-top"
              src="./assets/images/loginScreenshot.png"
              alt="Earbud Login Page"
            />
            <div class="card-body">
              <h5 class="text-center">
                <a
                  class="card-title text-white"
                  href="https://safe-sea-62699.herokuapp.com/"
                >
                  EarBud
                </a>
              </h5>
              <p class="card-text text-center">
                Check out some trails near your favorite National Parks!
              </p>
              <a
                href="https://github.com/NatalyaCo/EarBud"
                class="btn btn-primary"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github Page
              </a>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Projects;
