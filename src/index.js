import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Helmet} from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

const baseUrl = "/"; //document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
      <Helmet 
          htmlAttributes={{lang: 'pl'}}
          meta={[
              {
                  name: "viewport",
                  content: "width=device-width initial-scale=1.0"
              }
          ]}
      />
    {/*<meta name="viewport" content="width=device-width initial-scale=1.0"/>*/}
      {/*<meta http-equiv="content-language" content="pl-pl" />*/}
    <App />
  </BrowserRouter>, 
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
