import { useConst } from "@uifabric/react-hooks";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { IContextualMenuProps } from "office-ui-fabric-react/lib/ContextualMenu";
import React from "react";
import { Link } from "react-router-dom";
import { documentStrings } from "../../content/Strings";

interface HeaderProps {
  setUseScrollTransitions: (useTransitions: boolean) => void;
}

const Header = (props: HeaderProps) => {
  const toSnakeCase = (text: string) => text.toLowerCase().replace(/\s/g, "_");
  const dropdownMenuProps = useConst<IContextualMenuProps>(() => ({
    isBeakVisible: true,
    shouldFocusOnMount: true,
    items: documentStrings.map((document) => ({
      key: toSnakeCase(document),
      text: document,
      href: `./documents/${toSnakeCase(document)}.pdf`,
      target: "_blank",
      rel: "noopener noreferrer",
    })),
  }));

  return (
    <header className="app-header">
      <Link to="/" className="logo-nav-item" onClick={() => props.setUseScrollTransitions(true)}>
        <img src="/CatamaranLogoWhite.png" className={"nav-logo"} alt={"Eli Forbes"} />
      </Link>
      <div className="document-menu-button">
        <Link to="/" className={"cronus-monitoring-button"} onClick={() => props.setUseScrollTransitions(true)}>
          <DefaultButton text={"About Me"} />
        </Link>
        <Link to="/cronus" className={"cronus-monitoring-button"} onClick={() => props.setUseScrollTransitions(false)}>
          <DefaultButton text={"Cronus Monitoring"} />
        </Link>
        <DefaultButton text={"Documents"} menuProps={dropdownMenuProps} />
      </div>
    </header>
  );
};

export default Header;
