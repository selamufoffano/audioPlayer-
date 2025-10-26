// src/components/AudioPlayer.jsx
import React, { useState } from 'react';
import { RiMenuAddLine } from 'react-icons/ri';
import { TrackInfo } from './TrackInfo';
import { Controls } from './Controls';
import { ProgressBar } from './ProgressBar';
import { VolumeControl } from './VolumeControls';
import { PlayList } from './PlayList';

export const AudioPlayer = () => {
  const [openDrawer, setOpenDrawer] = useState(false); // Stato per mostrare/nascondere la playlist

  return (
    <div className="max-w-4xl mx-auto shadow-2xl rounded-xl overflow-hidden">
      {/* Barra Principale del Player */}
      <div className="min-h-8 bg-[#2e2d2d] flex flex-col gap-4 lg:flex-row justify-between items-center text-white p-[0.5rem_10px]">
        
        {/* Info Traccia (Sinistra) */}
        <TrackInfo />
        
        {/* Controlli & Barra di Avanzamento (Centro) */}
        <div className="w-full flex flex-col items-center gap-1 m-auto flex-1 max-w-lg">
          <Controls />
          <ProgressBar />
        </div>
        
        {/* Volume & Menu (Destra) */}
        <div className="flex items-center gap-2 text-gray-400">
          <VolumeControl />
          <button 
            onClick={() => setOpenDrawer((prev) => !prev)}
            aria-label={openDrawer ? "Chiudi playlist" : "Apri playlist"}
          >
            <RiMenuAddLine size={24} />
          </button>
        </div>
      </div>
      
      {/* Drawer della Playlist */}
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          openDrawer ? 'max-h-72' : 'max-h-0'
        }`}
      >
        <div className="bg-[#4c4848] text-white max-h-72 overflow-y-auto">
          <PlayList />
        </div>
      </div>
    </div>
  );
};