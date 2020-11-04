import React from "react";
import CardImagesContainer from "../CardImages/CardImagesContainer/CardImagesContainer";
import WelcomeComponent from "../WelcomeCard/WelcomeComponent";
import "./HomeContainer.scss"

const HomeContainer: React.FC = (props) => {
   return (
      <div className="container py-1 home-container">
         <WelcomeComponent />

         <CardImagesContainer/>
      </div>
   );
};

export default HomeContainer;
