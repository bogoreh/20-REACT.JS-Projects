import './ProgressBar.css';

const ProgressBar = ({ progress, height = 8 }) => {
  return (
    <div className="progress-bar-container" style={{ height: `${height}px` }}>
      <div 
        className="progress-bar-fill"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;