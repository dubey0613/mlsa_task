/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/coffee.avif";

const imageAltText = "a coffee cup on a table";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm an Enthusiastic web developer with a keen eye for design and innovation. Proficient in JavaScript, ReactJS, Bootstrap, Node.js, Tailwind and MongoDB.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = ["Web development", "ReactJS", "JavaScript", "Tailwind", "NextJS", "Mern Stack"];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Apart from my web development skills, I am also eager to learn about cloud computing and its applications in the real world. My interest in the field of AI and ML has driven me to pursue a career that involves cutting-edge technologies and innovation. My goal is to leverage my skills and knowledge to create innovative solutions that can solve real-world problems. I believe in continuous learning, and I am always on the lookout for opportunities to grow and expand my skill set.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
