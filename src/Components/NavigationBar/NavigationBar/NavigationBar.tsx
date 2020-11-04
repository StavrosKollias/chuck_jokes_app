import React from "react";
import NavigationBarItem from "../NavigationbarItems/NavigationBarItem";
import NavigationBarLogo from "../NavigationBarLogo/NavigationBarLogo";
import { INavigationBarProps } from "./INavigationBarProps";
import "./NavigationBar.scss";

const NavigationBar: React.FC<INavigationBarProps> = (props) => {
   return (
      <section className="main-nav">
         <NavigationBarLogo logoLabel="Deadly Jokes" />
         <ul className="nav-menu">
            <NavigationBarItem className="nav-menu-item" to="/" label="Search" title="Back to home" icon={<i className="fas fa-home"></i>} />
            <NavigationBarItem className="nav-menu-item" to="/search" label="Search" title="Search jokes to have fun." icon={<i className="fas fa-search"></i>} />
            <NavigationBarItem className="nav-menu-item" to="/random-joke" label="Random joke" title="Read random joke" icon={<i className="fas fa-redo"></i>} />
            <NavigationBarItem className="nav-menu-item" to="/joke-list" label="List" title="See the list of random jokes" icon={<i className="fas fa-list"></i>} />
         </ul>
      </section>
   );
};

export default NavigationBar;
