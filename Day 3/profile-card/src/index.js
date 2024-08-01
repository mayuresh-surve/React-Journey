import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Test from './Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Use Test.js to learn about Component and JSX
root.render(
  <React.StrictMode>
    <App />
    {/* <Test/>  */}
  </React.StrictMode>
);
