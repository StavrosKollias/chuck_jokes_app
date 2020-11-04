import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
   return (
      <section className="fotter-container">
         <div className="container">
            <div className="footer-grid grid">
               <div className="grid-item ">
                  <h3>Side links</h3>
                  <ul className="footer-list-menu">
                     <li>Resources</li>
                     <li>Events</li>
                     <li>Jokes</li>
                     <li>Chuck Is God</li>
                  </ul>
               </div>

               <div className="grid-item ">
                  <h3>Email News Letter</h3>
                  <p>Get our latest news and jokes about Chuck and friends.</p>
                  <form name="contact">
                     <input type="email" name="email" placeholder="Enter email" />
                     <input type="submit" value="Submit" className="btn-primary" />
                  </form>
               </div>

               <div className="grid-item">
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
