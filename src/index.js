import React from 'react';
import ReactDOM from 'react-dom/client';
// react dom  
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// React is imported in order to write Jsx.
// In react we write code in jsx .
// jsx stands for Javasccript xml . (xml => extensible markup language => treat as HTML)
// jsx => javacsrcipt + Html.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />

);


reportWebVitals();


// component => meaningful part of readable code .