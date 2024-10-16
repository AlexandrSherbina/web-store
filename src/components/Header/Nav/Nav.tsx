import React, { useContext } from "react";
import "./Nav.scss";
import TopMenuNav from "./TopMenuNav/TopMenuNav";
import TopMenuUser from "./TopMenuUser/TopMenuUser";
import IconBasket2 from "../../../icon/basket";
import Search from "../../UI/Search/Search";

const mainMenu = [
  { itemName: "Home", url: "#", active: true },
  { itemName: "About", url: "#", active: false },
  { itemName: "Products", url: "#", active: false },
  { itemName: "Contacts", url: "#", active: false },
];
const userMenu = [
  { itemName: "User Name", url: "#", active: false, element: "@" },
  {
    itemName: "",
    url: "#",
    active: false,
    element: (
      <>
        <i className="basketImg">
          <IconBasket2 className="fillColor" width="2rem" height="2rem" />
        </i>
      </>
    ),
  },
];

const Nav: React.FC = () => {
  return (
    <nav className="container-top-nav ">
      <TopMenuNav data={mainMenu}></TopMenuNav>
      <Search></Search>
      <TopMenuUser data={userMenu}></TopMenuUser>
    </nav>
  );
};

export default Nav;
