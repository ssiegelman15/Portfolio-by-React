/* eslint-disable react/style-prop-object */
import React from "react";
import ParkPassImage from "../assets/images/ParkPassScreenshot.png";
import BeerBlogImage from "../assets/images/BeerBlogScreenshot.png";
import EarBudImage from "../assets/images/EarBudScreenshot.png";
import PWAScreenshot from "../assets/images/PWAScreenshot.jpg";
import PasswordScreenshot from "../assets/images/PasswordScreenshot.png";
import NoteTakerScreenshot from "../assets/images/NoteTakerScreenshot.png";
import MoovySpaceScreenshot from "../assets/images/MoovySpaceScreenshot";

const projectData = [
  {
    key: 1,
    id: "div1 card",
    screenshot: ParkPassImage,
    altText: "Park Pass",
    title: "Park Pass",
    deployed: "https://gokublue007.github.io/Park-Pass/",
    github: "https://github.com/gokublue007/Park-Pass",
    description: "Check out some trails near your favorite National Parks!",
  },
  {
    key: 2,
    id: "div2 card",
    screenshot: BeerBlogImage,
    altText: "Beer Blog",
    title: "Beer Blog",
    deployed: "https://radiant-meadow-34547.herokuapp.com/",
    github: "https://github.com/ssiegelman15/Beer-Blog",
    description: "Leave beers reviews and see what others have say as well.",
  },
  {
    key: 3,
    id: "div3 card",
    screenshot: EarBudImage,
    altText: "EarBud",
    title: "EarBud",
    deployed: "https://safe-sea-62699.herokuapp.com/",
    github: "https://github.com/NatalyaCo/EarBud",
    description: "Find new buddies that share your ear for music.",
  },
  {
    key: 4,
    id: "div4 card",
    screenshot: MoovySpaceScreenshot,
    altText: "MoovySpace",
    title: "MoovySpace",
    deployed: "https://moovyspace.herokuapp.com/",
    github: "https://github.com/jgault87/MoovySpace",
    description:
      "Share your favorite movies and discover new movie recommendations!",
  },
  {
    key: 5,
    id: "div5 card",
    screenshot: PasswordScreenshot,
    altText: "Password Generator",
    title: "Password Generator",
    deployed: "https://ssiegelman15.github.io/Password-Generator/",
    github: "https://github.com/ssiegelman15/Password-Generator",
    description:
      "Randomly generate a password given your specific requirements.",
  },
  {
    key: 6,
    id: "div6 card",
    screenshot: NoteTakerScreenshot,
    altText: "Note Taker",
    title: "Note Taker",
    deployed: "https://still-badlands-27366.herokuapp.com/",
    github: "https://github.com/ssiegelman15/Note-Taker",
    description: "Store your reminders in a persistent web application.",
  },
];

const Projects = () => {
  return (
    <main>
      <section className="gridRow">
        {projectData.map(
          ({
            key,
            id,
            screenshot,
            altText,
            title,
            deployed,
            github,
            description,
          }) => {
            return (
              <div key={key} className="card">
                <img className="card-img-top" src={screenshot} alt={altText} />
                <div className="card-body">
                  <h5 className="text-center">
                    <a
                      className="card-title text-white"
                      href={deployed}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {title}
                    </a>
                  </h5>
                  <p className="card-text text-center">{description}</p>
                  <a
                    href={github}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Github Page
                  </a>
                </div>
              </div>
            );
          }
        )}
      </section>
    </main>
  );
};

export default Projects;
