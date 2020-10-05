export const documentStrings = ["Resume", "Transcript", "Cover Letter", "Letter of Recommendation"];
export const navStrings = ["About", "Documents"];
export const navExternalLinkStrings = ["LinkedIn"];
export const navLinks = ["https://www.linkedin.com/in/the-eli-forbes/"];
export const navRoutes = ["/", "/documents"];
export const documents = ["./resume.pdf", "./transcript.pdf"];
export const aboutContent = {
  education: {
    title: "Education",
    content: "Eli holds a Bachelor of Science Degree focused in Computer Science from Washington State University.",
  },
  qualities: {
    title: "Qualities",
    qualities: [
      "Passionate",
      "Resourceful",
      "Reliable",
      "Fast Learner",
      "Team Player",
      "Critical Thinker",
      "Active Communicator",
    ],
  },
  skills: {
    title: "Skills",
    skills: [
      { area: "Front-End", skills: ["HTML", "CSS", "JavaScript/TypeScript", "React", "Redux"] },
      { area: "Back-End", skills: ["C#", "ASP.NET Core", "Java", "SQL"] },
      { area: "Testing", skills: ["Cypress", "Storybook", "Jest", "Selenium WebDriver"] },
      { area: "CI/CD", skills: ["Azure DevOps Pipelines", "Jenkins"] },
      { area: "Cloud Computing", skills: ["Azure", "Skytap Cloud", "Google Cloud Platform"] },
      { area: "Containerization", skills: ["Docker", "Kubernetes"] },
      { area: "Data Visualization", skills: ["Power BI", "Grafana"] },
      { area: "General", skills: ["PowerShell", "Git", "Azure DevOps", "Atlassian DevOps"] },
    ],
  },
  background: {
    title: "Background",
    background: [
      `At a young age, Eli took an interest in graphic design, using tools such as GIMP, Photoshop, and
    Illustrator. He soon created a gaming-related blog to get into content creation and test out his graphic
    design skills, while also marketing such skills to like-minded peers in the game's community. During this
    time, he learned of HTML, CSS, and eventually JavaScript. Upon these discoveries, he took a strong interest
    in the creation of visual experiences using such languages in combination with his graphic design efforts,
    and began learning about web development while progressively improving his blog.`,
      `However, during Middle School and High School, general schooling turned to occupy the bulk of his time.
    Despite the lack of free time, in High School he got more into programming by learning the basics of coding
    in C and Java, for use in the Robotics Club. This interest sparked the motiviation for Eli to move into
    University and dive head-first into pursuing a Computer Science degree, progressively learning C, C++, and
    C#, while gaining light experience in other languages such as Python and Java. During this time, C became
    his strong suit, as he soon became a Teaching Assistant for the introductory programming class, and
    eventually utilized it in the File Systems and Operating Systems classes.`,
      `Partway through University, during his time as a Teaching Assistant, Eli took back up his hobby of web
    development by creating a site which served as a resources to students. This soon led further into the
    creation of a web-based tool which simplified certain processes within a game. Testing his mettle, he
    created two different web applications using ASP.NET and React, along with a mobile application using
    Android Studio. While they weren't pictures of perfection by any means, he thoroughly enjoyed the challenge
    and learning experience that each iteration provided.`,
      `To this day, Eli continues to enjoy each and every challenge of being a Software Engineer, as thus far he's
    had the pleasure of turning his hobby into a profession, and especially since there's always something new
    to learn..`,
    ],
  },
  hobbies: { title: "Hobbies", hobbies: ["Graphic Design", "Music Production", "Strategy Games"] },
};
export const overviewContent = {
  title: "Overview",
  text: `Eli is a Software Engineer with a passion for creating smooth visual experiences, a keen interest in
learning various technologies, and a love for coding in general.`,
};
export const terminalText = "E:\\Forbes> A developer with simplicity in mind";
export default {
  navStrings,
  navExternalLinkStrings,
  navLinks,
  navRoutes,
  documents,
  aboutContent,
  overviewContent,
  terminalText,
};
