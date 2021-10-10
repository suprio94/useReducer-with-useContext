import "./styles.css";
import { useReducer, createContext } from "react";
import { CC } from "./C";
import { AA } from "./A";
import { BB } from "./B";

export const CounterContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <h2>Count is {count}</h2>
        <AA />
        <BB />
        <CC />
      </div>
    </CounterContext.Provider>
  );
}
