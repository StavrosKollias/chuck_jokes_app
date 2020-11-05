import React from "react";
import { Link } from "react-router-dom";
import { INavigationBarLogoProps } from "./INavigationBarLogoProps";

import "./NavigationBarLogo.scss";

const NavigationBarLogo: React.FC<INavigationBarLogoProps> = (props) => {
   return (
      <div className="nav-logo">
         <Link to="/">
            <i className="fas fa-book-dead txt-light-blue"></i>
            <span className="nav-logo-label  txt-primary txt-bold">{props.logoLabel.split(" ")[0]}</span>
            <span className="nav-logo-label  txt-secondary">{props.logoLabel.split(" ")[1]}</span>
         </Link>
      </div>
   );
};

export default NavigationBarLogo;
