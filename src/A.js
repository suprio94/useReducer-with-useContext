import { useContext } from "react";
import { CounterContext } from "./App";

export const AA = () => {
  const CountContext = useContext(CounterContext);
  return (
    <>
      <h3>change value from Component A </h3>
      <button onClick={() => CountContext.countDispatch("increment")}>+</button>
      <button onClick={() => CountContext.countDispatch("decrement")}>-</button>
      <button onClick={() => CountContext.countDispatch("reset")}>Reset</button>
    </>
  );
};
