import { PageLayout } from "@/components/PageLayout";
import QuizList from "@/components/QuizList";
import { useQuizContext } from "@/context/QuizContext";
import React, { useEffect } from "react";

const Quiz = () => {
  const {
    isQuizFinished,
    reactQuizData,
    setCurrentAnsIndex,
    currentQuesIndex,
    setCurrentQuesIndex,
    countdown,
    setCountdown,
    score,
    setScore,
  } = useQuizContext();

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

  return (
    <PageLayout className="flex flex-col items-center w-full gap-6">
      {isQuizFinished ? (
        <div className="flex flex-col items-center gap-3">
          <p className="md:text-3xl font-semibold text-blue-900 mt-6">
            Your Score:
            <span className="text-blue-600 ml-2">{score}</span>
          </p>
          <p className="text-[11px] md:text-xl whitespace-nowrap text-gray-700 font-semibold">
            Thank you for participating! 🤗
          </p>
          <p className="text-xs text-gray-500">
            Restarting in {countdown} second{countdown !== 1 ? "s" : ""}...
          </p>
        </div>
      ) : (
        <>
          <h1
            className="font-semibold text-center text-3xl md:text-4xl
           text-blue-900 mt-2 italic"
          >
            React<span className="text-blue-600 ml-1">Quiz</span>
          </h1>

          <QuizList />
        </>
        
      )}
    </PageLayout>
  );
};

export default Quiz;
