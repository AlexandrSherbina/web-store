import React from "react";
import Navigate from "../../../UI/List/Navigate";
import "./TopMenuNav.scss";

interface DataType {
  itemName: string;
  url: string;
  active?: boolean;
}

interface TopMenuType {
  data: DataType[];
}

const TopMenu: React.FC<TopMenuType> = ({ data }) => {
  return (
    <Navigate
      data={data}
      customListClass="menu-top-custom"
      customListItemClass="menu-top-custom-item"
      customListLinkClass="menu-top-custom-link"
    ></Navigate>
  );
};

export default TopMenu;
