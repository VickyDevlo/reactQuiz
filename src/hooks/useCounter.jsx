import { useState } from "react";

export const useCounter = (initialState = 1, step = 1) => {
  const [count, setCount] = useState(initialState);

  const handleInc = () => setCount(count + step);
  const handleDec = () => count > 0 && setCount(count - step);

  const isDisabled = count <= 0;

  return [count, handleInc, handleDec, isDisabled];
};
