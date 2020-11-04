import React from "react";
import ButtonComponent from "../../Peripherals/ButtonCompoent/ButtonComponent";
import JokesItem from "../JokesItem/JokesItem";
import "./JokesContainer.scss";

const JockesContainer: React.FC = (props) => {
   return (
      <section className="jokes-container py-1">
         <JokesItem title={2} categories={["nerdy", "explicit"]} joke="I am the joke haha!" />
      </section>
   );
};

export default JockesContainer;
