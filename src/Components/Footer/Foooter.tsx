import React from "react";
import InputFormEmail from "../Peripherals/InputFormEmail/InputFormEmail";
import Social from "../Peripherals/Social/Social";
import "./Footer.scss";

const Footer: React.FC = () => {
   return (
      <section className="fotter-container">
         <div className="container">
            <div className="footer-grid grid">
               <div className="grid-item  display-flex-column">
                  <h3>Side links</h3>
                  <ul className="footer-list-menu ">
                     <li>Resources</li>
                     <li>Events</li>
                     <li>Jokes</li>
                     <li>Chuck Is God</li>
                  </ul>
               </div>

               <div className="grid-item display-flex-column">
                  <h3 className="mb-1">Email News Letter</h3>
                  <p className="mb-1">Get our latest news and jokes about Chuck and friends.</p>
                  <InputFormEmail />

                  <Social />
               </div>

               <div className="grid-item display-flex-column">
                  <h3>Location</h3>
                  <ul className="footer-list-menu">
                     <li>Manchester UK</li>
                     <li>OL56ST</li>
                     <li>United Kingdom</li>
                     <li>Email: JokesForChuck@email.co.uk</li>
                  </ul>
               </div>
               <div className="grid-row-item py-1 txt-center">Copyright &copy; 2020, All rights Reserved</div>
            </div>
         </div>
      </section>
   );
};

export default Footer;
