// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AudioPlayerProvider } from './store/context/audio-player-context.jsx';
// Assicurati che il tuo file CSS includa le direttive di Tailwind
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AudioPlayerProvider>
      <App />
    </AudioPlayerProvider>
  </StrictMode>
);