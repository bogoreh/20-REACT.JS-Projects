import Button from '../UI/Button';

const Question = ({ 
  question, 
  selectedAnswer, 
  onAnswerSelect, 
  showResult = false 
}) => {
  return (
    <div className="question-container">
      <h2 className="question-text">{question.question}</h2>
      <div className="options-container">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === question.correctAnswer;
          let optionClass = "option";
          
          if (showResult) {
            if (isCorrect) {
              optionClass += " option-correct";
            } else if (isSelected && !isCorrect) {
              optionClass += " option-incorrect";
            }
          } else if (isSelected) {
            optionClass += " option-selected";
          }

          return (
            <div
              key={index}
              className={optionClass}
              onClick={() => !showResult && onAnswerSelect(index)}
            >
              <div className="option-content">
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="option-text">{option}</span>
              </div>
              {showResult && isCorrect && (
                <span className="option-indicator">✓</span>
              )}
              {showResult && isSelected && !isCorrect && (
                <span className="option-indicator">✗</span>
              )}
            </div>
          );
        })}
      </div>
      {showResult && question.explanation && (
        <div className="explanation">
          <strong>Explanation:</strong> {question.explanation}
        </div>
      )}
    </div>
  );
};

export default Question;