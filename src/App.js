import './App.css';
import React from 'react';
import { Route } from 'react-router-dom'
import MenuUI from "./MenuUI/MenuUI";
import BusinessUI from "./BusinessUI/BusinessUI";
import RegisterContainer from "./BusinessUI/RegisterPage/RegisterContainer";
// import Footer from "./MenuUI/BoardLayout/Footer";


const App = () => {
  return (
      <div className="page-container">
          <Route exact path={["/", "/menu"]} component={MenuUI} />
          <Route path={["/business", "/log-in", "worker"]} component={BusinessUI} />
          <Route path={["/register"]} component={RegisterContainer} />
      </div>
  );
}

export default App;
