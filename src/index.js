import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import App from './App';
// import Slider from './App';
import Footer from "./components/Footer";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    {/* <Slider /> */}
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
