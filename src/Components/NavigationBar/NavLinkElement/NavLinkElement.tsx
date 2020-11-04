import React from "react";
import { NavLink } from "react-router-dom";
import { INavLinkElementProps } from "./INavLinkElementProps";

const NavLinkElement: React.FC<INavLinkElementProps> = (props) => {
   const active = {
      borderBottomColor: "#046ab8",
   };
   return (
      <NavLink activeStyle={active} exact={true} to={props.to} title={props.title} className={props.className}>
         {props.icon}
         {props.label}
      </NavLink>
   );
};

export default NavLinkElement;
