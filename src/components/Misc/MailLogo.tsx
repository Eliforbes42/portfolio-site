import { FontIcon, registerIcons } from "@fluentui/react";
import React from "react";

registerIcons({
  icons: {
    "paperplane-svg": (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 46.8 56.4"
        enable-background="new 0 0 46.8 56.4"
      >
        <polygon
          fill="none"
          stroke="#000000"
          stroke-miterlimit="10"
          points="46.3,1 45.3,28.3 44.3,55.5 22.6,43.5 1,31.5 23.6,16.2 "
        />
        <polygon
          fill="none"
          stroke="#000000"
          stroke-miterlimit="10"
          points="20,42.4 25.2,45.1 30.4,47.9 25.4,51 20.4,54.1 20.2,48.2 "
        />
        <line fill="none" stroke="#000000" stroke-miterlimit="10" x1="20" y1="42.4" x2="46.3" y2="1" />
      </svg>
    ),
  },
});

const PaperPlane = () => {
  return (
    <span className={"plane-logo"}>
      <FontIcon iconName="paperplane-svg" title={"Contact Me"} />
    </span>
  );
};

export default PaperPlane;
