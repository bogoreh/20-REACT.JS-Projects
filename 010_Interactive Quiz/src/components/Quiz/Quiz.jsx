import { useState } from 'react';
import Question from './Question';
import QuestionNavigation from './QuestionNavigation';
import QuizResults from './QuizResults';
import ProgressBar from '../UI/ProgressBar';
import Button from '../UI/Button';

const Quiz = ({ quizData, onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(quizData.questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);

  const questions = quizData.questions;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      setShowResults(true);
      onQuizComplete?.(answers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleQuestionSelect = (index) => {
    setCurrentQuestion(index);
  };

  const handleRestart = () => {
    setAnswers(Array(questions.length).fill(null));
    setCurrentQuestion(0);
    setShowResults(false);
    setQuizCompleted(false);
    setReviewMode(false);
  };

  const handleReview = () => {
    setReviewMode(true);
    setShowResults(false);
    setCurrentQuestion(0);
  };

  if (showResults) {
    return (
      <QuizResults
        questions={questions}
        answers={answers}
        onRestart={handleRestart}
        onReview={handleReview}
      />
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-info">
          <h1>{quizData.title}</h1>
          <p>{quizData.description}</p>
        </div>
        <div className="quiz-meta">
          <span className="question-counter">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          {!reviewMode && (
            <span className="answered-counter">
              {answers.filter(a => a !== null).length} / {questions.length} answered
            </span>
          )}
        </div>
      </div>

      <ProgressBar progress={progress} />

      <Question
        question={questions[currentQuestion]}
        selectedAnswer={answers[currentQuestion]}
        onAnswerSelect={handleAnswerSelect}
        showResult={reviewMode}
      />

      <QuestionNavigation
        questions={questions}
        currentQuestion={currentQuestion}
        answers={answers}
        onQuestionSelect={handleQuestionSelect}
        onPrevious={handlePrevious}
        onNext={handleNext}
        isLastQuestion={currentQuestion === questions.length - 1}
      />

      {reviewMode && (
        <div className="review-mode-notice">
          <p>Review Mode - You can see the correct answers and explanations</p>
          <Button onClick={() => setShowResults(true)} variant="primary">
            Back to Results
          </Button>
        </div>
      )}
    </div>
  );
};

export default Quiz;