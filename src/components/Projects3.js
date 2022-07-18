/* eslint-disable react/style-prop-object */
import React from "react";
import ParkPassImage from "../assets/images/ParkPassScreenshot.png";
import BeerBlogImage from "../assets/images/BeerBlogScreenshot.png";
import EarBudImage from "../assets/images/EarBudScreenshot.png";
import PWAScreenshot from "../assets/images/PWAScreenshot.jpg";

const Projects = () => {
  return (
    <section className="content">
      <div className="container">
        <div className="row">
          <div className="card mx-2 col">
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
          <div className="card mx-2 col">
            <img
              className="card-img-top"
              src={BeerBlogImage}
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
          <div className="card mx-2 col">
            <img
              className="card-img-top"
              src={EarBudImage}
              alt="Earbud Login Page"
            />
            <div className="card-body">
              <h5 className="text-center">
                <a
                  className="card-title text-white"
                  href="https://safe-sea-62699.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer noopener"
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
        <div className="main-content row">
          <div className="card mx-2 col">
            <img
              className="card-img-top"
              src={PWAScreenshot}
              alt="PWA Screenshot"
            />
            <div className="card-body">
              <h5 className="text-center">
                <a
                  className="card-title text-white"
                  href="https://infinite-peak-08604.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  J.A.T.E.
                </a>
              </h5>
              <p className="card-text text-center">
                Just Another Text Editor <br />
                (using Progressive Web Applications)
              </p>
              <a
                href="https://github.com/ssiegelman15/Progressivz-Wit-Attitudes"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github Page
              </a>
            </div>
          </div>
          <div className="card mx-2 col">
            <img
              className="card-img-top"
              src={BeerBlogImage}
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
          <div className="card mx-2 col">
            <img
              className="card-img-top"
              src={EarBudImage}
              alt="Earbud Login Page"
            />
            <div className="card-body">
              <h5 className="text-center">
                <a
                  className="card-title text-white"
                  href="https://safe-sea-62699.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer noopener"
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
    </section>
  );
};

export default Projects;
