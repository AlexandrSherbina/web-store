import React from "react";
import "./Navigate.scss";
import Link from "../Link/Link";

interface DataType {
  itemName: string;
  url: string;
  active?: boolean;
  element?: any;
}
interface ListType {
  data: DataType[];
  customListClass?: string;
  customListItemClass?: string;
  customListLinkClass?: string;
  element?: any;
}
const Navigate: React.FC<ListType> = ({
  data,
  customListClass,
  customListItemClass,
  customListLinkClass,
  // element,
}) => {
  return (
    <>
      <ul className={`list-nav ${customListClass}`}>
        {data.map(({ itemName, url, active, element }, i) => {
          return (
            <li
              key={itemName + i}
              className={`list-nav-item ${customListItemClass}`}
            >
              <Link
                href={url}
                customClass={`list-nav-link ${
                  active ? "active" : ""
                } ${customListLinkClass}`}
              >
                {element ? (
                  <>
                    {element} {itemName}
                  </>
                ) : (
                  itemName
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Navigate;
