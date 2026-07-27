import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './contexts/ThemeContext'
import LanguageContextProvider from './contexts/LanguageContext'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
    <ThemeContextProvider>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </ThemeContextProvider>,
  document.getElementById('root')
);


reportWebVitals();
