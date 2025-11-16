import React from 'react';
import './TrackList.css';

const TrackList = ({ tracks, currentTrack, onTrackSelect, isPlaying }) => {
  return (
    <div className="track-list">
      <h2 className="track-list-title">Playlist</h2>
      <div className="tracks-container">
        {tracks.map((track) => (
          <div
            key={track.id}
            className={`track-item ${currentTrack?.id === track.id ? 'active' : ''} ${
              currentTrack?.id === track.id && isPlaying ? 'playing' : ''
            }`}
            onClick={() => onTrackSelect(track)}
          >
            <div className="track-item-cover">
              <img src={track.coverArt} alt={track.title} />
              {currentTrack?.id === track.id && (
                <div className="playing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </div>
            
            <div className="track-item-info">
              <h4 className="track-item-title">{track.title}</h4>
              <p className="track-item-artist">{track.artist}</p>
              <p className="track-item-album">{track.album}</p>
            </div>
            
            <div className="track-item-duration">
              {track.duration}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackList;