import React, { StrictMode } from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AudioPlayerProvider } from './store/context/audio-player-context.jsx';
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AudioPlayerProvider>
      <App />
    </AudioPlayerProvider>
  </StrictMode>
);