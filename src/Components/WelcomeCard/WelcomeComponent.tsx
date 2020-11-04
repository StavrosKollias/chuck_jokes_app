import React from "react";
import LinkComponent from "../Peripherals/Link/Link";
import "./WelcomeComponent.scss";

const WelcomeComponent: React.FC = () => {
   return (
      <section className="welcome-card-component">
         <h1 className="welcome-card-component-title txt-secondary mb-1"> Welcome to Deadly Jokes!!</h1>

         <div className="welcome-card-component-details mb-1">
            You will find the most nerdy and hilarious jokes about Chuck Norris here on our Website!! If you are Chuck Norris fanatic view our list of jokes. Select the
            button below to see all jokes.
         </div>

         <div className="welcome-card-component-buttons">
            <LinkComponent className="btn-secondary" label="View More" to="/joke-list" title="View more Jokes" />
         </div>
      </section>
   );
};

export default WelcomeComponent;
