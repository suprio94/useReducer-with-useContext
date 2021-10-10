import { useContext } from "react";
import { CounterContext } from "./App";

export const DD = () => {
  const CountContext = useContext(CounterContext);
  return (
    <>
      <h3>change value from Component D </h3>
      <button onClick={() => CountContext.countDispatch("increment")}>+</button>
      <button onClick={() => CountContext.countDispatch("decrement")}>-</button>
      <button onClick={() => CountContext.countDispatch("reset")}>Reset</button>
    </>
  );
};
