import Button from '../UI/Button';

const QuizResults = ({ 
  questions, 
  answers, 
  onRestart,
  onReview 
}) => {
  const correctAnswers = questions.filter(
    (question, index) => answers[index] === question.correctAnswer
  ).length;

  const score = Math.round((correctAnswers / questions.length) * 100);
  
  const getScoreColor = (score) => {
    if (score >= 80) return '#4ecdc4';
    if (score >= 60) return '#ffd93d';
    return '#ff6b6b';
  };

  const getScoreMessage = (score) => {
    if (score >= 90) return "Excellent! 🎉";
    if (score >= 80) return "Great job! 👍";
    if (score >= 70) return "Good work! 👏";
    if (score >= 60) return "Not bad! 💪";
    return "Keep practicing! 📚";
  };

  return (
    <div className="quiz-results">
      <div className="results-card">
        <div 
          className="score-circle"
          style={{ 
            background: `conic-gradient(${getScoreColor(score)} ${score * 3.6}deg, #e9ecef 0deg)` 
          }}
        >
          <div className="score-inner">
            <span className="score-value">{score}%</span>
          </div>
        </div>
        
        <h2>{getScoreMessage(score)}</h2>
        <p className="results-stats">
          You got {correctAnswers} out of {questions.length} questions correct
        </p>
        
        <div className="results-breakdown">
          <div className="breakdown-item">
            <span className="breakdown-label">Correct:</span>
            <span className="breakdown-value correct">{correctAnswers}</span>
          </div>
          <div className="breakdown-item">
            <span className="breakdown-label">Incorrect:</span>
            <span className="breakdown-value incorrect">
              {questions.length - correctAnswers}
            </span>
          </div>
          <div className="breakdown-item">
            <span className="breakdown-label">Total:</span>
            <span className="breakdown-value">{questions.length}</span>
          </div>
        </div>
        
        <div className="results-actions">
          <Button onClick={onReview} variant="secondary" size="large">
            Review Answers
          </Button>
          <Button onClick={onRestart} variant="primary" size="large">
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;