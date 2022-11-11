import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './app.js';
import reportWebVitals from './reportWebVitals';
import Dogs from './components/calendar';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <Routes>
        <Route path="/Dogs" element={<Dogs />} />
        <Route path = "/" element = {<App/>} />
      </Routes>
  </BrowserRouter>
);

/*export default function Dawg() {
  return (
    <BrowserRouter>
      <App/>
      <Routes>
        <Route path="/Dogs" component={Dogs} />
      </Routes>
    </BrowserRouter>
  );
}*/
