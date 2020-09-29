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

  return (
    <header className="app-header">
      <Link to="/" className="logo-nav-item">
        <img src="./ForbesLogo.png" className={"nav-logo"} alt={"Eli Forbes"} />
      </Link>
      <div className="nav-align-right">{navItemsInternal}</div>
    </header>
  );
};

export default Header;
