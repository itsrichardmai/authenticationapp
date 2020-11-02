import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(    
<BrowserRouter basename={process.env.PUBLIC_URL}>
  <React.StrictMode>
    <App />

  </React.StrictMode>
  </BrowserRouter>
  ,

  document.getElementById('root')
);

