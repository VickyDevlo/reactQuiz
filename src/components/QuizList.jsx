import React from "react";
import { Button } from "./ui/button";
import { useQuizContext } from "@/context/QuizContext";

const QuizList = () => {
  const {
    reactQuizData,
    currentQuesIndex,
    currentAnsIndex,
    handleAns,
    handleNextQues,
  } = useQuizContext();

  const currentQuestion = reactQuizData[currentQuesIndex];

  return (
    <div
      className="text-center bg-blue-950 -full p-4 rounded-md
     shadow"
    >
      <p className="text-sm md:text-2xl text-white font-semibold mb-4 italic">
        {currentQuestion.question}
      </p>
      <ul
        className="flex flex-col items-center gap-2 text-lg font-medium italic 
      tracking-wider mb-4"
      >
        {currentQuestion.options.map((option, i) => (
          <li
            onClick={() => handleAns(option)}
            key={i}
            aria-label="quiz-option"
            className={`cursor-pointer w-full max-md:text-xs bg-blue-400 
              text-gray-100 rounded p-2 
              ${
                currentAnsIndex === option
                  ? "bg-red-400 hover:bg-none"
                  : "hover:bg-blue-300"
              } transition-colors`}
          >
            {option}
          </li>
        ))}
      </ul>
      <>
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
      </>
    </div>
  );
};

export default QuizList;
