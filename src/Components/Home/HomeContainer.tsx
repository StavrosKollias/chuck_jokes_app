import React, { useState, useEffect } from "react";
import { IJoke } from "../../Interfaces/IJokes";
import { getMultipleRandomJokes } from "../../utils/apis";
import CardsContainer from "../Cards/CardsContainer/CardsContainer";
import WelcomeComponent from "../WelcomeCard/WelcomeComponent";
import { IHomeContainerProps } from "./IHomeContainerProps";
import "./HomeContainer.scss";

const HomeContainer: React.FC<IHomeContainerProps> = (props) => {
   props.onRender("");
   const [jokes, SetJokes] = useState<Array<IJoke>>(null);
   const getFourRandomJokes = async (numberJokes: number) => {
      const arrayJokes = await getMultipleRandomJokes(numberJokes);
      if (arrayJokes) return arrayJokes;
   };

   useEffect(() => {
      if (!jokes) {
         getFourRandomJokes(4).then((data) => {
            SetJokes(data);
         });
      }
   });

   return (
      <div className="container py-1 home-container">
         <WelcomeComponent />
         {jokes && <CardsContainer jokes={jokes} />}
      </div>
   );
};

export default HomeContainer;
