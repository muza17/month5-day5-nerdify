import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider as ThemeProvider } from './Context/ThemeContext';
import { LangProvider } from './Context/LangContext';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LangProvider>
        <App /> 
      </LangProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

