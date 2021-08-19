import { useEffect, useRef, useState } from "react";
function randomColor(currenColor) {
  const colorArr = ["yellow", "blue", "grey", "hotpink"];

  const currenColorIndex = colorArr.indexOf(currenColor);
  let newIndex = currenColorIndex;
  while (newIndex === currenColorIndex) {
    newIndex = Math.trunc(Math.random() * 4);
  }
  return colorArr[newIndex];
}
function useColor() {
  const [color, setColor] = useState("green");
  const colorRef = useRef("green");

  useEffect(() => {
    const interval = setInterval(() => {
      const newColor = randomColor(color);
      // console.log("color", color);
      // console.log("change color", colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return color;
}
export default useColor;
