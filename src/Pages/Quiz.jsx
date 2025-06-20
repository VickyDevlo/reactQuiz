import { PageLayout } from "@/components/PageLayout";
import QuizList from "@/components/QuizList";
import { reactQuizData } from "@/config";
import React, { useEffect, useState } from "react";

const Quiz = () => {
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

  useEffect(() => {
    if (currentQuesIndex === reactQuizData.length) {
      setCountdown(5);
    }
  }, [currentQuesIndex]);

  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      setCurrentQuesIndex(0);
      setScore(0);
      setCurrentAnsIndex(null);
      setCountdown(null);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  const isQuizFinished = currentQuesIndex >= reactQuizData.length;

  return (
    <PageLayout className="flex flex-col items-center gap-12">
      {!isQuizFinished ? (
        <>
          <h1
            className="font-semibold text-center text-3xl md:text-4xl
           text-blue-900 mt-4 italic"
          >
            React<span className="text-blue-600 ml-1">Quiz</span>
          </h1>
          <QuizList
            question={reactQuizData[currentQuesIndex].question}
            options={reactQuizData[currentQuesIndex].options}
            currentAnsIndex={currentAnsIndex}
            handleAns={handleAns}
            handleNextQues={handleNextQues}
            currentQuesIndex={currentQuesIndex}
            reactQuizData={reactQuizData}
          />
        </>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <p className="md:text-3xl font-semibold text-blue-900 mt-6">
            Your Score:
            <span className="text-blue-600 ml-2">0{score}</span>
          </p>
          <p className="text-[11px] md:text-xl whitespace-nowrap text-gray-700 font-semibold">
            Thank you for participating! 🤗
          </p>
          <p className="text-xs text-gray-500">
            Restarting in {countdown} second{countdown !== 1 ? "s" : ""}...
          </p>
        </div>
      )}
    </PageLayout>
  );
};

export default Quiz;
