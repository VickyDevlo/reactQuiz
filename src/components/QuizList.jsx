import React from "react";
import { Button } from "./ui/button";

const QuizList = ({
  question,
  options,
  handleAns,
  currentAnsIndex,
  handleNextQues,
  currentQuesIndex,
  reactQuizData,
}) => {
  return (
    <div className="text-center bg-blue-950 max-w-[580px] w-full p-4 rounded-md shadow">
      <p className="text-sm md:text-2xl text-white font-semibold mb-4 italic">
        {question}
      </p>
      <ul
        className="flex flex-col items-center gap-2 text-lg font-medium italic 
      tracking-wider mb-4"
      >
        {options.map((option, i) => (
          <li
            onClick={() => handleAns(option)}
            key={i}
            aria-label="quiz-option"
            className={`cursor-pointer w-full max-md:text-xs bg-blue-400 text-gray-100
               rounded p-2 ${
                 currentAnsIndex === option
                   ? "bg-red-400 hover:bg-none"
                   : "hover:bg-blue-300"
               }  transition-colors`}
          >
            {option}
          </li>
        ))}
      </ul>
      <div>
        <Button
          disabled={!currentAnsIndex}
          onClick={handleNextQues}
          variant={"outline"}
          className={"cursor-pointer font-bold max-md:text-xs italic"}
        >
          Next Question
        </Button>
        <p className="mt-4 text-sm text-white text-center">
          ( {currentQuesIndex + 1} / {reactQuizData.length} )
        </p>
      </div>
    </div>
  );
};

export default QuizList;
