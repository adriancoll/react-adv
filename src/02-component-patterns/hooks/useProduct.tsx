import { useState } from 'react';

export const useProduct = () => {
  const [counter, setCounter] = useState(0);
  
  const increaseBy = (inc: number) =>
    setCounter((last) => Math.max(last + inc, 0));

  return {
    counter,
    increaseBy,
  };
};
