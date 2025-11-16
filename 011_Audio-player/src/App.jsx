import React, { useState } from 'react';
import AudioPlayer from './components/AudioPlayer';
import TrackList from './components/TrackList';
import { tracks } from './data/tracks';
import { useAudioPlayer } from './hooks';
import './App.css';

function App() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const { isPlaying } = useAudioPlayer();

  const currentTrack = currentTrackIndex !== null ? tracks[currentTrackIndex] : null;

  const handleTrackSelect = (track) => {
    const trackIndex = tracks.findIndex(t => t.id === track.id);
    setCurrentTrackIndex(trackIndex);
  };

  const handleNext = () => {
    if (currentTrackIndex !== null && currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentTrackIndex !== null && currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  };

  const hasNext = currentTrackIndex !== null && currentTrackIndex < tracks.length - 1;
  const hasPrevious = currentTrackIndex !== null && currentTrackIndex > 0;

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1>🎵 Modern Audio Player</h1>
          <p>Experience music like never before</p>
        </header>
        
        <main className="app-main">
          <AudioPlayer
            currentTrack={currentTrack}
            onNext={handleNext}
            onPrevious={handlePrevious}
            hasNext={hasNext}
            hasPrevious={hasPrevious}
          />
          
          <TrackList
            tracks={tracks}
            currentTrack={currentTrack}
            onTrackSelect={handleTrackSelect}
            isPlaying={isPlaying}
          />
        </main>
        
        <footer className="app-footer">
          <p>Abdibogoreh © 2025 • Modern Audio Experience</p>
        </footer>
      </div>
    </div>
  );
}

export default App;