import { FontIcon } from "@fluentui/react";
import React from "react";

interface ChevronProps {
  isExpanded: boolean;
}

const Chevron = (props: ChevronProps) => {
  const { isExpanded } = props;
  return <FontIcon iconName={"ChevronRight"} className={isExpanded ? "chevron rotated" : "chevron"} />;
};

export default Chevron;
