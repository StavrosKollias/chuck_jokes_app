import React from "react";
import NavigationBarItem from "../NavigationbarItems/NavigationBarItem";
import NavigationBarLogo from "../NavigationBarLogo/NavigationBarLogo";
import { INavigationBarProps } from "./INavigationBarProps";

const NavigationBar: React.FC<INavigationBarProps> = (props) => {
   return (
      <section className="main-nav">
         <ul className="nav-menu">
            <NavigationBarLogo logoLabel="Deadly Jokes" />
            <NavigationBarItem className="nav-menu-item" to="/serch" label="Search" title="Search Jokes to have fun." />
            <NavigationBarItem className="nav-menu-item" to="/random" label="Random joke" title="Get Random joke" />
            <NavigationBarItem className="nav-menu-item" to="/joke-list" label="Never-Ending Joke" title="See List of Random jokes" />
         </ul>
      </section>
   );
};

export default NavigationBar;
