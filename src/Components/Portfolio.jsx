/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/latop.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "ToDo List App",
    description:
      "A ToDo List App made using ReactJS. It is a simple app that allows you to add and delete tasks.",
    url: "https://srajanagrawal.github.io/Career_Corps_TODOLIST/",
  },
  {
    title: "Generate Random Password",
    description:
      "A simple app that generates a random password based on the length and characters selected by the user.",
    url: "https://srajanagrawal.github.io/GenerateRandomPassword/",
  },
  {
    title: "My Resume Site",
    description:
      "This is my resume site. It is made using ReactJS and hosted on GitHub Pages.",
    url: "https://srajansoftwaredeveloper-d2r80dgeq-srajanagrawal.vercel.app/",
  },
  {
    title: "Restaurant Landing Page",
    description:
      "A landing page for a restaurant. It is made using HTML, CSS and JavaScript. It is hosted on GitHub Pages.",
    url: "https://srajanagrawal.github.io/Restaurant-Landing-Page/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
