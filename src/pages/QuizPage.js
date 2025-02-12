import React, { useState, useEffect } from 'react';
import questionsBank from '../data/questions';

const QuizPage = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    loadNewQuestions();
  }, []);

  const loadNewQuestions = () => {
    const shuffled = [...questionsBank].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    setQuizQuestions(selected);
    setUserAnswers({});
    setScore(null);
  };

  const handleSelect = (questionIndex, option) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionIndex]: option
    }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    quizQuestions.forEach((q, index) => {
      const correct = q.answer.trim();
      const userAnswer = userAnswers[index] ? userAnswers[index].trim() : null;
      if (userAnswer === correct) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="quiz-page">
      <h1>Quiz</h1>
      {score === null ? (
        <>
          {quizQuestions.map((q, index) => (
            <div key={index} className="quiz-question">
              <h2>{`Q${index + 1}: ${q.question}`}</h2>
              <div className="options-container">
                {q.options.map((option, i) => (
                  <label key={i} className="option-label">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={userAnswers[index] === option}
                      onChange={() => handleSelect(index, option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button onClick={handleSubmit} className="submit-btn">
            Submit
          </button>
        </>
      ) : (
        <>
          <h2>Your Score: {score} / {quizQuestions.length}</h2>

          <div className="answers-review">
            {quizQuestions.map((q, index) => {
              const correctAnswer = q.answer.trim();
              const userAnswer = userAnswers[index] ? userAnswers[index].trim() : null;
              const isCorrect = userAnswer === correctAnswer;

              return (
                <div
                  key={index}
                  className={`answer-review-item ${isCorrect ? "correct" : "incorrect"}`}
                >
                  <h3>Q{index + 1}: {q.question}</h3>
                  <p>
                    Your answer: <strong>{userAnswer || "No answer"}</strong>
                    {isCorrect ? " ✓" : " ✗"}
                  </p>
                  {!isCorrect && (
                    <p className="correct-answer">
                      Correct answer: <strong>{correctAnswer}</strong>
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <button onClick={loadNewQuestions} className="retry-btn">
            Retry
          </button>
        </>
      )}
    </div>
  );
};

export default QuizPage;
