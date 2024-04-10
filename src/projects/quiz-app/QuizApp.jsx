import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1905", "1912", "1920", "1931"],
    correctAnswer: "1912",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Won", "Ringgit", "Baht"],
    correctAnswer: "Yen",
  },
  {
    question: "Which programming language is also a gem?",
    options: ["Ruby", "Python", "Java", "C++"],
    correctAnswer: "Ruby",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Southern Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra",
  },
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(
    new Array(questions.length).fill(null)
  );
  const [correct, setCorrect] = useState();
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function handlePrevious() {
    if(currentQuestion > 0){
      setCurrentQuestion(currentQuestion - 1);
    }
    return;
  }

  function handleNext() {
    if(currentQuestion < questions.length - 1){
      setCurrentQuestion(currentQuestion + 1);
    }
    return;
  }

  function handleScore(option){
      if(questions[currentQuestion].correctAnswer===option){
        setScore(score + 1);
        setCorrect(true);
      } else {
        setCorrect(false);
      }
  }

  // console.log(questions.length);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl text-center bg-green-200 w-full">Quiz App</h1>
      <div className="flex flex-col justify-center items-center gap-2 mt-4 ">
        <div className="flex flex-col gap-2 items-center bg-slate-300 rounded-md p-4">
          <h3 className="text-2xl font-semibold">
            {questions[currentQuestion].question}
          </h3>
          <div className="flex gap-2">
            {questions[currentQuestion].options.map((optionItem) => (
              <button
                onClick={()=>handleScore(optionItem)}
                className="bg-red-600 rounded-md p-1 text-white"
                key={optionItem}
              >
                {optionItem}
              </button>
            ))}
            
          </div>
          {/* {correct ? <span>Correct Answer</span> : <span>wrong Answer</span>} */}
        </div>
        <div className="flex gap-8 mt-4">
          <button
            onClick={handlePrevious}
            className="text-md text-white bg-blue-800 rounded-md p-2"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="text-md text-white bg-blue-800 rounded-md p-2"
          >
            Next
          </button>
        </div>
        <span>Score: {score}</span>
      </div>
    </div>
  );
};

export default QuizApp;
