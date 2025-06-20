import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Pause, Play, RotateCcw } from "lucide-react";

const CountDownTimer = () => {
  const [time, setTime] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isPause, setIsPause] = useState(false);

  const intervalRef = useRef(null);

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setInputVal(value);
    setTime(parseInt(value * 60));
  };

  const formatTime = () => {
    const hrs = String(Math.floor(time / 3600)).padStart(2, "0");
    const min = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const sec = String(Math.floor(time % 60)).padStart(2, "0");

    return `${hrs} : ${min} : ${sec}`;
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleStart();
    } else if (e.key === "Escape") {
      handleRest();
    }
  };

  const handleStart = () => {
    if (!isActive) {
      setIsActive(true);
      setIsPause(false);
    } else {
      setIsPause((prev) => !prev);
    }
  };

  const handleRest = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPause(false);
    setTime(0);
    setInputVal("");
  };

  useEffect(() => {
    if (isActive && !isPause && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(intervalRef.current);
      setInputVal("");
      setIsActive(false);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isActive, isPause, time]);

  return (
    <div className="flex items-center justify-center mt-6 px-2">
      <div
        className="flex items-center  md:w-[380px] flex-col shadow-lg p-2 md:p-6
     bg-accent rounded"
      >
        <h1 className="md:text-2xl font-semibold uppercase">countdown timer</h1>
        <div className="flex flex-col justify-center items-center gap-4 my-5">
          <input
            type="number"
            min={0}
            value={inputVal}
            onChange={onChangeHandler}
            onKeyDown={handleOnKeyDown}
            placeholder="Enter time in minuts"
            className="border border-border px-4 py-1 w-full rounded"
          />
          <span className="text-xl md:text-3xl font-semibold">
            {formatTime()}
          </span>
        </div>
        <div className="flex items-center justify-center gap-3 w-full">
          <Button
            disabled={inputVal === ""}
            onClick={handleStart}
            className={"cursor-pointer uppercase tracking-wider"}
          >
            {isActive ? isPause ? <Play /> : <Pause /> : <Play />}
          </Button>
          <Button
            disabled={!isActive}
            onClick={handleRest}
            className={"cursor-pointer uppercase tracking-wider"}
          >
            <RotateCcw />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
