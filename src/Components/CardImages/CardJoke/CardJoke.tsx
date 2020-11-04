import React from "react";
import LinkComponent from "../../Peripherals/Link/Link";
import { ICardJokeProps } from "./ICardJokeProps";
import "./CardJoke.scss"



const CardJoke:React.FC<ICardJokeProps>=(props)=>{
    return(
        <div className="card-joke-container">
            <img src={props.src}  alt="card joke"/>
            <div className="card-joke-details">
                <h1 className="txt-light mb-2">{props.title}</h1> 
                <p className="txt-light mb-2">{props.joke}</p>
                 <LinkComponent label={props.btnLabel} title={`${props.btnLabel} Jokes`} className="btn-secondary" to={props.btnUrl}/>
            </div>
        </div>
    )
}

export default CardJoke;