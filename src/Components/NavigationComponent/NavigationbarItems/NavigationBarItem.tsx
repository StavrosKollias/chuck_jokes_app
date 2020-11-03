import React from "react";
import LinkComponent from "../../Peripherals/LinkComponent/LinkComponent";
import { INavigationBarItemProps } from "./INavigationBarItemProps";

const NavigationBarItem: React.FC<INavigationBarItemProps> = (props) => {
   return (
      <li className={props.className}>
         <LinkComponent className="nav-link" label={props.label} title={props.title} to={props.to} />
      </li>
   );
};

export default NavigationBarItem;
