import React from "react";
import "./LoadMore.scss";

const LoadMore: React.FC = () => {
   return (
      <div className="load-more-container">
         Loading
         <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   );
};

export default LoadMore;
