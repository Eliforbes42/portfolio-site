import { useConst } from "@uifabric/react-hooks";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { IContextualMenuProps } from "office-ui-fabric-react/lib/ContextualMenu";
import React from "react";
import { Link } from "react-router-dom";
import { documentStrings } from "../../content/Strings";

const Header = () => {
  const toSnakeCase = (text: string) => text.toLowerCase().replace(/\s/g, "_");
  const dropdownMenuProps = useConst<IContextualMenuProps>(() => ({
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
      <Link to="/" className="logo-nav-item">
        <img src="./CatamaranLogoWhite.png" className={"nav-logo"} alt={"Eli Forbes"} />
      </Link>
      <div className="document-menu-button">
        <DefaultButton text={"Documents"} menuProps={dropdownMenuProps} />
      </div>
    </header>
  );
};

export default Header;
