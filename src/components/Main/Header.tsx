import { useConst } from "@uifabric/react-hooks";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { IContextualMenuProps } from "office-ui-fabric-react/lib/ContextualMenu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navRoutes, navStrings } from "../../Strings";

interface Props {}

const Header = (props: Props) => {
  const [selectedPage, setSelectedPage] = useState("/");

  const navItemsInternal = navStrings.map((string, i) => (
    <div className={navRoutes[i] === selectedPage ? "nav-item nav-item-selected" : "nav-item"} key={`nav-item${i}`}>
      <Link to={navRoutes[i]} className={"nav-link"} onClick={() => setSelectedPage(navRoutes[i])}>
        {string}
      </Link>
    </div>
  ));

  const documentStrings = ["Resume", "Transcript", "Cover Letter", "Letter of Recommendation"];

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
        <img src="./CatamaranLogo.png" className={"nav-logo"} alt={"Eli Forbes"} />
      </Link>
      <div className="document-menu-button">
        <DefaultButton text={"Documents"} menuProps={menuProps} />
      </div>
    </header>
  );
};

export default Header;
