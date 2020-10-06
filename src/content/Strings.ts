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
      `At a young age, Eli took an interest in graphic design, using tools such as GIMP, Photoshop, and Illustrator. 
      He soon created a gaming-related blog to improve upon his graphic design skills and put them to use for others within the game's community. 
      During this time, he learned of HTML, CSS, and eventually JavaScript, and took a strong interest in the creation of visual experiences using such languages in combination with his graphic design efforts.
      He took great pleasure in the challenge of learning and utilizing each language in conjunction with another, as it was like an intricate puzzle with an infinite number of possible end results.`,

      `During Middle School and High School, while general studies turned to occupy the bulk of his time, he continued to maintain an interest in graphic design. 
      In High School he got further into programming by learning the basics of coding in C and Java, for use in the Robotics Club. 
      This learning sparked a larger interest in coding, as well as the motivation for Eli to move into
    University and dive head-first into pursuing a Computer Science degree. He progressively became proficient in C, C++, and
    C#, while gaining experience in other languages such as SQL, Java, and Python. 
    During this time, C became his strong suit, as he soon became a Teaching Assistant for the introductory programming class, and
    eventually utilized the language to create both a File System and Operating System.`,

      `Partway through University, during his time as a Teaching Assistant, Eli took back up his hobby of web
    development by creating a site intended to serve as a resources to students. This soon led further into the
    creation of a web-based tool intended to promote task efficiency within a game. Testing his mettle, he
    created two different web applications using ASP.NET and React, along with a mobile application using
    Android Studio. While they weren't pictures of perfection by any means, he thoroughly enjoyed the challenge
    and learning experience that each iteration provided.`,

      `Eli found his internship at CDK Global to be an amazing opportunity, as it was the beginning of turning his hobby into a profession! 
    He thoroughly enjoyed using his cummulative web development experience every day, and endeavored to continuously build on top of it with new learnings.
    Upon conclusion of the internship, Eli was resolved to become a full time web developer.`,

      `During the remaining time at University, he strove to learn as much as possible through his coursework, as well as his work in various group projects and clubs. 
    Some courses further exposed him to multiple other programming languages, both old and new. 
    While others provided him with experience in various newer technlogogies, such as Containerization through Docker and Kubernetes, and exposure to Cloud Computing through both Google Cloud Platform and Skytap Cloud.
    In addition to all the various technical learnings, participation in group projects and clubs provided continuous opportunities for growth in many softer skills such as communication, teamwork, flexibility, and much more.`,

      `To this day, Eli dilligently pursues his various hobbies, and continues to enjoy each and every challenge of being a Software Engineer, as there's always something new
    to learn..`,
    ],
  },
  hobbies: { title: "Hobbies", hobbies: ["Graphic Design", "Music Production", "Strategy Games", "Longboarding"] },
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
