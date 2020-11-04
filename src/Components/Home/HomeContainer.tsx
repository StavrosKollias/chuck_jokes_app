import React from "react";
import WelcomeComponent from "../WelcomeCard/WelcomeComponent";

const HomeContainer: React.FC = (props) => {
   return (
      <div className="container py-1">
         <WelcomeComponent />
      </div>
   );
};

export default HomeContainer;
