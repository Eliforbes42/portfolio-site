import { Checkbox, FontIcon } from "office-ui-fabric-react";
import React from "react";
import PaperPlane from "../Misc/MailLogo";

interface FooterProps {
  setMainContentShow: () => void;
  togglePageScrollTransition: () => void;
  useScrollTransitions: boolean;
}

const Footer = (props: FooterProps) => {
  return (
    <footer className={"app-footer"}>
      <div className={"app-footer-content"}>
        <div className={"footer-links"}>
          <div className={"footer-link mail"}>
            <a href="mailto:eliforbes42@gmail.com" title={"Contact Me"}>
              <PaperPlane />
            </a>
          </div>
          <div className={"footer-link linkedin"}>
            <a href="https://www.linkedin.com/in/the-eli-forbes/" target="_blank" rel="noopener noreferrer">
              <FontIcon iconName="LinkedInLogo" className={"fabric-logo"} title={"LinkedIn"} />
            </a>
          </div>
          <div className={"footer-link github"}>
            <a href="https://github.com/Eliforbes42" target="_blank" rel="noopener noreferrer">
              <FontIcon iconName="GitGraph" className={"fabric-logo"} title={"GitHub"} />
            </a>
          </div>
        </div>
      </div>
      <div className={"return-links"}>
        <Checkbox
          title="Page Transition on Scroll"
          checked={props.useScrollTransitions}
          onChange={props.togglePageScrollTransition}
        />
        <div className={"footer-link return"} onClick={props.setMainContentShow}>
          <FontIcon iconName="DoubleChevronUp8" className={"fabric-logo"} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
