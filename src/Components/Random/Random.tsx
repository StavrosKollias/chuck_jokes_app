import React from "react";
import JockesContainer from "../Jokes/JokesContainer/JokesContainer";
import { IRandomProps } from "./IRandomProps";

const Random: React.FC<IRandomProps> = (props) => {
   return (
      <section className="search-container">
         <JockesContainer multiple={false} filter={false} onRender={(e) => props.onRender(e)} />
      </section>
   );
};

export default Random;
