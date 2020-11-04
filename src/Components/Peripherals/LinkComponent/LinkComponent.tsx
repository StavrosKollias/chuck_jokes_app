import React from "react";
import { Link } from "react-router-dom";
import { ILinkComponentProps } from "./ILinkComponentProps";

const LinkComponent: React.FC<ILinkComponentProps> = (props) => {
   return (
      <Link to={props.to} title={props.title} className={props.className}>
         {props.icon}
         {props.label}
      </Link>
   );
};

export default LinkComponent;
