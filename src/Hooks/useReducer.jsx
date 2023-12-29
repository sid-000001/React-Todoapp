import { useReducer } from "react";

function Reducer() {
  const initial = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return { count: state.count + 1 };
      case "decrese":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
    }
  };
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <div className="App">
      <h1>count:{state.count} </h1>
      <button onClick={() => dispatch({ type: "add" })}>ADD</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrese" })}>Decrese</button>
    </div>
  );
}

export default Reducer;
