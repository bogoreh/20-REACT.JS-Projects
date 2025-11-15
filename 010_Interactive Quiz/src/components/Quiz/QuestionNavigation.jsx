import Button from '../UI/Button';

const QuestionNavigation = ({
  questions,
  currentQuestion,
  answers,
  onQuestionSelect,
  onPrevious,
  onNext,
  isLastQuestion
}) => {
  return (
    <div className="question-navigation">
      <div className="nav-buttons">
        <Button 
          onClick={onPrevious}
          variant="secondary"
          disabled={currentQuestion === 0}
        >
          ← Previous
        </Button>
        
        <Button 
          onClick={onNext}
          variant="primary"
        >
          {isLastQuestion ? 'Finish Quiz' : 'Next →'}
        </Button>
      </div>
      
      <div className="question-dots">
        {questions.map((_, index) => (
          <button
            key={index}
            className={`question-dot ${
              index === currentQuestion ? 'active' : ''
            } ${answers[index] !== null ? 'answered' : ''}`}
            onClick={() => onQuestionSelect(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionNavigation;