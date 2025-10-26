// src/App.jsx
import React from 'react';
import { AudioPlayer } from './components/AudioPlayer';

function App() {
  return (
    <div className="App p-4 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Player Audio Personalizzato in React</h1>
      <AudioPlayer />
    </div>
  );
}

export default App;