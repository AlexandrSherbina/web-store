import React, { JSXElementConstructor, ReactElement } from "react";
import "./Link.scss";
type ReactChild =
  | string
  | number
  | ReactElement<any, string | JSXElementConstructor<any>>;
interface LinkType {
  href: string;
  title?: string;
  customClass?: string;
  text?: string;
  props?: any;
  children?: ReactChild;
}

const Link: React.FC<LinkType> = ({
  href,
  title,
  customClass,
  children,
  props,
}) => {
  return (
    <a href={href} title={title} className={`link ${customClass}`} {...props}>
      {children}
    </a>
  );
};

export default Link;
