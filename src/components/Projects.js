/* eslint-disable react/style-prop-object */
import React from "react";
import ParkPassImage from "../assets/images/ParkPassScreenshot.png";

const Projects = () => {
  return (
    <section id="work">
      <h3>Work</h3>
      <aside>
        <div className="main-content d-flex row">
          <div className="card mx-2">
            <img
              className="card-img-top"
              src={ParkPassImage}
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
        </div>
      </aside>
    </section>
  );
};

export default Projects;
