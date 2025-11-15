import Quiz from './components/Quiz/Quiz';
import { quizData } from './data/quizData';
import './styles/Quiz.css';

function App() {
  const handleQuizComplete = (answers) => {
    console.log('Quiz completed! Answers:', answers);
  };

  return (
    <div className="app">
      <div className="app-container">
        <Quiz quizData={quizData} onQuizComplete={handleQuizComplete} />
      </div>
    </div>
  );
}

export default App;