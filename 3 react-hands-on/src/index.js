import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //this import is from app.js
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //this tells where this react application/user interface should be placed in web page, this root id comes from index.html div element in public folder
root.render( //this tells what should be rendered in that root created above, so basically the App imported above is being paased here and rendered,
//this kind of syntax is JSX which react transform to JS
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
