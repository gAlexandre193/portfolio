import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './layout';
import './styles/Global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='wrapper'>
      <App />
    </div>
  </StrictMode>,
);