import './App.css';
import React from 'react';
import { Route } from 'react-router-dom'
import MenuUI from "./MenuUI/MenuUI";
import BusinessUI from "./BusinessUI/BusinessUI";
// import Footer from "./MenuUI/BoardLayout/Footer";


const App = () => {
  return (
      <div>
          <Route exact path={["/", "/menu"]} component={MenuUI} />
          <Route path={["/business", "/log-in", "worker"]} component={BusinessUI} />
      </div>
  );
}

export default App;
