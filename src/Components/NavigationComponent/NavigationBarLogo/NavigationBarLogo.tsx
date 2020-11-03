import React from "react";
import { INavigationBarLogoProps } from "./INavigationBarLogoProps";

const NavigationBarLogo: React.FC<INavigationBarLogoProps> = (props) => {
   return (
      <div className="nav-logo">
         <i className="fas fa-book-dead"></i>
         <span className="nav-logo-label">{props.logoLabel}</span>
      </div>
   );
};

export default NavigationBarLogo;
