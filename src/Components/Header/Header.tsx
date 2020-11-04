import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar/NavigationBar";

const Header: React.FC = () => {
   return (
      <header>
         <NavigationBar active={true} />
      </header>
   );
};

export default Header;
