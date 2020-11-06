import React, { useEffect, useState } from "react";
import Button from "../../Peripherals/Button/Button";
import NavigationBarItem from "../NavigationbarItems/NavigationBarItem";
import NavigationBarLogo from "../NavigationBarLogo/NavigationBarLogo";
import "./NavigationBar.scss";

const NavigationBar: React.FC = () => {
   const [state, setState] = useState<number>(0);

   const handleClickNavButton = () => {
      state ? setState((state) => state + 1) : setState((state) => state - 1);
   };

   useEffect(() => {
      return () => {};
   });

   return (
      <section className="main-nav">
         <NavigationBarLogo logoLabel="Chuck Jokes" />
         <Button
            className={state ? "nav-button-sandwitch times" : "nav-button-sandwitch"}
            id="nav-button-sandwitch"
            label=""
            title="Open nav bar"
            handleClick={() => handleClickNavButton()}
            icon={<div></div>}
         />
         <ul className={state ? "nav-menu active-nav-mobile" : "nav-menu"}>
            <NavigationBarItem className="nav-menu-item" to="/" label="Home" title="Back to home" id="home-nav-link" icon={<i className="fas fa-home"></i>} />
            <NavigationBarItem
               className="nav-menu-item"
               to="/search"
               label="Search"
               title="Search jokes to have fun."
               id="search-nav-link"
               icon={<i className="fas fa-search"></i>}
            />
            <NavigationBarItem
               className="nav-menu-item"
               to="/random-joke"
               label="Random joke"
               title="Read random joke"
               id="random-nav-link"
               icon={<i className="fas fa-redo"></i>}
            />
            <NavigationBarItem
               className="nav-menu-item"
               to="/joke-list"
               label="List"
               title="See the list of random jokes"
               id="list-nav-link"
               icon={<i className="fas fa-list"></i>}
            />
         </ul>
      </section>
   );
};

export default NavigationBar;
