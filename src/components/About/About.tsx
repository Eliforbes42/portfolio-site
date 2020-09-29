import React from "react";
import profilePicture from "../../content/images/profilePicture.jpg";
import AboutPane from "./AboutPane";

interface Props {}

const About = (props: Props) => {
  // #region Content
  const skills = [
    { area: "Front-End", skills: ["HTML", "CSS", "JavaScript/TypeScript", "React", "Redux"] },
    { area: "Back-End", skills: ["C#", "ASP.NET Core", "Java", "SQL"] },
    { area: "Testing", skills: ["Cypress", "Storybook", "Jest", "Selenium WebDriver"] },
    { area: "CI/CD", skills: ["Azure DevOps Pipelines", "Jenkins"] },
    { area: "Cloud Computing", skills: ["Azure", "Skytap Cloud", "Google Cloud Platform"] },
    { area: "Containerization", skills: ["Docker", "Kubernetes"] },
    { area: "Data Visualization", skills: ["Power BI", "Grafana"] },
    { area: "General", skills: ["PowerShell", "Git", "Azure DevOps", "Atlassian DevOps"] },
  ];
  const qualities = [
    "Critical Thinker",
    "Passionate",
    "Resourceful",
    "Fast Learner",
    "Reliable",
    "Team Player",
    "Active Communicator",
  ];
  const aboutContent = [
    {
      title: "Overview",
      content: `Eli is an experienced Software Engineer with a passion for creating smooth visual experiences, a keen interest in learning various technologies, and a love
    for coding in general.`,
    },
    {
      title: "Education",
      content: "Eli holds a Bachelor of Science Degree focused in Computer Science from Washington State University.",
    },
    {
      title: "Qualities",
      content: (
        <ul>
          {qualities.map((quality) => (
            <li>{quality}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Skills",
      content: (
        <ul>
          {skills.map((area) => (
            <li>
              <li>{area.area}</li>
              <ul>
                {area.skills.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Background",
      content: (
        <>
          <p>
            At a young age, Eli took an interest in graphic design, using tools such as GIMP, Photoshop, and
            Illustrator. He soon created a gaming-related blog to get into content creation and test out his graphic
            design skills, while also marketing such skills to like-minded peers in the game's community. During this
            time, he learned of HTML, CSS, and eventually JavaScript. Upon these discoveries, he took a strong interest
            in the creation of visual experiences using such languages in combination with his graphic design efforts,
            and began learning about web development while progressively improving his blog.
          </p>
          <p>
            However, during Middle School and High School, general schooling turned to occupy the bulk of his time.
            Despite the lack of free time, in High School he got more into programming by learning the basics of coding
            in C and Java, for use in the Robotics Club. This interest sparked the motiviation for Eli to move into
            University and dive head-first into pursuing a Computer Science degree, progressively learning C, C++, and
            C#, while gaining light experience in other languages such as Python and Java. During this time, C became
            his strong suit, as he soon became a Teaching Assistant for the introductory programming class, and
            eventually utilized it in the File Systems and Operating Systems classes.
          </p>
          <p>
            Partway through University, during his time as a Teaching Assistant, Eli took back up his hobby of web
            development by creating a site which served as a resources to students. This soon led further into the
            creation of a web-based tool which simplified certain processes within a game. Testing his mettle, he
            created two different web applications using ASP.NET and React, along with a mobile application using
            Android Studio. While they weren't pictures of perfection by any means, he thoroughly enjoyed the challenge
            and learning experience that each iteration provided.
          </p>
          <p>
            To this day, Eli continues to enjoy each and every challenge of being a Software Engineer, as thus far he's
            had the pleasure of turning his hobby into a profession, and especially since there's always something new
            to learn..
          </p>
        </>
      ),
    },
    {
      title: "Hobbies",
      content: (
        <ul>
          {["Graphic Design", "Music Production", "Strategy Games"].map((hobby) => (
            <li>{hobby}</li>
          ))}
        </ul>
      ),
    },
  ];
  // #endregion

  return (
    <div className="about-page-container">
      <img className="profile-picture" src={profilePicture} alt="Eli Forbes" />
      <div className="about-description-container">
        {aboutContent.map((content) => (
          <AboutPane {...content} />
        ))}
      </div>
    </div>
  );
};

export default About;
