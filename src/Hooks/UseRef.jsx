import React, { useState } from "react";
import { useEffect, useRef } from "react";

export default function UseRef() {
  const [name, setName] = useState("");
  //   const [count, setCount] = useState(0);
  const count = useRef(0);
  const inputEl = useRef(null);

  useEffect(() => {
    console.log(count);
    count.current = count.current + 1;
    // setCount((prev) => prev + 1);
  });

  const focusInput = () => {
    inputEl.current.focus();
    inputEl.current.value = "SID";
  };

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>Name: {name}</h2>
      <h2>Count: {count.current}</h2>
      <input type="text" ref={inputEl} onClick={() => focusInput()} />
      <button>Focus</button>
    </>
  );
}
