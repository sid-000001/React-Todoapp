import React, { useRef, useState } from "react";

const Ref = () => {
  // Create a ref to store a mutable value
  const countRef = useRef(0);

  // State for re-rendering the component
  const [count, setCount] = useState(0);

  const increment = () => {
    // Modify the ref value directly (no re-render)
    countRef.current += 1;

    // Trigger a re-render by updating state
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count (with re-render): {count}</p>
      <p>Count (without re-render): {countRef.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Ref;
