import React from 'react';
import ReactDOM from 'react-dom/client';
import { Playground } from './Playground';
import { ThemeProvider } from '../src';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Playground />
    </ThemeProvider>
  </React.StrictMode>,
);
