import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

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
    const min = String(Math.floor(time / 60)).padStart(2, "0");
    const sec = String(Math.floor(time % 60)).padStart(2, "0");

    return `${min} : ${sec}`;
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPause(false);
  };

  const handlePause = () => {
    setIsPause(!isPause);
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
    <div
      className="flex items-center w-[380px] flex-col shadow-lg p-6
     bg-accent rounded"
    >
      <h1 className="text-2xl font-semibold uppercase">countdown timer</h1>
      <div className="flex flex-col justify-center items-center gap-4 my-5">
        <input
          type="number"
          min={0}
          value={inputVal}
          onChange={onChangeHandler}
          placeholder="Enter time in minuts"
          className="border border-border px-4 py-1 w-full rounded"
        />
        <span className="text-3xl font-semibold">{formatTime()}</span>
      </div>
      <div className="flex items-center justify-evenly w-full">
        <Button
          disabled={isActive || inputVal === ""}
          onClick={handleStart}
          className={"cursor-pointer uppercase tracking-wider"}
        >
          Start
        </Button>
        <Button
          disabled={!isActive}
          onClick={handlePause}
          className={"cursor-pointer uppercase tracking-wider"}
        >
          {isPause ? "Resume" : "Pause"}
        </Button>
        <Button
          disabled={!isActive}
          onClick={handleRest}
          className={"cursor-pointer uppercase tracking-wider"}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default CountDownTimer;
