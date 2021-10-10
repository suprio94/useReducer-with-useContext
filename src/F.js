import { useContext } from "react";
import { CounterContext } from "./App";

export const FF = () => {
  const CountContext = useContext(CounterContext);
  return (
    <>
      <h3>change value from Component F </h3>
      <button onClick={() => CountContext.countDispatch("increment")}>+</button>
      <button onClick={() => CountContext.countDispatch("decrement")}>-</button>
      <button onClick={() => CountContext.countDispatch("reset")}>Reset</button>
    </>
  );
};
