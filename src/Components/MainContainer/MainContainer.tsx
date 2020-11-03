import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MainContainer: React.FC = () => {
   return (
      <main className="wrapper">
         <Router>
            <Switch>
               {/* <Route path="/" exact render={() => <LoginRegisterPopupComponent />} />
                     <Route path="/Register" exact render={() => <RegisterFormComponent />} /> */}
            </Switch>
         </Router>
      </main>
   );
};

export default MainContainer;
