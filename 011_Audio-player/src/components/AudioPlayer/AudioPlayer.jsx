import React from 'react';
import { useAudioPlayer } from '../../hooks';
import './AudioPlayer.css';

const AudioPlayer = ({ currentTrack, onNext, onPrevious, hasNext, hasPrevious }) => {
  const {
    audioRef,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    togglePlayPause,
    setAudioPosition,
    setAudioVolume,
    toggleMute,
    formatTime
  } = useAudioPlayer();

  if (!currentTrack) {
    return (
      <div className="audio-player empty">
        <div className="empty-state">
          <span className="empty-icon">🎵</span>
          <p>Select a track to start playing</p>
        </div>
      </div>
    );
  }

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        preload="metadata"
      />
      
      <div className="player-content">
        {/* Track Info */}
        <div className="track-info">
          <div className="cover-art">
            <img src={currentTrack.coverArt} alt={currentTrack.title} />
          </div>
          <div className="track-details">
            <h3 className="track-title">{currentTrack.title}</h3>
            <p className="track-artist">{currentTrack.artist}</p>
            <p className="track-album">{currentTrack.album}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-section">
          <div className="time-display">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <div 
            className="progress-bar"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const percent = (e.clientX - rect.left) / rect.width;
              setAudioPosition(percent * duration);
            }}
          >
            <div 
              className="progress"
              style={{ width: `${progressPercentage}%` }}
            >
              <div className="progress-handle"></div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="controls">
          <div className="main-controls">
            <button 
              className="control-btn"
              onClick={onPrevious}
              disabled={!hasPrevious}
            >
              <svg viewBox="0 0 24 24">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
              </svg>
            </button>
            
            <button 
              className="play-pause-btn"
              onClick={togglePlayPause}
            >
              {isPlaying ? (
                <svg viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
            
            <button 
              className="control-btn"
              onClick={onNext}
              disabled={!hasNext}
            >
              <svg viewBox="0 0 24 24">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
              </svg>
            </button>
          </div>

          {/* Volume Control */}
          <div className="volume-control">
            <button 
              className="volume-btn"
              onClick={toggleMute}
            >
              {isMuted || volume === 0 ? (
                <svg viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                </svg>
              ) : volume > 0.5 ? (
                <svg viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24">
                  <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>
                </svg>
              )}
            </button>
            
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={(e) => setAudioVolume(parseFloat(e.target.value))}
              className="volume-slider"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;