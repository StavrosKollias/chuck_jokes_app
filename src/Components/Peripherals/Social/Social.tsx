import React from "react";
import "./Social.scss";

const Social: React.FC = () => {
   return (
      <div className="social-container mt-1">
         <a href="https://www.twitter.com" className="social-link">
            <i className="fab fa-twitter"></i>
         </a>
         <a href="https://www.facebook.com" className="social-link">
            <i className="fab fa-facebook"></i>
         </a>

         <a href="https://www.instagram.com" className="social-link">
            <i className="fab fa-instagram"></i>
         </a>
      </div>
   );
};

export default Social;
