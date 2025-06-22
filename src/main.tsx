import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './css/branch.css';
import './css/embla.css';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
