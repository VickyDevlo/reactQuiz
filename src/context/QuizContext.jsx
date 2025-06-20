import { createContext, useContext, useState } from "react";
import { reactQuizData } from "@/config";

const QuizContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentQuesIndex, setCurrentQuesIndex] = useState(0);
  const [currentAnsIndex, setCurrentAnsIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(null);

  const handleAns = (option) => {
    setCurrentAnsIndex(option);
    if (option === reactQuizData[currentQuesIndex].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQues = () => {
    setCurrentQuesIndex((prev) => prev + 1);
    setCurrentAnsIndex(null);
  };
  const isQuizFinished = currentQuesIndex >= reactQuizData.length;

  return (
    <QuizContext.Provider
      value={{
        reactQuizData,
        currentQuesIndex,
        setCurrentQuesIndex,
        currentAnsIndex,
        setCurrentAnsIndex,
        score,
        setScore,
        countdown,
        setCountdown,
        handleAns,
        handleNextQues,
        isQuizFinished,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);
