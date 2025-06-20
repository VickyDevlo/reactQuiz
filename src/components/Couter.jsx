import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { useCounter } from "@/hooks/useCounter";

const Couter = () => {
  const [count, handleInc, handleDec, isDisabled] = useCounter(0, 1);

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-8xl text-foreground">{count}</span>
      <div className="flex items-center justify-center gap-9">
        <Button
          onClick={handleInc}
          size={"icon"}
          className={"cursor-pointer px-8"}
        >
          <Plus />
        </Button>
        <Button
          onClick={handleDec}
          disabled={isDisabled}
          size={"icon"}
          className={"cursor-pointer px-8"}
        >
          <Minus />
        </Button>
      </div>
    </div>
  );
};

export default Couter;
