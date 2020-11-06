import React, { useState, useEffect } from "react";
import { IJoke } from "../../Interfaces/IJokes";
import { getMultipleRandomJokes } from "../../utils/apis";
import CardsContainer from "../Cards/CardsContainer/CardsContainer";
import WelcomeComponent from "../WelcomeCard/WelcomeComponent";
import { IHomeContainerProps } from "./IHomeContainerProps";
import "./HomeContainer.scss";

const INITIAL_STATE: Array<IJoke> = null;

const HomeContainer: React.FC<IHomeContainerProps> = (props) => {
   props.onRender("");
   const [state, setState] = useState<Array<IJoke>>(INITIAL_STATE);
   const getFourRandomJokes = async (numberJokes: number) => {
      const arrayJokes = await getMultipleRandomJokes(numberJokes);
      if (arrayJokes) return arrayJokes;
   };

   useEffect(() => {
      if (!state) {
         getFourRandomJokes(4).then((data) => {
            setState(data);
         });
      }
   });

   useEffect(() => {
      return () => {};
   });

   return (
      <div className="container py-1 home-container">
         <WelcomeComponent />
         {state && <CardsContainer jokes={state} />}
      </div>
   );
};

export default HomeContainer;
