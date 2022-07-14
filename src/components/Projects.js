/* eslint-disable react/style-prop-object */
import React from "react";

const Projects = () => {
  return (
    <div id="work">
      <h3>Work</h3>
      <div>
        <div className="main-content d-flex row">
          <div className="card mx-2" style="width: 18rem;">
            <img
              className="card-img-top"
              src="./assets/images/Park-Pass-Screenshot.png"
              alt="Park Pass Landing Page"
            />
            <div className="card-body">
              <h5 className="text-center">
                <a
                  className="card-title text-white"
                  href="https://gokublue007.github.io/Park-Pass/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Park Pass
                </a>
              </h5>
              <p className="card-text text-center">
                Check out some trails near your favorite National Parks!
              </p>
              <a
                href="https://github.com/gokublue007/Park-Pass"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github Page
              </a>
            </div>
          </div>
          <div className="card mx-2" style="width: 18rem;">
            <img
              className="card-img-top"
              src="./assets/images/beer_screenshot.png"
              alt="Beer Blog Homepage"
            />
            <div className="card-body">
              <h5 className="text-center">
                <a
                  className="card-title text-white"
                  href="https://radiant-meadow-34547.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Beer Blog
                </a>
              </h5>
              <p className="card-text text-center">
                Leave beers reviews and see what others have say as well!
              </p>
              <a
                href="https://github.com/ssiegelman15/Beer-Blog"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github Page
              </a>
            </div>
          </div>
          <div className="card mx-2" style="width: 18rem;">
            <img
              className="card-img-top"
              src="./assets/images/loginScreenshot.png"
              alt="Earbud Login Page"
            />
            <div className="card-body">
              <h5 className="text-center">
                <a
                  className="card-title text-white"
                  href="https://safe-sea-62699.herokuapp.com/"
                >
                  EarBud
                </a>
              </h5>
              <p className="card-text text-center">
                Check out some trails near your favorite National Parks!
              </p>
              <a
                href="https://github.com/NatalyaCo/EarBud"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
