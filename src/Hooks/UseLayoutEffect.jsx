import React, { useLayoutEffect, useState } from "react";

function UseLayoutEffect() {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    // This function will be executed after the DOM has been painted
    // but before the browser screen is repainted.
    const updateWidth = () => {
      const newWidth = document.getElementById("myElement").offsetWidth;
      setWidth(newWidth);
    };

    // Call the function immediately and listen for resize events
    updateWidth();
    window.addEventListener("resize", updateWidth);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <p>Width of myElement: {width}px</p>
      <div id="myElement">Resizable Element</div>
    </div>
  );
}

export default UseLayoutEffect;
