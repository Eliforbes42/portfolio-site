import React from "react";
import { aboutContent } from "../../Strings";
import AboutPane from "./AboutPane";
import Overview from "./Overview";

const About = () => {
  const content = [
    aboutContent.education,
    {
      title: aboutContent.qualities.title,
      content: (
        <ul>
          {aboutContent.qualities.qualities.map((quality) => (
            <li>{quality}</li>
          ))}
        </ul>
      ),
    },
    {
      title: aboutContent.skills.title,
      content: (
        <ul>
          {aboutContent.skills.skills.map((area) => (
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
      title: aboutContent.background.title,
      content: (
        <>
          {aboutContent.background.background.map((content) => (
            <p>{content}</p>
          ))}
        </>
      ),
    },
    {
      title: aboutContent.hobbies.title,
      content: (
        <ul>
          {aboutContent.hobbies.hobbies.map((hobby) => (
            <li>{hobby}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="about-page-container">
      <Overview />
      <div className="about-description-container">
        {content.map((section) => (
          <AboutPane {...section} />
        ))}
      </div>
    </div>
  );
};

export default About;
