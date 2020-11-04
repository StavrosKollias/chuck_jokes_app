import React from "react";
import NavLinkElement from "../NavLinkElement/NavLinkElement";
import { INavigationBarItemProps } from "./INavigationBarItemProps";

const NavigationBarItem: React.FC<INavigationBarItemProps> = (props) => {
   return (
      <li className={props.className}>
         <NavLinkElement className="nav-link" label={props.label} title={props.title} to={props.to} icon={props.icon} />
      </li>
   );
};

export default NavigationBarItem;
