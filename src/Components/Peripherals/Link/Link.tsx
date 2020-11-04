import React from "react";
import { Link } from "react-router-dom";
import { ILinkProps } from "./ILinkProps";

const LinkComponent: React.FC<ILinkProps> = (props) => {
   return (
      <Link to={props.to} title={props.title} className={props.className}>
         {props.icon}
         {props.label}
      </Link>
   );
};

export default LinkComponent;
