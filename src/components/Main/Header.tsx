import { useConst } from "@uifabric/react-hooks";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { IContextualMenuProps } from "office-ui-fabric-react/lib/ContextualMenu";
import React from "react";
import { Link } from "react-router-dom";
import { documentStrings } from "../../Strings";

interface Props {}

const Header = (props: Props) => {
  const menuProps = useConst<IContextualMenuProps>(() => ({
    shouldFocusOnMount: true,
    items: documentStrings.map((document) => ({
      key: document.toLowerCase().replace(/\s/g, "_"),
      text: document,
      href: `./${document.toLowerCase().replace(/\s/g, "_")}.pdf`,
    })),
  }));

  return (
    <header className="app-header">
      <Link to="/" className="logo-nav-item">
        <img src="./CatamaranLogoWhite.png" className={"nav-logo"} alt={"Eli Forbes"} />
      </Link>
      <div className="document-menu-button">
        <DefaultButton text={"Documents"} menuProps={menuProps} />
      </div>
    </header>
  );
};

export default Header;
