import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '../src';
import { Playground } from './Playground';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Playground />
    </ThemeProvider>
  </React.StrictMode>,
);
